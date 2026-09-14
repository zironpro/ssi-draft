"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
  { id: 1, image: "/images/hero.png", alt: "Residential exterior with window film" },
  { id: 2, image: "/images/heroimg.png", alt: "Commercial office interior" },
  { id: 3, image: "/images/hero.png", alt: "Residential living room with ocean view" },
  { id: 4, image: "/images/heroimg.png", alt: "Automotive window tinting" },
  { id: 5, image: "/images/hero.png", alt: "Modern architectural glass" },
];

export function OurWork() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="section-master bg-[var(--surface-primary)] text-[var(--foreground)] overflow-hidden">
      <div className="container-master flex flex-col gap-12 md:gap-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 max-w-2xl"
          >
            <p className="text-sm tracking-[0.2em] font-semibold text-gray-500 uppercase">
              Our Work
            </p>
            <h2 className="heading-fluid-lg font-serif leading-[1.1] text-balance">
              Real Spaces. Real Results.
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-lg lg:pb-2 flex flex-col items-start lg:items-end gap-6 lg:text-right"
          >
            <p className="text-fluid-base text-gray-600 leading-relaxed text-pretty lg:text-right">
              See how our window films make a difference in homes, businesses and vehicles.
            </p>
            
            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-4">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Image Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Custom CSS to hide scrollbar while keeping functionality */}
            <style jsx>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {projects.map((project) => (
              <div 
                key={project.id}
                className="relative flex-none w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] aspect-[4/3] rounded-xl overflow-hidden snap-start group cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
