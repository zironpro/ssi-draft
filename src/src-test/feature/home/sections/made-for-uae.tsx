"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MadeForUae() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%", // Pin for 2x height
          pin: true,
          scrub: true,
        },
      });

      // Zoom image
      tl.to(imageRef.current, { scale: 1.15, ease: "none", duration: 1 }, 0);

      // Move sun across the glass
      tl.fromTo(
        sunRef.current,
        { x: "-100%", opacity: 0 },
        { x: "200%", opacity: 0.8, duration: 1, ease: "none" },
        0
      );

      // Fade in text slowly
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        0.3
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-[var(--color-deep-forest)]">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img 
          ref={imageRef}
          src="/images/heroimg.png" 
          alt="UAE Architecture"
          className="w-full h-full object-cover origin-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Sun reflection overlay */}
        <div 
          ref={sunRef}
          className="absolute inset-0 w-[50%] bg-gradient-to-r from-transparent via-[var(--color-muted-copper)]/30 to-transparent mix-blend-screen pointer-events-none blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container-master relative z-10 w-full h-full flex flex-col justify-center items-start">
        <div ref={textRef} className="max-w-[700px]">
          <h2 className="text-[60px] md:text-[80px] lg:text-[120px] font-extrabold tracking-tighter text-[var(--color-warm-ivory)] leading-[0.9] mb-8">
            MADE FOR<br />THE UAE SUN.
          </h2>
          <p className="text-[20px] md:text-[24px] text-[var(--color-warm-ivory)]/90 leading-[1.6]">
            Designed for intense sunlight, extreme heat and demanding architectural environments.
          </p>
        </div>
      </div>
    </section>
  );
}
