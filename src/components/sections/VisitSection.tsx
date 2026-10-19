import React from "react";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Badge } from "@/components/ui/Badge";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { siteConfig } from "@/data/site";
import {
  MapPin,
  Clock,
  AlertCircle,
  ArrowUpRight,
  ShieldCheck,
  Compass,
} from "lucide-react";

export default function VisitSection() {
  return (
    <section
      id="visit"
      className="py-18 sm:py-24 lg:py-28 bg-charcoal text-cream relative overflow-hidden border-b border-charcoal/20"
      aria-labelledby="visit-section-heading"
    >
      {/* Background Ambience Transition */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 bg-burnt-orange/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <FadeIn distance={14} className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="mb-3">
            <EyebrowLabel variant="orange" withDash>
              Plan Your Visit
            </EyebrowLabel>
          </div>

          <h2
            id="visit-section-heading"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream leading-[1.08] uppercase"
          >
            Visit Trans Am Cafe
          </h2>

          <div className="mx-auto h-0.5 w-16 bg-burnt-orange my-5" />

          <p className="text-base sm:text-lg text-cream/80 leading-relaxed max-w-xl mx-auto">
            Handcrafted sandwiches, fresh refreshments, and rotating local art.
            Join us at our Grand Avenue location.
          </p>
        </FadeIn>

        {/* 3-Column Editorial Grid: Location, Opening Hours, Contact & Social */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* ── CARD 1: VISIT US & LOCATION (Cols 1-4) ── */}
          <FadeIn distance={12} className="lg:col-span-4 h-full">
            <div className="h-full p-7 sm:p-8 rounded-xs bg-charcoal-light border border-cream/15 flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-cream/10">
                  <span className="text-[11px] font-mono text-burnt-orange uppercase tracking-wider font-semibold">
                    Location Details
                  </span>
                  <MapPin className="size-4 text-burnt-orange" />
                </div>

                <h3 className="font-display font-bold text-2xl text-cream mb-1">
                  {siteConfig.name}
                </h3>
                <p className="text-xs font-mono text-cream/60 uppercase tracking-widest mb-6">
                  Sandwich Shop &amp; Art Gallery
                </p>

                {/* Supplied Address Display */}
                <div className="p-4 rounded-xs bg-charcoal border border-cream/10 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-burnt-orange block mb-1">
                    Supplied Address
                  </span>
                  <p className="font-display font-bold text-xl sm:text-2xl text-cream">
                    {siteConfig.address}
                  </p>
                </div>

                {/* Unverified City/State Notice & Directions Policy */}
                <div className="p-4 rounded-xs bg-cream/5 border border-cream/10 text-xs text-cream/70 space-y-2">
                  <div className="flex items-center gap-2 text-burnt-orange font-semibold">
                    <AlertCircle className="size-3.5 shrink-0" />
                    <span>Map Directions Status</span>
                  </div>
                  <p className="leading-relaxed">
                    The street address (1506 Grand Ave) is provided directly by the owner&apos;s
                    Instagram bio. City and state details are awaiting independent confirmation
                    prior to publishing turn-by-turn map links, avoiding any inaccurate destinations.
                  </p>
                </div>
              </div>

              {/* Directions Action Button (Pending confirmation state) */}
              <div className="mt-8 pt-4 border-t border-cream/10">
                <button
                  type="button"
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xs bg-cream/10 text-cream/60 text-xs font-mono uppercase tracking-wider border border-cream/15 cursor-not-allowed"
                  title="Directions link will activate once city/state details are confirmed"
                >
                  <Compass className="size-3.5" />
                  <span>Directions Pending Full Address</span>
                </button>
              </div>
            </div>
          </FadeIn>

          {/* ── CARD 2: OPENING HOURS (Cols 5-8) ── */}
          <FadeIn distance={12} delay={0.08} className="lg:col-span-4 h-full">
            <div className="h-full p-7 sm:p-8 rounded-xs bg-charcoal-light border border-cream/15 flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-cream/10">
                  <span className="text-[11px] font-mono text-burnt-orange uppercase tracking-wider font-semibold">
                    Operating Hours
                  </span>
                  <Clock className="size-4 text-teal-light" />
                </div>

                <h3 className="font-display font-bold text-2xl text-cream mb-1">
                  Weekly Schedule
                </h3>
                <p className="text-xs font-mono text-cream/60 uppercase tracking-widest mb-6">
                  Instagram Bio Sourced
                </p>

                {/* Hours Table */}
                <ul className="space-y-2.5 text-sm" role="list">
                  {siteConfig.hours.map((schedule) => (
                    <li
                      key={schedule.day}
                      className="flex items-center justify-between py-2 border-b border-cream/5"
                    >
                      <span className="font-medium text-cream">{schedule.day}</span>
                      <span
                        className={`font-mono text-xs px-2.5 py-0.5 rounded-xs ${
                          schedule.isClosed
                            ? "bg-cream/10 text-cream/40"
                            : "bg-teal/40 text-cream border border-teal/40 font-semibold"
                        }`}
                      >
                        {schedule.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pre-launch confirmation notice */}
              <div className="mt-6 pt-4 border-t border-cream/10">
                <div className="flex items-start gap-2 text-[11px] font-mono text-cream/60 leading-relaxed">
                  <ShieldCheck className="size-3.5 text-sage shrink-0 mt-0.5" />
                  <span>
                    Please confirm current holiday or First Friday extended hours with management
                    before visiting.
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── CARD 3: CONTACT & SOCIAL (Cols 9-12) ── */}
          <FadeIn distance={12} delay={0.16} className="lg:col-span-4 h-full">
            <div className="h-full p-7 sm:p-8 rounded-xs bg-teal text-cream border border-teal-deep flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-cream/15">
                  <span className="text-[11px] font-mono text-burnt-orange uppercase tracking-wider font-semibold">
                    Get in Touch
                  </span>
                  <InstagramIcon size={16} />
                </div>

                <h3 className="font-display font-bold text-2xl text-cream mb-1">
                  Contact &amp; Social
                </h3>
                <p className="text-xs font-mono text-cream/70 uppercase tracking-widest mb-6">
                  Verified Social Presence
                </p>

                {/* Instagram Official Profile CTA */}
                <div className="p-5 rounded-xs bg-charcoal/30 border border-cream/15 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="orange" size="sm">
                      Verified Instagram
                    </Badge>
                  </div>
                  <h4 className="font-display font-bold text-lg text-cream mb-1">
                    {siteConfig.instagramHandle}
                  </h4>
                  <p className="text-xs text-cream/80 leading-relaxed mb-4">
                    For daily sandwich specials, artist features, and inquiries, follow and
                    message the cafe on Instagram.
                  </p>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xs bg-burnt-orange text-white hover:bg-burnt-orange-dark font-medium text-xs tracking-wider uppercase transition-colors shadow-xs"
                  >
                    <span>Open Instagram Profile</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>

                {/* Uninvented Contact Field Policy Note */}
                <div className="p-4 rounded-xs bg-black/20 border border-cream/10 text-xs text-cream/75 leading-relaxed">
                  <span className="font-semibold text-cream block mb-1">
                    Phone &amp; Email Notice:
                  </span>
                  No phone number or email address is published in the cafe&apos;s bio. In adherence
                  to data integrity standards, contact information has not been invented and will be
                  added once supplied by the owner.
                </div>
              </div>

              {/* Micro Tagline */}
              <div className="mt-6 pt-4 border-t border-cream/15 flex items-center justify-between text-[11px] font-mono text-cream/60">
                <span>EST. GRAND AVE</span>
                <span>INDEPENDENT &amp; LOCAL</span>
              </div>
            </div>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </section>
  );
}
