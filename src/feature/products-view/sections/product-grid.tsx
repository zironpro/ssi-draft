"use client";

import { FileText } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Sun Control Window Film",
    slug: "sun-control-window-film",
    description: "Reject up to 82% of solar heat, soften harsh glare, and significantly reduce cooling costs across architectural glazing.",
    image: "/products/sun-control.png",
    pdfUrl: "/products/pdf/sun-control-window-film/LX 70 SAMPLE PAGE SOLAR GARD 0326.pdf",
  },
  {
    id: 2,
    title: "Exterior Sun Control Window Film",
    slug: "exterior-sun-control-window-film",
    description: "Heavy-duty outside weather (OSW) films that intercept solar heat before it enters double glazing and skylights.",
    image: "/products/exterior-sun-control.png",
  },
  {
    id: 3,
    title: "Safety & Security Window Film",
    slug: "safety-and-security-window-film",
    description: "Certified anti-shatter defense that binds glass together upon impact, preventing severe injury and forced entry.",
    image: "/products/safety-and-security.png",
    pdfUrl: "/products/pdf/safety-and-security-window-film/Armorcoat 4 - 7 - 8 Mil Clear SAMPLE PAGE SOLAR GARD 0326.pdf",
  },
  {
    id: 4,
    title: "Anchor Systems",
    slug: "anchor-systems",
    description: "Advanced structural silicone and mechanical profile attachments that bind filmed glass securely to window frames.",
    image: "/sub-products/anchor-systems.png",
  },
  {
    id: 5,
    title: "Exterior Safety Window Film",
    slug: "exterior-safety-window-film",
    description: "Weather-resistant impact and anti-shatter defense for building facades, glass balustrades, and polycarbonate glazing.",
    image: "/sub-solutions/shatter-protection.png",
    pdfUrl: "/products/pdf/safety-and-security-window-film/Sentinel Plus 8 mil Clear SAMPLE PAGE SOLAR GARD 0326.pdf",
  },
  {
    id: 6,
    title: "Marine Window Film",
    slug: "marine-window-film",
    description: "Corrosion-proof ceramic and privacy window films engineered specifically for luxury yachts, boats, and maritime vessels.",
    image: "/sub-products/magnum-ir.png",
  },
];

export function ProductGrid() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-warm-ivory)]">
      <div className="container-master mx-auto px-4 md:px-0">
        <div className="mb-12 md:mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">
            Our Offerings
          </h2>
          <h3 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] uppercase text-[var(--color-deep-forest)] leading-tight mb-4">
            Engineered for excellence. <br />
            Designed for impact.
          </h3>
          <p className="text-base md:text-lg text-[var(--color-deep-forest)]/70 max-w-3xl leading-relaxed">
            Explore our comprehensive range of high-performance window films and architectural solutions,
            meticulously crafted to elevate your environment with superior protection and aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="flex flex-col md:flex-row items-stretch bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="w-full md:w-2/5 shrink-0 bg-gray-100 flex flex-col overflow-hidden md:min-h-[200px] min-h-[240px] relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full flex-1 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between w-full bg-white z-10 relative">
                <div>
                  <h4 className="text-xl md:text-[22px] font-bold text-gray-900 mb-3 leading-snug">
                    {product.title}
                  </h4>
                  <p className="text-[var(--color-deep-forest)]/70 text-[15px] leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold tracking-wider uppercase text-[var(--color-arch-sand)] group-hover:text-[var(--color-deep-forest)] transition-colors">
                    Explore Series &rarr;
                  </span>
                  {product.pdfUrl && (
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(encodeURI(product.pdfUrl!), "_blank", "noopener,noreferrer");
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-[var(--color-arch-sand)]/15 text-[var(--color-deep-forest)] hover:bg-[var(--color-arch-sand)] hover:text-white transition-all shadow-xs cursor-pointer z-20"
                      title="Download Catalogue PDF"
                    >
                      <FileText className="size-3.5" />
                      Catalogue (PDF)
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
          
          <Link
            href="/contact"
            className="lg:col-span-2 flex flex-col items-center justify-center p-8 md:p-12 text-center rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group bg-[var(--color-deep-forest)]"
          >
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-[var(--color-arch-sand)] rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-48 h-48 bg-white rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
                Need a Custom Solution?
              </h4>
              <p className="text-white/80 text-sm md:text-[15px] leading-relaxed mb-6 max-w-md">
                Talk to our window film specialists today to find the perfect performance film for your unique architectural or marine project.
              </p>
              <span className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-arch-sand)] text-white text-sm font-bold tracking-widest uppercase rounded-md hover:bg-white hover:text-[var(--color-deep-forest)] transition-colors">
                Contact Us
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
