"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";
import { ArrowRight, Calendar, User } from"lucide-react";
import Link from"next/link";

if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

const posts = [
 {
 id: 1,
 title:"The Future of Architectural Window Films in Commercial Real Estate",
 excerpt:"Discover how advanced solar control films are helping major corporations hit their aggressive LEED certification targets while drastically cutting cooling costs.",
 date:"Oct 12, 2026",
 author:"James Sterling",
 category:"Insights",
 link:"/blog/future-of-architectural-films",
 image:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
 featured: true,
 },
 {
 id: 2,
 title:"Security Films vs. Bullet-Resistant Glass: What You Need to Know",
 excerpt:"A comprehensive breakdown of threat mitigation technologies. We compare the cost, installation time, and ballistic resistance of films versus total glass replacement.",
 date:"Sep 28, 2026",
 author:"Elena Rodriguez",
 category:"Guides",
 link:"/blog/security-films-vs-bullet-resistant-glass",
 image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
 featured: false,
 },
 {
 id: 3,
 title:"Case Study: Reducing HVAC Load by 30% at the Horizon Tower",
 excerpt:"How our proprietary spectrally selective films provided an immediate ROI for a 40-story downtown commercial high-rise in under 3 years.",
 date:"Sep 15, 2026",
 author:"Marcus Chen",
 category:"Case Studies",
 link:"/blog/case-study-horizon-tower",
 image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
 featured: false,
 },
 {
 id: 4,
 title:"Interior Wrapping: The Zero-Demolition Renovation",
 excerpt:"Transform outdated elevators and reception desks overnight. Learn why architectural vinyl wrapping is taking over the interior design industry.",
 date:"Aug 30, 2026",
 author:"Sarah Jenkins",
 category:"Design",
 link:"/blog/interior-wrapping-zero-demolition",
 image:"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
 featured: false,
 },
 {
 id: 5,
 title:"Understanding SHGC and U-Values in Window Films",
 excerpt:"Confused by the technical specifications? This guide breaks down the most important metrics you need to look at when selecting solar control solutions.",
 date:"Aug 14, 2026",
 author:"James Sterling",
 category:"Education",
 link:"/blog/understanding-shgc-and-u-values",
 image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
 featured: false,
 },
 {
 id: 6,
 title:"New Antimicrobial Films for Healthcare Facilities",
 excerpt:"We're excited to announce our newest line of silver-ion infused films designed specifically to inhibit microbial growth on high-touch surfaces.",
 date:"Jul 22, 2026",
 author:"Dr. Alistair Vance",
 category:"Product Updates",
 link:"/blog/new-antimicrobial-films",
 image:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
 featured: false,
 }
];

export function BlogGrid() {
 const sectionRef = useRef<HTMLElement>(null);

 useEffect(() => {
 if (!sectionRef.current) return;

 const ctx = gsap.context(() => {
 gsap.fromTo(
".blog-card",
 { y: 50, opacity: 0 },
 {
 y: 0,
 opacity: 1,
 duration: 0.8,
 stagger: 0.1,
 ease:"power3.out",
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
 
 <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-8">All Posts</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {posts.map((post) => (
 <Link
 href={post.link}
 key={post.id}
 className="blog-card group bg-white rounded-lg overflow-hidden transition-all duration-500 border border-[var(--color-deep-forest)]/5 flex flex-col h-full"
 >
 <div className="h-64 overflow-hidden relative">
 <img
 src={post.image}
 alt={post.title}
 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
 />
 <div className="absolute top-4 left-4 bg-[var(--color-arch-sand)] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest z-10">
 {post.category}
 </div>
 </div>
 
 <div className="p-8 flex flex-col flex-grow">
 <div className="flex items-center gap-4 text-xs font-medium text-[var(--color-deep-forest)]/50 mb-4">
 <span className="flex items-center gap-1.5"><Calendar className="size-3" /> {post.date}</span>
 </div>
 <h4 className="text-xl font-semibold text-[var(--color-deep-forest)] leading-tight mb-4 group-hover:text-[var(--color-arch-sand)] transition-colors duration-300">
 {post.title}
 </h4>
 <p className="text-[var(--color-deep-forest)]/70 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
 {post.excerpt}
 </p>
 <div className="inline-flex items-center gap-2 text-[var(--color-deep-forest)] font-bold tracking-[0.1em] uppercase text-xs mt-auto">
 Read More <ArrowRight className="size-4 text-[var(--color-arch-sand)] transition-transform group-hover:translate-x-2" />
 </div>
 </div>
 </Link>
 ))}
 </div>
 
 </div>
 </section>
 );
}
