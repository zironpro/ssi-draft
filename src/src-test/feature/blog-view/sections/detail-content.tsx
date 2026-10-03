"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function BlogDetailContent() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".content-block").forEach((block) => {
        gsap.fromTo(
          block,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
            },
          }
        );
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[var(--color-warm-ivory)] relative" ref={contentRef}>
      <div className="container-master mx-auto px-4 md:px-0">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Social Share Sidebar - Sticky */}
          <div className="lg:w-24 flex-shrink-0 order-2 lg:order-1">
            <div className="sticky top-32 flex lg:flex-col gap-4">
              <span className="text-[10px] font-bold text-[var(--color-deep-forest)]/50 uppercase tracking-widest hidden lg:block mb-4 rotate-180" style={{ writingMode: 'vertical-rl' }}>
                Share Article
              </span>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[var(--color-deep-forest)]/10 flex items-center justify-center text-[var(--color-deep-forest)] hover:bg-[var(--color-muted-sage)] hover:text-white transition-colors hover:border-transparent shadow-sm">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[var(--color-deep-forest)]/10 flex items-center justify-center text-[var(--color-deep-forest)] hover:bg-[var(--color-muted-sage)] hover:text-white transition-colors hover:border-transparent shadow-sm">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[var(--color-deep-forest)]/10 flex items-center justify-center text-[var(--color-deep-forest)] hover:bg-[var(--color-muted-sage)] hover:text-white transition-colors hover:border-transparent shadow-sm">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.641l.359-4H14V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-4xl order-1 lg:order-2">
            <div className="prose prose-lg max-w-none prose-headings:font-extrabold prose-headings:text-[var(--color-deep-forest)] prose-p:text-[var(--color-deep-forest)]/80 prose-a:text-[var(--color-muted-sage)] hover:prose-a:text-[var(--color-deep-forest)] prose-strong:text-[var(--color-deep-forest)] prose-ul:text-[var(--color-deep-forest)]/80 prose-li:marker:text-[var(--color-muted-sage)]">
              
              <p className="content-block text-xl md:text-2xl font-medium leading-relaxed mb-10 text-[var(--color-deep-forest)]">
                The modern commercial real estate landscape is facing unprecedented pressure. With aggressive sustainability targets, skyrocketing energy costs, and the need for comfortable occupant environments, facility managers are looking for rapid-ROI solutions.
              </p>

              <h2 className="content-block text-3xl mt-12 mb-6">The True Cost of Inefficient Glazing</h2>
              <p className="content-block">
                Most commercial buildings built before 2010 feature standard dual-pane glass, which offers minimal resistance to solar heat gain. During peak summer months, HVAC systems operate at maximum capacity simply to combat the solar energy penetrating the building envelope. This not only leads to astronomical energy bills but also accelerates the depreciation of mechanical systems.
              </p>

              <blockquote className="content-block border-l-4 border-[var(--color-muted-sage)] pl-6 py-2 my-10 italic text-2xl font-medium text-[var(--color-deep-forest)]/90 bg-white/50 rounded-r-xl">
                "By addressing the building envelope first, we reduced our peak cooling load by 32%, allowing us to downsize our HVAC replacement units the following year."
              </blockquote>

              <h2 className="content-block text-3xl mt-12 mb-6">How Spectrally Selective Films Change the Equation</h2>
              <p className="content-block">
                Unlike traditional dyed or highly reflective mirrored films of the past, modern spectrally selective films operate on a different principle. They are engineered to specifically target and reject infrared (heat) and ultraviolet rays while allowing maximum visible light transmission.
              </p>

              <div className="content-block my-12 flex gap-4">
                <div className="w-1.5 bg-[var(--color-muted-sage)] rounded-full"></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Key Advantages:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Up to 97% Infrared Rejection (IRR)</li>
                    <li>Maintains natural building aesthetics without a "mirrored" look</li>
                    <li>Reduces glare by up to 60% without darkening the interior</li>
                    <li>99.9% UV blockage, protecting interior furnishings from fading</li>
                  </ul>
                </div>
              </div>

              <h2 className="content-block text-3xl mt-12 mb-6">Installation: The Zero-Downtime Retrofit</h2>
              <p className="content-block">
                One of the most compelling arguments for architectural window film over glass replacement is the installation process. Full glass replacement requires heavy machinery, significant tenant disruption, and structural considerations. Window film installation is typically completed with zero tenant displacement and at a fraction of the cost.
              </p>
              
              <div className="content-block bg-white p-8 rounded-2xl border border-[var(--color-deep-forest)]/5 shadow-sm mt-12">
                <h3 className="text-2xl font-bold text-[var(--color-deep-forest)] mb-4">Ready to assess your building?</h3>
                <p className="text-[var(--color-deep-forest)]/70 mb-6">
                  Our energy consultants provide comprehensive energy modeling to forecast your exact ROI and payback period before you commit.
                </p>
                <a href="/contact" className="inline-flex items-center justify-center h-12 px-8 bg-[var(--color-muted-sage)] text-white text-xs font-bold uppercase tracking-[0.15em] rounded-full hover:bg-[var(--color-deep-forest)] transition-colors">
                  Request an Energy Analysis
                </a>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
