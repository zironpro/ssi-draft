import { Hero } from"./sections/hero";
import { Features } from"./sections/features";
import Solutions from"./sections/solutions";
import { Performance } from"./sections/performance";
import { Stats } from"./sections/stats";
import OurWork from"./sections/our-work";
import Credibility from "./sections/credibility";


import { GlobalFaq } from "@/components/shared/GlobalFaq";

const homeFaqs = [
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
  }
];

export function HomeView() {
 return (
 <main className="min-h-screen bg-white dark:bg-gray-900">
    <Hero />
    <Features />
    <Solutions />
    <Performance />
    <Stats />
    <OurWork />
    <Credibility />
    <GlobalFaq items={homeFaqs} />
 </main>
 );
}
