"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  {
    id: 1,
    title: "Safety & Security",
    slug: "safety-and-security",
    description: "Deter unwanted entries and protect against flying glass from impact or weather.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Solar Control",
    slug: "solar-control",
    description: "Reject up to 82% of solar energy and significantly reduce air conditioning costs.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Privacy",
    slug: "privacy",
    description: "Achieve total or partial light block-out with premium textured and opaque films.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Decorative",
    slug: "decorative",
    description: "Enhance privacy and elevate aesthetics with customizable frosted and patterned designs.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Specialty",
    slug: "specialty",
    description: "Advanced solutions including antimicrobial layers and luxury interior wrapping.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
  }
];

export function ProductGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[var(--color-warm-ivory)]">
      <div className="container-master mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">Our Offerings</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--color-deep-forest)] tracking-tight leading-tight">
              Engineered for excellence. Designed for impact.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.id} className="product-card group block">
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] mb-8 shadow-md group-hover:shadow-xl transition-shadow duration-500">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h4 className="text-3xl font-bold text-[var(--color-deep-forest)] mb-4 group-hover:text-[var(--color-arch-sand)] transition-colors">
                {product.title}
              </h4>
              <p className="text-[var(--color-deep-forest)]/80 mb-6 max-w-md text-lg">
                {product.description}
              </p>
              <div className="flex items-center gap-3 text-[var(--color-deep-forest)] font-bold tracking-[0.15em] text-[12px] uppercase group-hover:text-[var(--color-arch-sand)] transition-colors">
                Explore Product
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
