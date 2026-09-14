"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#" },
  { name: "Products", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Contact", href: "#" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-obsidian)]/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-master flex items-center justify-between">
        
        {/* Logos */}
        <Link href="/" className="flex items-center gap-4 md:gap-6 group shrink-0">
          <div className="relative flex items-center shrink-0">
            {/* The first logo */}
            <img 
              src="/logo/ssi" 
              alt="SSI Logo" 
              className="object-contain mix-blend-screen" 
              style={{ height: '70px', width: 'auto', maxWidth: '240px' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold text-white tracking-widest uppercase">SSI Films</span>';
              }}
            />
          </div>
          <div className="w-[1px] h-8 bg-white/20 shrink-0"></div>
          <div className="flex relative items-center shrink-0">
            {/* The second logo */}
            <img 
              src="/logo/solargard.png" 
              alt="Solar Gard Logo" 
              className="object-contain" 
              style={{ height: '80px', width: 'auto', maxWidth: '300px' }}
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-200 hover:text-[var(--accent)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#"
            className="ml-4 rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-[var(--text-on-dark)] hover:bg-[var(--accent-muted)] transition-colors"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-white"
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

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[var(--color-obsidian)] border-t border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-200 hover:text-[var(--accent)] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#"
                className="mt-4 rounded-md bg-[var(--accent)] px-6 py-3 text-center text-base font-medium text-[var(--text-on-dark)] hover:bg-[var(--accent-muted)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
