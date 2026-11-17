"use client"; // TS Fix Synced

import { useState, useEffect, useRef } from"react";
import Link from"next/link";
import { ArrowRight } from"lucide-react";
import gsap from"gsap";
import { ScrollTrigger } from"gsap/ScrollTrigger";

if (typeof window !=="undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

const solutions = [
  {
    title: "SOLAR HEAT CONTROL",
    slug: "solar-and-heat-control",
    desc: "Reject up to 82% of solar heat and eliminate harsh glare while preserving crystal-clear natural daylight.",
    image: "/images/solutions/sol_solar.jpg",
  },
  {
    title: "SOLAR SAFETY FILM",
    slug: "safety-and-security",
    desc: "Heavy-duty anti-shatter film engineered to reinforce glass, resist forced entry, and hold hazardous shards together on impact.",
    image: "/images/solutions/sol_safety.jpg",
  },
  {
    title: "PRIVACY FILMS",
    slug: "privacy",
    desc: "Provide daytime one-way privacy and visual confidentiality without blocking external views or natural light.",
    image: "/images/solutions/sol_privacy.jpg",
  },
  {
    title: "DECORATIVE FILMS",
    slug: "decorative",
    desc: "Elevate interior glass partitions and facades with custom frosted, patterned, and embossed architectural films.",
    image: "/images/solutions/sol_decorative.jpg",
  },
  {
    title: "HEALTH & HYGIENE",
    slug: "health-and-hygiene",
    desc: "Antimicrobial surface protection films designed for high-touch public, commercial, and healthcare environments.",
    image: "/images/solutions/sol_health.jpg",
  },
  {
    title: "DECORATIVE WRAPS",
    slug: "interior-enhancement",
    desc: "Premium architectural vinyl wraps for resurfacing walls, reception desks, doors, and interior elements with luxury textures.",
    image: "/sub-solutions/interior-wrapping.png",
  }
];

export default function Solutions() {
 const [activeIndex, setActiveIndex] = useState(0);
 const listRefs = useRef<(HTMLAnchorElement | null)[]>([]);

 useEffect(() => {
 // Enable ScrollSpy behavior
 const ctx = gsap.context(() => {
 listRefs.current.forEach((el, i) => {
 if (!el) return;
 
 ScrollTrigger.create({
 trigger: el,
 start:"top center", // Triggers when the top of the item hits the vertical center of the screen
 end:"bottom center",
 onEnter: () => setActiveIndex(i),
 onEnterBack: () => setActiveIndex(i),
 });
 });
 });

 return () => ctx.revert();
 }, []);

 return (
 <section className="w-full bg-[var(--color-deep-forest)] text-[var(--color-warm-ivory)] font-sans py-24 md:py-32 relative">
 <div className="container-master">
 
 <div className="mb-14 md:mb-20">
 <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[var(--color-arch-sand)] uppercase mb-3">
 Engineered Glass &amp; Surface Technology
 </p>
 <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.12em] leading-tight max-w-3xl uppercase">
 PERFORMANCE FILM<br/>SOLUTIONS.
 </h2>
 <p className="mt-4 max-w-2xl text-sm md:text-base text-[var(--color-warm-ivory)]/75 leading-relaxed">
 From extreme solar heat rejection to certified anti-shatter glass protection, discover precision-engineered Saint-Gobain Solar Gard films and architectural wraps tailored for UAE residential, commercial, and automotive projects.
 </p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
 
 {/* Mobile Image (Visible only on small screens) */}
 <div className="block lg:hidden w-full h-[40vh] rounded-lg overflow-hidden mb-8 relative bg-[var(--color-deep-forest)]">
 <img 
 src={solutions[activeIndex].image} 
 alt={solutions[activeIndex].title} 
 className="absolute inset-0 w-full"
 style={{ height: '100%', objectFit: 'cover', display: 'block' }}
 />
 <div className="absolute inset-0 bg-black/20" />
 </div>

 {/* Left: Sticky Image Gallery (Desktop) */}
 <div className="hidden lg:block lg:col-span-6 relative">
 <div className="sticky top-32 w-full h-[70vh] rounded-lg overflow-hidden">
 {solutions.map((sol, i) => (
 <div 
 key={i}
 className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
 style={{ 
 opacity: activeIndex === i ? 1 : 0,
 zIndex: activeIndex === i ? 10 : 0 
 }}
 >
 <img 
 src={sol.image} 
 alt={sol.title} 
 className="absolute inset-0 w-full"
 style={{ height: '100%', objectFit: 'cover', display: 'block' }} 
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
 </div>
 ))}
 </div>
 </div>

 {/* Right: Scrollable Interactive List */}
 <div className="lg:col-span-6 flex flex-col justify-start">
 <div className="flex flex-col w-full border-t border-[var(--color-warm-ivory)]/10">
 {solutions.map((sol, i) => (
 <Link
 href={`/solutions/${sol.slug}`}
 key={i}
 ref={(el) => { listRefs.current[i] = el; }}
 onMouseEnter={() => setActiveIndex(i)}
 className={`group py-8 md:py-10 border-b border-[var(--color-warm-ivory)]/10 cursor-pointer transition-all duration-500 flex flex-col items-start ${
 activeIndex === i ?"opacity-100 pl-4 md:pl-8" :"opacity-40 hover:opacity-70"
 }`}
 >
 <h3 className="text-[20px] md:text-[28px] lg:text-[32px] font-semibold tracking-widest leading-snug mb-3 transition-transform duration-500">
 {sol.title}
 </h3>
 
 {/* Expandable Description */}
 <div 
 className={`grid transition-all duration-500 ease-in-out overflow-hidden w-full ${
 activeIndex === i ?"grid-rows-[1fr] opacity-100" :"grid-rows-[0fr] opacity-0"
 }`}
 >
 <div className="min-h-0">
 <p className="text-[14px] md:text-[16px] text-[var(--color-warm-ivory)]/70 leading-relaxed max-w-[400px]">
 {sol.desc}
 </p>
 
 <span
 className="inline-flex items-center gap-2 mt-6 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] group-hover:text-white transition-colors"
 >
 Explore Solution <ArrowRight className="size-4" />
 </span>
 </div>
 </div>
 </Link>
 ))}
 </div>

 <div className="mt-16 flex flex-wrap items-center gap-4">
 <Link
 href="/solutions"
 className="group inline-flex items-center justify-center gap-3 px-8 h-[56px] bg-[var(--color-warm-ivory)] text-[var(--color-deep-forest)] font-button font-bold tracking-[0.12em] text-[13px] uppercase rounded-full transition-transform hover:scale-105"
 >
 View All Solutions
 <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
 </Link>

 </div>
 
 </div>
 </div>

 </div>
 </section>
 );
}
