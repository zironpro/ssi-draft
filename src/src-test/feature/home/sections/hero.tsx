"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Initial Load Animation
      tl
      .fromTo(
        imageRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 2, ease: "power3.out" },
        0
      )
      .fromTo(
        ".hero-headline-line",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" },
        1
      )
      .fromTo(
        ".hero-sub",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        1.4
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" },
        1.6
      )
      .fromTo(
        ".hero-reflection",
        { x: "-100%", skewX: -25 },
        { x: "200%", skewX: -25, duration: 2.5, ease: "power2.inOut" },
        1.2
      );

      // 2. Scroll Transformation
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

      gsap.to(".hero-text-content", {
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

      // 3. Mouse Interaction (Subtle light reflection)
      const handleMouseMove = (e: MouseEvent) => {
        if (window.innerWidth < 1024) return;
        const xPos = (e.clientX / window.innerWidth - 0.5) * 20; // -10 to 10
        const yPos = (e.clientY / window.innerHeight - 0.5) * 20;

        gsap.to(".hero-light", {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[100vh] min-h-[700px] overflow-hidden bg-[var(--color-deep-forest)]"
    >
      {/* ── IMAGE BACKGROUND & MASK ── */}
      <div ref={maskRef} className="absolute inset-0 overflow-hidden z-0">
        <img
          ref={imageRef}
          src="/images/hero/hero_main.jpg"
          alt="Premium Architectural Glass"
          className="w-full h-full object-cover origin-center"
        />
        
        {/* Subtle gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-deep-forest)]/80 via-[var(--color-deep-forest)]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-forest)]/60 via-transparent to-transparent" />

        {/* Animated Light Sweep (CSS) */}
        <div 
          className="hero-reflection absolute inset-0 w-[50%] bg-gradient-to-r from-transparent via-white/10 to-transparent mix-blend-overlay pointer-events-none"
        />

        {/* Mouse interactive subtle glow */}
        <div 
          className="hero-light absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 mix-blend-overlay pointer-events-none"
        />
      </div>

      {/* ── TEXT CONTENT ── */}
      <div className="container-master relative z-10 w-full h-full flex flex-col justify-center items-center text-center hero-text-content mt-8 md:mt-0 pt-20">
        
        <h1 className="text-[52px] md:text-[80px] lg:text-[100px] font-extrabold tracking-tighter text-[var(--color-warm-ivory)] leading-[0.95] mb-8 flex flex-col items-center">
          <div className="overflow-hidden pb-2"><div className="hero-headline-line">ELEVATING</div></div>
          <div className="overflow-hidden pb-2"><div className="hero-headline-line">EVERY</div></div>
          <div className="overflow-hidden pb-2 text-[var(--color-arch-sand)]"><div className="hero-headline-line">SURFACE.</div></div>
        </h1>

        <p className="hero-sub text-[18px] md:text-[22px] text-[var(--color-warm-ivory)]/80 leading-[1.6] max-w-[600px] mb-12">
          Premium window films, smart glass technology, and luxury interior wrapping designed for maximum comfort, security, and aesthetics.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/solutions"
            className="hero-cta group flex items-center justify-center gap-3 px-8 h-[54px] md:h-[60px] bg-[var(--color-warm-ivory)] text-[var(--color-deep-forest)] font-extrabold tracking-[0.15em] text-[13px] md:text-[14px] uppercase rounded-[30px] transition-transform hover:scale-105"
          >
            Explore Solutions
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link
            href="/quote"
            className="hero-cta text-[var(--color-warm-ivory)] font-bold tracking-[0.15em] text-[13px] md:text-[14px] uppercase hover:text-[var(--color-arch-sand)] transition-colors underline underline-offset-8"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 opacity-50">
        <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-warm-ivory)] font-bold">Scroll</span>
        <div className="w-[1px] h-[30px] bg-gradient-to-b from-[var(--color-warm-ivory)] to-transparent" />
      </div>

    </section>
  );
}