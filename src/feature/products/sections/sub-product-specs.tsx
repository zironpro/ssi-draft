"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";
import { Shield, Zap, Layers, Sun } from"lucide-react";

if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

const iconMap: Record<string, any> = {
 Shield,
 Zap,
 Layers,
 Sun
};

interface SpecsProps {
 features: { title: string; desc: string; icon: string }[];
 specs: { label: string; value: string }[];
}

export function SubProductSpecs({ features, specs }: SpecsProps) {
 const sectionRef = useRef<HTMLElement>(null);

 useEffect(() => {
 if (!sectionRef.current) return;

 const ctx = gsap.context(() => {
 gsap.fromTo(
".spec-anim",
 { opacity: 0, y: 30 },
 {
 opacity: 1,
 y: 0,
 duration: 0.8,
 stagger: 0.1,
 ease:"power2.out",
 scrollTrigger: {
 trigger: sectionRef.current,
 start:"top 70%",
 },
 }
 );
 }, sectionRef);

 return () => ctx.revert();
 }, [features]);

 return (
 <section ref={sectionRef} className="py-24 md:py-32 bg-[var(--color-soft-glass)]">
 <div className="container-master mx-auto px-4 md:px-0">
 
 <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
 <h2 className="spec-anim text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">Deep Dive</h2>
 <h3 className="spec-anim text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-deep-forest)] leading-tight">
 Technical Specifications
 </h3>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
 
 {/* Key Features Bento */}
 <div className="grid grid-cols-1 gap-6">
 {features.map((feat, i) => {
 const Icon = iconMap[feat.icon] || Shield;
 const isDark = i % 2 !== 0;
 return (
 <div 
 key={i} 
 className={`spec-anim flex items-start gap-6 p-8 rounded-lg border border-[var(--color-deep-forest)]/5 transition-transform hover:-translate-y-1 ${
 isDark ?"bg-[var(--color-deep-forest)] text-[var(--color-warm-ivory)]" :"bg-white text-[var(--color-deep-forest)]"
 }`}
 >
 <div className={`w-14 h-14 shrink-0 rounded-lg flex items-center justify-center ${isDark ?"bg-white/10" :"bg-[var(--color-arch-sand)]/20"}`}>
 <Icon className={`size-7 ${isDark ?"text-[var(--color-arch-sand)]" :"text-[var(--color-muted-copper)]"}`} />
 </div>
 <div>
 <h4 className="text-xl font-bold mb-2">{feat.title}</h4>
 <p className={`text-sm leading-relaxed ${isDark ?"text-white/70" :"text-[var(--color-deep-forest)]/70"}`}>
 {feat.desc}
 </p>
 </div>
 </div>
 );
 })}
 </div>

 {/* Specifications Table */}
 <div className="spec-anim bg-white p-10 md:p-16 rounded-[2.5rem] border border-[var(--color-deep-forest)]/5 sticky top-32">
 <h4 className="text-2xl font-bold text-[var(--color-deep-forest)] mb-8">Performance Data</h4>
 
 <div className="flex flex-col">
 {specs.map((spec, index) => (
 <div key={index} className="flex justify-between items-center py-5 border-b border-[var(--color-deep-forest)]/10 group hover:bg-[var(--color-soft-glass)] transition-colors px-4 -mx-4 rounded-lg">
 <span className="text-[var(--color-deep-forest)]/70 font-medium">{spec.label}</span>
 <span className="text-[var(--color-deep-forest)] font-semibold text-right ml-4">{spec.value}</span>
 </div>
 ))}
 </div>
 </div>

 </div>
 </div>
 </section>
 );
}
