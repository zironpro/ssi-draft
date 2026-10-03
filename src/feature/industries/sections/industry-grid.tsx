"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";
import { Building2, Home, ShoppingBag, HeartPulse, GraduationCap, Plane } from"lucide-react";

import Link from"next/link";

if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

const industries = [
 {
 id: 1,
 title:"Commercial Offices",
 slug:"commercial-offices",
 description:"Enhance tenant comfort, improve energy efficiency, and elevate the aesthetic appeal of corporate environments.",
 icon: Building2,
 image:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
 className:"md:col-span-2 md:row-span-2",
 },
 {
 id: 2,
 title:"Residential",
 slug:"residential",
 description:"Protect your home from UV rays and increase privacy without sacrificing natural light.",
 icon: Home,
 image:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
 className:"md:col-span-2 md:row-span-1",
 },
 {
 id: 3,
 title:"Retail & Storefronts",
 slug:"retail-and-storefronts",
 description:"Secure merchandise and create inviting displays with clear, protective films.",
 icon: ShoppingBag,
 image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
 className:"md:col-span-1 md:row-span-1",
 },
 {
 id: 4,
 title:"Healthcare",
 slug:"healthcare",
 description:"Maintain hygienic, private spaces using antimicrobial and decorative solutions.",
 icon: HeartPulse,
 image:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
 className:"md:col-span-1 md:row-span-1",
 },
 {
 id: 5,
 title:"Education",
 slug:"education",
 description:"Upgrade campus security and create distraction-free learning environments.",
 icon: GraduationCap,
 image:"https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
 className:"md:col-span-2 md:row-span-1",
 },
 {
 id: 6,
 title:"Hospitality & Travel",
 slug:"hospitality-and-travel",
 description:"Offer guests premium comfort and safety across hotels and transit hubs.",
 icon: Plane,
 image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
 className:"md:col-span-2 md:row-span-1",
 }
];

export function IndustryGrid() {
 const sectionRef = useRef<HTMLElement>(null);

 useEffect(() => {
 if (!sectionRef.current) return;

 const ctx = gsap.context(() => {
 gsap.fromTo(
".industry-card",
 { y: 50, opacity: 0, scale: 0.95 },
 {
 y: 0,
 opacity: 1,
 scale: 1,
 duration: 0.8,
 stagger: 0.1,
 ease:"back.out(1.2)",
 scrollTrigger: {
 trigger: sectionRef.current,
 start:"top 80%",
 },
 }
 );
 }, sectionRef);

 return () => ctx.revert();
 }, []);

 return (
 <section ref={sectionRef} className="py-24 md:py-32 bg-[var(--color-warm-ivory)]">
 <div className="container-master mx-auto px-4 md:px-0">
 <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
 <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">Our Focus</h2>
 <h3 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-deep-forest)] leading-tight">
 Built for Every Sector
 </h3>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[320px] gap-6">
 {industries.map((industry) => {
 const Icon = industry.icon;
 return (
 <Link 
 href={`/industries/${industry.slug}`}
 key={industry.id} 
 className={`industry-card group relative rounded-lg overflow-hidden transition-all duration-500 border border-[var(--color-deep-forest)]/10 cursor-pointer block ${industry.className}`}
 >
 <div className="absolute inset-0 z-0">
 <img
 src={industry.image}
 alt={industry.title}
 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:opacity-80" />
 </div>
 
 <div className="relative z-10 p-8 h-full flex flex-col justify-end">
 <div className="mb-4 text-[var(--color-arch-sand)] bg-[var(--color-deep-forest)]/30 backdrop-blur-md w-12 h-12 rounded-lg flex items-center justify-center">
 <Icon className="size-6" />
 </div>
 <h4 className="text-2xl md:text-3xl font-semibold text-[var(--color-warm-ivory)] mb-3 drop-">
 {industry.title}
 </h4>
 <p className="text-[var(--color-warm-ivory)]/80 font-medium text-sm md:text-base drop- max-w-md">
 {industry.description}
 </p>
 </div>
 </Link>
 );
 })}
 </div>
 </div>
 </section>
 );
}
