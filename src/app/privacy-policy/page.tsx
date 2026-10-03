import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | SSI Films",
  description: "Learn about how SSI Films collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
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
            <span>Privacy Policy</span>
          </nav>
          
          <h1 className="text-[40px] md:text-[60px] font-heading font-semibold tracking-[0.1em] uppercase text-[var(--color-warm-ivory)] leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Last updated: October 2026
          </p>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto bg-white/5 rounded-2xl p-6 md:p-10 border border-white/10 space-y-10 text-white/80 text-lg leading-relaxed">
          
          <p>
            At <strong className="text-white">SSI Films (Solar Safety Insulation LLC)</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us when visiting our website or engaging with our window film installation services in the United Arab Emirates.
          </p>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information that you voluntarily provide to us when requesting a quote, booking an installation, or contacting our support team. This may include:</p>
            <ul className="list-disc pl-6 space-y-3 marker:text-[var(--accent)]">
              <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number, and physical address (for installation purposes).</li>
              <li><strong className="text-white">Project Details:</strong> Information about your property, window dimensions, and specific film requirements (e.g., Solar Gard product preferences).</li>
              <li><strong className="text-white">Technical Data:</strong> We may automatically collect standard usage data (such as IP addresses, browser types, and device information) to optimize our website experience.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">The information we collect is strictly used to provide and improve our services. Specifically, we use your data to:</p>
            <ul className="list-disc pl-6 space-y-3 marker:text-[var(--accent)]">
              <li>Process requests for quotes and schedule on-site inspections.</li>
              <li>Coordinate and complete window film installations at your premises.</li>
              <li>Register your installation for official Solar Gard manufacturer warranties.</li>
              <li>Respond to your inquiries, customer service requests, and support needs.</li>
              <li>Improve our website functionality and service offerings.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">3. Data Sharing and Protection</h2>
            <p className="mb-4">
              We respect your privacy and <strong className="text-white">do not sell, rent, or trade</strong> your personal information to third parties for marketing purposes. We may share necessary details only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-3 marker:text-[var(--accent)] mb-4">
              <li><strong className="text-white">Manufacturer Warranties:</strong> Relevant details may be shared with Saint-Gobain Solar Gard to register and validate your product warranty.</li>
              <li><strong className="text-white">Legal Compliance:</strong> If required by UAE law, we may disclose information to authorized government or law enforcement agencies.</li>
            </ul>
            <p>
              We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">4. Cookies and Tracking</h2>
            <p>
              Our website may use basic cookies to enhance user experience and analyze site traffic. You can choose to disable cookies through your browser settings, though some website features may not function optimally.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">5. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data stored by SSI Films. If you wish to exercise these rights, please contact our team.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please reach out to us:
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
