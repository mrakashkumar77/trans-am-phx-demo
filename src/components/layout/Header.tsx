"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/SocialIcons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility: close mobile menu on Escape key press and restore focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
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

  // Framer Motion variants for the full-screen overlay upward drift
  const overlayVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.32,
        ease: [0.16, 1, 0.3, 1] as const,
        when: "beforeChildren",
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -20,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.22,
        ease: [0.4, 0, 1, 1] as const,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.28,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -10,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.15,
      },
    },
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Background layer */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-300 ${
          mobileMenuOpen
            ? "bg-cream-surface/95 backdrop-blur-md border-b border-charcoal/10"
            : scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-xs border-b border-charcoal/15"
            : "bg-cream/85 backdrop-blur-sm border-b border-charcoal/10"
        }`}
      />

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 relative z-50 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        {/* Brand Wordmark (Desktop & Mobile) */}
        <Link
          href="#top"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-2 focus-visible:outline-teal rounded-xs relative z-50"
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
              Sandwiches &amp; Art Gallery
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
          ref={toggleButtonRef}
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden relative z-50 inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded-xs text-charcoal hover:text-teal hover:bg-charcoal/5 focus-visible:outline-2 focus-visible:outline-teal cursor-pointer transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileMenuOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.85 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.85 }}
                transition={{ duration: shouldReduceMotion ? 0.05 : 0.2 }}
                className="flex items-center justify-center"
              >
                <X className="size-6" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90, scale: 0.85 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.85 }}
                transition={{ duration: shouldReduceMotion ? 0.05 : 0.2 }}
                className="flex items-center justify-center"
              >
                <Menu className="size-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Full-Screen Mobile Navigation Overlay with Smooth Fade and Upward Drift */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 z-40 h-[100dvh] w-screen bg-cream-surface/98 backdrop-blur-xl pt-24 pb-8 px-6 sm:px-8 overflow-y-auto overscroll-contain flex flex-col justify-between"
          >
            <div className="max-w-md w-full mx-auto flex flex-col justify-between h-full">
              {/* Navigation Links with Staggered Entrance */}
              <nav aria-label="Mobile navigation" className="flex flex-col">
                <motion.div
                  variants={itemVariants}
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-burnt-orange pb-3 mb-2 border-b border-charcoal/10"
                >
                  Navigation
                </motion.div>

                <div className="flex flex-col divide-y divide-charcoal/8">
                  {siteConfig.nav.map((link, index) => (
                    <motion.div key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group flex items-center justify-between py-3.5 px-1 min-h-[48px] rounded-xs text-charcoal hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-teal"
                      >
                        <div className="flex items-baseline gap-3.5">
                          <span className="font-mono text-xs font-semibold text-burnt-orange/80 group-hover:text-burnt-orange transition-colors">
                            {`0${index + 1}`}
                          </span>
                          <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight group-hover:translate-x-1 transition-transform duration-200">
                            {link.label}
                          </span>
                        </div>
                        <ArrowRight className="size-4 text-charcoal-subtle group-hover:text-teal group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Primary Action Button */}
                <motion.div variants={itemVariants} className="mt-6 pt-2">
                  <Button
                    href="#menu"
                    variant="primary"
                    fullWidth
                    size="lg"
                    onClick={() => setMobileMenuOpen(false)}
                    icon={<ArrowRight className="size-4" />}
                    iconPosition="right"
                  >
                    Explore Our Menu
                  </Button>
                </motion.div>
              </nav>

              {/* Cafe Info & Quick Details at bottom of full-screen drawer */}
              <motion.div
                variants={itemVariants}
                className="mt-8 pt-6 border-t border-charcoal/15 flex flex-col gap-3.5 text-xs text-charcoal-muted"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="size-3.5 text-burnt-orange shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-charcoal text-[11px] uppercase tracking-wider">
                        Location
                      </span>
                      <span>1506 Grand Ave, Phoenix, AZ</span>
                    </div>
                  </div>

                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-teal hover:text-burnt-orange font-medium py-1 px-2.5 rounded-xs bg-cream hover:bg-cream-soft transition-colors shrink-0"
                    aria-label="Trans Am Cafe on Instagram"
                  >
                    <InstagramIcon className="size-3.5" />
                    <span>{siteConfig.instagramHandle}</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-charcoal-subtle pt-1">
                  <Clock className="size-3.5 text-teal shrink-0" />
                  <span>Tue–Fri 12–7 PM • Sat 12–6 PM • Sun–Mon Closed</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
