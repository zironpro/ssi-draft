"use client";

export default function Credibility() {
  return (
    <section className="py-14 md:py-20 bg-[var(--color-warm-ivory)] border-y border-[var(--border-light)]">
      <div className="container-master flex flex-col items-center text-center">
        <h2 className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-[var(--accent)] mb-6">
          OFFICIAL DISTRIBUTOR OF SOLAR GARD
        </h2>
        
        <div className="mb-8">
          <img 
            src="/logo/Solar-Gard-Saint-Gobain.webp" 
            alt="Solar Gard Saint-Gobain Official Distributor" 
            className="w-[140px] md:w-[180px] h-auto object-contain mx-auto"
          />
        </div>

        <p className="max-w-3xl text-lg md:text-2xl font-medium tracking-tight text-[var(--color-deep-forest)] leading-relaxed">
          We provide world-class window film technology engineered for solar heat control, anti-shatter safety, and architectural comfort.
        </p>
      </div>
    </section>
  );
}
