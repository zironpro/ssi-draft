"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
  subLinks?: { name: string; href: string }[];
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    subLinks: [
      { name: "Sun Control Window Film", href: "/products/sun-control-window-film" },
      { name: "Exterior Sun Control", href: "/products/exterior-sun-control-window-film" },
      { name: "Safety & Security Film", href: "/products/safety-and-security-window-film" },
      { name: "Anchor Systems", href: "/products/anchor-systems" },
      { name: "Exterior Safety Film", href: "/products/exterior-safety-window-film" },
      { name: "Marine Window Film", href: "/products/marine-window-film" },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    subLinks: [
      { name: "Solar Heat Control", href: "/solutions/solar-and-heat-control" },
      { name: "Safety & Security Film", href: "/solutions/safety-and-security" },
      { name: "Solar Safety Film", href: "/solutions/solar-safety" },
      { name: "Privacy Films", href: "/solutions/privacy" },
      { name: "Decorative Films", href: "/solutions/decorative" },
      { name: "Decorative Wraps", href: "/solutions/interior-enhancement" },
      { name: "All Solutions", href: "/solutions" },
    ],
  },
  { name: "Industries", href: "/industries" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
    setIsScrolled(window.scrollY > 20);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastY = lastScrollYRef.current;
      const diff = currentScrollY - lastY;

      setIsScrolled(currentScrollY > 20);

      // At the top of the page, always show
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (diff > 8) {
        // Scrolling down -> hide
        setIsVisible(false);
      } else if (diff < -8) {
        // Scrolling up -> show
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setOpenMobileDropdown(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          !mobileMenuOpen && !isVisible
            ? "-translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100"
        } ${
          isScrolled || mobileMenuOpen
            ? "bg-[var(--color-obsidian)]/90 backdrop-blur-md py-3 shadow-lg"
            : isHome
            ? "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 md:py-5"
            : "bg-[var(--color-obsidian)] py-5"
        }`}
      >
        <div className="container-master flex items-center justify-between">
          {/* Logos */}
          <Link href="/" className="flex items-center gap-4 md:gap-6 group shrink-0">
            <div className="relative flex items-center shrink-0">
              <img
                src="/logo/ssi"
                alt="SSI Logo"
                className="object-contain mix-blend-screen"
                style={{ height: "70px", width: "auto", maxWidth: "240px" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.innerHTML =
                    '<span class="text-xl font-bold text-white tracking-widest uppercase">SSI Films</span>';
                }}
              />
            </div>
            <div className="w-[1px] h-12 bg-white/20 shrink-0"></div>
            <div className="flex relative items-center shrink-0">
              {/* Larger Solar Gard logo. Negative margin lets it grow without making the navbar taller. */}
              <img
                src="/logo/solargard.png"
                alt="Solar Gard Logo"
                className="object-contain -my-4"
                style={{ height: "120px", width: "auto", maxWidth: "400px" }}
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-200 hover:text-[var(--accent)] transition-colors py-4 flex items-center gap-1"
                >
                  {link.name}
                  {link.subLinks && (
                    <svg
                      className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {link.subLinks && (
                  <div className="absolute top-[80%] left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="bg-[var(--color-obsidian)] border border-white/10 rounded-xl shadow-2xl w-60 p-2 flex flex-col">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="text-sm text-gray-300 hover:text-[var(--text-on-dark)] hover:bg-[var(--accent)] px-4 py-2.5 rounded-lg transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-3 ml-2">
              <a
                href="tel:+971558408421"
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-button font-medium text-white hover:bg-white/10 hover:border-white/40 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[var(--accent)]" />
                <span>Call Us</span>
              </a>
              <Link
                href="/quote"
                className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-button font-bold tracking-wide text-[var(--text-on-dark)] hover:bg-[var(--accent-muted)] transition-colors whitespace-nowrap"
              >
                Get a Quote
              </Link>
            </div>
          </nav>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+971558408421"
              className="flex items-center justify-center size-10 rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Call Us"
            >
              <Phone className="w-4 h-4 text-[var(--accent)]" />
            </a>
            <button
              className="p-2 text-white relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Sheet Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            />

            {/* Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              onDragEnd={(e, info) => {
                if (info.offset.y > 50 || info.velocity.y > 200) {
                  setMobileMenuOpen(false);
                }
              }}
              className="lg:hidden fixed bottom-0 left-0 right-0 z-[70] bg-[var(--color-obsidian)] rounded-t-3xl border-t border-white/10 shadow-2xl pb-8 flex flex-col"
              style={{ maxHeight: "85vh" }}
            >
              {/* Drag Handle */}
              <div className="w-full flex justify-center py-4 cursor-grab active:cursor-grabbing shrink-0">
                <div className="w-12 h-1.5 bg-white/20 rounded-full" />
              </div>

              {/* Mobile Logos */}
              <div className="flex items-center justify-center gap-4 px-6 mb-4 shrink-0">
                <img
                  src="/logo/ssi"
                  alt="SSI Logo"
                  className="object-contain mix-blend-screen"
                  style={{ height: "40px", width: "auto" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerHTML =
                      '<span class="text-xl font-bold text-white tracking-widest uppercase">SSI</span>';
                  }}
                />
                <div className="w-[1px] h-8 bg-white/20 shrink-0"></div>
                <img
                  src="/logo/solargard.png"
                  alt="Solar Gard Logo"
                  className="object-contain"
                  style={{ height: "75px", width: "auto" }}
                />
              </div>

              <nav className="flex flex-col px-6 pb-6 gap-2 overflow-y-auto overscroll-contain">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col border-b border-white/5">
                    {link.subLinks ? (
                      <>
                        <button
                          onClick={(e) => toggleMobileDropdown(link.name, e)}
                          className="flex items-center justify-between text-base font-medium text-gray-200 hover:text-[var(--accent)] transition-colors py-2.5 w-full text-left"
                        >
                          {link.name}
                          <svg
                            className={`w-5 h-5 opacity-70 transition-transform ${
                              openMobileDropdown === link.name ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {openMobileDropdown === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden flex flex-col gap-1 pl-4 pb-2"
                            >
                              {link.subLinks.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className="text-sm font-medium text-gray-400 hover:text-[var(--accent)] py-2"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-base font-medium text-gray-200 hover:text-[var(--accent)] transition-colors py-2.5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="mt-4 flex flex-col gap-2.5 shrink-0">
                  <a
                    href="tel:+971558408421"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-center text-base font-button font-semibold text-white hover:bg-white/10 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone className="w-5 h-5 text-[var(--accent)]" />
                    <span>Call: +971 55 840 8421</span>
                  </a>
                  <Link
                    href="/quote"
                    className="rounded-xl bg-[var(--accent)] px-6 py-3 text-center text-base font-button font-bold tracking-wide text-[var(--text-on-dark)] hover:bg-[var(--accent-muted)] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}