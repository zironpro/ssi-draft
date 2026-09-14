"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Residential Film",
    description: "Comfort, privacy and UV protection for your home.",
    image: "/images/hero.png",
    link: "#"
  },
  {
    title: "Commercial Film",
    description: "Improve efficiency, comfort and aesthetics for your business.",
    image: "/images/heroimg.png",
    link: "#"
  },
  {
    title: "Automotive Film",
    description: "Style, heat rejection and protection for every journey.",
    image: "/images/hero.png",
    link: "#"
  }
];

export function Solutions() {
  return (
    <section className="section-master bg-[var(--surface-primary)] text-[var(--foreground)]">
      <div className="container-master flex flex-col gap-16 md:gap-20">
        
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
              Our Solutions
            </p>
            <h2 className="heading-fluid-lg font-serif leading-[1.1] text-balance">
              Window Film for<br />
              Every Need
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-lg lg:pb-2"
          >
            <p className="text-fluid-base text-gray-600 leading-relaxed text-pretty">
              From residential to commercial and automotive, we offer high-quality window films designed for performance, durability, and style.
            </p>
          </motion.div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <Image 
                  src={solution.image} 
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {solution.description}
              </p>
              <a 
                href={solution.link} 
                className="inline-flex items-center text-[var(--accent)] font-medium hover:text-[var(--accent-muted)] transition-colors mt-auto w-fit"
              >
                Explore
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
