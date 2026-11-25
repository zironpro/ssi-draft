"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Zap, Layers, Sun, FileText, Download, ExternalLink } from "lucide-react";

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
  pdfUrl?: string;
  catalogues?: { title: string; url: string }[];
}

const isWarranty = (text: string) => /warrant/i.test(text);

export function SubProductSpecs({
  features: allFeatures,
  specs: allSpecs,
  pdfUrl,
  catalogues = [],
}: SpecsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Warranty entries are not shown in this section
  const features = allFeatures.filter(
    (f) => !isWarranty(f.title) && !isWarranty(f.desc)
  );
  const specs = allSpecs.filter((s) => !isWarranty(s.label));

  const hasCatalogues = (catalogues && catalogues.length > 0) || Boolean(pdfUrl);

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
                <p className="text-sm text-white/70">{primary.label}</p>
                <p className="mt-2 break-words text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
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

        {/* Product Catalogue & Technical Documentation Section (only rendered if PDF is available) */}
        {hasCatalogues && (
          <div className="mt-12 rounded-lg border border-black/10 bg-white p-6 md:p-8 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div className="flex items-start gap-4">
                <div className="size-11 rounded-lg bg-[var(--color-arch-sand)]/15 flex items-center justify-center shrink-0">
                  <FileText className="size-6 text-[var(--color-deep-forest)]" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[var(--color-deep-forest)]">
                    Official Product Catalogue
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Download authentic technical specifications and product documentation.
                  </p>
                </div>
              </div>

              {pdfUrl && catalogues.length <= 1 && (
                <a
                  href={encodeURI(pdfUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[var(--color-deep-forest)] hover:bg-[var(--color-arch-sand)] text-white text-xs font-bold tracking-widest uppercase transition-colors shrink-0 group"
                >
                  <Download className="size-4 group-hover:translate-y-0.5 transition-transform" />
                  Download PDF
                  <ExternalLink className="size-3.5 opacity-60 ml-0.5" />
                </a>
              )}
            </div>

            {catalogues.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-3">
                  Available Catalogues ({catalogues.length})
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {catalogues.map((cat, idx) => (
                    <a
                      key={idx}
                      href={encodeURI(cat.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-md border border-gray-100 hover:border-[var(--color-arch-sand)]/40 bg-[var(--color-soft-glass)]/20 hover:bg-[var(--color-soft-glass)]/60 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="size-5 text-[var(--color-arch-sand)] shrink-0" />
                        <span className="text-sm font-semibold text-[var(--color-deep-forest)] group-hover:text-[var(--color-arch-sand)] transition-colors">
                          {cat.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400 group-hover:text-[var(--color-deep-forest)] shrink-0 ml-2">
                        <Download className="size-3.5 group-hover:translate-y-0.5 transition-transform" />
                        <span>PDF</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
