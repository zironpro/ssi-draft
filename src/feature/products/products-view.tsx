import { ProductsHero } from"./sections/hero";
import { ProductGrid } from"./sections/product-grid";
import { ProductBenefits } from"./sections/benefits";

export function ProductsView() {
 return (
 <main>
 <ProductsHero />
 <ProductGrid />
 <ProductBenefits />
 </main>
 );
}
