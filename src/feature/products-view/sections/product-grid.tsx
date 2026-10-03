"use client";

import { Share } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Safety & Security",
    slug: "safety-and-security",
    description: "Deter unwanted entries and protect against flying glass from impact or weather.",
    image: "/products/safety-and-security.png",
  },
  {
    id: 2,
    title: "Solar Control",
    slug: "solar-control",
    description: "Reject up to 82% of solar energy and significantly reduce air conditioning costs.",
    image: "/products/dsolar-control.png",
  },
  {
    id: 3,
    title: "Privacy",
    slug: "privacy",
    description: "Achieve total or partial light block-out with premium textured and opaque films.",
    image: "/products/privacy.png",
  },
  {
    id: 4,
    title: "Decorative",
    slug: "decorative",
    description: "Enhance privacy and elevate aesthetics with customizable frosted and patterned designs.",
    image: "/products/decorative.png",
  },
  {
    id: 5,
    title: "Specialty",
    slug: "specialty",
    description: "Advanced solutions including antimicrobial layers and luxury interior wrapping.",
    image: "/products/speciality.png",
  },
];

export function ProductGrid() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-warm-ivory)]">
      <div className="container-master mx-auto px-4 md:px-0">
        <div className="mb-12 md:mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">
            Our Offerings
          </h2>
          <h3 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-deep-forest)] leading-tight mb-4">
            Engineered for excellence. <br />
            Designed for impact.
          </h3>
          <p className="text-base md:text-lg text-[var(--color-deep-forest)]/70 max-w-3xl leading-relaxed">
            Explore our comprehensive range of high-performance window films and architectural solutions,
            meticulously crafted to elevate your environment with superior protection and aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="flex flex-col md:flex-row items-stretch bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="w-full md:w-2/5 shrink-0 bg-gray-100 flex flex-col overflow-hidden md:min-h-[200px] min-h-[240px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full flex-1 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col w-full bg-white z-10 relative">
                <h4 className="text-xl md:text-[22px] font-bold text-gray-900 mb-3 leading-snug">
                  {product.title}
                </h4>
                <p className="text-[var(--color-deep-forest)]/70 text-[15px] leading-relaxed">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
          
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center p-6 md:p-8 text-center rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group bg-[var(--color-deep-forest)]"
          >
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-[var(--color-arch-sand)] rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-48 h-48 bg-white rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
                Need a Custom Solution?
              </h4>
              <p className="text-white/80 text-sm md:text-[15px] leading-relaxed mb-6 max-w-xs">
                Talk to our experts today to find the perfect window film for your unique project.
              </p>
              <span className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-arch-sand)] text-white text-sm font-bold tracking-widest uppercase rounded-md hover:bg-white hover:text-[var(--color-deep-forest)] transition-colors">
                Contact Us
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}