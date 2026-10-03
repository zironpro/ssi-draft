import { ServicesHero } from"./sections/hero";
import { ServicesList } from"./sections/services-list";
import { GlobalFaq } from "@/components/shared/GlobalFaq";

const serviceFaqs = [
  {
    question: "Do you offer custom design and engineering services?",
    answer: "Absolutely. Our in-house team of engineers and designers works closely with clients to develop custom solutions. From initial conceptualization to final structural drawings, we ensure your vision is translated into a highly functional and durable final product.",
  },
  {
    question: "Can you assist with structural retrofitting or upgrades?",
    answer: "Yes, our team specializes in reinforcing and upgrading existing structures to meet new codes or handle increased loads, minimizing downtime for your operations.",
  },
  {
    question: "What quality assurance standards do you follow?",
    answer: "We adhere to the highest industry standards for quality and safety. Our facilities and processes are certified, and every project undergoes rigorous inspection at multiple stages of fabrication to ensure it meets both our strict internal criteria and all relevant regulations.",
  }
];

export function ServicesView() {
 return (
 <main>
 <ServicesHero />
 <ServicesList />
 <GlobalFaq 
    title="Service FAQs"
    description="Common questions about our capabilities and expertise."
    items={serviceFaqs} 
  />
 </main>
 );
}

