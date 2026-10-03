import { ProductDetailHero } from"@/feature/products-view/sections/detail-hero";
import { ProductDetailDescription } from"@/feature/products-view/sections/detail-description";
import { CategorySolutions } from"./sections/category-solutions";
import { QualityStandards } from"@/feature/about-view/sections/quality"; 
import { solutionsData } from"./data/solutions";

interface SolutionDetailViewProps {
 slug: string;
}

export function SolutionDetailView({ slug }: SolutionDetailViewProps) {
 const category = solutionsData[slug];
 
 if (!category) {
 return (
 <div className="min-h-screen flex items-center justify-center bg-[var(--color-warm-ivory)]">
 <h1 className="text-3xl text-[var(--color-deep-forest)] font-bold">Solution Not Found</h1>
 </div>
 );
 }
 
 const breadcrumbs = [
 { label:"Solutions", href:"/solutions" },
 { label: category.name, href: `/solutions/${slug}` }
 ];
 
 return (
 <main>
 <ProductDetailHero 
 title={category.name}
 subtitle={category.heroSubtitle}
 image={category.heroImage}
 breadcrumbs={breadcrumbs}
 />
 <ProductDetailDescription 
 title={category.descriptionTitle}
 paragraphs={category.descriptionParagraphs}
 image={category.descriptionImage}
 />
 <CategorySolutions slug={slug} />
  </main>
 );
}
