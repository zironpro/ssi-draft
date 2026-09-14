"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "10+", label: "Years of Experience" },
  { value: "5", label: "Product Categories" }
];

export function Stats() {
  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center section-master-sm bg-white">
      {/* Background Image anchored to the bottom */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Image
          src="/images/stats.png"
          alt="Mountain background"
          fill
          className="object-cover object-bottom"
        />
        {/* Subtle white gradient overlay fading downwards so the top is clean white for the numbers */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent" />
      </div>

      {/* Stats Content */}
      <div className="container-master relative z-10 w-full pt-10 pb-20 md:pb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-y-10 md:gap-y-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`flex flex-col items-center justify-center w-full ${
                index !== stats.length - 1 ? 'md:border-r md:border-black/10' : ''
              }`}
            >
              <span className="text-4xl sm:text-5xl md:text-6xl font-serif text-[var(--accent)] mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 tracking-wide text-center px-2 sm:px-4">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
