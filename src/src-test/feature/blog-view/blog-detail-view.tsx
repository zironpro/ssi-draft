import { BlogDetailHero } from "./sections/detail-hero";
import { BlogDetailContent } from "./sections/detail-content";

export function BlogDetailView() {
  return (
    <main>
      <BlogDetailHero />
      <BlogDetailContent />
    </main>
  );
}
