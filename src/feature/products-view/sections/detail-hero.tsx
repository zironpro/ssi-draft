"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ChevronRight, FileText, ExternalLink } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface Breadcrumb {
  label: string;
  href: string;
}

interface DetailHeroProps {
  title: string;
  subtitle: string;
  image: string;
  stats?: { label: string; value: string }[];
  breadcrumbs?: Breadcrumb[];
  pdfUrl?: string;
  catalogues?: { title: string; url: string }[];
}

export function ProductDetailHero({
  title,
  subtitle,
  image,
  stats = [],
  breadcrumbs = [],
  pdfUrl,
  catalogues,
}: DetailHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        imageRef.current,
        { scale: 1.15, filter: "brightness(0.4)" },
        { scale: 1, filter: "brightness(0.7)", duration: 2.5, ease: "power3.out" },
        0
      )
        .fromTo(
          ".pd-hero-breadcrumb",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          0.8
        )
        .fromTo(
          ".pd-hero-title",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
          1
        )
        .fromTo(
          ".pd-hero-sub",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          1.5
        )
        .fromTo(
          ".pd-hero-badge",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.5)" },
          1.8
        );

      gsap.to(".pd-hero-content", {
        y: -150,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, [title]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-[var(--color-deep-forest)] py-32 md:h-[90vh] md:min-h-[700px] md:py-0"
    >
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <div
          ref={imageRef}
          className="h-full w-full origin-center bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-[var(--color-deep-forest)]/60" />
      </div>

      <div className="container-master pd-hero-content relative z-10 mt-20 w-full px-4">
        <div className="max-w-4xl">
          {breadcrumbs.length > 0 && (
            <nav className="pd-hero-breadcrumb mb-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--color-warm-ivory)]/70">
              {breadcrumbs.map((bc, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Link
                    href={bc.href}
                    className="transition-colors hover:text-[var(--color-arch-sand)]"
                  >
                    {bc.label}
                  </Link>
                  {idx < breadcrumbs.length - 1 && <ChevronRight className="size-4" />}
                </div>
              ))}
            </nav>
          )}

          <div className="mb-4 overflow-hidden pb-2">
            <h1 className="pd-hero-title font-heading text-[40px] font-semibold uppercase leading-[1] tracking-[0.15em] text-[var(--color-warm-ivory)] md:text-[60px] lg:text-[70px]">
              {title}
            </h1>
          </div>

          <p className="pd-hero-sub mb-8 max-w-2xl text-base font-medium leading-relaxed text-white/90 md:text-lg">
            {subtitle}
          </p>

          {pdfUrl && (
            <div className="pd-hero-sub mb-8">
              <a
                href={encodeURI(pdfUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 rounded-lg border border-white/20 bg-white/10 p-2 pr-5 backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-arch-sand)]"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[var(--color-arch-sand)] text-[var(--color-deep-forest)] transition-transform duration-300 group-hover:scale-95">
                  <FileText className="size-5" />
                </span>

                <span className="flex flex-col text-left">
                  <span className="text-sm font-semibold text-[var(--color-warm-ivory)] md:text-base">
                    View catalogue
                  </span>
                  <span className="text-xs text-white/60">PDF · opens in a new tab</span>
                </span>

                <ExternalLink className="ml-2 size-4 text-white/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}