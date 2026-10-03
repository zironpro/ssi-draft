import { SubProductDetailView } from "@/feature/products-view/sub-product-detail-view";

interface PageProps {
  params: Promise<{
    slug: string;
    productSlug: string;
  }>;
}

export default async function SubProductDetailPage({ params }: PageProps) {
  const { slug, productSlug } = await params;
  return <SubProductDetailView categorySlug={slug} productSlug={productSlug} />;
}
