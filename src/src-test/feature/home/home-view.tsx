"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./sections/hero";
import Statement from "./sections/statement";
import InteractiveCompare from "./sections/interactive-compare";
import Solutions from "./sections/solutions";
import PerformanceNumbers from "./sections/performance-numbers";
import MadeForUae from "./sections/made-for-uae";
import OurServices from "./sections/our-services";
import Credibility from "./sections/credibility";
import FinalCta from "./sections/final-cta";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeView() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    
    // Ensure Lenis updates its bounds when GSAP adds pin spacers
    ScrollTrigger.addEventListener("refresh", () => lenis.resize());

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after a slight delay to ensure all pins/images are calculated
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
      lenis.resize();
    }, 1000);

    return () => {
      clearTimeout(timeout);
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[var(--color-warm-ivory)]">
      <Hero />
      <Statement />
      <InteractiveCompare />
      <Solutions />
      <PerformanceNumbers />
      {/* <MadeForUae /> */}
      <OurServices />
      <Credibility />
      {/* <FinalCta /> */}
    </div>
  );
}
