import { ProductsHero } from "./sections/hero";
import { ProductGrid } from "./sections/product-grid";
import { ProductBenefits } from "./sections/benefits";
import { GlobalFaq } from "@/components/shared/GlobalFaq";

const productFaqs = [
  {
    question: "How do Sun Control Window Films reduce indoor heat and electricity bills?",
    answer: "Our Sun Control films reject up to 82% of incoming solar heat and 99% of UV rays. By stopping solar heat before it builds up indoors, they ease the load on air conditioning systems, leading to substantial energy savings and a noticeably cooler environment.",
  },
  {
    question: "What is the difference between Interior and Exterior (OSW) Window Films?",
    answer: "Standard window films are installed on the inside glass surface. Exterior Outside Weather (OSW) films are engineered with specialized weather-resistant hardcoats for exterior installation. They are essential for skylights, double-glazed insulated units (IGUs), and areas with difficult interior access, rejecting solar heat on the exterior surface before it ever enters the glass.",
  },
  {
    question: "How do Safety & Security Window Films and Anchor Systems work together?",
    answer: "Safety and security films use heavy-duty polyester to bind shattered glass fragments together upon impact. Anchor Systems take this a step further by physically anchoring the filmed glass to the window frame using structural silicone or mechanical clamping profiles, preventing the entire shattered pane from collapsing inward during bomb blasts, storms, or forced entry.",
  },
  {
    question: "Are Marine Window Films safe from corrosion in saltwater environments?",
    answer: "Yes, our marine window films (including Xenith IR and Magnum series) are engineered with 100% non-corrosive nano-ceramic and carbon technologies. They contain no oxidizable metals, will never corrode or peel in marine air, and provide zero interference with yacht radar, GPS, or VHF radio communications.",
  }
];

export function ProductsView() {
  return (
    <main>
      <ProductsHero />
      <ProductGrid />
      <ProductBenefits />
      <GlobalFaq 
        title="Product FAQs"
        description="Find answers about our window film series, exterior solutions, security ratings, and marine applications."
        items={productFaqs} 
      />
    </main>
  );
}
