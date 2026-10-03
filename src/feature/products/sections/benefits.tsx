"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";
import { Shield, Sun, Droplets, Zap } from"lucide-react";

if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
 {
 icon: Sun,
 title:"UV Protection",
 description:"Blocks up to 99% of harmful UV rays, protecting interiors from fading and reducing glare.",
 },
 {
 icon: Zap,
 title:"Energy Efficiency",
 description:"Significantly reduces heat gain in summer and heat loss in winter, lowering utility bills.",
 },
 {
 icon: Shield,
 title:"Enhanced Security",
 description:"Holds shattered glass together upon impact, offering protection against break-ins and severe weather.",
 },
 {
 icon: Droplets,
 title:"Scratch Resistant",
 description:"Durable hardcoat finishes ensure long-lasting clarity and easy maintenance over the years.",
 },
];

export function ProductBenefits() {
 const sectionRef = useRef<HTMLElement>(null);

 useEffect(() => {
 if (!sectionRef.current) return;

 const ctx = gsap.context(() => {
 gsap.fromTo(
".benefit-item",
 { opacity: 0, y: 50 },
 {
 opacity: 1,
 y: 0,
 duration: 0.8,
 stagger: 0.15,
 ease:"power2.out",
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
 <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
 <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">
 The Advantage
 </h2>
 <h3 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
 Why Choose Our Premium Films?
 </h3>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
 {benefits.map((benefit, index) => {
 const Icon = benefit.icon;
 return (
 <div key={index} className="benefit-item flex flex-col items-center text-center group">
 <div className="w-20 h-20 rounded-full bg-[var(--color-warm-ivory)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-arch-sand)] transition-colors duration-500">
 <Icon className="size-10 text-[var(--color-warm-ivory)] group-hover:text-[var(--color-deep-forest)] transition-colors duration-500" />
 </div>
 <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
 <p className="text-[var(--color-warm-ivory)]/70 leading-relaxed">
 {benefit.description}
 </p>
 </div>
 );
 })}
 </div>
 </div>
 </section>
 );
}
