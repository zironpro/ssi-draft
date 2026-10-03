import { SubSolutionDetailView } from "@/feature/solutions-view/sub-solution-detail-view";

interface PageProps {
  params: Promise<{ slug: string; subSlug: string }>;
}

export default async function SubSolutionPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <SubSolutionDetailView categorySlug={resolvedParams.slug} subSlug={resolvedParams.subSlug} />;
}
