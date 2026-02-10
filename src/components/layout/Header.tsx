"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Fonctionnalit\és", href: "/fonctionnalites" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "\À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass shadow-lg shadow-gray-900/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:items-center lg:gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <Button variant="ghost" href="https://app.the-sheep.fr/dashboard">
                Se connecter
              </Button>
              <Button variant="primary" href="https://app.the-sheep.fr/dashboard">
                Essai gratuit
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 lg:hidden"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-shrink-0"
                  >
                    <Logo />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    aria-label="Fermer le menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 overflow-y-auto px-4 py-6">
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block rounded-lg px-4 py-3 text-base font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="border-t border-gray-100 px-4 py-6">
                  <div className="flex flex-col gap-3">
                    <Button variant="ghost" href="https://app.the-sheep.fr/dashboard" className="w-full justify-center">
                      Se connecter
                    </Button>
                    <Button variant="primary" href="https://app.the-sheep.fr/dashboard" className="w-full justify-center">
                      Essai gratuit
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
