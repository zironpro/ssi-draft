"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative h-[80svh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-[var(--color-deep-forest)]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541882894541-11d4e650ccf4?q=80&w=2070&auto=format&fit=crop')", // Close-up glass facade
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 container-master text-center text-white">
        <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter mb-6 leading-none">
          YOUR GLASS.<br />
          <span className="text-[var(--accent)]">ENGINEERED BETTER.</span>
        </h2>
        
        <p className="text-xl md:text-2xl font-light text-white/80 mb-12">
          Find the right film for your space.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/quote"
            className="group flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-[var(--accent)] text-white font-bold tracking-widest uppercase transition-all hover:bg-white hover:text-[var(--color-deep-forest)] hover:scale-105"
          >
            Get a Quote
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/solutions"
            className="w-full sm:w-auto px-10 py-5 border-2 border-white/30 text-white font-bold tracking-widest uppercase transition-all hover:border-white hover:bg-white/10"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
