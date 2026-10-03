import { ProductDetailHero } from"./sections/detail-hero";
import { ProductDetailDescription } from"./sections/detail-description";
import { CategoryProducts } from"./sections/category-products";
import { QualityStandards } from"@/feature/about-view/sections/quality"; 
import { productsData } from"./data/products";

interface ProductDetailViewProps {
 slug: string;
}

export function ProductDetailView({ slug }: ProductDetailViewProps) {
 const category = productsData[slug];
 
 if (!category) {
 return (
 <div className="min-h-screen flex items-center justify-center bg-[var(--color-warm-ivory)]">
 <h1 className="text-3xl text-[var(--color-deep-forest)] font-bold">Category Not Found</h1>
 </div>
 );
 }
 
 const breadcrumbs = [
 { label:"Products", href:"/products" },
 { label: category.name, href: `/products/${slug}` }
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
 <CategoryProducts slug={slug} />
  </main>
 );
}
