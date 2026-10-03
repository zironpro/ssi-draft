import { QuoteHero } from"./sections/hero";
import { QuoteForm } from"./sections/quote-form";
import { GlobalFaq } from "@/components/shared/GlobalFaq";

const quoteFaqs = [
  {
    question: "How long does it take to get a quote?",
    answer: "For standard requests, we typically provide a comprehensive quote within 24-48 hours. Complex, large-scale structural projects may require additional time for engineering review and accurate material estimation.",
  },
  {
    question: "What information do I need to provide for an accurate quote?",
    answer: "To provide the most accurate estimate, please include structural drawings, material specifications, required quantities, timeline expectations, and any specific industry standards or certifications required for your project.",
  },
  {
    question: "Is there a fee for requesting a quote or consultation?",
    answer: "No, all our initial project evaluations, consultations, and quotes are provided completely free of charge and with no obligation.",
  }
];

export function QuoteView() {
 return (
 <main>
 <QuoteHero />
 <QuoteForm />
 <GlobalFaq 
    title="Quoting FAQs"
    description="Information about our estimation and quoting process."
    items={quoteFaqs} 
  />
 </main>
 );
}

