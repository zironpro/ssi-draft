"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Target, Zap, Clock } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reasons = [
  {
    title: "Uncompromising Quality",
    description: "We use only top-tier materials that guarantee durability and unmatched performance.",
    icon: ShieldCheck,
  },
  {
    title: "Precision Engineering",
    description: "Our installations are mathematically planned and flawlessly executed by experts.",
    icon: Target,
  },
  {
    title: "Innovative Solutions",
    description: "Staying ahead of the curve with the latest in solar control and security technology.",
    icon: Zap,
  },
  {
    title: "Timely Execution",
    description: "We respect your schedules, delivering comprehensive projects on time, every time.",
    icon: Clock,
  }
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reason-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[var(--color-warm-ivory)]">
      <div className="container-master mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Left Text */}
          <div className="w-full md:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">
                The SSI Advantage
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[var(--color-deep-forest)] mb-6">
                Why Choose Us?
              </h3>
              <p className="text-[var(--color-deep-forest)]/70 leading-relaxed text-lg">
                We don't just install film; we engineer environments. Our commitment to excellence sets us apart in a crowded industry.
              </p>
            </div>
          </div>

          {/* Right Grid */}
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div key={i} className="reason-card bg-white p-10 rounded-2xl shadow-sm border border-[var(--color-deep-forest)]/5 hover:shadow-xl transition-shadow duration-500">
                  <div className="w-14 h-14 bg-[var(--color-arch-sand)]/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="size-6 text-[var(--color-deep-forest)]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[var(--color-deep-forest)] mb-3">{reason.title}</h4>
                  <p className="text-[var(--color-deep-forest)]/70">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
