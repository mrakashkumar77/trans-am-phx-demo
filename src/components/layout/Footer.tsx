"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import {
  InstagramIcon,
  FacebookIcon,
  TwitterXIcon,
} from "@/components/ui/SocialIcons";

export default function Footer() {
  const currentYear = 2026;

  const socialIconMap: Record<string, React.ReactNode> = {
    Instagram: <InstagramIcon size={16} />,
    Facebook: <FacebookIcon size={16} />,
    "X / Twitter": <TwitterXIcon size={16} />,
  };

  return (
    <footer className="bg-teal text-cream pt-16 pb-12 mt-auto border-t border-teal-deep">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-xs bg-burnt-orange text-white font-display font-bold text-sm">
                TA
              </span>
              <span className="text-xl font-display font-bold text-cream tracking-wide">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-cream/70 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.social.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-xs bg-cream/10 border border-cream/20 text-cream/80 hover:text-white hover:bg-burnt-orange hover:border-burnt-orange transition-all duration-150"
                  aria-label={social.platform}
                >
                  {socialIconMap[social.platform]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-burnt-orange mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-burnt-orange mb-4">
              Visit Us
            </h3>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 text-burnt-orange shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-burnt-orange shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-burnt-orange shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-burnt-orange mb-4 flex items-center gap-2">
              <Clock className="size-4 text-burnt-orange" />
              Hours
            </h3>
            <ul className="space-y-2 text-sm text-cream/80">
              {siteConfig.hours.map((schedule) => (
                <li
                  key={schedule.day}
                  className="flex justify-between border-b border-cream/10 pb-1"
                >
                  <span className="text-cream/70">{schedule.day}</span>
                  <span className="font-medium text-cream">{schedule.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="tracking-wide">
            Vintage American Cafe &amp; Contemporary Art Gallery · Phoenix, AZ
          </p>
        </div>
      </Container>
    </footer>
  );
}
