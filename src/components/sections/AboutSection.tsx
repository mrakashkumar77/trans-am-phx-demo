import React from "react";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { Utensils, Palette, Users, FileEdit } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: <Utensils className="size-5 text-burnt-orange" />,
      title: "Handcrafted Sandwiches",
      description:
        "A neighborhood spot dedicated to hearty sandwiches, seasonal sides, and daily refreshments served in a relaxed, welcoming environment.",
    },
    {
      icon: <Palette className="size-5 text-teal" />,
      title: "Local Art Space",
      description:
        "Walls dedicated to showcasing original visual artwork, offering guests rotating perspectives and celebrating local creativity.",
    },
    {
      icon: <Users className="size-5 text-sage" />,
      title: "Community Gathering",
      description:
        "An independent third place designed for casual lunches, creative conversation, and connection with neighbors.",
    },
  ];

  return (
    <section
      id="about"
      className="py-18 sm:py-24 lg:py-28 bg-cream border-b border-charcoal/10"
      aria-labelledby="about-heading"
    >
      <Container size="lg">
        {/* Main Section Header & Narrative */}
        <FadeIn distance={14} className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-3">
            <EyebrowLabel variant="teal" withDash>
              About the Cafe
            </EyebrowLabel>
          </div>

          <h2
            id="about-heading"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-teal leading-[1.08] uppercase"
          >
            A Neighborhood Spot With Character.
          </h2>

          <div className="mx-auto h-0.5 w-16 bg-burnt-orange my-5" />

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed mb-6">
            Trans Am Cafe brings together handcrafted food, visual art, and community
            under one roof. Designed as an independent neighborhood spot, the cafe offers a
            warm, casual setting where made-to-order sandwiches and drinks are served
            alongside original artwork from local creators.
          </p>

          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            Whether stopping by for lunch, discovering a new favorite artist on the walls,
            or gathering during neighborhood art events, visitors find a space centered on
            creativity and genuine hospitality.
          </p>
        </FadeIn>

        {/* 3 Pillar Feature Cards */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {pillars.map((pillar) => (
            <FadeIn key={pillar.title} distance={12} className="h-full">
              <div className="bg-white p-7 sm:p-8 rounded-xs border border-charcoal/10 shadow-xs flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md h-full">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xs bg-cream border border-charcoal/10 mb-5">
                    {pillar.icon}
                  </div>

                  <h3 className="font-display font-bold text-xl text-charcoal mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal/5 text-[11px] font-mono text-charcoal-subtle">
                  <span>TRANS AM CAFE · CORE IDENTITY</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>

        {/* Unobtrusive Editor Placeholder Notice */}
        <FadeIn distance={10} delay={0.2} className="max-w-2xl mx-auto">
          <div className="rounded-xs border border-charcoal/15 bg-cream-surface p-4 sm:p-5 flex items-start gap-3 shadow-xs">
            <FileEdit className="size-4 text-burnt-orange shrink-0 mt-0.5" />
            <div className="text-xs text-charcoal-muted leading-relaxed">
              <span className="font-semibold text-charcoal block mb-0.5">
                Copywriting &amp; Story Notice:
              </span>
              This copy is written to be neutral and welcoming for the design presentation.
              No founding year, history, owner biography, or unverified claims have been
              assumed. When the owner provides their official narrative, it can be dropped
              directly into this section.
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
