"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";

if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

const stats = [
 { value:"15+", label:"Years Experience" },
 { value:"10K+", label:"Projects Delivered" },
 { value:"99%", label:"Client Satisfaction" },
 { value:"50+", label:"Global Partners" }
];

export function OurExpertise() {
 const sectionRef = useRef<HTMLElement>(null);

 useEffect(() => {
 if (!sectionRef.current) return;

 const ctx = gsap.context(() => {
 gsap.fromTo(
".expertise-stat",
 { scale: 0.8, opacity: 0 },
 {
 scale: 1,
 opacity: 1,
 duration: 0.8,
 stagger: 0.1,
 ease:"back.out(1.5)",
 scrollTrigger: {
 trigger: sectionRef.current,
 start:"top 75%",
 },
 }
 );
 }, sectionRef);

 return () => ctx.revert();
 }, []);

 return (
 <section ref={sectionRef} className="py-24 md:py-32 bg-[var(--color-deep-forest)] text-[var(--color-warm-ivory)]">
 <div className="container-master mx-auto px-4 md:px-0">
 <div className="text-center max-w-4xl mx-auto mb-20">
 <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">Our Expertise</h2>
 <h3 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-8">
 Decades of mastery in architectural film and glass installations.
 </h3>
 <p className="text-base md:text-lg text-[var(--color-warm-ivory)]/70">
 Our specialized teams have tackled everything from high-rise commercial towers to bespoke residential requirements, building a legacy of technical superiority and design intelligence.
 </p>
 </div>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-[var(--color-warm-ivory)]/10 pt-16">
 {stats.map((stat, i) => (
 <div key={i} className="expertise-stat flex flex-col items-center text-center">
 <span className="text-5xl md:text-7xl font-semibold text-[var(--color-arch-sand)] mb-2 tracking-tighter">
 {stat.value}
 </span>
 <span className="text-sm md:text-base tracking-[0.1em] uppercase font-bold text-[var(--color-warm-ivory)]/80">
 {stat.label}
 </span>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
