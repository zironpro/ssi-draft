"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Setup scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="hero-master hero-safe relative overflow-hidden flex items-center bg-[var(--color-obsidian)] min-h-screen">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: backgroundY, opacity: backgroundOpacity }}
        className="absolute inset-0 z-0 origin-top"
      >
        <Image
          src="/images/hero.png"
          alt="Luxury Window Film View"
          fill
          className="object-cover scale-[1.02]"
          priority
        />
        {/* Subtle gradient overlay to ensure text readability while keeping the image bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </motion.div>

      {/* Main Content Layout */}
      <div className="container-master relative z-10 w-full flex justify-between items-center h-full py-12 md:py-24">
        
        {/* Left Side Content */}
        <div className="flex flex-col gap-6 md:gap-8 w-full max-w-[90%] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2 md:gap-4"
          >
            <p className="text-fluid-xs md:text-sm tracking-[0.2em] font-semibold text-[var(--accent)] uppercase">
              More Than Glass
            </p>
            <h1 className="heading-fluid-hero font-serif text-white text-balance leading-[1.05] tracking-tight">
              A Cooler, Safer <span className="text-[var(--accent-subtle)]">Brighter Tomorrow</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-fluid-base md:text-fluid-lg text-gray-300 max-w-full md:max-w-[85%] text-pretty leading-relaxed">
              High-performance window films for homes, offices and vehicles. Enhance comfort, protect what matters, and experience the difference.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2 md:pt-4"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-6 md:px-8 py-3 md:py-4 text-center text-fluid-base font-medium text-white hover:bg-[var(--accent-muted)] transition-all duration-300 shadow-lg"
            >
              Explore Products
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg px-6 md:px-8 py-3 md:py-4 text-center text-fluid-base font-medium text-white border border-white/40 hover:border-white hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            >
              Get a Quote
            </a>
          </motion.div>
        </div>

        {/* Right Side Decorative Elements */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-col items-center justify-center gap-8 absolute right-4 xl:right-0 top-1/2 -translate-y-1/2 h-full"
        >
          <div className="w-[1px] h-24 bg-[var(--accent)]/60 mt-auto"></div>
          <div className="flex flex-col gap-6 text-xs tracking-[0.25em] text-white/80 font-medium pb-2">
            <span className="[writing-mode:vertical-rl]">STYLE</span>
            <span className="[writing-mode:vertical-rl]">PROTECTION</span>
            <span className="[writing-mode:vertical-rl]">COMFORT</span>
          </div>
          <div className="w-[1px] h-24 bg-white/20 mb-auto"></div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 z-10"
      >
        <span className="text-xs tracking-widest text-white/60 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-[var(--accent)] absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
