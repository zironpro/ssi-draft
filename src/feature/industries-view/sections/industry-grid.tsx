"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Home, ShoppingBag, HeartPulse, GraduationCap, Plane } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const industries = [
  {
    id: 1,
    title: "Commercial Offices",
    slug: "commercial-offices",
    description: "Enhance tenant comfort, improve energy efficiency, and elevate the aesthetic appeal of corporate environments.",
    icon: Building2,
    image: "/industries/commercial-offices.png",
  },
  {
    id: 2,
    title: "Residential",
    slug: "residential",
    description: "Protect your home from UV rays and increase privacy without sacrificing natural light.",
    icon: Home,
    image: "/industries/residential.png",
  },
  {
    id: 3,
    title: "Retail & Storefronts",
    slug: "retail-and-storefronts",
    description: "Secure merchandise and create inviting displays with clear, protective films.",
    icon: ShoppingBag,
    image: "/industries/retail-and-storefronts.png",
  },
  {
    id: 4,
    title: "Healthcare",
    slug: "healthcare",
    description: "Maintain hygienic, private spaces using antimicrobial and decorative solutions.",
    icon: HeartPulse,
    image: "/industries/healthcare.png",
  },
  {
    id: 5,
    title: "Education",
    slug: "education",
    description: "Upgrade campus security and create distraction-free learning environments.",
    icon: GraduationCap,
    image: "/industries/education.png",
  },
  {
    id: 6,
    title: "Hospitality & Travel",
    slug: "hospitality-and-travel",
    description: "Offer guests premium comfort and safety across hotels and transit hubs.",
    icon: Plane,
    image: "/industries/hospitality-and-travel.png",
  }
];

export function IndustryGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".industry-card",
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
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-2 md:mb-4">Our Focus</h2>
          <h3 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-deep-forest)] leading-tight mb-3 md:mb-4">
            Built for Every Sector
          </h3>
          <p className="text-base md:text-lg text-[var(--color-deep-forest)]/70 max-w-3xl leading-relaxed">
            We provide tailored window film and interior enhancement solutions designed to meet the unique challenges of specific commercial and residential environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.id}
                href={`/industries/${industry.slug}`}
                className="industry-card flex flex-col md:flex-row items-stretch bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <div className="w-full md:w-2/5 shrink-0 bg-[var(--color-arch-sand)]/5 flex flex-col overflow-hidden md:min-h-[220px] min-h-[240px]">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full flex-1 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6 md:p-8 flex flex-col justify-center w-full bg-white z-10 relative">
                  <div className="mb-4 text-[var(--color-arch-sand)] bg-[var(--color-arch-sand)]/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Icon className="size-6 text-[var(--color-deep-forest)]" />
                  </div>
                  <h4 className="text-xl md:text-[22px] font-bold text-[var(--color-deep-forest)] mb-3 leading-snug">
                    {industry.title}
                  </h4>
                  <p className="text-sm md:text-base text-[var(--color-deep-forest)]/70 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
