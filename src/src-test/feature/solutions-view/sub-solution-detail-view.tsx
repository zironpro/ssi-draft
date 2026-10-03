import { ProductDetailHero } from "@/feature/products-view/sections/detail-hero";
import { ProductDetailDescription } from "@/feature/products-view/sections/detail-description";
import { SubProductSpecs } from "@/feature/products-view/sections/sub-product-specs";
import { QualityStandards } from "@/feature/about-view/sections/quality"; 
import { solutionsData } from "./data/solutions";

interface SubSolutionDetailViewProps {
  categorySlug: string;
  subSlug: string;
}

export function SubSolutionDetailView({ categorySlug, subSlug }: SubSolutionDetailViewProps) {
  const category = solutionsData[categorySlug];
  const solution = category?.subSolutions[subSlug];

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-warm-ivory)]">
        <h1 className="text-3xl text-[var(--color-deep-forest)] font-bold">Solution Not Found</h1>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Solutions", href: "/solutions" },
    { label: category?.name || "Category", href: `/solutions/${categorySlug}` },
    { label: solution.name, href: `/solutions/${categorySlug}/${subSlug}` }
  ];
  
  return (
    <main>
      <ProductDetailHero 
        title={solution.name}
        subtitle={solution.subtitle}
        image={solution.heroImage}
        stats={solution.stats}
        breadcrumbs={breadcrumbs}
      />
      <ProductDetailDescription 
        title={solution.descriptionTitle}
        paragraphs={solution.descriptionParagraphs}
        image={solution.descriptionImage}
      />
      <SubProductSpecs 
        features={solution.features}
        specs={solution.specs}
      />
      <QualityStandards />
    </main>
  );
}
