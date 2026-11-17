import Link from "next/link";
import { Instrument_Serif, Manrope } from "next/font/google";
import ScrollHero from "./ScrollHero";

// Self-hosted by next/font: no external request, no layout shift
const display = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const body = Manrope({
  subsets: ["latin"],
  display: "swap",
});

const steps = [
  { title: "Block the heat", text: "Up to 82% of solar heat rejected." },
  { title: "Filter the UV", text: "99% of harmful rays stopped." },
  { title: "Stay protected", text: "Anti-shatter safety on every pane." },
];

export function Herovid() {
  return (
    <ScrollHero
      frameCount={150}
      scrollLengthVh={500}
      width={1440}
      height={810}
      steps={steps}
      stepsClassName={body.className}
      stepTitleClassName={display.className}
      alt="Professional SSI technicians installing Saint-Gobain Solar Gard architectural window film on glass facade for superior solar heat rejection, glare control, and anti-shatter safety"
    >
      <div className={`max-w-xl ${body.className}`}>
        <h1
          className={`${display.className} text-3xl font-normal leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl`}
        >
          Engineered Window Films for Protection &amp; Comfort.
        </h1>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-200 sm:text-[0.95rem]">
          Official distributor of Saint-Gobain Solar Gard in the UAE. Advanced
          solar heat rejection, anti-shatter safety, and architectural films
          engineered to block up to 82% of heat and 99% of harmful UV rays.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href="/quote"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-[0.8rem] font-button font-bold tracking-wide text-[var(--text-on-dark)] shadow-lg shadow-[var(--accent)]/20 transition hover:scale-105 hover:bg-[var(--accent-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Request a Quote
          </Link>
          <Link
            href="/solutions"
            className="rounded-full border border-white/60 bg-black/20 px-6 py-3 text-[0.8rem] font-button font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </ScrollHero>
  );
}