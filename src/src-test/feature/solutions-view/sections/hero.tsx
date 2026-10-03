"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SolutionsHero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        imageRef.current,
        { scale: 1.15, filter: "brightness(0.5)" },
        { scale: 1, filter: "brightness(1)", duration: 2.5, ease: "power3.out" },
        0
      )
      .fromTo(
        ".sol-hero-line",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" },
        1
      )
      .fromTo(
        ".sol-hero-sub",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        1.5
      );

      gsap.to(imageRef.current, {
        scale: 1.1,
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".sol-hero-content", {
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
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-[var(--color-deep-forest)] flex items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
          alt="Architectural Solutions"
          className="w-full h-full object-cover origin-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-forest)]/90 via-[var(--color-deep-forest)]/50 to-[var(--color-deep-forest)]/30" />
      </div>

      <div className="container-master relative z-10 w-full px-4 text-center sol-hero-content mt-16 md:mt-0">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-[var(--color-warm-ivory)] leading-[1] mb-6 flex flex-col items-center">
          <div className="overflow-hidden pb-2"><div className="sol-hero-line">INNOVATIVE</div></div>
          <div className="overflow-hidden pb-2 text-[var(--color-arch-sand)]"><div className="sol-hero-line">SOLUTIONS.</div></div>
        </h1>

        <p className="sol-hero-sub text-lg md:text-2xl text-[var(--color-warm-ivory)]/80 leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
          Comprehensive services designed to transform, protect, and elevate your commercial and residential spaces.
        </p>

        
      </div>
    </section>
  );
}
