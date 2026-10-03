"use client";

import { useEffect, useRef, useState } from"react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2 } from"lucide-react";

if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

export function QuoteForm() {
 const containerRef = useRef<HTMLDivElement>(null);
 const [isSubmitted, setIsSubmitted] = useState(false);

 useEffect(() => {
 if (!containerRef.current) return;

 const ctx = gsap.context(() => {
 gsap.fromTo(
".form-element",
 { y: 30, opacity: 0 },
 {
 y: 0,
 opacity: 1,
 duration: 0.8,
 stagger: 0.1,
 ease:"power3.out",
 scrollTrigger: {
 trigger: containerRef.current,
 start:"top 80%",
 },
 }
 );
 }, containerRef);

 return () => ctx.revert();
 }, []);

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 // Simulate submission
 setTimeout(() => {
 setIsSubmitted(true);
 }, 800);
 };

 return (
 <section ref={containerRef} className="py-24 bg-[var(--color-warm-ivory)]">
 <div className="container-master mx-auto px-4 md:px-0 max-w-4xl">
 
 {isSubmitted ? (
 <div className="bg-white p-12 rounded-lg border border-[var(--color-deep-forest)]/10 text-center form-element">
 <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--color-muted-copper)]/10 rounded-full mb-6">
 <CheckCircle2 className="size-10 text-[var(--color-muted-copper)]" />
 </div>
 <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-deep-forest)] mb-4">Quote Request Received!</h2>
 <p className="text-[var(--color-deep-forest)]/70 text-lg mb-8 max-w-lg mx-auto">
 Thank you for reaching out. One of our architectural film specialists will review your details and contact you within 24 hours.
 </p>
 <button 
 onClick={() => setIsSubmitted(false)}
 className="inline-flex items-center justify-center h-14 px-8 bg-[var(--color-deep-forest)] text-[var(--color-warm-ivory)] text-[11px] font-bold uppercase tracking-[0.15em] rounded-full hover:bg-[var(--color-muted-copper)] transition-colors"
 >
 Submit Another Request
 </button>
 </div>
 ) : (
 <div className="bg-white p-8 md:p-12 rounded-lg border border-[var(--color-deep-forest)]/10 form-element relative overflow-hidden">
 <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-muted-copper)]/10 rounded-bl-[100px] z-0" />
 
 <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
 
 {/* Contact Info */}
 <div>
 <h3 className="text-xl font-bold text-[var(--color-deep-forest)] mb-6 border-b border-[var(--color-deep-forest)]/10 pb-4">1. Contact Information</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="space-y-2">
 <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-deep-forest)]/70">First Name</label>
 <input required type="text" className="w-full h-12 bg-[var(--color-warm-ivory)] border border-[var(--color-deep-forest)]/10 rounded-lg px-4 text-[var(--color-deep-forest)] focus:outline-none focus:border-[var(--color-muted-copper)] focus:ring-1 focus:ring-[var(--color-muted-copper)] transition-all" />
 </div>
 <div className="space-y-2">
 <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-deep-forest)]/70">Last Name</label>
 <input required type="text" className="w-full h-12 bg-[var(--color-warm-ivory)] border border-[var(--color-deep-forest)]/10 rounded-lg px-4 text-[var(--color-deep-forest)] focus:outline-none focus:border-[var(--color-muted-copper)] focus:ring-1 focus:ring-[var(--color-muted-copper)] transition-all" />
 </div>
 <div className="space-y-2">
 <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-deep-forest)]/70">Email Address</label>
 <input required type="email" className="w-full h-12 bg-[var(--color-warm-ivory)] border border-[var(--color-deep-forest)]/10 rounded-lg px-4 text-[var(--color-deep-forest)] focus:outline-none focus:border-[var(--color-muted-copper)] focus:ring-1 focus:ring-[var(--color-muted-copper)] transition-all" />
 </div>
 <div className="space-y-2">
 <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-deep-forest)]/70">Phone Number</label>
 <input required type="tel" className="w-full h-12 bg-[var(--color-warm-ivory)] border border-[var(--color-deep-forest)]/10 rounded-lg px-4 text-[var(--color-deep-forest)] focus:outline-none focus:border-[var(--color-muted-copper)] focus:ring-1 focus:ring-[var(--color-muted-copper)] transition-all" />
 </div>
 <div className="space-y-2 md:col-span-2">
 <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-deep-forest)]/70">Company Name (Optional)</label>
 <input type="text" className="w-full h-12 bg-[var(--color-warm-ivory)] border border-[var(--color-deep-forest)]/10 rounded-lg px-4 text-[var(--color-deep-forest)] focus:outline-none focus:border-[var(--color-muted-copper)] focus:ring-1 focus:ring-[var(--color-muted-copper)] transition-all" />
 </div>
 </div>
 </div>

 {/* Project Details */}
 <div className="pt-6">
 <h3 className="text-xl font-bold text-[var(--color-deep-forest)] mb-6 border-b border-[var(--color-deep-forest)]/10 pb-4">2. Project Details</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="space-y-2">
 <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-deep-forest)]/70">Building Type</label>
 <select className="w-full h-12 bg-[var(--color-warm-ivory)] border border-[var(--color-deep-forest)]/10 rounded-lg px-4 text-[var(--color-deep-forest)] focus:outline-none focus:border-[var(--color-muted-copper)] focus:ring-1 focus:ring-[var(--color-muted-copper)] transition-all appearance-none">
 <option>Commercial Office</option>
 <option>Retail Space</option>
 <option>Healthcare Facility</option>
 <option>Educational Institution</option>
 <option>Residential</option>
 <option>Other</option>
 </select>
 </div>
 <div className="space-y-2">
 <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-deep-forest)]/70">Primary Goal</label>
 <select className="w-full h-12 bg-[var(--color-warm-ivory)] border border-[var(--color-deep-forest)]/10 rounded-lg px-4 text-[var(--color-deep-forest)] focus:outline-none focus:border-[var(--color-muted-copper)] focus:ring-1 focus:ring-[var(--color-muted-copper)] transition-all appearance-none">
 <option>Heat & Energy Reduction</option>
 <option>Glare Control</option>
 <option>Safety & Security</option>
 <option>Privacy & Aesthetics</option>
 <option>Not Sure Yet</option>
 </select>
 </div>
 <div className="space-y-2 md:col-span-2">
 <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-deep-forest)]/70">Approximate Window Area (Sq Ft)</label>
 <input type="text" placeholder="e.g. 5,000 sq ft" className="w-full h-12 bg-[var(--color-warm-ivory)] border border-[var(--color-deep-forest)]/10 rounded-lg px-4 text-[var(--color-deep-forest)] focus:outline-none focus:border-[var(--color-muted-copper)] focus:ring-1 focus:ring-[var(--color-muted-copper)] transition-all" />
 </div>
 <div className="space-y-2 md:col-span-2">
 <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-deep-forest)]/70">Additional Information</label>
 <textarea rows={4} placeholder="Tell us more about your project challenges or requirements..." className="w-full bg-[var(--color-warm-ivory)] border border-[var(--color-deep-forest)]/10 rounded-lg p-4 text-[var(--color-deep-forest)] focus:outline-none focus:border-[var(--color-muted-copper)] focus:ring-1 focus:ring-[var(--color-muted-copper)] transition-all resize-none"></textarea>
 </div>
 </div>
 </div>

 <div className="pt-6">
 <button type="submit" className="w-full flex items-center justify-center gap-3 h-14 bg-[var(--color-deep-forest)] text-[var(--color-warm-ivory)] text-[11px] font-bold uppercase tracking-[0.15em] rounded-full hover:bg-[var(--color-muted-copper)] transition-colors group">
 Submit Quote Request <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
 </button>
 </div>

 </form>
 </div>
 )}
 </div>
 </section>
 );
}
