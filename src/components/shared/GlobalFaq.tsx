"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const defaultFaqs = [
  {
    question: "What makes your steel fabrication services unique?",
    answer: "We combine decades of experience with state-of-the-art technology to deliver precision steel fabrication. Our process ensures strict quality control, timely delivery, and custom solutions tailored to your specific project needs.",
  },
  {
    question: "Do you handle both commercial and industrial projects?",
    answer: "Yes, we have extensive experience across various sectors including commercial, industrial, and infrastructure. Whether it's structural frameworks for buildings or specialized components for industrial machinery, we have the capabilities to handle it.",
  },
  {
    question: "What is your typical project turnaround time?",
    answer: "Turnaround times vary depending on the scope and complexity of the project. However, our streamlined manufacturing processes and dedicated project management allow us to meet tight deadlines without compromising on quality. Contact us with your project details for a specific timeline.",
  },
  {
    question: "Do you offer custom design and engineering services?",
    answer: "Absolutely. Our in-house team of engineers and designers works closely with clients to develop custom solutions. From initial conceptualization to final structural drawings, we ensure your vision is translated into a highly functional and durable final product.",
  },
  {
    question: "What quality assurance standards do you follow?",
    answer: "We adhere to the highest industry standards for quality and safety. Our facilities and processes are certified, and every project undergoes rigorous inspection at multiple stages of fabrication to ensure it meets both our strict internal criteria and all relevant regulations.",
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
