"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";
if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

export function ProductsHero() {
 const heroRef = useRef<HTMLElement>(null);
 const imageRef = useRef<HTMLImageElement>(null);

 useEffect(() => {
 if (!heroRef.current) return;

 const ctx = gsap.context(() => {
 const tl = gsap.timeline();

 // Initial Load Animation
 tl.fromTo(
 imageRef.current,
 { scale: 1.15, filter:"brightness(0.5)" },
 { scale: 1, filter:"brightness(1)", duration: 2.5, ease:"power3.out" },
 0
 )
 .fromTo(
".prod-hero-line",
 { y: 100, opacity: 0 },
 { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease:"power4.out" },
 1
 )
 .fromTo(
".prod-hero-sub",
 { opacity: 0, y: 30 },
 { opacity: 1, y: 0, duration: 1, ease:"power3.out" },
 1.5
 );

 // Scroll Transformation
 gsap.to(imageRef.current, {
 scale: 1.1,
 y: 100,
 ease:"none",
 scrollTrigger: {
 trigger: heroRef.current,
 start:"top top",
 end:"bottom top",
 scrub: true,
 },
 });

 gsap.to(".prod-hero-content", {
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
 }, []);

 return (
 <section
 ref={heroRef}
 className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-[var(--color-deep-forest)] flex items-center justify-center"
 >
 {/* Background Image */}
 <div className="absolute inset-0 overflow-hidden z-0">
 <img
 ref={imageRef}
 src="/hero/Minimalist Cream Wave Background.png"
 alt="Premium Architecture Products"
 className="w-full h-full object-cover origin-center"
 />
 {/* Dark overlay for text contrast */}
 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-forest)]/90 via-[var(--color-deep-forest)]/50 to-[var(--color-deep-forest)]/30" />
 </div>

 {/* Text Content */}
 <div className="container-master relative z-10 w-full px-4 text-center prod-hero-content mt-16 md:mt-0">
 <h1 className="text-[40px] md:text-[60px] lg:text-[70px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-warm-ivory)] leading-[1] mb-6 flex flex-col items-center">
 <div className="overflow-hidden pb-2"><div className="prod-hero-line">PREMIUM</div></div>
 <div className="overflow-hidden pb-2"><div className="prod-hero-line">PRODUCTS.</div></div>
 </h1>

 <p className="prod-hero-sub text-base md:text-lg text-[var(--color-warm-ivory)]/80 leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
 Discover our wide range of high-quality architectural glass and films designed to meet your specific needs and exceed your expectations.
 </p>

 
 </div>
 </section>
 );
}
