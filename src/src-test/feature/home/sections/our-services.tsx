"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Coloured Films",
    category: "Service",
    image: "/images/services/coloured_films.jpg",
    href: "/services/coloured-films"
  },
  {
    title: "Best Safety & Security Window Film in UAE",
    category: "Service",
    image: "/images/services/safety_film.jpg",
    href: "/services/safety-security"
  },
  {
    title: "Wallpaper-Installation",
    category: "Service",
    image: "/images/services/wallpaper.jpg",
    href: "/services/wallpaper"
  },
  {
    title: "Decorative Film",
    category: "Service",
    image: "/images/services/decorative_film.jpg",
    href: "/services/decorative"
  },
  {
    title: "Glass & Aluminium Installation and Maintenance",
    category: "Service",
    image: "/images/services/glass_aluminium.jpg",
    href: "/services/glass-aluminium"
  },
  {
    title: "Print and Vinyls",
    category: "Service",
    image: "/images/services/print_vinyls.jpg",
    href: "/services/print-vinyls"
  },
  {
    title: "Luxury Interior Wrapping",
    category: "Service",
    image: "/images/services/luxury_wrapping.jpg",
    href: "/services/luxury-wrapping"
  },
  {
    title: "Switchable Smart Film",
    category: "Service",
    image: "/images/services/smart_film.jpg",
    href: "/services/smart-film"
  }
];

export default function OurServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !scrollContainerRef.current || !containerRef.current) return;

    // Mobile: disable horizontal GSAP scroll, let native touch overflow-x do it
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const panels = gsap.utils.toArray(".service-panel");
      
      const totalWidth = scrollContainer.scrollWidth - window.innerWidth;

      // Pin the section and scroll the container horizontally
      gsap.to(scrollContainer, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth * 0.5}`,
        }
      });

      // Image Parallax inside the panels
      panels.forEach((panel: any) => {
        const img = panel.querySelector(".service-image");
        gsap.fromTo(img, 
          { x: "-10%" },
          {
            x: "10%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              scrub: true,
              start: "top top",
              end: () => `+=${totalWidth * 0.5}`,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <section ref={sectionRef} className="w-full h-auto md:h-screen bg-[var(--color-warm-ivory)] overflow-hidden flex flex-col justify-center py-20 md:py-0 relative">
      
      {/* Title */}
      <div className="container-master relative md:absolute md:top-12 left-0 right-0 z-20 pointer-events-none mb-8 md:mb-0">
        {/* <h3 className="text-[20px] md:text-[30px] font-bold tracking-tighter text-[var(--color-deep-forest)] mb-2 uppercase">
          Our services
        </h3> */}
        <h2 className="text-[40px] md:text-[60px] lg:text-[80px] font-extrabold tracking-tighter text-[var(--color-deep-forest)] leading-none uppercase">
          What We’re Offering
        </h2>
      </div>

      {/* Container: Vertical stack on mobile, Horizontal scroll on desktop */}
      <div 
        ref={scrollContainerRef}
        className="flex flex-col md:flex-row w-full h-auto md:h-[80vh] md:w-[450vw] lg:w-[400vw] gap-8 md:gap-0 items-center px-4 md:px-0"
      >
        {services.map((service, i) => (
          <div 
            key={service.title} 
            className="service-panel relative w-full h-[60vh] md:w-[60vw] lg:w-[50vw] md:h-full flex-shrink-0 px-0 md:px-6"
          >
            <Link href={service.href} className="group relative block w-full h-full overflow-hidden rounded-[24px] md:rounded-[32px] bg-[var(--color-deep-forest)] shadow-2xl">
              
              <div className="absolute inset-0 w-[120%] -left-[10%]">
                <div 
                  className="service-image absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-[var(--color-warm-ivory)]">
                <div className="text-[var(--color-arch-sand)] text-[10px] md:text-[12px] font-bold tracking-widest uppercase mb-2 md:mb-3 transition-transform duration-500 group-hover:-translate-y-2">
                  {service.category}
                </div>
                <h3 className="text-[28px] md:text-[40px] font-bold tracking-tight mb-4 md:mb-6 leading-tight transition-transform duration-500 group-hover:-translate-y-2 uppercase">
                  {service.title}
                </h3>
                
                <div className="inline-flex items-center gap-2 font-bold tracking-widest text-[12px] uppercase transition-all opacity-100 md:opacity-0 md:-translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 duration-500">
                  LEARN MORE <ArrowRight className="size-4" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
    </section>
    </div>
  );
}
