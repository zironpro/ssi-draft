"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ContactMethods() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-card-anim",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#e5e5e7] px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="contact-card-anim bg-white rounded-2xl md:rounded-[28px] p-8 sm:p-12 md:p-14 lg:p-16 shadow-[0_4px_35px_rgba(0,0,0,0.04)] border border-neutral-100/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-normal tracking-[-0.03em] text-neutral-900 leading-tight mb-8">
                  Get in touch
                </h2>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs text-neutral-400 font-normal mb-1">Email:</p>
                    <a 
                      href="mailto:sales@solarsafety.ae"
                      className="text-sm md:text-base text-neutral-800 font-medium hover:text-black transition-colors block"
                    >
                      sales@solarsafety.ae
                    </a>
                  </div>

                  <div>
                    <p className="text-xs text-neutral-400 font-normal mb-1">Phone:</p>
                    <a 
                      href="tel:+971558408421"
                      className="text-sm md:text-base text-neutral-800 font-medium hover:text-black transition-colors block"
                    >
                      +971 55 840 8421
                    </a>
                  </div>

                  <div>
                    <p className="text-xs text-neutral-400 font-normal mb-1">Address:</p>
                    <p className="text-sm md:text-base text-neutral-800 font-medium leading-relaxed">
                      Solar Safety Films (SSI)<br />
                      X4QF+VR4 Dubai<br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-2">
                <p className="text-xs text-neutral-400 font-normal mb-3">Follow us</p>
                <div className="flex items-center gap-2.5">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>

                  {/* X / Twitter */}
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="X"
                  >
                    <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="bg-[#f7f7f8] rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mb-5 text-white">
                    <CheckCircle2 className="size-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-neutral-900 mb-2">Message Sent!</h3>
                  <p className="text-neutral-500 text-sm max-w-xs mb-6">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-black text-white text-xs font-medium rounded-xl hover:bg-neutral-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-700 font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3.5 bg-[#f0f0f3] rounded-xl text-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-all border-0"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-700 font-medium mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Your email address"
                        className="w-full px-4 py-3.5 bg-[#f0f0f3] rounded-xl text-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-all border-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write something..."
                      className="w-full p-4 bg-[#f0f0f3] rounded-xl text-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 resize-none h-44 transition-all border-0"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-black text-white text-sm font-medium rounded-xl hover:bg-neutral-800 active:scale-[0.99] transition-all duration-150 disabled:opacity-60 flex items-center justify-center cursor-pointer"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
