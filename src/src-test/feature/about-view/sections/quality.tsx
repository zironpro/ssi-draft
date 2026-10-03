"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function QualityStandards() {
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ctaRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".quality-animate",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 70%",
          },
        }
      );
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ctaRef} className="py-24 md:py-32 bg-[var(--color-warm-ivory)] border-t border-[var(--color-deep-forest)]/10">
      <div className="container-master mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-[var(--color-deep-forest)] p-12 md:p-20 rounded-[2rem] md:rounded-[3rem] text-[var(--color-warm-ivory)] overflow-hidden relative">
          
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          <div className="w-full md:w-2/3 relative z-10">
            <h2 className="quality-animate text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">
              Commitment to Excellence
            </h2>
            <h3 className="quality-animate text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Uncompromising Quality & Standards
            </h3>
            <p className="quality-animate text-lg md:text-xl text-[var(--color-warm-ivory)]/80 max-w-2xl leading-relaxed">
              Every project we undertake is backed by industry-leading warranties and executed in strict adherence to international safety and quality protocols. 
            </p>
          </div>

          <div className="w-full md:w-1/3 flex justify-start md:justify-end relative z-10">
            <Link
              href="/contact"
              className="quality-animate group flex items-center justify-center gap-3 px-8 h-[60px] bg-[var(--color-arch-sand)] text-[var(--color-deep-forest)] font-extrabold tracking-[0.15em] text-[14px] uppercase rounded-[30px] transition-transform hover:scale-105"
            >
              Work With Us
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
