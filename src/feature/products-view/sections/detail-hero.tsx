"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";
import Link from"next/link";
import { CheckCircle2, ChevronRight } from"lucide-react";

if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

export interface Breadcrumb {
 label: string;
 href: string;
}

interface DetailHeroProps {
 title: string;
 subtitle: string;
 image: string;
 stats?: { label: string; value: string }[];
 breadcrumbs?: Breadcrumb[];
}

export function ProductDetailHero({ title, subtitle, image, stats = [], breadcrumbs = [] }: DetailHeroProps) {
 const heroRef = useRef<HTMLElement>(null);
 const imageRef = useRef<HTMLImageElement>(null);

 useEffect(() => {
 if (!heroRef.current) return;

 const ctx = gsap.context(() => {
 const tl = gsap.timeline();

 tl.fromTo(
 imageRef.current,
 { scale: 1.15, filter:"brightness(0.4)" },
 { scale: 1, filter:"brightness(0.7)", duration: 2.5, ease:"power3.out" },
 0
 )
 .fromTo(
".pd-hero-breadcrumb",
 { y: 30, opacity: 0 },
 { y: 0, opacity: 1, duration: 1, ease:"power3.out" },
 0.8
 )
 .fromTo(
".pd-hero-title",
 { y: 100, opacity: 0 },
 { y: 0, opacity: 1, duration: 1.2, ease:"power4.out" },
 1
 )
 .fromTo(
".pd-hero-sub",
 { opacity: 0, y: 30 },
 { opacity: 1, y: 0, duration: 1, ease:"power3.out" },
 1.5
 )
 .fromTo(
".pd-hero-badge",
 { scale: 0.8, opacity: 0 },
 { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease:"back.out(1.5)" },
 1.8
 );



 gsap.to(".pd-hero-content", {
 y: -150,
 opacity: 0,
 ease:"none",
 scrollTrigger: {
 trigger: heroRef.current,
 start:"top top",
 end:"bottom top",
 scrub: true,
 },
 });

 }, heroRef);

 return () => ctx.revert();
 }, [title]);

 return (
 <section
 ref={heroRef}
 className="relative w-full py-32 min-h-[500px] md:py-0 md:h-[90vh] md:min-h-[700px] overflow-hidden bg-[var(--color-deep-forest)] flex items-center"
 >
 <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
 <div ref={imageRef} className="w-full h-full bg-cover bg-center origin-center" style={{ backgroundImage: `url('${image}')` }} />
 <div className="absolute inset-0 bg-[var(--color-deep-forest)]/60" />
 </div>

 <div className="container-master relative z-10 w-full px-4 pd-hero-content mt-20">
 <div className="max-w-4xl">
 
 {breadcrumbs.length > 0 && (
 <nav className="pd-hero-breadcrumb flex items-center gap-2 mb-8 text-[var(--color-warm-ivory)]/70 text-sm font-bold tracking-widest uppercase">
 {breadcrumbs.map((bc, idx) => (
 <div key={idx} className="flex items-center gap-2">
 <Link href={bc.href} className="hover:text-[var(--color-arch-sand)] transition-colors">
 {bc.label}
 </Link>
 {idx < breadcrumbs.length - 1 && (
 <ChevronRight className="size-4" />
 )}
 </div>
 ))}
 </nav>
 )}

 <div className="overflow-hidden pb-2 mb-4">
 <h1 className="pd-hero-title text-[40px] md:text-[60px] lg:text-[70px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-warm-ivory)] leading-[1]">
 {title}
 </h1>
 </div>

 <p className="pd-hero-sub text-base md:text-lg text-white/90 leading-relaxed mb-12 font-medium max-w-2xl">
 {subtitle}
 </p>


 
 </div>


 </div>
 </section>
 );
}
