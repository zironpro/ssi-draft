import { AboutHero } from"./sections/hero";
import { WhyChooseUs } from"./sections/why-choose-us";
import { OurExpertise } from"./sections/expertise";
import { OurApproach } from"./sections/approach";
import { QualityStandards } from"./sections/quality";
import { GlobalFaq } from "@/components/shared/GlobalFaq";

const aboutFaqs = [
  {
    question: "How long has SSI Films been serving the UAE and GCC region?",
    answer: "SSI Films (Solar Safety Insulation LLC) has been delivering world-class architectural and automotive surface protection solutions for over two decades as the official UAE distributor for Saint-Gobain Solar Gard.",
  },
  {
    question: "Where is SSI Films located in the UAE?",
    answer: "Our headquarters and primary operations are based in Dubai, UAE, providing specialized film supply, precision cutting, and certified turnkey installation across all seven emirates and the broader GCC.",
  },
  {
    question: "What is your company's commitment to energy efficiency and sustainability?",
    answer: "Our Solar Gard architectural window films are certified to dramatically reduce solar heat gain, decreasing indoor cooling energy consumption by up to 30% and lowering overall carbon emissions for buildings.",
  }
];

export function AboutView() {
 return (
 <main>
 <AboutHero />
 <WhyChooseUs />
 <OurExpertise />
 <OurApproach />
 <GlobalFaq 
    title="Company FAQs"
    description="Learn more about our history, values, and operations."
    items={aboutFaqs} 
  />
  </main>
 );
}

