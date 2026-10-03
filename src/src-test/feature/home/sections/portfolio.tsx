"use client";

import React from "react";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "Skyline Penthouse",
    category: "Residential • UV Protection",
    image: "/images/minimalist-office-interior-desig.webp",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Downtown Corporate Center",
    category: "Commercial • Glare Control",
    image: "/images/modern-skyscrapers-business-district-scaled.webp",
    span: "col-span-1",
  },
  {
    id: 3,
    title: "Modern Oasis Villa",
    category: "Residential • Privacy Film",
    image: "/images/minimalist-office-interior-desig.webp",
    span: "col-span-1",
  },
  {
    id: 4,
    title: "Tech Hub Headquarters",
    category: "Commercial • Heat Reduction",
    image: "/images/modern-office-overlooking-city-skyline-sunset-scaled.webp",
    span: "col-span-1 md:col-span-2",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-white py-24 sm:py-32 w-full overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-neutral-100 px-4 py-1.5 text-xs font-semibold text-neutral-600 mb-6">
              Our Works
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1] font-sans">
              Featured Projects
            </h2>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-lg">
              Explore our recent installations. See how our premium window films transform both residential and commercial spaces.
            </p>
          </div>
          
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 shrink-0"
          >
            <span>View All Projects</span>
            <svg className="size-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Masonry/Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className={`relative rounded-[2rem] overflow-hidden group cursor-pointer ${item.span}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
              
              {/* Content Reveal */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-white text-xs font-bold tracking-wider uppercase mb-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 delay-100">
                  {item.category}
                </p>
                <h3 className="text-2xl sm:text-3xl font-medium text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
