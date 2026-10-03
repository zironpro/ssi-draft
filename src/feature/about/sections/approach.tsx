"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";

if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

const steps = [
 {
 number:"01",
 title:"Consultation & Discovery",
 description:"We start by deeply understanding your project requirements, assessing the site, and discussing your architectural goals."
 },
 {
 number:"02",
 title:"Engineering & Design",
 description:"Our experts select the optimal materials and engineer a customized approach that maximizes efficiency and aesthetics."
 },
 {
 number:"03",
 title:"Precision Installation",
 description:"Certified technicians execute the installation with meticulous attention to detail, ensuring a flawless, bubble-free finish."
 },
 {
 number:"04",
 title:"Review & Maintenance",
 description:"We conduct rigorous quality checks and provide ongoing maintenance support to guarantee long-lasting performance."
 }
];

export function OurApproach() {
 const sectionRef = useRef<HTMLElement>(null);

 useEffect(() => {
 if (!sectionRef.current) return;

 const ctx = gsap.context(() => {
 gsap.fromTo(
".approach-step",
 { x: -50, opacity: 0 },
 {
 x: 0,
 opacity: 1,
 duration: 0.8,
 stagger: 0.2,
 ease:"power2.out",
 scrollTrigger: {
 trigger: sectionRef.current,
 start:"top 70%",
 },
 }
 );
 }, sectionRef);

 return () => ctx.revert();
 }, []);

 return (
 <section ref={sectionRef} className="py-24 md:py-32 bg-[var(--color-soft-glass)]">
 <div className="container-master mx-auto px-4 md:px-0">
 <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
 <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">Methodology</h2>
 <h3 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-deep-forest)] leading-tight">
 Our Approach
 </h3>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {steps.map((step, i) => (
 <div key={i} className="approach-step relative bg-white p-8 md:p-10 rounded-lg border border-transparent hover:border-[var(--color-arch-sand)] transition-colors duration-300">
 <span className="absolute top-8 right-8 text-6xl font-semibold text-[var(--color-arch-sand)]/20 leading-none pointer-events-none">
 {step.number}
 </span>
 <h4 className="text-2xl font-bold text-[var(--color-deep-forest)] mb-4 mt-8 relative z-10">
 {step.title}
 </h4>
 <p className="text-[var(--color-deep-forest)]/70 relative z-10 leading-relaxed">
 {step.description}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
