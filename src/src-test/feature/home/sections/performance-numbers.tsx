"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: 15, suffix: "+", label: "Years Experience", desc: "Trusted by thousands." },
  { value: 82, suffix: "%", label: "Heat Rejection", desc: "Maximum solar control." },
  { value: 99, suffix: "%", label: "UV Protection", desc: "Blocks harmful rays." },
  { value: 10, suffix: "", label: "Year Warranty", desc: "Guaranteed performance." },
];

export default function PerformanceNumbers() {
  const sectionRef = useRef<HTMLElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in the cards stagger
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Number counter animation
      countersRef.current.forEach((counter, i) => {
        if (!counter) return;
        const targetValue = stats[i].value;
        
        gsap.fromTo(counter, 
          { innerHTML: 0 }, 
          {
            innerHTML: targetValue,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
            snap: { innerHTML: 1 },
            onUpdate: function() {
              counter.innerHTML = Math.round(Number(this.targets()[0].innerHTML)).toString();
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-32 bg-[var(--color-deep-forest)] overflow-hidden">
      
      {/* Parallax Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Abstract Glass Building" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-forest)] via-transparent to-[var(--color-deep-forest)]" />
      </div>

      <div className="container-master relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[50px] font-extrabold tracking-tighter text-[var(--color-warm-ivory)] leading-tight">
            PERFORMANCE YOU CAN FEEL.
          </h2>
        </div>

        {/* 4-Column Glass Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div 
              key={stat.label}
              className="stat-card group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[24px] p-4 md:p-10 flex flex-col items-center text-center overflow-hidden transition-all duration-500 hover:border-white/30 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl"
            >
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 pointer-events-none" />

              <div className="flex items-baseline text-[40px] md:text-[70px] font-black tracking-tighter text-[var(--color-warm-ivory)] leading-none mb-3 md:mb-4 drop-shadow-lg">
                <span ref={(el) => { countersRef.current[i] = el; }}>0</span>
                <span className="text-[var(--color-arch-sand)] ml-1">{stat.suffix}</span>
              </div>
              
              <div className="text-[11px] md:text-[16px] font-bold tracking-[0.1em] uppercase text-[var(--color-warm-ivory)] mb-2">
                {stat.label}
              </div>
              
              <div className="text-[11px] md:text-[14px] text-[var(--color-warm-ivory)]/60">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
