import { ProductDetailView } from "@/feature/products-view/product-detail-view";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <ProductDetailView slug={slug} />;
}
