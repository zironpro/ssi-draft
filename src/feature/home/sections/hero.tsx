"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { useRef, useState } from "react";

// Shared style so every label looks the same and stays readable over the photo
const LABEL_TEXT =
  "font-sans tracking-[0.2em] font-bold text-black drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]";
const LINE_STROKE = "rgba(0,0,0,0.55)";

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "shrink-0",
};

const SunIcon = (
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
);

const ThermometerIcon = (
  <svg {...iconProps}>
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
  </svg>
);

const GlareIcon = (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
  </svg>
);

const EyeIcon = (
  <svg {...iconProps}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Left-side labels. `line` is where the dashed leader ends, measured in px from
// the end of the label (x = right, y = down). Tweak these to re-aim a line.
const FEATURES = [
  { title: "UV RAYS", icon: SunIcon, line: { x: 322, y: 145 } },
  { title: "HEAT REDUCTION", icon: ThermometerIcon, line: { x: 192, y: 150 } },
  { title: "GLARE CONTROL", icon: GlareIcon, line: { x: 348, y: 225 } },
  { title: "ENHANCED PRIVACY", icon: EyeIcon, line: { x: 213, y: 220 } },
];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 25, mass: 0.5 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 25, mass: 0.5 });

  // Track whether the pointer is inside the hero (controls the cursor label)
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  // Setup scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Spotlight centered on the mouse
  const maskImage = useMotionTemplate`radial-gradient(circle 450px at ${smoothMouseX}px ${smoothMouseY}px, black 0%, transparent 100%)`;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative w-full h-screen overflow-hidden flex items-center bg-[#F3F3ED]"
    >
      {/* Background Layer with Parallax */}
      <motion.div
        style={{ y: backgroundY, opacity: backgroundOpacity }}
        className="absolute inset-0 z-0 origin-top"
      >
        {/* Full Screen Banners Container */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative w-full h-full pointer-events-none">
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
              className="absolute inset-0 pointer-events-none hidden md:block"
              style={{ maskImage, WebkitMaskImage: maskImage }}
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

      {/* Cursor Label: follows the reveal spotlight (Desktop Only) */}
      <motion.div
        className="absolute top-0 left-0 z-30 pointer-events-none hidden md:block"
        style={{ x: smoothMouseX, y: smoothMouseY }}
      >
        <motion.div
          initial={false}
          animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.8 }}
          transition={{ duration: 0.2 }}
          className="translate-x-4 translate-y-4 flex items-center gap-2 rounded-full bg-black/80 px-3 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-white whitespace-nowrap">
            Without Film
          </span>
        </motion.div>
      </motion.div>

      {/* UI Overlays */}
      <div className="absolute inset-0 z-20 pointer-events-none text-black/80">
        {/* Left Side Features */}
        <div className="absolute left-8 md:left-[10%] top-[18%] md:top-[19%] flex flex-col items-start gap-12 md:gap-[52px]">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-center">
              <div className={`flex items-center gap-2 text-[10px] md:text-xs whitespace-nowrap ${LABEL_TEXT}`}>
                {f.icon}
                <span>{f.title}</span>
              </div>
              {/* Dashed line: starts right after the label and ends in a dot */}
              <svg className="hidden md:block ml-3 shrink-0 overflow-visible" width="0" height="0">
                <line
                  x1="0"
                  y1="0"
                  x2={f.line.x}
                  y2={f.line.y}
                  stroke={LINE_STROKE}
                  strokeWidth="1.25"
                  strokeDasharray="4 4"
                />
                <circle cx={f.line.x} cy={f.line.y} r="3" fill="black" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}