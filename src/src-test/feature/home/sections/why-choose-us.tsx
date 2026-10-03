"use client";

import React from "react";

const reasons = [
  {
    title: "Premium Materials",
    description: "We partner exclusively with industry-leading manufacturers to provide high-performance window films that guarantee longevity, clarity, and maximum protection.",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Certified Experts",
    description: "Our installation teams are rigorously trained and certified, ensuring flawless, bubble-free applications even on the most challenging panoramic or high-rise glass.",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.053c.204-.25.43-.528.671-.832M11.42 15.17a6.5 6.5 0 01-9.193-9.192 6.5 6.5 0 019.193 9.192zm0 0l-3.328-3.328" />
      </svg>
    ),
  },
  {
    title: "Zero Disruption",
    description: "We understand the value of your time. Our seamless scheduling and efficient installation process mean your home or business operations continue without interruption.",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Warranty",
    description: "We stand behind our work. Every installation is backed by an extensive 10-year warranty covering both the film materials and the labor.",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full relative overflow-hidden py-16 sm:py-24" style={{ background: "var(--surface-primary)" }}>
      <div className="container-master">
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 lg:auto-rows-fr gap-4 sm:gap-6 lg:min-h-[700px]">
          
          {/* LEFT COLUMN: Box 1 & Box 2 */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:row-span-2">
            {/* Box 1 */}
            <div 
              className="flex-1 rounded-3xl p-8 sm:p-12 flex flex-col justify-center" 
              style={{ background: "var(--surface-slate)", color: "var(--text-on-dark)" }}
            >
              <div className="mb-4 sm:mb-6" style={{ color: "var(--color-glass-silver)" }}>{reasons[0].icon}</div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-3">{reasons[0].title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-on-dark-muted)" }}>{reasons[0].description}</p>
            </div>
            {/* Box 2 */}
            <div 
              className="flex-1 rounded-3xl p-8 sm:p-12 flex flex-col justify-center" 
              style={{ background: "var(--color-arch-white)", color: "var(--color-obsidian)" }}
            >
              <div className="mb-4 sm:mb-6 opacity-70" style={{ color: "var(--color-obsidian)" }}>{reasons[1].icon}</div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-3">{reasons[1].title}</h3>
              <p className="text-sm leading-relaxed opacity-70">{reasons[1].description}</p>
            </div>
          </div>

          {/* CENTER COLUMN: Image */}
          <div className="relative rounded-3xl overflow-hidden h-[400px] sm:h-[500px] lg:h-auto lg:row-span-2">
            <img 
              src="/images/minimalist-office-interior-desig.webp" 
              alt="Premium Interior" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* RIGHT COLUMN TOP: Title */}
          <div 
            className="order-first lg:order-none lg:col-span-2 rounded-3xl p-8 sm:p-12 flex flex-col items-center lg:items-end justify-center text-center lg:text-right" 
            style={{ color: "var(--color-obsidian)" }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-[5rem] font-black uppercase leading-[0.9] tracking-tighter mb-5">
              <span className="block font-light text-3xl sm:text-4xl lg:text-5xl mb-2 tracking-normal">Why</span>
              Choose<br />Us?
            </h2>
            <p className="max-w-md text-sm sm:text-base leading-relaxed opacity-70">
              We don't just install window film; we engineer comfort and protect your investments. Here is why industry leaders and homeowners trust us.
            </p>
          </div>

          {/* RIGHT COLUMN BOTTOM: 2 Boxes */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Box 3 */}
            <div 
              className="rounded-3xl p-8 sm:p-12 flex flex-col justify-center" 
              style={{ background: "var(--surface-slate)", color: "var(--text-on-dark)" }}
            >
              <div className="mb-4 sm:mb-6" style={{ color: "var(--color-glass-silver)" }}>{reasons[2].icon}</div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-3">{reasons[2].title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-on-dark-muted)" }}>{reasons[2].description}</p>
            </div>
            {/* Box 4 */}
            <div 
              className="rounded-3xl p-8 sm:p-12 flex flex-col justify-center" 
              style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)" }}
            >
              <div className="mb-4 sm:mb-6" style={{ color: "var(--color-glass-silver)" }}>{reasons[3].icon}</div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-3">{reasons[3].title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-on-dark-muted)" }}>{reasons[3].description}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
