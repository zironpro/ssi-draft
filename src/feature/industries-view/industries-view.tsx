import { IndustriesHero } from"./sections/hero";
import { IndustryGrid } from"./sections/industry-grid";
import { GlobalFaq } from "@/components/shared/GlobalFaq";

const industryFaqs = [
  {
    question: "Do you have experience working with the renewable energy sector?",
    answer: "Yes, we have provided structural steel and custom fabrications for various renewable projects, including solar farm infrastructures and wind turbine support structures.",
  },
  {
    question: "How do you ensure compliance with different industry regulations?",
    answer: "Our engineering and compliance teams stay up-to-date with sector-specific codes (such as aerospace, automotive, and heavy infrastructure) to ensure all deliverables meet strict regulatory requirements.",
  },
  {
    question: "Are you capable of handling large-scale infrastructure projects?",
    answer: "Absolutely. We have the capacity, logistics network, and project management expertise to deliver large-scale structural steel for bridges, commercial buildings, and industrial plants.",
  }
];

export function IndustriesView() {
 return (
 <main>
 <IndustriesHero />
 <IndustryGrid />
 <GlobalFaq 
    title="Industry FAQs"
    description="Learn how our steel solutions apply to your specific sector."
    items={industryFaqs} 
  />
 </main>
 );
}

