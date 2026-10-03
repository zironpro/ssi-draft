"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InteractiveCompare() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {

      // Scroll-based reveal: Image stays in place, mask opens from left to right
      gsap.fromTo(
        overlayRef.current,
        { clipPath: "inset(0% 100% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%", // Pin for 1.5x height to allow scroll interaction
            scrub: true,
            pin: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-screen pb-12 md:pb-24 bg-[var(--color-warm-ivory)] overflow-hidden relative flex flex-col justify-center">
      
      <div className="container-master text-center mb-8 relative z-20">
        <p className="text-[14px] md:text-[18px] font-bold tracking-[0.2em] text-[var(--color-muted-sage)] uppercase mb-4">
          The Transformation
        </p>
        <h2 className="text-[40px] md:text-[60px] lg:text-[80px] font-extrabold tracking-tighter text-[var(--color-deep-forest)] leading-tight">
          NOW IMAGINE <br className="hidden md:block"/> THE DIFFERENCE.
        </h2>
      </div>

      <div className="relative w-full max-w-[1800px] mx-auto px-4 md:px-8 h-[50vh] md:h-[60vh]">
        
        {/* Main image container */}
        <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl bg-black">
          
          {/* Base Image: WITHOUT TINT */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="/images/without-tint.png" 
              alt="Without Film"
              className="absolute inset-0 w-full"
              style={{ height: '100%', objectFit: 'cover', display: 'block' }}
            />
            
            <div className="absolute top-8 right-8 bg-[var(--color-warm-ivory)]/90 backdrop-blur-md px-6 py-3 rounded-full text-[12px] font-bold tracking-widest uppercase text-[var(--color-deep-forest)] shadow-lg">
              Without Film
            </div>
          </div>

          {/* Overlay Image: WITH TINT */}
          <div 
            ref={overlayRef}
            className="absolute inset-0 w-full h-full border-r-[2px] border-white/20"
            style={{ clipPath: "inset(0% 100% 0% 0%)" }}
          >
            <img 
              src="/images/with-tint.png" 
              alt="With Film"
              className="absolute inset-0 w-full"
              style={{ height: '100%', objectFit: 'cover', display: 'block' }}
            />

            <div className="absolute top-8 left-8 bg-[var(--color-deep-forest)]/90 backdrop-blur-md px-6 py-3 rounded-full text-[12px] font-bold tracking-widest uppercase text-[var(--color-warm-ivory)] shadow-lg">
              With Film
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}
