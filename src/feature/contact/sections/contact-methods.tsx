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
        ".contact-anim",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gray-50/50">
      <div className="container-master mx-auto px-4 md:px-8 max-w-6xl">
        
        <div className="contact-anim bg-white rounded-lg p-8 md:p-12 lg:p-20 border border-[var(--color-deep-forest)]/10 flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Contact Info */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-tight text-[var(--color-deep-forest)] mb-12 lg:mb-16">
              Get in touch
            </h2>

            <div className="space-y-8 flex-1">
              <div>
                <p className="text-sm font-bold text-[var(--color-arch-sand)] uppercase tracking-wider mb-2">Email:</p>
                <p className="text-lg text-[var(--color-deep-forest)] font-medium">sales@solarsafety.ae</p>
                <p className="text-sm text-[var(--color-deep-forest)]/70 mt-1">sales@solarsafety.ae</p>
              </div>

              <div>
                <p className="text-sm font-bold text-[var(--color-arch-sand)] uppercase tracking-wider mb-2">Phone:</p>
                <p className="text-lg text-[var(--color-deep-forest)] font-medium">+971 55 840 8421</p>
                <p className="text-sm text-[var(--color-deep-forest)]/70 mt-1">+971 55 840 8421 (Mobile)</p>
              </div>

              <div>
                <p className="text-sm font-bold text-[var(--color-arch-sand)] uppercase tracking-wider mb-2">Address:</p>
                <p className="text-lg text-[var(--color-deep-forest)] font-medium leading-relaxed">
                  Solar Safety Films Inc.<br />
                  123 Architectural Avenue<br />
                  Business Bay, Dubai, UAE
                </p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm font-bold text-[var(--color-arch-sand)] uppercase tracking-wider mb-4">Follow us</p>
              <div className="flex items-center gap-3">
                <a href="#social" className="w-10 h-10 rounded-full bg-[var(--color-deep-forest)] flex items-center justify-center hover:bg-[var(--color-muted-copper)] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#social" className="w-10 h-10 rounded-full bg-[var(--color-deep-forest)] flex items-center justify-center hover:bg-[var(--color-muted-copper)] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#social" className="w-10 h-10 rounded-full bg-[var(--color-deep-forest)] flex items-center justify-center hover:bg-[var(--color-muted-copper)] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#social" className="w-10 h-10 rounded-full bg-[var(--color-deep-forest)] flex items-center justify-center hover:bg-[var(--color-muted-copper)] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full lg:w-7/12 mt-4 lg:mt-0">
            {isSubmitted ? (
              <div className="bg-white p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--accent)]/10 rounded-full mb-6">
                  <CheckCircle2 className="size-10 text-[var(--accent)]" />
                </div>
                <h3 className="text-3xl font-semibold text-[var(--color-deep-forest)] mb-4">Message Sent!</h3>
                <p className="text-[var(--color-deep-forest)]/70 text-lg mb-8 max-w-sm mx-auto">
                  Thank you for reaching out. A member of our team will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-4 bg-[var(--accent)] text-[var(--text-on-dark)] text-sm font-semibold tracking-[0.15em] uppercase rounded-lg transition-transform hover:scale-[1.02] hover:bg-[var(--accent-muted)]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[var(--color-deep-forest)] mb-2 uppercase tracking-wider">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 bg-[var(--color-soft-glass)] rounded-md border-transparent focus:bg-gray-100 outline-none transition-colors text-[var(--color-deep-forest)]" 
                      placeholder="Your full name" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[var(--color-deep-forest)] mb-2 uppercase tracking-wider">Email address</label>
                    <input 
                      type="email" 
                      className="w-full px-6 py-4 bg-[var(--color-soft-glass)] rounded-md border-transparent focus:bg-gray-100 outline-none transition-colors text-[var(--color-deep-forest)]" 
                      placeholder="Your email address" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[var(--color-deep-forest)] mb-2 uppercase tracking-wider">Message</label>
                  <textarea 
                    rows={6} 
                    className="w-full px-6 py-4 bg-[var(--color-soft-glass)] rounded-md border-transparent focus:bg-gray-100 outline-none transition-colors text-[var(--color-deep-forest)] resize-none" 
                    placeholder="Write something...." 
                    required 
                  />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-[var(--accent)] text-[var(--text-on-dark)] font-semibold tracking-[0.15em] uppercase text-sm rounded-lg transition-transform hover:scale-[1.02] hover:bg-[var(--accent-muted)] disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
