"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface DescriptionProps {
  title: string;
  paragraphs: string[];
  image: string;
}

export function ProductDetailDescription({ title, paragraphs, image }: DescriptionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".desc-image",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
      
      gsap.fromTo(
        ".desc-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [title]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="container-master mx-auto px-4 md:px-0">
          
        <div className="mb-12">
          <h2 className="desc-text text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">Performance Engineered</h2>
          <h3 className="desc-text text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-deep-forest)] leading-tight">
            {title}
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:items-center">
          <div className="w-full lg:w-5/12">
            <div className="desc-image relative rounded-lg overflow-hidden">
              <img 
                src={image} 
                alt="Product Application"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 border border-[var(--color-deep-forest)]/10 rounded-lg pointer-events-none" />
            </div>
          </div>
          
          <div className="w-full lg:w-7/12">
            <div className="space-y-6 text-[var(--color-deep-forest)]/70 text-lg leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i} className="desc-text">{p}</p>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
