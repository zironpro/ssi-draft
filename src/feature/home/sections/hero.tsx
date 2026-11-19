"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// dx/dy = where the dotted arrow lands, measured from the end of the label
type Feature = { title: string; icon: ReactNode; dx: number; dy: number };

const rightFeatures: Feature[] = [
  {
    title: "Glare Control",
    dx: 210,
    dy: 110,
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Enhanced Privacy",
    dx: 190,
    dy: 100,
    icon: (
      <svg {...iconProps}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const leftFeatures: Feature[] = [
  {
    title: "UV Protection",
    dx: 230,
    dy: 105,
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="4.22" x2="19.78" y2="5.64" />
      </svg>
    ),
  },
  {
    title: "Heat Reduction",
    dx: 225,
    dy: 92,
    icon: (
      <svg {...iconProps}>
        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
      </svg>
    ),
  },
];

// Simple icon + heading with a dotted arrow curving into the glass
function FeatureLabel({
  title,
  icon,
  dx,
  dy,
  align = "left",
}: Feature & { align?: "left" | "right" }) {
  const isRight = align === "right";
  const dir = isRight ? -1 : 1; // right-side arrows travel left
  const id = `arrow-${title.replace(/\s+/g, "-").toLowerCase()}`;
  const path = `M0 0 Q ${dir * dx * 0.55} 0 ${dir * dx} ${dy}`;

  return (
    <div
      className={`relative flex items-center gap-3 text-gray-950 [text-shadow:0_1px_8px_rgba(255,255,255,0.7)] [&_svg]:drop-shadow-[0_1px_4px_rgba(255,255,255,0.7)] ${
        isRight ? "flex-row-reverse text-right" : "text-left"
      }`}
    >
      <span className="shrink-0">{icon}</span>
      <span className="text-sm md:text-base font-sans font-bold tracking-[0.16em] uppercase">
        {title}
      </span>

      {/* Dotted curved arrow landing on the glass */}
      <svg
        className={`hidden lg:block absolute top-1/2 overflow-visible pointer-events-none !drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)] ${
          isRight ? "right-full mr-4" : "left-full ml-4"
        }`}
        width="1"
        height="1"
        aria-hidden="true"
      >
        <defs>
          <marker
            id={id}
            viewBox="0 0 12 12"
            refX="9"
            refY="6"
            markerWidth="10"
            markerHeight="10"
            markerUnits="userSpaceOnUse"
            orient="auto"
          >
            <path
              d="M2 2 L9 6 L2 10"
              fill="none"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>

        {/* start dot */}
        <circle cx="0" cy="0" r="3" fill="white" />

        {/* clean dotted line */}
        <path
          d={path}
          fill="none"
          stroke="white"
          strokeOpacity="0.9"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="0.1 6"
          markerEnd={`url(#${id})`}
        />
      </svg>
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  });

  // Track pointer hover
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;

    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Spotlight reveal
  const maskImage = useMotionTemplate`
    radial-gradient(
      circle 450px at ${smoothMouseX}px ${smoothMouseY}px,
      black 0%,
      transparent 100%
    )
  `;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative flex h-screen w-full items-center overflow-hidden bg-[#F3F3ED]"
    >
      {/* Background Layer with Parallax */}
      <motion.div
        style={{
          y: backgroundY,
          opacity: backgroundOpacity,
        }}
        className="absolute inset-0 z-0 origin-top"
      >
        {/* Full Screen Image Container */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative h-full w-full pointer-events-none">
            {/* Base Image */}
            <div className="absolute inset-0">
              {/* Desktop Image */}
              <div className="absolute inset-0 hidden md:block">
                <Image
                  src="/main-hero/film.png"
                  alt="Tinted Glass House at Sunset"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Mobile Image */}
              <div className="absolute inset-0 block md:hidden">
                <Image
                  src="/hero/mobile-hero.png"
                  alt="Mobile Hero"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Reveal Image Mask (Desktop Only) */}
            <motion.div
              className="absolute inset-0 hidden pointer-events-none md:block"
              style={{
                maskImage,
                WebkitMaskImage: maskImage,
              }}
            >
              <Image
                src="/main-hero/visible.png"
                alt="Modern Glass House at Sunset"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Cursor Label (Desktop Only) */}
      <motion.div
        className="absolute left-0 top-0 z-30 hidden pointer-events-none md:block"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
        }}
      >
        <motion.div
          initial={false}
          animate={{
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          className="translate-x-4 translate-y-4 flex items-center gap-2 rounded-full bg-black/80 px-3 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span className="whitespace-nowrap text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-white">
            Without Film
          </span>
        </motion.div>
      </motion.div>

      {/* UI Overlays */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Right Side Features */}
        <div className="absolute right-6 md:right-10 lg:right-14 top-1/4 md:top-[26%] flex flex-col items-end gap-6 md:gap-8">
          {rightFeatures.map((f) => (
            <FeatureLabel key={f.title} {...f} align="right" />
          ))}
        </div>

        {/* Left Side Features */}
        <div className="absolute left-6 md:left-10 lg:left-14 top-1/3 md:top-[36%] flex flex-col items-start gap-6 md:gap-8">
          {leftFeatures.map((f) => (
            <FeatureLabel key={f.title} {...f} />
          ))}
        </div>

        {/* Bottom Left Film Type Card */}
        {/* <div className="absolute bottom-8 left-8 md:bottom-10 md:left-12 pointer-events-auto hidden md:block">
          <div className="w-[140px] rounded-2xl bg-white/85 border border-black/10 p-4 shadow-xl backdrop-blur-md flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans tracking-[0.18em] font-extrabold text-black/80 uppercase">FILM TYPE</span>
              <div className="w-full h-[1px] bg-black/10 my-2" />
            </div>
            <div className="flex flex-col gap-2.5 text-[10px] font-sans tracking-[0.2em] font-bold text-gray-900">
              <div>SOLAR</div>
              <div>SAFETY</div>
              <div>SECURITY</div>
              <div>PRIVACY</div>
            </div>
            <div className="pt-2 mt-2 border-t border-black/10">
              <span className="text-[9px] font-semibold text-[var(--accent)] tracking-wider uppercase">SOLAR GARD</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}