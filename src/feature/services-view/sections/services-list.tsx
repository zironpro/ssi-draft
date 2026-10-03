"use client";

import { useEffect, useRef } from"react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";
import { PenTool, Scissors, Wrench, Search, MessageSquare, Sparkles } from"lucide-react";

if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

const services = [
 {
 id: 1,
 title:"Film Installation",
 description:"Expert application of premium window films, ensuring bubble-free, long-lasting performance on any glass surface. We utilize industry-leading techniques to guarantee a flawless finish that stands the test of time.",
 icon: Scissors,
 image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
 },
 {
 id: 2,
 title:"Glass & Aluminium Installation",
 description:"Comprehensive installation services for architectural glass and sturdy aluminum framing systems. Whether it's a storefront or a large-scale commercial facade, we build structures that endure.",
 icon: PenTool,
 image:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
 },
 {
 id: 3,
 title:"Maintenance",
 description:"Ongoing care and specialized cleaning to preserve the clarity and efficacy of your installations. Our maintenance programs are designed to extend the life of your investments.",
 icon: Wrench,
 image:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
 },
 {
 id: 4,
 title:"Site Assessment",
 description:"Detailed evaluations of your property to identify the optimal solutions for light control, privacy, and security. We analyze every angle before proposing a tailored plan.",
 icon: Search,
 image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
 },
 {
 id: 5,
 title:"Consultation",
 description:"Work directly with our specialists to engineer custom approaches that fit your budget and design goals. We provide expert advice at every step of your project's lifecycle.",
 icon: MessageSquare,
 image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
 },
 {
 id: 6,
 title:"Custom Film Solutions",
 description:"Bespoke designs, branding, and specialized cutouts to make your glass surfaces uniquely yours. From corporate logos to intricate privacy bands, we cut and install with precision.",
 icon: Sparkles,
 image:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop",
 }
];

export function ServicesList() {
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
 if (!containerRef.current) return;

 const ctx = gsap.context(() => {
 const rows = gsap.utils.toArray<HTMLElement>(".service-row");

 rows.forEach((row) => {
 gsap.fromTo(
 row,
 { opacity: 0, y: 100 },
 {
 opacity: 1,
 y: 0,
 duration: 1,
 ease:"power3.out",
 scrollTrigger: {
 trigger: row,
 start:"top 80%",
 },
 }
 );
 });
 }, containerRef);

 return () => ctx.revert();
 }, []);

 return (
 <section ref={containerRef} className="py-24 md:py-32 bg-[var(--color-warm-ivory)]">
 <div className="container-master mx-auto px-4 md:px-0">
 
 <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
 <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">Our Services</h2>
 <h3 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-deep-forest)] leading-tight">
 End-to-End Excellence
 </h3>
 </div>

 <div className="flex flex-col gap-24 md:gap-40">
 {services.map((service, index) => {
 const Icon = service.icon;
 const isEven = index % 2 === 0;

 return (
 <div 
 key={service.id} 
 className={`service-row flex flex-col gap-10 md:gap-20 items-center ${
 isEven ?"md:flex-row" :"md:flex-row-reverse"
 }`}
 >
 {/* Image Side */}
 <div className="w-full md:w-1/2">
 <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
 <img
 src={service.image}
 alt={service.title}
 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
 />
 {/* Decorative Overlay */}
 <div className="absolute inset-0 border-[1px] border-white/20 rounded-lg z-10 pointer-events-none" />
 </div>
 </div>

 {/* Text Side */}
 <div className="w-full md:w-1/2 flex flex-col">
 <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-deep-forest)]/5 text-[var(--color-deep-forest)]">
 <Icon className="size-8" />
 </div>
 
 <h4 className="text-3xl md:text-5xl font-semibold text-[var(--color-deep-forest)] mb-6 leading-[1.1] tracking-tight">
 {service.title}
 </h4>
 
 <div className="w-12 h-1 bg-[var(--color-arch-sand)] mb-8" />
 
 <p className="text-base md:text-lg text-[var(--color-deep-forest)]/70 leading-relaxed">
 {service.description}
 </p>
 </div>
 </div>
 );
 })}
 </div>

 </div>
 </section>
 );
}
