"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Zap, Layers, Sun } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap: Record<string, any> = {
  Shield,
  Zap,
  Layers,
  Sun
};

interface SpecsProps {
  features: { title: string; desc: string; icon: string }[];
  specs: { label: string; value: string }[];
}

export function SubProductSpecs({ features, specs }: SpecsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bento-anim",
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [features]);

  // Fallbacks in case data is missing
  const feat0 = features[0] || { title: "Premium Feature", desc: "Industry-leading performance.", icon: "Shield" };
  const feat1 = features[1] || { title: "Innovative Design", desc: "Crafted for excellence.", icon: "Zap" };
  const feat2 = features[2] || { title: "Maximum Efficiency", desc: "Boost your productivity.", icon: "Layers" };
  
  const mainSpec = specs[0] || { label: "Performance", value: "Optimal" };
  const secondSpec = specs[1] || { label: "Quality Rating", value: "Premium" };
  const remainingSpecs = specs.length > 2 ? specs.slice(2) : (specs.length > 1 ? specs.slice(1) : specs);

  const Icon0 = iconMap[feat0.icon] || Shield;
  const Icon1 = iconMap[feat1.icon] || Zap;
  const Icon2 = iconMap[feat2.icon] || Layers;

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gray-50/50">
      <div className="container-master mx-auto px-4 md:px-0 max-w-6xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="bento-anim text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-muted-copper)] mb-4">Deep Dive</h2>
          <h3 className="bento-anim text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-deep-forest)] leading-tight">
            Technical Specifications
          </h3>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-auto grid-flow-row-dense">
          
          {/* Box 1: Left Tall (Feature 0) */}
          <div className="bento-anim lg:col-span-1 lg:row-span-2 bg-white rounded-[2rem] p-8 md:p-10 border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-muted-copper)] flex items-center justify-center mb-8 shadow-sm transition-transform group-hover:scale-110">
                <Icon0 className="size-7 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[var(--color-deep-forest)] mb-4">{feat0.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {feat0.desc}
              </p>
            </div>
            {/* Decorative element for bottom of tall card */}
            <div className="mt-12 flex items-center gap-3">
               <div className="px-4 py-2 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500"></div> Active
               </div>
            </div>
          </div>

          {/* Box 2: Middle Top (Feature 1) */}
          <div className="bento-anim lg:col-span-1 lg:row-span-1 bg-white rounded-[2rem] p-8 border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-center relative overflow-hidden group">
            <div className="flex items-center justify-between mb-2 relative z-10">
              <h4 className="text-lg font-bold text-[var(--color-deep-forest)]">{feat1.title}</h4>
              <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full bg-[var(--color-soft-glass)] border-2 border-white flex items-center justify-center"><Icon1 className="size-4 text-[var(--color-deep-forest)]"/></div>
                 <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold">+</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm relative z-10">{feat1.desc}</p>
          </div>

          {/* Box 3: Right Top (Specs Highlight 1) */}
          <div className="bento-anim lg:col-span-1 lg:row-span-1 bg-white rounded-[2rem] p-8 border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-center group">
            <h4 className="text-lg font-semibold text-[var(--color-deep-forest)] mb-1">{mainSpec.label}</h4>
            <p className="text-gray-400 text-xs mb-4 uppercase tracking-widest">Performance Analytics</p>
            <div className="flex items-end justify-between">
               <span className="text-5xl md:text-6xl font-bold tracking-tighter text-black leading-none group-hover:text-[var(--color-muted-copper)] transition-colors">{mainSpec.value}</span>
            </div>
          </div>

          {/* Box 4: Middle Bottom (Feature 2) */}
          <div className="bento-anim lg:col-span-1 lg:row-span-1 bg-white rounded-[2rem] p-8 border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between items-center text-center group relative overflow-hidden">
            <div className="w-full relative z-10">
              <h4 className="text-5xl font-bold tracking-tighter text-black mb-4 group-hover:scale-105 transition-transform duration-500">100%</h4>
              <h5 className="text-lg font-bold text-[var(--color-deep-forest)] mb-2">{feat2.title}</h5>
              <p className="text-gray-500 text-xs leading-relaxed">
                {feat2.desc}
              </p>
            </div>
            <Icon2 className="absolute -bottom-4 -right-4 size-24 text-[var(--color-arch-sand)] opacity-20 group-hover:opacity-40 transition-opacity z-0" />
          </div>

          {/* Box 5: Right Bottom (Specs Highlight 2) - NEW CARD TO FILL SPACE */}
          <div className="bento-anim lg:col-span-1 lg:row-span-1 bg-white rounded-[2rem] p-8 border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-center group">
            <h4 className="text-lg font-semibold text-[var(--color-deep-forest)] mb-1">{secondSpec.label}</h4>
            <p className="text-gray-400 text-xs mb-4 uppercase tracking-widest">Technical Rating</p>
            <div className="flex items-end justify-between">
               <span className="text-4xl md:text-5xl font-bold tracking-tighter text-black leading-none group-hover:text-[var(--color-muted-copper)] transition-colors">{secondSpec.value}</span>
            </div>
          </div>

          {/* Box 6: Bottom Wide (Remaining Specs) */}
          <div className="bento-anim lg:col-span-3 bg-white rounded-[2rem] p-8 border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-4 min-w-[200px]">
               <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                 <Shield className="size-5 text-[var(--color-muted-copper)]" />
               </div>
               <div>
                 <h4 className="font-bold text-[var(--color-deep-forest)]">Detailed Specs</h4>
                 <p className="text-xs text-gray-500">Comprehensive performance data</p>
               </div>
            </div>
            
            <div className="flex-1 flex flex-wrap gap-4 items-center justify-end">
              {remainingSpecs.map((spec, index) => (
                <div key={index} className="px-4 py-2 bg-gray-50 rounded-full border border-gray-100 flex items-center gap-2 whitespace-nowrap hover:border-[var(--color-muted-copper)] transition-colors">
                  <span className="font-semibold text-xs text-[var(--color-deep-forest)]">{spec.label}:</span>
                  <span className="text-xs text-gray-600 font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
