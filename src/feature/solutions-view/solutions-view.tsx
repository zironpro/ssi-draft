import { SolutionsHero } from"./sections/hero";
import { SolutionsList } from"./sections/solutions-list";
import { SolutionsStats } from"./sections/stats";

export function SolutionsView() {
 return (
 <main>
 <SolutionsHero />
 <SolutionsList />
 <SolutionsStats />
 </main>
 );
}
