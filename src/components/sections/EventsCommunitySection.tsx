import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { communityPillars } from "@/data/gallery";
import { Calendar, Bell, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function EventsCommunitySection() {
  return (
    <section
      id="events"
      className="py-18 sm:py-24 lg:py-28 bg-cream-surface border-b border-charcoal/10"
      aria-labelledby="events-heading"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="mb-3">
            <EyebrowLabel variant="orange" withDash>
              Community &amp; Exhibitions
            </EyebrowLabel>
          </div>

          <h2
            id="events-heading"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-teal leading-[1.08] uppercase"
          >
            Art Happens Here.
          </h2>

          <div className="mx-auto h-0.5 w-16 bg-burnt-orange my-5" />

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-2xl mx-auto">
            Beyond our daily scratch kitchen, Trans Am Cafe serves as an active creative
            crossroads in Downtown Phoenix. Through monthly exhibition rotations, First Friday
            art walks, and artist features, our space keeps the neighborhood connected to local culture.
          </p>
        </div>

        {/* 3 Community Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {communityPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white p-6 sm:p-8 rounded-xs border border-charcoal/10 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-charcoal/10">
                  <span className="text-[11px] font-mono text-burnt-orange font-semibold uppercase tracking-wider">
                    {pillar.tag}
                  </span>
                  <Calendar className="size-4 text-teal" />
                </div>

                <h3 className="font-display font-bold text-xl text-charcoal mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-charcoal/5 flex items-center gap-2 text-xs font-mono text-charcoal-subtle">
                <span className="size-1.5 rounded-full bg-teal" />
                <span>Downtown Phoenix Culture</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Event Schedule Notice & Instagram CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Schedule Information & Notice */}
          <div className="lg:col-span-6 p-7 sm:p-9 rounded-xs bg-cream border border-charcoal/15 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-burnt-orange mb-3">
                <Bell className="size-4" />
                <span>Exhibition Calendar Status</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-teal mb-3">
                Live Schedules &amp; Artist Receptions
              </h3>

              <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                To ensure all community announcements, participating artist lineups, and First
                Friday hours are 100% accurate, scheduled dates are confirmed and announced in real
                time via our social channel rather than an unverified static calendar.
              </p>

              <div className="space-y-2.5 text-xs text-charcoal">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-teal shrink-0" />
                  <span>First Friday extended hours announced each month</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-teal shrink-0" />
                  <span>Artist bios and reception dates shared in advance</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-teal shrink-0" />
                  <span>New artwork pieces previewed as they are hung</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-charcoal/10 text-xs font-mono text-charcoal-subtle">
              <span>AUTHENTIC COMMUNITY NOTICE · CONFIRMED REAL-TIME</span>
            </div>
          </div>

          {/* Right: Instagram Featured Callout Box */}
          <div className="lg:col-span-6 p-7 sm:p-9 rounded-xs bg-teal text-cream border border-teal-deep flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-burnt-orange mb-3">
                <InstagramIcon size={16} />
                <span>Official Social Channel</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-cream mb-3">
                Follow @trans_am_phx
              </h3>

              <p className="text-sm text-cream/80 leading-relaxed mb-6">
                Follow our official Instagram profile for daily sandwich specials, artist
                interviews, exhibition previews, and event announcements directly from our North
                Central Avenue space.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-cream/15">
              <a
                href="https://www.instagram.com/trans_am_phx/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xs bg-burnt-orange text-white hover:bg-burnt-orange-dark font-medium text-sm tracking-wide transition-all duration-150 shadow-sm hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream cursor-pointer"
              >
                <span>Follow @trans_am_phx on Instagram</span>
                <ArrowUpRight className="size-4" />
              </a>

              <p className="text-xs text-cream/60 font-mono">
                Direct link: https://www.instagram.com/trans_am_phx/
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
