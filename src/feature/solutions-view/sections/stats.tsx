"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";
import { Aperture, Globe, Hexagon } from"lucide-react";

if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

const stats = [
 {
 icon: Aperture,
 value:"15+",
 label:"Years of excellence",
 },
 {
 icon: Hexagon,
 value:"10,000+",
 label:"Successful installations",
 },
 {
 icon: Globe,
 value:"50+",
 label:"Partnering top brands",
 }
];

export function SolutionsStats() {
 const sectionRef = useRef<HTMLElement>(null);
 const imageRef = useRef<HTMLImageElement>(null);

 useEffect(() => {
 if (!sectionRef.current) return;

 const ctx = gsap.context(() => {
 // Text and cards reveal
 const tl = gsap.timeline({
 scrollTrigger: {
 trigger: sectionRef.current,
 start:"top 75%",
 }
 });

 tl.fromTo(
".stat-header",
 { y: 30, opacity: 0 },
 { y: 0, opacity: 1, duration: 0.8, ease:"power2.out" }
 )
 .fromTo(
".stat-card",
 { y: 40, opacity: 0 },
 { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease:"power3.out" },
"-=0.4"
 );

 // Bottom image parallax
 gsap.to(imageRef.current, {
 y:"20%",
 ease:"none",
 scrollTrigger: {
 trigger:".stat-image-container",
 start:"top bottom",
 end:"bottom top",
 scrub: true,
 },
 });

 }, sectionRef);

 return () => ctx.revert();
 }, []);

 return (
 <section ref={sectionRef} className="pt-24 md:pt-32 bg-[var(--color-soft-glass)] overflow-hidden">
 <div className="container-master mx-auto px-4 md:px-0 mb-16 md:mb-24">
 
 {/* Header Section */}
 <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 stat-header">
 <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-6">
 Company
 </p>
 <h2 className="text-3xl md:text-5xl font-semibold text-[var(--color-deep-forest)] tracking-tight leading-tight mb-8">
 We cooperate with top-tier architectural firms and contractors. Our partners <span className="text-[var(--color-arch-sand)]">trust us</span>.
 </h2>
 <p className="text-[var(--color-deep-forest)]/70 max-w-2xl mx-auto leading-relaxed">
 SSI brings decades of expertise in commercial and residential window film installations, offering innovative solutions for energy efficiency, security, and design aesthetics.
 </p>
 </div>

 {/* Stats Cards */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
 {stats.map((stat, index) => {
 const Icon = stat.icon;
 return (
 <div 
 key={index} 
 className="stat-card bg-white p-10 md:p-14 flex flex-col items-center justify-center text-center transition- duration-500 border border-[var(--color-deep-forest)]/5"
 >
 <div className="mb-10 text-[var(--color-arch-sand)] opacity-80">
 <Icon className="size-24 md:size-32 stroke-[1]" />
 </div>
 <h3 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-deep-forest)] mb-3">
 {stat.value}
 </h3>
 <p className="text-[var(--color-deep-forest)]/70 text-sm md:text-base font-medium">
 {stat.label}
 </p>
 </div>
 );
 })}
 </div>
 </div>


 </section>
 );
}
