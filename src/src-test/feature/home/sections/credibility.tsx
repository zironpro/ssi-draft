"use client";

export default function Credibility() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-warm-ivory)] border-t border-[var(--border-light)]">
      <div className="container-master flex flex-col items-center text-center">
        <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--accent)] mb-8">
          OFFICIAL DISTRIBUTOR
        </h2>
        
        <div className="mb-12">
          <img 
            src="/images/solargard.png" 
            alt="SolarGard by Saint-Gobain" 
            className="w-[120px] md:w-[150px] h-auto object-contain mx-auto"
          />
        </div>

        <p className="max-w-2xl text-xl md:text-3xl font-medium tracking-tight text-[var(--color-deep-forest)] leading-relaxed">
          Trusted window film technology engineered for performance, protection and comfort.
        </p>
      </div>
    </section>
  );
}
