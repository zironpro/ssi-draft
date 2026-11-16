"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * ScrollHero — scroll-driven image-sequence hero (canvas + WebP frames).
 *
 * Performance notes
 * - Frame 1 is a real <img> (fetchpriority=high) => fast LCP, works with JS off.
 * - Remaining frames load progressively (coarse -> fine) with limited concurrency,
 *   so scrubbing works almost immediately, then gets smoother.
 * - One passive scroll listener -> one rAF; canvas redraws ONLY when the frame
 *   index changes. No React state updates while scrolling (zero re-renders).
 * - Frames stay as HTMLImageElement (browser manages decode memory) instead of
 *   ImageBitmap, which would cost ~8MB/frame at 1080p.
 * - Pauses work when the hero is off-screen; respects prefers-reduced-motion.
 *
 * SEO notes
 * - Headline/copy/CTA are real DOM text (h1, p, a) rendered on the server.
 * - Canvas is decorative (aria-hidden); the poster <img> carries the alt text.
 */

type Props = {
  /** Total number of frames (default 150) */
  frameCount?: number;
  /** Build URL for a 0-based frame index. Default: /frames/frame_0001.webp ... */
  frameUrl?: (index: number) => string;
  /** Alt text for the poster image (describe the visual for SEO / a11y) */
  alt: string;
  /** Scroll distance in viewport heights while the animation plays */
  scrollLengthVh?: number;
  /** Intrinsic frame size, used to reserve space & avoid CLS */
  width?: number;
  height?: number;
  /** Content shown over the animation (h1, p, CTA...) */
  children?: ReactNode;
  /** Background colour shown before the first frame paints */
  background?: string;
  /** Static gradient between the frames and the copy, keeps text readable */
  scrim?: string;
};

const defaultUrl = (i: number) =>
  `/frames/frame_${String(i + 1).padStart(4, "0")}.webp`;

const MAX_CONCURRENT = 6;

/** Coarse-to-fine load order so scrubbing is usable early */
function buildLoadOrder(count: number): number[] {
  const seen = new Set<number>([0]);
  const order: number[] = [];
  for (const stride of [30, 10, 5, 2, 1]) {
    for (let i = 0; i < count; i += stride) {
      if (!seen.has(i)) {
        seen.add(i);
        order.push(i);
      }
    }
  }
  if (!seen.has(count - 1)) order.push(count - 1);
  return order;
}

export default function ScrollHero({
  frameCount = 150,
  frameUrl = defaultUrl,
  alt,
  scrollLengthVh = 500,
  width = 1920,
  height = 1080,
  children,
  background = "#000",
  scrim = "linear-gradient(90deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.35) 55%, rgba(0,0,0,0) 100%)",
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const posterRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const poster = posterRef.current;
    const content = contentRef.current;
    if (!section || !canvas || !poster) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return; // poster image stays as a static hero

    const frames: (HTMLImageElement | undefined)[] = new Array(frameCount);
    let cancelled = false;
    let currentFrame = -1;
    let drawnFrame = -1;
    let cw = 0;
    let ch = 0;
    let ticking = false;
    let visible = true;

    /* ---------- drawing ---------- */
    const nearestLoaded = (target: number) => {
      for (let d = 0; d < frameCount; d++) {
        const a = frames[target - d];
        if (a) return target - d;
        const b = frames[target + d];
        if (b) return target + d;
      }
      return -1;
    };

    const draw = (index: number) => {
      const i = nearestLoaded(index);
      if (i === -1 || i === drawnFrame) return;
      const img = frames[i]!;
      // "cover" fit
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
      drawnFrame = i;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cw = Math.round(canvas.clientWidth * dpr);
      ch = Math.round(canvas.clientHeight * dpr);
      canvas.width = cw;
      canvas.height = ch;
      drawnFrame = -1;
      if (currentFrame >= 0) draw(currentFrame);
    };

    /* ---------- scroll -> frame ---------- */
    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / total));
      const index = Math.min(frameCount - 1, Math.floor(progress * frameCount));

      if (index !== currentFrame) {
        currentFrame = index;
        draw(index);
      }
      // Fade overlay copy out over the first 25% of the scroll (no re-render)
      if (content) {
        const o = Math.max(0, 1 - progress / 0.25);
        content.style.opacity = String(o);
        content.style.pointerEvents = o < 0.05 ? "none" : "auto";
      }
    };

    const onScroll = () => {
      if (!visible || ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    /* ---------- loading ---------- */
    const loadFrame = (i: number) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          frames[i] = img;
          resolve();
        };
        img.onerror = () => resolve(); // skip broken frames, nearestLoaded covers it
        img.src = frameUrl(i);
      });

    const startLoading = async () => {
      const queue = buildLoadOrder(frameCount);
      let active = 0;
      let cursor = 0;

      await new Promise<void>((done) => {
        const pump = () => {
          if (cancelled) return done();
          while (active < MAX_CONCURRENT && cursor < queue.length) {
            const i = queue[cursor++];
            active++;
            loadFrame(i).then(() => {
              active--;
              // redraw if this frame is closer to what's on screen
              if (currentFrame >= 0 && drawnFrame !== currentFrame) {
                draw(currentFrame);
              }
              pump();
            });
          }
          if (active === 0 && cursor >= queue.length) done();
        };
        pump();
      });
    };

    /* ---------- init ---------- */
    resize();
    const first = new Image();
    first.decoding = "async";
    first.onload = () => {
      if (cancelled) return;
      frames[0] = first;
      update();
      // Hide the poster only once the canvas has painted a frame
      poster.style.visibility = "hidden";
      // Start the rest during idle time so it never competes with LCP
      const kick = () => !cancelled && startLoading();
      "requestIdleCallback" in window
        ? (window as any).requestIdleCallback(kick, { timeout: 1500 })
        : setTimeout(kick, 200);
    };
    first.src = frameUrl(0);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) onScroll();
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(section);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelled = true;
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [frameCount, frameUrl]);

  const styles: Record<string, CSSProperties> = {
    section: {
      position: "relative",
      height: `${scrollLengthVh}vh`,
      background,
    },
    sticky: {
      position: "sticky",
      top: 0,
      height: "100vh",
      width: "100%",
      overflow: "hidden",
    },
    media: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    content: {
      position: "relative",
      zIndex: 1,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 clamp(1.5rem, 6vw, 6rem)",
      color: "#fff",
      willChange: "opacity",
    },
  };

  return (
    <section ref={sectionRef} style={styles.section} aria-label="Hero">
      <div style={styles.sticky}>
        {/* Poster = real <img>: fast LCP, crawlable, works without JS */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={posterRef}
          src={frameUrl(0)}
          alt={alt}
          width={width}
          height={height}
          fetchPriority="high"
          decoding="async"
          style={styles.media}
        />
        <canvas ref={canvasRef} aria-hidden="true" style={styles.media} />
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, background: scrim }}
        />
        <div ref={contentRef} style={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
}