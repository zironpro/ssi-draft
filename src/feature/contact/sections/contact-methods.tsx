"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";

if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

export function ContactMethods() {
 const formRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
 if (!formRef.current) return;

 const ctx = gsap.context(() => {
 gsap.fromTo(
 formRef.current,
 { y: 50, opacity: 0 },
 {
 y: 0,
 opacity: 1,
 duration: 1,
 ease:"power3.out",
 scrollTrigger: {
 trigger: formRef.current,
 start:"top 80%",
 },
 }
 );
 }, formRef);

 return () => ctx.revert();
 }, []);

 return (
 <section className="py-24 md:py-32 bg-[var(--color-warm-ivory)]">
 <div className="container-master mx-auto px-4 md:px-0">
 <div className="max-w-4xl mx-auto">
 
 <div className="text-center mb-16">
 <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">How can we help?</h2>
 <h3 className="text-3xl md:text-5xl font-semibold text-[var(--color-deep-forest)] tracking-tight">
 Send us a message.
 </h3>
 </div>

 <div ref={formRef} className="bg-white p-8 md:p-12 lg:p-16 rounded-lg border border-[var(--color-deep-forest)]/5 relative overflow-hidden">
 <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-arch-sand)]" />
 
 <form className="space-y-6 md:space-y-8">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
 <div>
 <label className="block text-sm font-bold text-[var(--color-deep-forest)] mb-3 uppercase tracking-wider">Full Name *</label>
 <input type="text" className="w-full px-6 py-4 bg-[var(--color-soft-glass)] rounded-lg border border-transparent focus:border-[var(--color-arch-sand)] focus:ring-2 focus:ring-[var(--color-arch-sand)]/20 outline-none transition-all text-[var(--color-deep-forest)]" placeholder="John Doe" required />
 </div>
 <div>
 <label className="block text-sm font-bold text-[var(--color-deep-forest)] mb-3 uppercase tracking-wider">Email Address *</label>
 <input type="email" className="w-full px-6 py-4 bg-[var(--color-soft-glass)] rounded-lg border border-transparent focus:border-[var(--color-arch-sand)] focus:ring-2 focus:ring-[var(--color-arch-sand)]/20 outline-none transition-all text-[var(--color-deep-forest)]" placeholder="john@company.com" required />
 </div>
 <div className="md:col-span-2">
 <label className="block text-sm font-bold text-[var(--color-deep-forest)] mb-3 uppercase tracking-wider">Phone Number</label>
 <input type="tel" className="w-full px-6 py-4 bg-[var(--color-soft-glass)] rounded-lg border border-transparent focus:border-[var(--color-arch-sand)] focus:ring-2 focus:ring-[var(--color-arch-sand)]/20 outline-none transition-all text-[var(--color-deep-forest)]" placeholder="+971 50 123 4567" />
 </div>
 
 <div className="md:col-span-2">
 <label className="block text-sm font-bold text-[var(--color-deep-forest)] mb-3 uppercase tracking-wider">Your Message *</label>
 <textarea rows={5} className="w-full px-6 py-4 bg-[var(--color-soft-glass)] rounded-lg border border-transparent focus:border-[var(--color-arch-sand)] focus:ring-2 focus:ring-[var(--color-arch-sand)]/20 outline-none transition-all text-[var(--color-deep-forest)]" placeholder="How can we help you?" required />
 </div>
 </div>

 <div className="pt-6 text-center">
 <button type="button" className="w-full md:w-auto px-12 py-5 bg-[var(--color-deep-forest)] text-[var(--color-warm-ivory)] font-semibold tracking-[0.15em] text-[14px] uppercase rounded-lg transition-transform hover:scale-105 hover:bg-[var(--color-muted-copper)] -[var(--color-deep-forest)]/10">
 Send Message
 </button>
 </div>
 </form>
 </div>

 </div>
 </div>
 </section>
 );
}
