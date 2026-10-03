"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Safety & Security",
    slug: "safety-and-security",
    category: "Product",
    image: "/products/safety-and-security.png",
    href: "/products/safety-and-security"
  },
  {
    id: 2,
    title: "Solar Control",
    slug: "solar-control",
    category: "Product",
    image: "/products/dsolar-control.png",
    href: "/products/solar-control"
  },
  {
    id: 3,
    title: "Privacy",
    slug: "privacy",
    category: "Product",
    image: "/products/privacy.png",
    href: "/products/privacy"
  },
  {
    id: 4,
    title: "Decorative",
    slug: "decorative",
    category: "Product",
    image: "/products/decorative.png",
    href: "/products/decorative"
  },
  {
    id: 5,
    title: "Specialty",
    slug: "specialty",
    category: "Product",
    image: "/products/speciality.png",
    href: "/products/specialty"
  }
];

export default function OurWork() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the target section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Extremely buttery, inertia-based Apple scroll feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    mass: 0.5,
    restDelta: 0.001,
  });

  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const updateMaxScroll = () => {
      if (trackRef.current) {
        // Calculate the exact distance to scroll left: Total Track Width - Viewport Width
        setMaxScroll(trackRef.current.scrollWidth - window.innerWidth);
      }
    };
    
    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  // Map the smooth progress directly to a pixel value for flawless GPU interpolation
  const x = useTransform(smoothProgress, [0, 1], [0, -maxScroll]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[var(--color-warm-ivory)]">
      
      {/* Sticky container that locks to the screen while we scroll vertically */}
      <div className="sticky top-0 flex flex-col h-screen w-full overflow-hidden">
        
        {/* Title - Positioned naturally at the top */}
        <div className="container-master w-full pt-16 md:pt-24 pb-4 md:pb-8 shrink-0">
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] text-[var(--color-deep-forest)] leading-tight uppercase">
            What We’re Offering
          </h2>
        </div>

        {/* Horizontal Sliding Track */}
        <div className="flex-1 w-full flex items-center overflow-hidden pb-8 md:pb-16">
          <motion.div 
            ref={trackRef}
            style={{ x }} 
            className="flex gap-6 px-4 md:px-10 h-[50vh] md:h-[65vh] w-max"
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="relative w-[85vw] md:w-[45vw] lg:w-[30vw] h-full flex-shrink-0"
              >
                <Link href={product.href} className="group relative block w-full h-full overflow-hidden rounded-lg bg-[var(--color-deep-forest)]">
                  
                  <div className="absolute inset-0 w-[120%] -left-[10%]">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${product.image}')` }}
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-[var(--color-warm-ivory)]">
                    <div className="text-[var(--color-arch-sand)] text-[10px] md:text-[12px] font-semibold tracking-[0.2em] uppercase mb-2 md:mb-3 transition-transform duration-500 group-hover:-translate-y-2">
                      {product.category}
                    </div>
                    <h3 className="text-[20px] md:text-[28px] lg:text-[32px] font-semibold tracking-tight mb-4 md:mb-6 leading-snug transition-transform duration-500 group-hover:-translate-y-2 uppercase">
                      {product.title}
                    </h3>
                    
                    <div className="inline-flex items-center gap-2 font-button font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase transition-all opacity-100 md:opacity-0 md:-translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 duration-500">
                      LEARN MORE <ArrowRight className="size-4" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
