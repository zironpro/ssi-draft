import { ProductDetailHero } from"@/feature/products-view/sections/detail-hero";
import { ProductDetailDescription } from"@/feature/products-view/sections/detail-description";
import { QualityStandards } from"@/feature/about-view/sections/quality"; 
import { industriesData } from"./data/industries";
import Link from"next/link";
import { ArrowRight } from"lucide-react";

interface IndustryDetailViewProps {
 slug: string;
}

export function IndustryDetailView({ slug }: IndustryDetailViewProps) {
 const industry = industriesData[slug];
 
 if (!industry) {
 return (
 <div className="min-h-screen flex items-center justify-center bg-[var(--color-warm-ivory)]">
 <h1 className="text-3xl text-[var(--color-deep-forest)] font-bold">Industry Not Found</h1>
 </div>
 );
 }
 
 const breadcrumbs = [
 { label:"Industries", href:"/industries" },
 { label: industry.name, href: `/industries/${slug}` }
 ];
 
 return (
 <main>
 <ProductDetailHero 
 title={industry.name}
 subtitle={industry.heroSubtitle}
 image={industry.heroImage}
 stats={industry.stats}
 breadcrumbs={breadcrumbs}
 />
 
 <ProductDetailDescription 
 title={industry.descriptionTitle}
 paragraphs={industry.descriptionParagraphs}
 image={industry.descriptionImage}
 />

 {/* Cross-link to solutions */}
 <section className="py-24 bg-white border-t border-[var(--color-deep-forest)]/10">
 <div className="container-master text-center max-w-4xl mx-auto px-4">
 <h2 className="text-3xl md:text-5xl font-semibold text-[var(--color-deep-forest)] mb-6">
 Ready to upgrade your facility?
 </h2>
 <p className="text-xl text-[var(--color-deep-forest)]/70 mb-10">
 Explore our comprehensive range of architectural window films and surface solutions engineered for the {industry.name} sector.
 </p>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <Link 
 href="/solutions"
 className="inline-flex items-center justify-center gap-3 px-10 h-[64px] bg-[var(--color-deep-forest)] text-[var(--color-warm-ivory)] font-bold tracking-[0.15em] text-[14px] uppercase rounded-lg transition-transform hover:scale-105"
 >
 Explore Solutions
 </Link>
 <Link 
 href="/contact"
 className="inline-flex items-center justify-center gap-3 px-10 h-[64px] bg-transparent border-2 border-[var(--color-deep-forest)] text-[var(--color-deep-forest)] font-bold tracking-[0.15em] text-[14px] uppercase rounded-lg transition-colors hover:bg-[var(--color-deep-forest)] hover:text-[var(--color-warm-ivory)]"
 >
 Get a Quote
 </Link>
 </div>
 </div>
 </section>

  </main>
 );
}
