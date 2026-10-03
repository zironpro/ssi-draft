"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";

export function QuoteHero() {
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
 if (!containerRef.current) return;

 const ctx = gsap.context(() => {
 gsap.fromTo(
".hero-element",
 { y: 30, opacity: 0 },
 {
 y: 0,
 opacity: 1,
 duration: 1,
 stagger: 0.15,
 ease:"power3.out",
 }
 );
 }, containerRef);

 return () => ctx.revert();
 }, []);

 return (
 <section ref={containerRef} className="pt-40 pb-20 bg-[var(--color-deep-forest)] text-white relative overflow-hidden">
 {/* Background Elements */}
 <div className="absolute inset-0 opacity-10">
 <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-muted-copper)] to-transparent opacity-30" />
 </div>

 <div className="container-master mx-auto px-4 md:px-0 relative z-10 text-center max-w-3xl">
 <div className="hero-element inline-block bg-[var(--color-muted-copper)] text-[var(--color-deep-forest)] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
 Free Estimate
 </div>
 
 <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6">
 Request a Custom Quote
 </h1>
 
 <p className="hero-element text-base md:text-lg text-white/70 font-medium leading-relaxed">
 Provide us with some basic information about your project, and our specialists will provide a detailed proposal tailored to your specific building requirements.
 </p>
 </div>
 </section>
 );
}
