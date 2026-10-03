import { ContactHero } from "./sections/hero";
import { ContactMethods } from "./sections/contact-methods";
import { ContactLocation } from "./sections/location";

export function ContactView() {
  return (
    <main>
      <ContactHero />
      <ContactMethods />
      <ContactLocation />
    </main>
  );
}
