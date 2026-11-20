"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, BadgeCheck, Sun, ShieldCheck } from "lucide-react";

const benefits = [
  {
    title: "Authorised Premium Partner",
    desc: "Official Saint-Gobain Solar Gard partner delivering authentic, certified architectural films.",
    icon: Award,
  },
  {
    title: "Certified In-House Installation",
    desc: "Precision installation by factory-trained specialists, with no compromise on quality.",
    icon: BadgeCheck,
  },
  {
    title: "Engineered for UAE Heat",
    desc: "Blocks up to 82% of solar heat and 99% of damaging UV rays.",
    icon: Sun,
  },
  {
    title: "Manufacturer-Backed Warranties",
    desc: "Long-term commercial and residential warranties for total peace of mind.",
    icon: ShieldCheck,
  },
];

export function Performance() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[var(--color-obsidian)] py-10 font-sans">
      {/* Single background image + flat dark overlay (no glow, no particles) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img.png"
          alt=""
          fill
          priority={false}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-obsidian)]/80" />
      </div>

      <div className="container-master relative z-10 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Left: content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 lg:col-span-7"
        >
          <div className="flex max-w-xl flex-col gap-3">
            <h2 className="font-heading text-[32px] font-semibold leading-tight tracking-[0.04em] text-white text-balance md:text-[44px] lg:text-[52px]">
              Why choose SSI Films?
            </h2>
            <p className="text-fluid-base leading-relaxed text-gray-300 text-pretty">
              Over two decades of architectural and automotive surface
              protection in the UAE. SSI Films (Solar Safety Insulation LLC) is
              your certified Saint-Gobain Solar Gard partner for thermal
              control, anti-shatter security and turnkey installation.
            </p>
          </div>

          {/* 2x2 benefits with hairline dividers */}
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {benefits.map(({ title, desc, icon: Icon }) => (
              <li
                key={title}
                className="flex items-start gap-4 border-t border-white/15 py-4"
              >
                <Icon
                  className="mt-0.5 h-6 w-6 shrink-0 text-[var(--accent)]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-400">
                    {desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-7 py-3 font-button text-base font-medium text-white transition-colors duration-200 hover:bg-[var(--accent-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              About SSI
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3 font-button text-base font-medium text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>

        {/* Right: single team image */}
        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15">
            <Image
              src="/images/team.jpg"
              alt="The SSI Films installation team"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}