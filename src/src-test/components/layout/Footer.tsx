"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-deep-forest)] text-white/80 py-16 border-t border-[var(--border-dark)] relative overflow-hidden">
      <div className="container-master relative z-10 flex flex-col md:flex-row justify-between gap-12">
        {/* Left Side: Brand & Description */}
        <div className="flex flex-col gap-6 max-w-sm">
          <Link href="/" className="inline-flex items-center gap-4">
            <img
              src="/images/ssi-logo.png"
              alt="SSI Logo"
              className="object-contain brightness-0 invert"
              style={{ height: "80px", width: "auto", maxWidth: "300px" }}
            />
            <span className="text-xl font-thin text-white/20">|</span>
            <img
              src="/images/solargard.png"
              alt="Solar Gard Logo"
              className="object-contain"
              style={{ height: "auto", width: "180px" }}
            />
          </Link>
          <p className="text-sm leading-relaxed text-[var(--color-warm-ivory)]/70">
            Engineered for excellence. We provide premium window film solutions that protect your investments, enhance privacy, and maximise energy efficiency.
          </p>
        </div>

        {/* Right Side: Links & Contact */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[var(--color-warm-ivory)]/50 mb-2">Navigation</h4>
            <Link href="/solutions" className="text-sm hover:text-[var(--color-warm-ivory)] transition-colors">Solutions</Link>
            <Link href="/applications" className="text-sm hover:text-[var(--color-warm-ivory)] transition-colors">Applications</Link>
            <Link href="/projects" className="text-sm hover:text-[var(--color-warm-ivory)] transition-colors">Projects</Link>
            <Link href="/about" className="text-sm hover:text-[var(--color-warm-ivory)] transition-colors">About</Link>
            <Link href="/contact" className="text-sm hover:text-[var(--color-warm-ivory)] transition-colors">Contact</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[var(--color-warm-ivory)]/50 mb-2">Contact</h4>
            <a href="tel:+9710000000" className="flex items-center gap-3 text-sm hover:text-[var(--color-warm-ivory)] transition-colors">
              <Phone className="size-4 text-[var(--accent)]" />
              +971 00 000 0000
            </a>
            <a href="mailto:info@ssiuae.ae" className="flex items-center gap-3 text-sm hover:text-[var(--color-warm-ivory)] transition-colors">
              <Mail className="size-4 text-[var(--accent)]" />
              info@ssiuae.ae
            </a>
            <span className="flex items-start gap-3 text-sm">
              <MapPin className="size-4 text-[var(--accent)] shrink-0 mt-0.5" />
              Dubai, United Arab Emirates
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-master mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--color-warm-ivory)]/50">
        <p>&copy; {new Date().getFullYear()} Solar Safety Film Trading L.L.C. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
