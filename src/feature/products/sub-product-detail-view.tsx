import { ProductDetailHero } from"./sections/detail-hero";
import { ProductDetailDescription } from"./sections/detail-description";
import { SubProductSpecs } from"./sections/sub-product-specs";
import { QualityStandards } from"@/feature/about-view/sections/quality"; 
import { productsData } from"./data/products";

interface SubProductDetailViewProps {
 categorySlug: string;
 productSlug: string;
}

export function SubProductDetailView({ categorySlug, productSlug }: SubProductDetailViewProps) {
 const category = productsData[categorySlug];
 const product = category?.subProducts[productSlug];

 if (!product) {
 return (
 <div className="min-h-screen flex items-center justify-center bg-[var(--color-warm-ivory)]">
 <h1 className="text-3xl text-[var(--color-deep-forest)] font-bold">Product Not Found</h1>
 </div>
 );
 }

 const breadcrumbs = [
 { label:"Products", href:"/products" },
 { label: category?.name ||"Category", href: `/products/${categorySlug}` },
 { label: product.name, href: `/products/${categorySlug}/${productSlug}` }
 ];
 
 return (
 <main>
 <ProductDetailHero 
 title={product.name}
 subtitle={product.subtitle}
 image={product.heroImage}
 stats={product.stats}
 breadcrumbs={breadcrumbs}
 />
 <ProductDetailDescription 
 title={product.descriptionTitle}
 paragraphs={product.descriptionParagraphs}
 image={product.descriptionImage}
 />
 <SubProductSpecs 
 features={product.features}
 specs={product.specs}
 />
  </main>
 );
}
