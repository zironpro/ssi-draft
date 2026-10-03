import Link from "next/link";

const footerLinks = {
  products: [
    { name: "Safety & Security", href: "/products/safety-and-security" },
    { name: "Solar Control", href: "/products/solar-control" },
    { name: "Privacy", href: "/products/privacy" },
    { name: "Decorative", href: "/products/decorative" },
    { name: "Specialty", href: "/products/specialty" },
  ],
  solutions: [
    { name: "Solar & Heat Control", href: "/solutions/solar-and-heat-control" },
    { name: "Safety & Security", href: "/solutions/safety-and-security" },
    { name: "Privacy & Decorative", href: "/solutions/privacy" },
    { name: "All Solutions", href: "/solutions" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Industries", href: "/industries" },
    { name: "Blog & Resources", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ],
  contact: [
    { name: "X4QF+VR4 Dubai", href: "#" },
    { name: "United Arab Emirates", href: "#" },
    { name: "+971 55 840 8421", href: "tel:+971558408421" },
    { name: "sales@solarsafety.ae", href: "mailto:sales@solarsafety.ae" },
  ]
};

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container-master">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Logos Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
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
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-2">
              <a href="#social" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[var(--accent)] hover:text-[var(--text-on-dark)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#social" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[var(--accent)] hover:text-[var(--text-on-dark)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#social" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[var(--accent)] hover:text-[var(--text-on-dark)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#social" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[var(--accent)] hover:text-[var(--text-on-dark)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-[var(--accent)] font-semibold tracking-wider text-xs uppercase">Products</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-[var(--accent)] font-semibold tracking-wider text-xs uppercase">Solutions</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.solutions.map((link) => (
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

          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-[var(--accent)] font-semibold tracking-wider text-xs uppercase">Contact</h4>
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
            <Link href="/" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
