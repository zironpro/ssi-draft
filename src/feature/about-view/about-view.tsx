import { AboutHero } from"./sections/hero";
import { WhyChooseUs } from"./sections/why-choose-us";
import { OurExpertise } from"./sections/expertise";
import { OurApproach } from"./sections/approach";
import { QualityStandards } from"./sections/quality";
import { GlobalFaq } from "@/components/shared/GlobalFaq";

const aboutFaqs = [
  {
    question: "How long has ZironPro been in the steel fabrication business?",
    answer: "We have been providing high-quality steel fabrication services for over two decades. Our extensive experience has allowed us to perfect our processes and build a strong reputation in the industry.",
  },
  {
    question: "Where are your manufacturing facilities located?",
    answer: "Our primary state-of-the-art manufacturing facility is strategically located to optimize logistics and ensure timely delivery of structural components nationwide.",
  },
  {
    question: "What is your company's approach to sustainability?",
    answer: "We are committed to sustainable practices. We actively recycle scrap metal, optimize energy use in our facilities, and source steel from environmentally responsible mills whenever possible.",
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

