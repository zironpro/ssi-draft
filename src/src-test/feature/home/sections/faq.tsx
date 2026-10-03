"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is sun control window film and how does it work?",
    answer: "Sun control window film is a micro-thin layer of polyester integrated with advanced technologies (like ceramics or metals) that is applied to the interior surface of your glass. It works by reflecting and absorbing a significant portion of solar energy, blocking UV rays, and reducing glare before it enters your space.",
  },
  {
    question: "Will the window film make my interiors too dark?",
    answer: "Not at all. We offer a wide range of films, from highly tinted options for privacy to completely clear, virtually invisible films that still block heat and UV rays without noticeably altering the natural light in your home or office.",
  },
  {
    question: "How long does the installation process take?",
    answer: "Most residential installations can be completed in a single day. Commercial projects depend on the scope and size of the building. Our certified team works efficiently to ensure minimal disruption to your daily routine, and we leave your space spotless.",
  },
  {
    question: "Can window film really help reduce my energy bills?",
    answer: "Yes. By rejecting up to 80% of solar heat, window films significantly reduce the workload on your HVAC system during hot months. Many of our clients see a return on their investment through energy savings within just a few years.",
  },
  {
    question: "How do I clean and maintain my windows after installation?",
    answer: "Maintenance is incredibly simple. After a short 30-day curing period, you can clean your windows just as you normally would, using a soft cloth or squeegee and standard non-abrasive, ammonia-free window cleaning solutions.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-24 sm:py-32 w-full"
      style={{ background: "var(--surface-primary)" }}
    >
      <div className="mx-auto max-w-[1000px] px-6 lg:px-8">

        <div className="text-center mb-16">
          <div
            className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold mb-6"
            style={{
              background: "rgba(176,138,87,0.10)",
              color: "var(--accent-muted)",
              border: "1px solid rgba(176,138,87,0.20)",
            }}
          >
            Common Questions
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight font-sans"
            style={{ color: "var(--text-primary)" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div
          className="flex flex-col"
          style={{ borderTop: "1px solid var(--border-light)" }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{ borderBottom: "1px solid var(--border-light)" }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span
                    className="text-lg sm:text-lg font-medium transition-colors"
                    style={{ color: isOpen ? "var(--text-primary)" : "var(--text-secondary)" }}
                  >
                    {faq.question}
                  </span>

                  <div
                    className="ml-4 shrink-0 flex items-center justify-center size-8 rounded-full border transition-all duration-300"
                    style={
                      isOpen
                        ? { background: "var(--accent)", borderColor: "var(--accent)", color: "var(--color-arch-white)", transform: "rotate(180deg)" }
                        : { background: "transparent", borderColor: "var(--color-glass-silver)", color: "var(--color-glass-silver)" }
                    }
                  >
                    <svg
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mb-8" : "max-h-0 opacity-0 mb-0"}`}
                >
                  <p
                    className="text-base leading-relaxed pr-12"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
