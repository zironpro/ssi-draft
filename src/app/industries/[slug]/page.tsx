import { IndustryDetailView } from "@/feature/industries-view/industry-detail-view";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function IndustryPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <IndustryDetailView slug={resolvedParams.slug} />;
}
