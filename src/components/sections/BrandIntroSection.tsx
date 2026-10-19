import React from "react";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Utensils, Palette, Users } from "lucide-react";

export default function BrandIntroSection() {
  const pillars = [
    {
      number: "01",
      icon: <Utensils className="size-4 text-burnt-orange" />,
      title: "Handcrafted Kitchen",
      description:
        "Every sandwich is built to order with fresh artisan breads, roasted meats, signature spreads, and crisp local produce.",
    },
    {
      number: "02",
      icon: <Palette className="size-4 text-teal" />,
      title: "Rotating Gallery",
      description:
        "Our dining room doubles as a creative showcase, featuring new work from local Phoenix artists every month.",
    },
    {
      number: "03",
      icon: <Users className="size-4 text-sage" />,
      title: "Community Gathering",
      description:
        "A welcoming third place on North Central Avenue to catch up with friends, discover original art, or enjoy a quick espresso.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-cream-surface border-b border-charcoal/10"
      aria-labelledby="brand-intro-heading"
    >
      <Container size="lg">
        {/* Editorial Introduction Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-3">
            <EyebrowLabel variant="teal" withDash>
              The Trans Am Story
            </EyebrowLabel>
          </div>

          <h2
            id="brand-intro-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-teal leading-tight mb-6"
          >
            Where Culinary Craft &amp; Visual Art Meet
          </h2>

          <div className="mx-auto h-0.5 w-12 bg-burnt-orange mb-6" />

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Trans Am Cafe brings together handcrafted food and local art under one
            roof. We prepare hearty sandwiches, fresh soups, and daily specials
            from scratch, while our dining room walls showcase the rotating
            work of Phoenix artists. It is a casual, welcoming neighborhood spot
            designed to feed both your appetite and your curiosity.
          </p>
        </div>

        {/* 3 Pillars Grid with Small Retro Visual Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="relative p-6 sm:p-8 bg-white rounded-xs border border-charcoal/10 shadow-xs transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Corner Index Tag */}
              <div className="flex items-center justify-between border-b border-charcoal/10 pb-4 mb-5">
                <span className="text-[11px] font-mono text-burnt-orange font-semibold tracking-wider">
                  [{pillar.number}]
                </span>
                <span className="p-1.5 rounded-xs bg-cream border border-charcoal/10">
                  {pillar.icon}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-charcoal mb-2">
                {pillar.title}
              </h3>

              <p className="text-sm text-charcoal-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Small Retro Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-muted">
          <div className="flex items-center gap-2">
            <span className="inline-block size-1.5 rounded-full bg-teal" />
            <span>LOCATED IN THE HISTORIC CENTRAL CORRIDOR</span>
          </div>
          <div className="flex items-center gap-2">
            <span>DOWNTOWN PHOENIX, AZ</span>
            <span className="text-charcoal/30">/</span>
            <span>FIRST FRIDAY PARTICIPANT</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
