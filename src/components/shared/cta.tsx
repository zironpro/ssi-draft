"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Cta() {
 return (
 <section className="relative overflow-hidden bg-[var(--accent-muted)] section-master-sm text-white font-sans">
 {/* Decorative Wave Background */}
 <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
 <svg className="absolute w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
 <path fill="none" stroke="white" strokeWidth="1" d="M0,160 C320,300 420,0 720,160 C1020,320 1120,50 1440,160" />
 <path fill="none" stroke="white" strokeWidth="0.5" d="M0,190 C320,330 420,30 720,190 C1020,350 1120,80 1440,190" />
 <path fill="none" stroke="white" strokeWidth="0.3" d="M0,220 C320,360 420,60 720,220 C1020,380 1120,110 1440,220" />
 <path fill="none" stroke="white" strokeWidth="0.8" d="M0,130 C320,270 420,-30 720,130 C1020,290 1120,20 1440,130" />
 </svg>
 </div>

 {/* Subtle Radial Gradient to match the image's lighting */}
 <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-muted)] via-transparent to-black/20 z-0 pointer-events-none" />

 {/* Main Content */}
 <div className="container-master relative z-10 w-full flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">
 
 {/* Left Side Content */}
 <motion.div 
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin:"-100px" }}
 transition={{ duration: 0.8 }}
 className="flex flex-col gap-3 w-full lg:w-1/2"
 >
 <p className="text-xs md:text-sm tracking-[0.2em] font-semibold text-white/80 uppercase">
 Let's Get Started
 </p>
 <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] leading-tight text-balance uppercase">
 Transform Your Space Today
 </h2>
 </motion.div>
 
 {/* Right Side Content */}
 <motion.div 
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin:"-100px" }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="flex flex-col gap-6 w-full lg:w-1/2 max-w-lg lg:ml-auto"
 >
 <p className="text-base md:text-lg text-white/90 leading-relaxed text-pretty">
 Talk to our experts and find the perfect window film solution for your home, office or vehicle.
 </p>
 <div className="pt-2">
 <Link
 href="/quote"
 className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-center text-base font-button font-semibold text-[var(--foreground)] hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300"
 >
 Get a Free Quote
 </Link>
 </div>
 </motion.div>

 </div>
 </section>
 );
}
