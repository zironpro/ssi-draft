"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";
import { ArrowRight, Box } from"lucide-react";
import Link from"next/link";
import { solutionsData } from"../data/solutions";

if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

export function CategorySolutions({ slug }: { slug: string }) {
 const sectionRef = useRef<HTMLElement>(null);
 
 const category = solutionsData[slug];
 const solutions = category ? Object.values(category.subSolutions) : [];

 useEffect(() => {
 if (!sectionRef.current || solutions.length === 0) return;

 const ctx = gsap.context(() => {
 gsap.fromTo(
".sub-solution-card",
 { y: 50, opacity: 0 },
 {
 y: 0,
 opacity: 1,
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
 }, [slug, solutions.length]);

 if (solutions.length === 0) return null;

 return (
 <section ref={sectionRef} className="py-24 md:py-32 bg-white">
 <div className="container-master mx-auto px-4 md:px-0">
 
 <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
 <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">Explore our specialized solutions.</h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
 {solutions.map((solution, i) => (
 <Link href={`/solutions/${slug}/${solution.slug}`} key={i} className="sub-solution-card group relative bg-[var(--color-soft-glass)] rounded-lg overflow-hidden transition-all duration-500 border border-[var(--color-deep-forest)]/5 cursor-pointer block">
 <div className="relative overflow-hidden">
 <img 
 src={solution.heroImage} 
 alt={solution.name} 
 className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
 />
 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
 </div>
 
 <div className="p-8">
 
 <h4 className="text-2xl font-bold text-[var(--color-deep-forest)] mb-3">{solution.name}</h4>
 <p className="text-[var(--color-deep-forest)]/70 font-medium">{solution.shortDescription}</p>
 
 <div className="mt-8 flex items-center gap-2 text-[var(--color-deep-forest)] font-bold tracking-widest text-[11px] uppercase group-hover:text-[var(--color-arch-sand)] transition-colors">
 Request Info
 <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
 </div>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>
 );
}
