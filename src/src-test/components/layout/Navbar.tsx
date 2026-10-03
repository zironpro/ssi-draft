"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 80);

      // Hide navbar if scrolling down and past 200px. Show if scrolling up.
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
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
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled 
            ? "bg-[var(--color-warm-ivory)]/90 backdrop-blur-xl shadow-md py-2" 
            : "bg-transparent py-2 md:py-4"
        } ${hidden && !mobileMenuOpen ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="container-master mx-auto flex items-center justify-between transition-all duration-700 ease-in-out">
          {/* Logos */}
          <div className="relative z-50 flex items-center gap-4 md:gap-6">
            <Link href="/" className="flex items-center">
              <img
                src="/images/ssi-logo.png"
                alt="SSI Logo"
                className={`object-contain transition-all duration-700 ${scrolled ? "brightness-0" : "brightness-0 invert"}`}
                style={{ 
                  height: "70px", 
                  width: "auto" 
                }}
              />
            </Link>

            <div className="w-[1px] bg-[var(--color-deep-forest)]/20 transition-all duration-700 h-[70px]" />

            <img
              src="/images/solargard.png"
              alt="SolarGard Logo"
              className="object-contain transition-all duration-700"
              style={{ 
                height: "100px", 
                width: "auto" 
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[12px] font-bold tracking-[0.1em] uppercase text-[var(--color-deep-forest)]/80 hover:text-[var(--color-muted-copper)] transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/quote"
              className="px-6 py-3 rounded-full bg-[var(--color-deep-forest)] text-[var(--color-warm-ivory)] text-[11px] font-bold tracking-[0.15em] uppercase hover:scale-105 hover:bg-[var(--color-muted-copper)] transition-all duration-300"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="relative z-50 md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="size-8 text-[var(--color-deep-forest)]" />
            ) : (
              <Menu className="size-8 transition-colors text-[var(--color-deep-forest)]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--color-warm-ivory)] flex flex-col justify-center px-10 transition-all duration-700 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map((link, index) => (
             <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[32px] font-extrabold tracking-tight text-[var(--color-deep-forest)] hover:text-[var(--color-muted-copper)] transition-colors"
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 100 + 100}ms` : "0ms",
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quote"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 inline-block"
            style={{
              transitionDelay: mobileMenuOpen ? `${navLinks.length * 100 + 100}ms` : "0ms",
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <span className="px-8 py-4 rounded-full bg-[var(--color-deep-forest)] text-[var(--color-warm-ivory)] text-[13px] font-bold tracking-widest uppercase">
              Get a Quote
            </span>
          </Link>
        </nav>
      </div>
    </>
  );
}