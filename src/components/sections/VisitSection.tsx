import React from "react";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { siteConfig } from "@/data/site";
import { MapPin, Phone, Mail, Clock, Compass } from "lucide-react";

export default function VisitSection() {
  return (
    <section
      id="visit"
      className="py-16 sm:py-24 bg-cream border-b border-charcoal/10"
      aria-labelledby="visit-heading"
    >
      <Container size="lg">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="mb-3">
            <EyebrowLabel variant="teal" withDash>
              Plan Your Visit
            </EyebrowLabel>
          </div>
          <h2
            id="visit-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-teal"
          >
            Visit Trans Am Cafe
          </h2>
          <div className="mx-auto h-0.5 w-12 bg-burnt-orange my-4" />
          <p className="text-base text-charcoal-muted leading-relaxed">
            Conveniently situated in Downtown Phoenix on North Central Avenue,
            minutes from the Roosevelt Row Arts District.
          </p>
        </div>

        {/* Visit Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Hours */}
          <div className="bg-white p-6 sm:p-8 rounded-xs border border-charcoal/10 shadow-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-charcoal/10">
              <Clock className="size-5 text-burnt-orange" />
              <h3 className="font-display font-bold text-xl text-charcoal">
                Weekly Operating Hours
              </h3>
            </div>
            <ul className="space-y-3">
              {siteConfig.hours.map((schedule) => (
                <li
                  key={schedule.day}
                  className="flex items-center justify-between text-sm py-1.5 border-b border-charcoal/5"
                >
                  <span className="font-medium text-charcoal">{schedule.day}</span>
                  <span className="font-mono text-charcoal-muted text-xs">
                    {schedule.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-charcoal-subtle mt-5 pt-3 border-t border-charcoal/10">
              Kitchen closes 30 minutes prior to listed closing times.
            </p>
          </div>

          {/* Card 2: Location & Contact */}
          <div className="bg-white p-6 sm:p-8 rounded-xs border border-charcoal/10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-charcoal/10">
                <MapPin className="size-5 text-teal" />
                <h3 className="font-display font-bold text-xl text-charcoal">
                  Location &amp; Access
                </h3>
              </div>

              <div className="space-y-4 text-sm text-charcoal-muted">
                <div>
                  <span className="font-bold text-charcoal block mb-0.5">
                    Physical Address:
                  </span>
                  <p>{siteConfig.address}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <Phone className="size-4 text-burnt-orange shrink-0" />
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                      className="hover:text-teal font-medium transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="size-4 text-teal shrink-0" />
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="hover:text-teal font-medium transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-charcoal/10 flex items-center gap-2 text-xs font-mono text-charcoal-subtle">
              <Compass className="size-4 text-teal" />
              <span>LIGHT RAIL ACCESSIBLE · STREET &amp; REAR PARKING AVAILABLE</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
