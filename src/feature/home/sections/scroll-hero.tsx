import Link from "next/link";
import ScrollHero from "./ScrollHero";


export function Herovid() {
  return (
    <ScrollHero
      frameCount={150}
      scrollLengthVh={500}
      alt="Steel fabrication in progress: structural steel being cut, welded and assembled in our workshop"
    >
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
          Precision steel fabrication, built to your drawings.
        </h1>

        <p className="mt-5 max-w-xl text-base text-gray-200 sm:text-lg">
          Structural frameworks and custom components for commercial,
          industrial and infrastructure projects, with strict quality control
          and on-time delivery.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-md bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Request a quote
          </Link>
          <Link
            href="#our-work"
            className="rounded-md border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            See our work
          </Link>
        </div>
      </div>
    </ScrollHero>
  );
}