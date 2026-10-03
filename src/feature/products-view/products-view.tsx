import { ProductsHero } from"./sections/hero";
import { ProductGrid } from"./sections/product-grid";
import { ProductBenefits } from"./sections/benefits";
import { GlobalFaq } from "@/components/shared/GlobalFaq";

const productFaqs = [
  {
    question: "Are your steel products certified and compliant with industry standards?",
    answer: "Yes, all our steel products undergo rigorous testing and are fully certified to meet or exceed local, national, and international standards for structural integrity.",
  },
  {
    question: "Do you supply raw steel materials as well as fabricated products?",
    answer: "We primarily focus on precision-fabricated steel products ready for assembly, but we can source and process raw materials according to your exact specifications.",
  },
  {
    question: "Can you accommodate high-volume production runs?",
    answer: "Absolutely. Our advanced manufacturing facility is equipped to handle both custom, one-off specialized components and large-scale, high-volume production runs efficiently.",
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
    description="Find answers about our steel product range, materials, and manufacturing process."
    items={productFaqs} 
  />
 </main>
 );
}

