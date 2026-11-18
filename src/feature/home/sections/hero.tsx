
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
import { useRef, useState } from "react";

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

    const { left, top } =
      containerRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "30%"]
  );

  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );

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

    </section>
  );
}
