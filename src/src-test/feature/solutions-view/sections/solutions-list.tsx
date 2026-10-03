"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const solutions = [
  {
    id: 1,
    title: "Solar & Heat Control",
    slug: "solar-and-heat-control",
    features: ["Heat Reduction", "Glare Reduction", "UV Protection"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Safety & Security",
    slug: "safety-and-security",
    features: ["Glass Protection", "Shatter Protection", "Security"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 3,
    title: "Privacy",
    slug: "privacy",
    features: ["Office Privacy", "Residential Privacy", "Commercial Privacy"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Decorative",
    slug: "decorative",
    features: ["Glass Design", "Branding", "Custom Designs"],
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    title: "Health & Hygiene",
    slug: "health-and-hygiene",
    features: ["Antimicrobial"],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    title: "Interior Enhancement",
    slug: "interior-enhancement",
    features: ["Interior Wrapping"],
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1",
  }
];

export function SolutionsList() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".solution-card",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[var(--color-warm-ivory)]">
      <div className="container-master mx-auto px-4 md:px-0">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--color-deep-forest)] tracking-tight leading-tight">
            Comprehensive Solutions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[320px] gap-6">
          {solutions.map((solution) => (
            <Link 
              href={`/solutions/${solution.slug}`}
              key={solution.id} 
              className={`solution-card group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-[var(--color-deep-forest)]/10 cursor-pointer block ${solution.className}`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />
              </div>
              
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h4 className="text-2xl md:text-3xl font-extrabold text-[var(--color-warm-ivory)] mb-4 drop-shadow-md">
                  {solution.title}
                </h4>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[var(--color-warm-ivory)]/90">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-arch-sand)] flex items-center justify-center shadow-sm">
                        <Check className="size-3 text-[var(--color-deep-forest)] font-bold" />
                      </div>
                      <span className="font-semibold text-sm md:text-base drop-shadow-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
