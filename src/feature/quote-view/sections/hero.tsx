"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function QuoteHero() {
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
        ".res-hero-line",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" },
        1
      )
      .fromTo(
        ".res-hero-sub",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        1.5
      );

      gsap.to(imageRef.current, {
        scale: 1.1,
        y: 0, /* removed parallax gap */
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".res-hero-content", {
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
      className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-[var(--color-deep-forest)] flex items-center justify-center pt-24 lg:pt-32"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div ref={imageRef} className="w-full h-full bg-cover bg-center origin-center" style={{ backgroundImage: `url('/hero/quote-hero.jpg')` }} />
        <div className="absolute inset-0 bg-[var(--color-deep-forest)]/60" />
      </div>

      <div className="container-master relative z-10 w-full px-4 text-center res-hero-content mt-0 max-w-3xl">
        <h1 className="text-[40px] md:text-[60px] lg:text-[70px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-warm-ivory)] leading-[1] mb-6 flex flex-col items-center">
          <div className="overflow-hidden pb-2"><div className="res-hero-line">GET A</div></div>
          <div className="overflow-hidden pb-2"><div className="res-hero-line">QUOTE.</div></div>
        </h1>

        <p className="res-hero-sub text-base md:text-lg text-[var(--color-warm-ivory)]/80 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
          Provide us with some basic information about your project, and our specialists will provide a detailed proposal tailored to your specific building requirements.
        </p>

      </div>
    </section>
  );
}
