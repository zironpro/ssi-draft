import { SolutionDetailView } from "@/feature/solutions-view/solution-detail-view";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SolutionCategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <SolutionDetailView slug={resolvedParams.slug} />;
}
