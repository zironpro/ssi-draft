"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Zap, Layers, Sun } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap: Record<string, any> = {
  Shield,
  Zap,
  Layers,
  Sun,
};

interface SpecsProps {
  features: { title: string; desc: string; icon: string }[];
  specs: { label: string; value: string }[];
}

const isWarranty = (text: string) => /warrant/i.test(text);

export function SubProductSpecs({
  features: allFeatures,
  specs: allSpecs,
}: SpecsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Warranty entries are not shown in this section
  const features = allFeatures.filter(
    (f) => !isWarranty(f.title) && !isWarranty(f.desc)
  );
  const specs = allSpecs.filter((s) => !isWarranty(s.label));

  // One reveal for the whole section: the panel, then the feature rows, then the spec table.
  useEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        })
        .from("[data-reveal='panel']", {
          opacity: 0,
          x: -24,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          "[data-reveal='feature']",
          {
            opacity: 0,
            y: 16,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          "[data-reveal='spec']",
          {
            opacity: 0,
            duration: 0.4,
            stagger: 0.04,
            ease: "none",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [features, specs]);

  const [primary, secondary, ...rest] = specs;

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[var(--color-soft-glass)]/30"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Heading */}
        <div className="mb-12 max-w-2xl md:mb-16">
          <h2 className="font-heading text-2xl font-semibold leading-tight text-[var(--color-deep-forest)] md:text-3xl">
            Technical specifications
          </h2>
          <div className="mt-5 h-1 w-16 rounded-lg bg-[var(--color-muted-copper)]" />
        </div>

        {/* Top: key figures + features */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Key figures panel */}
          {primary && (
            <div
              data-reveal="panel"
              className="flex flex-col justify-between gap-10 rounded-lg bg-[var(--color-deep-forest)] p-8 text-white lg:col-span-5 md:p-10"
            >
              <div>
                <p className="text-sm text-white/60">{primary.label}</p>
                <p className="mt-2 break-words text-3xl font-semibold leading-tight tracking-tight text-[var(--color-arch-sand)] md:text-4xl">
                  {primary.value}
                </p>
              </div>

              {secondary && (
                <div className="rounded-lg border border-white/15 bg-white/5 p-5">
                  <p className="text-sm text-white/60">{secondary.label}</p>
                  <p className="mt-1 break-words text-lg font-semibold md:text-xl">
                    {secondary.value}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Feature list */}
          {features.length > 0 && (
            <ul
              className={`divide-y divide-black/10 overflow-hidden rounded-lg border border-black/10 bg-white ${
                primary ? "lg:col-span-7" : "lg:col-span-12"
              }`}
            >
              {features.map((feature, i) => {
                const Icon = iconMap[feature.icon] || Shield;
                return (
                  <li
                    key={i}
                    data-reveal="feature"
                    className="flex items-start gap-5 p-6 transition-colors hover:bg-[var(--color-soft-glass)]/40 md:p-8"
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[var(--color-muted-copper)]">
                      <Icon className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--color-deep-forest)] md:text-lg">
                        {feature.title}
                      </h3>
                      <p className="mt-1 max-w-prose text-sm leading-relaxed text-gray-600">
                        {feature.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Full spec table */}
        {rest.length > 0 && (
          <dl className="mt-6 grid grid-cols-1 overflow-hidden rounded-lg border border-black/10 bg-white md:grid-cols-2">
            {rest.map((spec, i) => (
              <div
                key={i}
                data-reveal="spec"
                className="flex items-baseline justify-between gap-6 border-b border-black/10 px-6 py-4 last:border-b-0 md:[&:nth-last-child(2):nth-child(odd)]:border-b-0 md:odd:border-r"
              >
                <dt className="text-sm text-gray-500">{spec.label}</dt>
                <dd className="text-right text-sm font-semibold text-[var(--color-deep-forest)]">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}