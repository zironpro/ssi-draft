"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const defaultFaqs = [
  {
    question: "What are the primary benefits of installing Solar Gard window films?",
    answer: "Solar Gard window films reject up to 82% of total solar energy, block 99% of damaging UV radiation, reduce harsh glare, and significantly reduce cooling costs while protecting interior furnishings from fading.",
  },
  {
    question: "How do anti-shatter safety and security films protect my property?",
    answer: "Our certified Solar Gard safety and security films bond to glass, holding fragments firmly together in the event of severe impact, seismic events, or accidental breakage to prevent dangerous flying glass hazards.",
  },
  {
    question: "Do you provide installation for both residential and commercial projects?",
    answer: "Yes. As the official UAE distributor of Saint-Gobain Solar Gard, SSI Films provides certified professional consultation, supply, and installation across luxury villas, commercial towers, government facilities, and automotive projects.",
  },
  {
    question: "Can window films help improve daytime privacy without blocking natural light?",
    answer: "Yes. Our privacy and solar control films provide excellent daytime one-way privacy while still allowing clear outward visibility and natural daylight to brighten your interior spaces.",
  },
  {
    question: "What warranties and quality assurances are provided?",
    answer: "All Saint-Gobain Solar Gard window films installed by SSI Films come with extensive manufacturer-backed warranties covering bubbling, peeling, cracking, and de-lamination for long-term peace of mind.",
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items?: FaqItem[];
  title?: string;
  description?: string;
}

export function GlobalFaq({ 
  items = defaultFaqs,
  title = "Frequently Asked Questions",
  description = "Everything you need to know about our services, process, and commitment to quality."
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? "bg-zinc-900/50 border-zinc-800" : "bg-transparent border-zinc-800/50 hover:border-zinc-700"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-medium pr-8">{faq.question}</span>
                  <div className={`p-2 rounded-full transition-colors duration-300 flex-shrink-0 ${isOpen ? "bg-blue-500/20 text-blue-400" : "bg-zinc-800 text-zinc-400"}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
