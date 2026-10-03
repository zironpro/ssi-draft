"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function QuoteForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".form-element",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  const labelClass = "block text-sm font-bold text-[var(--color-deep-forest)] mb-2 uppercase tracking-wider";
  const inputClass = "w-full px-6 py-4 bg-[var(--color-soft-glass)] rounded-md border-transparent focus:bg-gray-100 outline-none transition-colors text-[var(--color-deep-forest)]";
  const selectClass = inputClass + " appearance-none";

  return (
    <section ref={containerRef} className="py-24 bg-gray-50/50">
      <div className="container-master mx-auto px-4 md:px-8 max-w-4xl">
        
        {isSubmitted ? (
          <div className="bg-white p-12 rounded-lg border border-[var(--color-deep-forest)]/10 text-center form-element shadow-none">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--accent)]/10 rounded-full mb-6">
              <CheckCircle2 className="size-10 text-[var(--accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-deep-forest)] mb-4">Quote Request Received!</h2>
            <p className="text-[var(--color-deep-forest)]/70 text-lg mb-8 max-w-lg mx-auto">
              Thank you for reaching out. One of our architectural film specialists will review your details and contact you within 24 hours.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center justify-center h-14 px-8 bg-[var(--accent)] text-[var(--text-on-dark)] text-sm font-semibold tracking-[0.15em] uppercase rounded-lg transition-transform hover:scale-[1.02] hover:bg-[var(--accent-muted)]"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-lg border border-[var(--color-deep-forest)]/10 form-element relative overflow-hidden shadow-none">
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-deep-forest)] mb-8 border-b border-[var(--color-deep-forest)]/10 pb-4">1. Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input required type="text" className={inputClass} placeholder="First Name" />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name</label>
                    <input required type="text" className={inputClass} placeholder="Last Name" />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input required type="email" className={inputClass} placeholder="Email Address" />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input required type="tel" className={inputClass} placeholder="Phone Number" />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>Company Name (Optional)</label>
                    <input type="text" className={inputClass} placeholder="Company Name" />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-[var(--color-deep-forest)] mb-8 border-b border-[var(--color-deep-forest)]/10 pb-4">2. Project Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Building Type</label>
                    <select className={selectClass}>
                      <option>Commercial Office</option>
                      <option>Retail Space</option>
                      <option>Healthcare Facility</option>
                      <option>Educational Institution</option>
                      <option>Residential</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Primary Goal</label>
                    <select className={selectClass}>
                      <option>Heat & Energy Reduction</option>
                      <option>Glare Control</option>
                      <option>Safety & Security</option>
                      <option>Privacy & Aesthetics</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>Approximate Window Area (Sq Ft)</label>
                    <input type="text" placeholder="e.g. 5,000 sq ft" className={inputClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>Additional Information</label>
                    <textarea rows={6} placeholder="Tell us more about your project challenges or requirements..." className={inputClass + " resize-none"}></textarea>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button type="submit" className="w-full flex items-center justify-center gap-3 py-5 bg-[var(--accent)] text-[var(--text-on-dark)] font-semibold tracking-[0.15em] uppercase text-sm rounded-lg transition-transform hover:scale-[1.02] hover:bg-[var(--accent-muted)] group">
                  Submit Quote Request <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </section>
  );
}
