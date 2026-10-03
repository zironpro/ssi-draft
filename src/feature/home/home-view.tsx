import { Hero } from"./sections/hero";
import { Features } from"./sections/features";
import Solutions from"./sections/solutions";
import { Performance } from"./sections/performance";
import { Stats } from"./sections/stats";
import OurWork from"./sections/our-work";
import Credibility from "./sections/credibility";


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
 </main>
 );
}
