import { AboutHero } from "./sections/hero";
import { WhyChooseUs } from "./sections/why-choose-us";
import { OurExpertise } from "./sections/expertise";
import { OurApproach } from "./sections/approach";
import { QualityStandards } from "./sections/quality";

export function AboutView() {
  return (
    <main>
      <AboutHero />
      <WhyChooseUs />
      <OurExpertise />
      <OurApproach />
      <QualityStandards />
    </main>
  );
}
