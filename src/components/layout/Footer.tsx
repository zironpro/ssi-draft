import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Residential Film", href: "#" },
    { name: "Commercial Film", href: "#" },
    { name: "Automotive Film", href: "#" },
    { name: "Safety & Security", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Projects", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Contact", href: "#" },
  ],
  contact: [
    { name: "123 Solar Way, Suite 100", href: "#" },
    { name: "Dubai, United Arab Emirates", href: "#" },
    { name: "+971 50 123 4567", href: "tel:+971501234567" },
    { name: "info@ssifilms.com", href: "mailto:info@ssifilms.com" },
  ]
};

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container-master">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Logos Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex items-center gap-4 group shrink-0">
              <div className="relative flex items-center shrink-0">
                <img 
                  src="/logo/ssi" 
                  alt="SSI Logo" 
                  className="object-contain mix-blend-screen" 
                  style={{ height: '50px', width: 'auto', maxWidth: '180px' }}
                />
              </div>
              <div className="w-[1px] h-10 bg-white/20 shrink-0"></div>
              <div className="flex relative items-center shrink-0">
                <img 
                  src="/logo/solargard.png" 
                  alt="Solar Gard Logo" 
                  className="object-contain" 
                  style={{ height: '60px', width: 'auto', maxWidth: '240px' }}
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm text-balance">
              Premium window film solutions for homes, businesses, and vehicles. Experience unmatched comfort, protection, and style powered by Solar Gard technology.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-6">
            <h4 className="text-[var(--accent)] font-semibold tracking-wider text-xs uppercase">Services</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-[var(--accent)] font-semibold tracking-wider text-xs uppercase">Company</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-[var(--accent)] font-semibold tracking-wider text-xs uppercase">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SSI Films. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
