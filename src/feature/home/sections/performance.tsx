"use client";

import Image from"next/image";
import { motion } from"framer-motion";

const benefits = [
 {
 title:"Advanced Film Technology",
 icon: (
 <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
 </svg>
 )
 },
 {
 title:"Long-Lasting Durability",
 icon: (
 <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
 </svg>
 )
 },
 {
 title:"Professional Installation",
 icon: (
 <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
 </svg>
 )
 },
 {
 title:"Trusted by Homes & Businesses",
 icon: (
 <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
 </svg>
 )
 }
];

export function Performance() {
 return (
 <section className="relative overflow-hidden flex items-center bg-[var(--color-obsidian)] section-master-lg font-sans">
 {/* Background Image */}
 <div className="absolute inset-0 z-0">
 <Image
 src="/images/img.png"
 alt="Modern Architecture Building"
 fill
 className="object-cover opacity-60"
 />
 {/* Dark overlay gradient to ensure text readability */}
 <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-obsidian)] via-[var(--color-obsidian)]/40 to-transparent md:to-[var(--color-obsidian)]/40" />
 </div>

 {/* Main Content */}
 <div className="container-master relative z-10 w-full flex flex-col md:flex-row justify-between gap-16 md:gap-8 lg:gap-20">
 
 {/* Left Side Content */}
 <div className="flex flex-col gap-8 w-full md:w-1/2 lg:w-5/12 justify-center">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-100px" }}
 transition={{ duration: 0.8 }}
 className="flex flex-col gap-4"
 >
 <p className="text-[10px] md:text-xs tracking-[0.2em] font-semibold text-[var(--accent-muted)] uppercase">
 Built for a Brighter Future
 </p>
 <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] text-white leading-tight text-balance uppercase">
 Performance <br className="hidden lg:block" />
 <span className="text-[var(--accent)]">You Can Trust</span>
 </h2>
 </motion.div>
 
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-100px" }}
 transition={{ duration: 0.8, delay: 0.2 }}
 >
 <p className="text-fluid-base text-gray-300 leading-relaxed text-pretty">
 Our window films are engineered with advanced technology to deliver lasting performance, safety and style — backed by industry expertise and proven results.
 </p>
 </motion.div>

 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-100px" }}
 transition={{ duration: 0.8, delay: 0.4 }}
 className="pt-2"
 >
 <a
 href="#"
 className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-4 text-center text-base font-button font-medium text-white hover:bg-[var(--accent-muted)] transition-all duration-300"
 >
 Learn More
 </a>
 </motion.div>
 </div>

 {/* Right Side Vertical List */}
 <div className="w-full md:w-1/2 lg:w-5/12 flex flex-col justify-center">
 <div className="flex flex-col">
 {benefits.map((benefit, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin:"-100px" }}
 transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
 className="flex items-center gap-6 py-6 border-b border-white/10 group"
 >
 <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-[var(--accent)]/50 transition-colors duration-300">
 {benefit.icon}
 </div>
 <h3 className="text-[14px] md:text-[18px] font-semibold tracking-widest uppercase text-gray-200 group-hover:text-white transition-colors duration-300">
 {benefit.title}
 </h3>
 </motion.div>
 ))}
 </div>
 </div>

 </div>
 </section>
 );
}
