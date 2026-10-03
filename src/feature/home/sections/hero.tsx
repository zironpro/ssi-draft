"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { useRef, useState } from "react";

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
                  src="/main-hero/Tinted Glass House at Sunset.png"
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
                src="/main-hero/Modern Glass House at Sunset.png"
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

      {/* UI Overlays matching Solaris reference */}
      <div className="absolute inset-0 z-20 pointer-events-none text-black/80">
        {/* Top Left Logo Area */}
        <div className="absolute top-8 left-8 md:top-10 md:left-10 flex items-center gap-4 md:gap-6 pointer-events-auto">
          <div className="relative flex items-center shrink-0">
            <img
              src="/logo/ssi"
              alt="SSI Logo"
              className="object-contain invert"
              style={{ height: "50px", width: "auto", maxWidth: "200px" }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement!.innerHTML =
                  '<span class="text-2xl font-bold text-black/80 tracking-widest uppercase">SSI Films</span>';
              }}
            />
          </div>
          <div className="w-[1px] h-6 bg-black/20 shrink-0"></div>
          <div className="flex relative items-center shrink-0">
            <img
              src="/logo/solargard.png"
              alt="Solar Gard Logo"
              className="object-contain"
              style={{ height: "90px", width: "auto", maxWidth: "300px" }}
            />
          </div>
        </div>

        {/* Left Side Features */}
        <div className="absolute left-8 md:left-[10%] top-1/3 flex flex-col gap-16">
          <div className="relative group">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-sans tracking-[0.2em] font-semibold text-black/60">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-0.5"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line></svg>
              UV RAYS
            </div>
            {/* Dashed line pointing to center */}
            <svg className="absolute top-1/2 left-[110%] w-32 md:w-48 overflow-visible" height="1">
              <line x1="0" y1="0" x2="150" y2="50" stroke="rgba(0,0,0,0.2)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="150" cy="50" r="2" fill="rgba(0,0,0,0.3)" />
            </svg>
          </div>

          <div className="relative group mt-8">
            <div className="flex flex-col text-[10px] md:text-xs font-sans tracking-[0.2em] font-semibold text-black/60">
              <span>HEAT</span>
              <span>REDUCTION</span>
            </div>
            <svg className="absolute top-0 left-[110%] w-32 md:w-48 overflow-visible" height="1">
              <line x1="0" y1="0" x2="120" y2="-20" stroke="rgba(0,0,0,0.2)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="120" cy="-20" r="2" fill="rgba(0,0,0,0.3)" />
            </svg>
          </div>
        </div>

        {/* Right Side Features */}
        <div className="absolute right-8 md:right-[10%] top-1/3 flex flex-col gap-32 text-right">
          <div className="relative group">
            <div className="flex flex-col text-[10px] md:text-xs font-sans tracking-[0.2em] font-semibold text-black/60">
              <span>GLARE</span>
              <span>CONTROL</span>
            </div>
            <svg className="absolute top-1/2 right-[110%] w-32 md:w-48 overflow-visible" height="1">
              <line x1="150" y1="0" x2="0" y2="40" stroke="rgba(0,0,0,0.2)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="0" cy="40" r="2" fill="rgba(0,0,0,0.3)" />
            </svg>
          </div>

          <div className="relative group">
            <div className="flex flex-col text-[10px] md:text-xs font-sans tracking-[0.2em] font-semibold text-black/60">
              <span>ENHANCED</span>
              <span>PRIVACY</span>
            </div>
            <svg className="absolute top-1/2 right-[110%] w-32 md:w-48 overflow-visible" height="1">
              <line x1="150" y1="0" x2="0" y2="-40" stroke="rgba(0,0,0,0.2)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="0" cy="-40" r="2" fill="rgba(0,0,0,0.3)" />
            </svg>
          </div>
        </div>

        {/* Bottom Left Film Type Card */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
          <div className="relative w-[140px] h-[270px]">
            {/* Custom SVG Border for the Folder Tab shape */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 140 270"
              fill="none"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <path
                d="M10,0 H70 C75,0 80,5 82.5,10 C85,15 87.5,15 90,15 H130 C135.5,15 140,19.5 140,25 V260 C140,265.5 135.5,270 130,270 H10 C4.5,270 0,265.5 0,260 V10 C0,4.5 4.5,0 10,0 Z"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="1"
                fill="rgba(255,255,255,0.2)"
              />
            </svg>

            <div className="relative z-10 flex flex-col h-full">
              {/* Tab Header */}
              <div className="h-[25px] flex items-center px-4 pt-1">
                <span className="text-[9px] font-sans tracking-[0.1em] font-bold text-black/70">FILM TYPE</span>
              </div>

              {/* Main Content */}
              <div className="px-6 pt-6 pb-6 flex flex-col items-center flex-1">
                {/* Layers Icon */}
                <div className="mb-6 flex justify-center opacity-70 w-full">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 12 12 17 22 12"></polyline>
                    <polyline points="2 17 12 22 22 17"></polyline>
                  </svg>
                </div>

                {/* Separator Line */}
                <div className="w-full h-[1px] bg-black/20 mb-6"></div>

                {/* List Items */}
                <div className="flex flex-col gap-3 text-[10px] font-sans tracking-[0.15em] font-bold text-black/80 w-full text-left pl-1">
                  <div>SOLAR</div>
                  <div>SAFETY</div>
                  <div>SECURITY</div>
                  <div>PRIVACY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}