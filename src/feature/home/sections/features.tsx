"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Heat Reduction",
    description: "Reject up to 82% of solar heat to keep spaces cooler.",
  },
  {
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
        <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
      </svg>
    ),
    title: "Glare Control",
    description: "Eliminate harsh sun reflections on screens while keeping clear views.",
  },
  {
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
      </svg>
    ),
    title: "Enhanced Privacy",
    description: "Daytime one-way visibility for total interior confidentiality.",
  },
  {
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "UV & Safety Shield",
    description: "Block 99% UV rays with certified anti-shatter glass protection.",
  }
];

export function Features() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[var(--surface-primary)] text-[var(--foreground)] font-sans border-b border-[var(--border-light)]">
      <div className="container-master flex flex-col gap-10 md:gap-14">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-2 max-w-2xl"
          >
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">
              Small Upgrade. A Big Difference.
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-[0.06em] leading-tight text-balance uppercase text-[var(--foreground)]">
              Why Window Film?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md lg:pb-1"
          >
            <p className="text-xs md:text-sm text-[var(--color-deep-forest)]/70 leading-relaxed text-pretty">
              Window films enhance indoor comfort, eliminate glare, provide daytime privacy, lower cooling costs, and provide certified anti-shatter glass protection.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 md:gap-x-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
              className={`flex flex-col items-center text-center gap-3 ${
                index !== features.length - 1 ? "lg:border-r lg:border-black/10" : ""
              } lg:pr-8`}
            >
              <div className="mb-1">{feature.icon}</div>
              <h3 className="text-base md:text-lg font-semibold tracking-wider uppercase text-[var(--foreground)]">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-[var(--color-deep-forest)]/70 max-w-[200px] text-balance">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
