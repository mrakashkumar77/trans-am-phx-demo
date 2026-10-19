"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility: close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scrolling when mobile navigation drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-xs border-b border-charcoal/15 py-3"
          : "bg-cream/85 backdrop-blur-sm border-b border-charcoal/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark (Desktop & Mobile) */}
        <Link
          href="#top"
          className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-2 focus-visible:outline-teal rounded-xs"
          aria-label="Trans Am Cafe Home"
        >
          {/* Retro Monogram Seal */}
          <span className="flex size-9 sm:size-10 items-center justify-center rounded-xs bg-teal text-cream font-display font-bold text-base sm:text-lg border border-teal-deep shrink-0 transition-transform group-hover:scale-105 duration-200">
            TA
          </span>

          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-2xl text-teal tracking-tight leading-none">
              TRANS AM CAFE
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.22em] text-burnt-orange font-semibold mt-0.5">
              Sandwiches &amp; Art · Phoenix, AZ
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9"
        >
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-charcoal hover:text-teal transition-colors duration-150 relative py-1 focus-visible:outline-2 focus-visible:outline-teal rounded-xs after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-teal after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Primary Action */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            href="#menu"
            size="sm"
            variant="primary"
            icon={<ArrowRight className="size-3.5" />}
            iconPosition="right"
          >
            Explore Our Menu
          </Button>
        </div>

        {/* Mobile Accessible Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xs text-charcoal hover:text-teal hover:bg-charcoal/5 focus-visible:outline-2 focus-visible:outline-teal"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-full bg-cream-surface border-b border-charcoal/15 px-6 pt-4 pb-8 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            {siteConfig.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 rounded-xs text-base font-medium text-charcoal hover:text-teal hover:bg-cream transition-colors border-b border-charcoal/5 focus-visible:outline-2 focus-visible:outline-teal"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-charcoal/10">
              <Button
                href="#menu"
                variant="primary"
                fullWidth
                size="md"
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowRight className="size-4" />}
                iconPosition="right"
              >
                Explore Our Menu
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
