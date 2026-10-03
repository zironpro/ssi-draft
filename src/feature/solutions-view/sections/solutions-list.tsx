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
    image: "/solutions/solar-and-heat-control.png",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Safety & Security",
    slug: "safety-and-security",
    features: ["Glass Protection", "Shatter Protection", "Security"],
    image: "/solutions/safety-and-security.png",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 3,
    title: "Privacy",
    slug: "privacy",
    features: ["Office Privacy", "Residential Privacy", "Commercial Privacy"],
    image: "/solutions/privacy.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Decorative",
    slug: "decorative",
    features: ["Glass Design", "Branding", "Custom Designs"],
    image: "/solutions/decorative.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    title: "Health & Hygiene",
    slug: "health-and-hygiene",
    features: ["Antimicrobial"],
    image: "/solutions/health-and-hygiene.png",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    title: "Interior Enhancement",
    slug: "interior-enhancement",
    features: ["Interior Wrapping"],
    image: "/solutions/interior-enhancement.png",
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
        <div className="mb-12 md:mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-2 md:mb-4">Our Expertise</h2>
          <h3 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-deep-forest)] leading-tight mb-3 md:mb-4">
            Comprehensive Solutions
          </h3>
          <p className="text-base md:text-lg text-[var(--color-deep-forest)]/70 max-w-3xl leading-relaxed">
            Discover our targeted approaches to common glass and window challenges. We offer premium solutions for safety, privacy, and climate control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <Link
              key={solution.id}
              href={`/solutions/${solution.slug}`}
              className="solution-card flex flex-col md:flex-row items-stretch bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="w-full md:w-2/5 shrink-0 bg-[var(--color-arch-sand)]/5 flex flex-col overflow-hidden md:min-h-[220px] min-h-[240px]">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full flex-1 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 md:p-8 flex flex-col justify-center w-full bg-white z-10 relative">
                <h4 className="text-xl md:text-[22px] font-bold text-[var(--color-deep-forest)] mb-4 leading-snug">
                  {solution.title}
                </h4>
                
                <ul className="space-y-3">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[var(--color-deep-forest)]/70">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-arch-sand)]/20 flex items-center justify-center">
                        <Check className="size-3 text-[var(--color-deep-forest)] font-bold" />
                      </div>
                      <span className="font-semibold text-sm drop-">{feature}</span>
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
