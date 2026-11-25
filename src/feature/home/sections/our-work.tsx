"use client";

import { useRef, useState, useLayoutEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Sun Control Window Film",
    image: "/products/sun-control-film.png",
    href: "/products/sun-control-window-film",
  },
  {
    id: 2,
    title: "Exterior Sun Control",
    image: "/products/exterior-sun-control.png",
    href: "/products/exterior-sun-control-window-film",
  },
  {
    id: 3,
    title: "Safety & Security Film",
    image: "/products/safety-and-security.png",
    href: "/products/safety-and-security-window-film",
  },
  {
    id: 4,
    title: "Anchor Systems",
    image: "/sub-products/anchor-systems.png",
    href: "/products/anchor-systems",
  },
  {
    id: 5,
    title: "Exterior Safety Film",
    image: "/sub-solutions/shatter-protection.png",
    href: "/products/exterior-safety-window-film",
  },
  {
    id: 6,
    title: "Marine Window Film",
    image: "/sub-products/magnum-ir.png",
    href: "/products/marine-window-film",
  },
];

export default function OurWork() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  // Measure the real distance the track must travel, and keep it updated
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const viewport = document.documentElement.clientWidth; // excludes scrollbar
      setMaxScroll(Math.max(0, track.scrollWidth - viewport));
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure); // after images/fonts

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Smooth, but settles fast enough to land exactly on the last card
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
    restDelta: 0.0005,
  });

  // Reach the final position at 95% so the last card rests before unsticking
  const x = useTransform(
    smoothProgress,
    [0, 0.95, 1],
    [0, -maxScroll, -maxScroll]
  );

  return (
    <section
      ref={targetRef}
      className="relative bg-[var(--color-warm-ivory)]"
      // Vertical scroll length = horizontal distance + one viewport
      style={{ height: `calc(100vh + ${maxScroll}px)` }}
    >
      <div className="sticky top-0 flex flex-col h-screen w-full overflow-hidden">
        <div className="container-master w-full pt-16 md:pt-24 pb-4 md:pb-8 shrink-0">
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] text-[var(--color-deep-forest)] leading-tight uppercase">
            What We’re Offering
          </h2>
        </div>

        <div className="flex-1 w-full flex items-center overflow-hidden pb-8 md:pb-16">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 pl-4 pr-4 md:pl-10 md:pr-10 h-[50vh] md:h-[65vh] w-max shrink-0 will-change-transform"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="relative w-[85vw] md:w-[45vw] lg:w-[30vw] h-full flex-shrink-0"
              >
                <Link
                  href={product.href}
                  className="group relative block w-full h-full overflow-hidden rounded-lg bg-[var(--color-deep-forest)]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-[var(--color-warm-ivory)]">
                    <h3 className="text-[18px] md:text-[18px] lg:text-[22px] font-semibold tracking-tight mb-3 md:mb-4 leading-snug whitespace-nowrap transition-transform duration-500 group-hover:-translate-y-2 uppercase">
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