import { Hero } from"./sections/hero";
import { Features } from"./sections/features";
import Solutions from"./sections/solutions";
import { Performance } from"./sections/performance";
import { Stats } from"./sections/stats";
import OurWork from"./sections/our-work";
import Credibility from "./sections/credibility";


import { GlobalFaq } from "@/components/shared/GlobalFaq";
import { Herovid } from "./sections/scroll-hero";

const homeFaqs = [
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
  }
];

export function HomeView() {
 return (
 <main className="min-h-screen bg-white dark:bg-gray-900">
    {/* <Herovid /> */}
    <Hero />
    <Credibility />
    <Features />
    <Solutions />
    <Performance />
    <Stats />
    <OurWork />
    <GlobalFaq items={homeFaqs} />
 </main>
 );
}
