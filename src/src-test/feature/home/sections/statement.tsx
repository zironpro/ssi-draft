"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%", // Pin for 3x viewport height
          scrub: 1,      // Smooth scrubbing
          pin: true,
        },
      });

      // Background warmer shift
      tl.to(bgRef.current, {
        backgroundColor: "#EBE3D5", // Warmer sunlit tone than Warm Ivory
        duration: 4,
        ease: "none",
      }, 0);

      // 1. "HEAT." appears
      tl.to(".word-heat", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }, 0.5);

      // 2. "HEAT." fades, "GLARE." appears
      tl.to(".word-heat", { opacity: 0, duration: 1 }, 2);
      tl.to(".word-glare", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }, 2);

      // 3. "GLARE." fades, "UV." appears
      tl.to(".word-glare", { opacity: 0, duration: 1 }, 3.5);
      tl.to(".word-uv", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }, 3.5);

      // 4. "UV." fades, "LOSS OF PRIVACY." appears
      tl.to(".word-uv", { opacity: 0, duration: 1 }, 5);
      tl.to(".word-privacy", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }, 5);

      // Optional: Add subtle distortion/blur to the background when glare/uv hits
      tl.to(".bg-distortion", {
        opacity: 0.5,
        scale: 1.1,
        duration: 2,
      }, 2);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background that shifts color */}
      <div 
        ref={bgRef} 
        className="absolute inset-0 bg-[var(--color-warm-ivory)] z-0"
      />

      {/* Subtle distortion element */}
      <div 
        className="bg-distortion absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-muted-copper)]/10 via-transparent to-transparent opacity-0 z-0 pointer-events-none"
      />

      <div className="container-master relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
        
        {/* Static Header */}
        <p className="text-[14px] md:text-[18px] font-bold tracking-[0.2em] text-[var(--color-muted-sage)] uppercase mb-2 md:mb-8">
          Too Much
        </p>

        {/* Dynamic Typography Container */}
        <div ref={wordsRef} className="relative w-full h-[150px] md:h-[250px] flex items-center justify-center">
          
          <h2 className="word-heat absolute text-[80px] md:text-[150px] lg:text-[220px] font-extrabold tracking-tighter text-[var(--color-deep-forest)] leading-none opacity-0 translate-y-10 scale-95">
            HEAT.
          </h2>

          <h2 className="word-glare absolute text-[80px] md:text-[150px] lg:text-[220px] font-extrabold tracking-tighter text-[var(--color-deep-forest)] leading-none opacity-0 translate-y-10 scale-95">
            GLARE.
          </h2>

          <h2 className="word-uv absolute text-[80px] md:text-[150px] lg:text-[220px] font-extrabold tracking-tighter text-[var(--color-deep-forest)] leading-none opacity-0 translate-y-10 scale-95">
            UV.
          </h2>

          <h2 className="word-privacy absolute text-[50px] md:text-[100px] lg:text-[140px] font-extrabold tracking-tighter text-[var(--color-deep-forest)] leading-none opacity-0 translate-y-10 scale-95 w-full">
            LOSS OF PRIVACY.
          </h2>

        </div>
      </div>
    </section>
  );
}
