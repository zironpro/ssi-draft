"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";
import { ArrowRight } from"lucide-react";
import Link from"next/link";

if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

import { productsData } from"../data/products";

export function CategoryProducts({ slug }: { slug: string }) {
 const sectionRef = useRef<HTMLElement>(null);
 
 const category = productsData[slug];
 const products = category ? Object.values(category.subProducts) : [];

 useEffect(() => {
 if (!sectionRef.current || products.length === 0) return;

 const ctx = gsap.context(() => {
 gsap.fromTo(
".sub-product-card",
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
 }, [products]);

 if (products.length === 0) return null;

 return (
 <section ref={sectionRef} className="py-8 md:py-12 bg-[var(--color-warm-ivory)]">
 <div className="container-master mx-auto px-4 md:px-0">
 <div className="mb-6 md:mb-8">
 <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-2 md:mb-4">Product Lineup</h2>
 <h3 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-deep-forest)] leading-tight mb-3 md:mb-4">
 Explore our specialized solutions.
 </h3>
 <p className="text-base md:text-lg text-[var(--color-deep-forest)]/70 max-w-3xl leading-relaxed">
 Discover a curated range of high-performance films engineered to elevate your space, offering unparalleled UV protection, energy efficiency, and aesthetic appeal.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {products.map((product, i) => (
 <Link href={`/products/${slug}/${product.slug}`} key={i} className="sub-product-card group relative bg-[var(--color-soft-glass)] rounded-lg overflow-hidden transition-all duration-500 border border-[var(--color-deep-forest)]/5 cursor-pointer block">
 <div className="relative overflow-hidden">
 <img 
 src={product.heroImage} 
 alt={product.name} 
 className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
 />
 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
 </div>
 
 <div className="p-8">
 
 <h4 className="text-2xl font-bold text-[var(--color-deep-forest)] mb-3">{product.name}</h4>
 <p className="text-[var(--color-deep-forest)]/70 font-medium">{product.shortDescription}</p>
 
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
