"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";
import { Calendar, Clock, User } from"lucide-react";
import Link from"next/link";

interface DetailHeroProps {
 title: string;
 category: string;
 date: string;
 author: string;
 readTime: string;
 image: string;
}

export function BlogDetailHero({
 title ="The Future of Architectural Window Films in Commercial Real Estate",
 category ="Insights",
 date ="Oct 12, 2026",
 author ="James Sterling",
 readTime ="5 min read",
 image ="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
}: Partial<DetailHeroProps>) {
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
 
 gsap.fromTo(
".hero-image",
 { scale: 1.05, opacity: 0 },
 {
 scale: 1,
 opacity: 1,
 duration: 1.5,
 ease:"power3.out",
 }
 );
 }, containerRef);

 return () => ctx.revert();
 }, []);

 return (
 <section ref={containerRef} className="pt-32 pb-16 bg-[var(--color-warm-ivory)]">
 <div className="container-master mx-auto px-4 md:px-0">
 <div className="hero-element flex flex-wrap items-center gap-2 text-[var(--color-deep-forest)]/70 font-bold text-xs tracking-widest uppercase mb-8">
 <Link href="/" className="hover:text-[var(--color-muted-sage)] transition-colors">Home</Link>
 <span className="opacity-50">/</span>
 <Link href="/blog" className="hover:text-[var(--color-muted-sage)] transition-colors">Blog</Link>
 <span className="opacity-50">/</span>
 <span className="text-[var(--color-deep-forest)]/40 truncate max-w-[200px] md:max-w-[300px]">{title}</span>
 </div>
 
 <div className="max-w-4xl mb-12">
 <div className="hero-element inline-block bg-[var(--color-muted-sage)] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
 {category}
 </div>
 
 <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-deep-forest)] leading-[1.1] mb-8">
 {title}
 </h1>
 
 <div className="hero-element flex flex-wrap items-center gap-6 text-sm font-medium text-[var(--color-deep-forest)]/60">
 <span className="flex items-center gap-2"><User className="size-4" /> {author}</span>
 <span className="flex items-center gap-2"><Calendar className="size-4" /> {date}</span>
 <span className="flex items-center gap-2"><Clock className="size-4" /> {readTime}</span>
 </div>
 </div>
 
 <div className="hero-image w-full aspect-video md:aspect-[21/9] rounded-lg overflow-hidden">
 <img src={image} alt={title} className="w-full h-full object-cover" />
 </div>
 </div>
 </section>
 );
}
