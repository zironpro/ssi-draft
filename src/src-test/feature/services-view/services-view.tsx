import { ServicesHero } from "./sections/hero";
import { ServicesList } from "./sections/services-list";

export function ServicesView() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
    </main>
  );
}
