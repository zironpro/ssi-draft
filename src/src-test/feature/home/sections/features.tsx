"use client";

import React from "react";

const features = [
  {
    id: "consultation",
    title: "Design Consultations",
    desc: "Expert guidance in choosing the ideal window film solution for your project, ensuring maximum efficiency and style.",
    action: "Learn More",
  },
  {
    id: "custom",
    title: "Custom Solutions",
    image: "/images/minimalist-office-interior-desig.webp",
  },
  {
    id: "install",
    title: "Professional Installation",
    image: "/images/low-angle-view-business-buildings-1-scaled.webp",
  },
  {
    id: "maintenance",
    title: "Maintenance and Repair",
    image: "/images/modern-office-overlooking-city-skyline-sunset-scaled.webp",
  },
  {
    id: "commercial",
    title: "Commercial Projects",
    image: "/images/modern-skyscrapers-business-district-scaled.webp",
  },
  {
    id: "residential",
    title: "Residential Projects",
    image: "/images/minimalist-office-interior-desig.webp",
  },
];

export default function Features() {
  return (
    <section className="w-full" style={{ background: "var(--surface-dark)" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {features.map((feature, idx) => (
          <div
            key={feature.id}
            className="relative h-[350px] sm:h-[450px] w-full group overflow-hidden"
            style={{ borderColor: "var(--border-dark)", borderWidth: "0.5px", borderStyle: "solid" }}
          >
            {idx === 0 ? (
              <div
                className="absolute inset-0 flex flex-col p-10 justify-center"
                style={{ background: "var(--surface-dark)" }}
              >
                <h2
                  className="text-3xl font-medium mb-4 leading-tight"
                  style={{ color: "var(--text-on-dark)" }}
                >
                  {feature.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-8 max-w-xs"
                  style={{ color: "var(--text-on-dark-muted)" }}
                >
                  {feature.desc}
                </p>
                <button
                  className="flex items-center w-max gap-3 px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
                  style={{ background: "var(--accent)", color: "var(--color-arch-white)" }}
                >
                  {feature.action}
                  <span
                    className="flex items-center justify-center size-6 rounded-full"
                    style={{ background: "var(--accent-muted)", color: "var(--color-arch-white)" }}
                  >
                    <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </button>
              </div>
            ) : (
              <>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
                  <h3
                    className="text-xl sm:text-2xl font-medium tracking-tight"
                    style={{ color: "var(--text-on-dark)" }}
                  >
                    {feature.title}
                  </h3>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
