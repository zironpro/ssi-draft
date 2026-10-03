"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";
if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

export function IndustriesHero() {
 const heroRef = useRef<HTMLElement>(null);
 const imageRef = useRef<HTMLImageElement>(null);

 useEffect(() => {
 if (!heroRef.current) return;

 const ctx = gsap.context(() => {
 const tl = gsap.timeline();

 tl.fromTo(
 imageRef.current,
 { scale: 1.15, filter:"brightness(0.5)" },
 { scale: 1, filter:"brightness(1)", duration: 2.5, ease:"power3.out" },
 0
 )
 .fromTo(
".ind-hero-line",
 { y: 100, opacity: 0 },
 { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease:"power4.out" },
 1
 )
 .fromTo(
".ind-hero-sub",
 { opacity: 0, y: 30 },
 { opacity: 1, y: 0, duration: 1, ease:"power3.out" },
 1.5
 );

 gsap.to(imageRef.current, {
 scale: 1.1,
 y: 0, /* removed parallax gap */
 ease:"none",
 scrollTrigger: {
 trigger: heroRef.current,
 start:"top top",
 end:"bottom top",
 scrub: true,
 },
 });

 gsap.to(".ind-hero-content", {
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
 className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-[var(--color-deep-forest)] flex items-center justify-center pt-24 lg:pt-32"
 >
 {/* Background Image */}
 <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
 <div ref={imageRef} className="w-full h-full bg-cover bg-center origin-center" style={{ backgroundImage: `url('/hero/industries-hero.jpg')` }} />
 <div className="absolute inset-0 bg-[var(--color-deep-forest)]/60" />
 </div>

 {/* Text Content */}
 <div className="container-master relative z-10 w-full px-4 text-center ind-hero-content mt-0">
 <h1 className="text-[40px] md:text-[60px] lg:text-[70px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-warm-ivory)] leading-[1] mb-6 flex flex-col items-center">
 <div className="overflow-hidden pb-2"><div className="ind-hero-line">INDUSTRIES</div></div>
 <div className="overflow-hidden pb-2"><div className="ind-hero-line">WE SERVE.</div></div>
 </h1>

 <p className="ind-hero-sub text-base md:text-lg text-[var(--color-warm-ivory)]/80 leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
 Delivering specialized window film and glass solutions tailored to the unique demands of diverse sectors.
 </p>

 
 </div>
 </section>
 );
}
