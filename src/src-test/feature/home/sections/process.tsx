"use client";

import React from "react";

export default function Process() {
  return (
    <section className="bg-white py-24 sm:py-32 w-full overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        
        {/* Top Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 sm:mb-16">
          {/* Pill on the left */}
          <div className="shrink-0 w-32">
            <div className="inline-flex items-center rounded-full bg-neutral-100 px-4 py-1.5 text-xs font-semibold text-neutral-600">
              About Us
            </div>
          </div>
          
          {/* Content on the right */}
          <div className="flex-1 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#1a1a1a] leading-[1.3] mb-12">
              <span className="font-bold">SSI</span> — the leading provider of innovative window film solutions. With years of experience and a passion for design, we transform spaces by offering enhanced comfort, safety, and unparalleled UV protection.
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="relative h-48 sm:h-64 rounded-sm overflow-hidden">
                <img 
                  src="/images/low-angle-view-business-buildings-1-scaled.webp" 
                  alt="Modern glass building" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center h-full">
                <p className="text-sm leading-relaxed text-neutral-600">
                  Our team of experts is committed to achieving exceptional results, from design consultation to professional installation. We pride ourselves on our dedication to customer satisfaction and our ability to bring your ideas to life while protecting your most valuable spaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-12 lg:gap-8 pt-10 sm:pt-16 border-t border-neutral-200">
          
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="text-3xl sm:text-5xl font-medium text-[#1a1a1a] mb-2 tracking-tight">25+</div>
            <div className="text-sm font-semibold text-neutral-900 mb-2 sm:mb-4">Years of experience</div>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-[160px] sm:max-w-[200px]">
              Professional expertise and reliable installation.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="text-3xl sm:text-5xl font-medium text-[#1a1a1a] mb-2 tracking-tight">40%</div>
            <div className="text-sm font-semibold text-neutral-900 mb-2 sm:mb-4">Energy savings</div>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-[160px] sm:max-w-[200px]">
              Reduced cooling costs thanks to advanced heat rejection.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="text-3xl sm:text-5xl font-medium text-[#1a1a1a] mb-2 tracking-tight">99%</div>
            <div className="text-sm font-semibold text-neutral-900 mb-2 sm:mb-4">UV Protection</div>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-[160px] sm:max-w-[200px]">
              Maximum defense against fading and sun damage for your interiors.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="text-3xl sm:text-5xl font-medium text-[#1a1a1a] mb-2 tracking-tight">10 yr</div>
            <div className="text-sm font-semibold text-neutral-900 mb-2 sm:mb-4">Comprehensive warranty</div>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-[160px] sm:max-w-[200px]">
              Our premium films withstand extreme weather conditions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
