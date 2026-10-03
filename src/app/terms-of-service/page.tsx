import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Terms of Service | SSI Films",
  description: "Terms and conditions for using SSI Films website and installation services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[var(--color-obsidian)] text-white pt-32 pb-24">
      <div className="container-master">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-12">
          <nav className="flex items-center gap-2 mb-8 text-[var(--color-warm-ivory)]/70 text-sm font-bold tracking-widest uppercase">
            <Link href="/" className="hover:text-[var(--color-arch-sand)] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-4" />
            <span>Terms of Service</span>
          </nav>
          
          <h1 className="text-[40px] md:text-[60px] font-heading font-semibold tracking-[0.1em] uppercase text-[var(--color-warm-ivory)] leading-tight mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Last updated: October 2026
          </p>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto bg-white/5 rounded-2xl p-6 md:p-10 border border-white/10 space-y-10 text-white/80 text-lg leading-relaxed">
          
          <p>
            Welcome to <strong className="text-white">SSI Films (Solar Safety Insulation LLC)</strong>. By accessing our website, requesting a quote, or engaging our installation services, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully.
          </p>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">1. Services Provided</h2>
            <p>
              SSI Films provides professional supply and installation of premium window films, including Solar Gard architectural, automotive, safety, and decorative films across the United Arab Emirates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">2. Quotes and Estimates</h2>
            <ul className="list-disc pl-6 space-y-3 marker:text-[var(--accent)]">
              <li>All online or telephone quotes are considered preliminary estimates based on the information provided by the client.</li>
              <li>Final pricing is subject to an on-site inspection and precise measurement by an SSI Films technician.</li>
              <li>Quotes are generally valid for 30 days unless stated otherwise in writing.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">3. Installation and Site Preparation</h2>
            <p>
              To ensure a high-quality installation, clients are responsible for providing clear access to the windows. This includes moving heavy furniture or window treatments prior to the technician's arrival, unless previously arranged. SSI Films is not liable for damage to items left in the immediate installation vicinity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">4. Warranties</h2>
            <p className="mb-4">
              All window films installed by SSI Films carry the official manufacturer warranty provided by Saint-Gobain Solar Gard. 
            </p>
            <ul className="list-disc pl-6 space-y-3 marker:text-[var(--accent)]">
              <li>The duration and coverage of the warranty depend on the specific film product selected.</li>
              <li>Warranties cover film defects such as peeling, bubbling, and discoloration under normal use.</li>
              <li>The warranty does not cover damage caused by improper cleaning, physical abuse, glass breakage (unless specifically covered by a film-to-glass warranty), or structural shifting.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">5. Payment Terms</h2>
            <p>
              Payment terms will be explicitly detailed in your finalized quote or contract. Unless otherwise agreed, full payment is required upon the completion and sign-off of the installation. We accept major credit cards, bank transfers, and standard local payment methods.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">6. Limitation of Liability</h2>
            <p>
              While SSI Films takes the utmost care during installation, we are not liable for pre-existing glass flaws, scratches, or structural defects that become apparent during or after film application. Our maximum liability in connection with any service provided shall not exceed the total cost of the project paid by the client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">7. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Dubai.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">8. Contact Information</h2>
            <p className="mb-4">
              If you have any questions regarding these Terms of Service, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-3 marker:text-[var(--accent)]">
              <li><strong className="text-white">Email:</strong> <a href="mailto:sales@solarsafety.ae" className="text-[var(--accent)] hover:underline">sales@solarsafety.ae</a></li>
              <li><strong className="text-white">Phone:</strong> <a href="tel:+971558408421" className="text-[var(--accent)] hover:underline">+971 55 840 8421</a></li>
              <li><strong className="text-white">Address:</strong> X4QF+VR4 Dubai, United Arab Emirates</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}
