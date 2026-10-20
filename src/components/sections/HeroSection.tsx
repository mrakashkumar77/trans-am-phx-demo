import React from "react";
import Image from "next/image";
import { ArrowRight, Utensils, Palette, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { FadeIn } from "@/components/ui/FadeIn";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28 border-b border-charcoal/10"
      aria-labelledby="hero-headline"
    >
      {/* Subtle atmospheric background accents */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-teal/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-burnt-orange/5 blur-3xl"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & Typography */}
          <FadeIn
            direction="up"
            delay={0.05}
            distance={14}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Brand Metadata Tag */}
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-block size-2 rounded-xs bg-burnt-orange" />
              <EyebrowLabel variant="orange" className="tracking-[0.2em]">
                Sandwich Shop &amp; Art Gallery · 1506 Grand Ave
              </EyebrowLabel>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-headline"
              className="font-display text-[2rem] xs:text-4xl sm:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-bold tracking-tight leading-[1.06] text-teal uppercase"
            >
              <span className="block">Good Food.</span>
              <span className="block text-burnt-orange">Great Art.</span>
              <span className="block text-charcoal">Local Vibes.</span>
            </h1>

            {/* Editorial Thin Divider */}
            <div className="my-6 h-0.5 w-16 bg-burnt-orange" />

            {/* Supporting Copy */}
            <p className="max-w-xl text-base sm:text-lg lg:text-xl text-charcoal-muted leading-relaxed mb-8">
              A neighborhood sandwich shop and art gallery bringing together
              good food, creative expression, and community.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto">
              <Button
                href="#menu"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="size-4" />}
                iconPosition="right"
                className="w-full sm:w-auto text-center"
              >
                Explore the Menu
              </Button>
              <Button
                href="#gallery"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-center"
              >
                Discover Our Art
              </Button>
            </div>

            {/* Retro Ticket / Micro-Details Strip */}
            <div className="w-full max-w-lg border-t border-b border-charcoal/15 py-3.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs font-medium text-charcoal-muted">
              <div className="flex items-center gap-2">
                <Utensils className="size-3.5 text-burnt-orange shrink-0" />
                <span>Made-to-Order Sandwiches</span>
              </div>
              <span className="hidden sm:inline text-charcoal/30" aria-hidden="true">•</span>
              <div className="flex items-center gap-2">
                <Palette className="size-3.5 text-teal shrink-0" />
                <span>Monthly Rotating Gallery</span>
              </div>
              <span className="hidden sm:inline text-charcoal/30" aria-hidden="true">•</span>
              <div className="flex items-center gap-2">
                <MapPin className="size-3.5 text-burnt-orange shrink-0" />
                <span>1506 Grand Ave</span>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Asymmetrical Editorial Image Composition */}
          <FadeIn
            direction="up"
            delay={0.15}
            distance={18}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            {/* Main Image Frame (Sandwich Focus) */}
            <div className="relative z-20 mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden rounded-xs border-2 border-charcoal/20 bg-cream-surface shadow-md">
                <Image
                  src="/images/hero-sandwich.jpg"
                  alt="Freshly toasted handcrafted sandwich served at Trans Am Cafe"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03] motion-reduce:transform-none"
                />
                {/* Vintage Corner Caption Badge */}
                <div className="absolute top-3 left-3 bg-charcoal/90 text-cream px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest backdrop-blur-xs rounded-xs border border-cream/20">
                  Kitchen · Fresh Daily
                </div>
              </div>
            </div>

            {/* Overlapping Offset Secondary Image Frame (Gallery Focus) */}
            <div className="relative z-30 -mt-14 sm:-mt-20 ml-auto w-3/4 max-w-[280px] sm:max-w-[320px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xs border-2 border-teal bg-white shadow-xl">
                <Image
                  src="/images/hero-gallery.jpg"
                  alt="Contemporary artwork exhibition walls inside Trans Am Cafe"
                  fill
                  priority
                  sizes="(max-width: 768px) 60vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03] motion-reduce:transform-none"
                />
                {/* Burnt Orange Accent Tag */}
                <div className="absolute bottom-2.5 right-2.5 bg-teal text-cream px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest rounded-xs border border-cream/30">
                  Art Gallery · Grand Ave
                </div>
              </div>
            </div>

            {/* Retro Stamp Ornament */}
            <div className="hidden sm:flex absolute -bottom-6 -left-4 z-40 items-center gap-2 bg-cream-surface px-3 py-2 rounded-xs border border-charcoal/20 shadow-xs text-[11px] font-mono text-charcoal">
              <span className="size-2 rounded-full bg-burnt-orange" />
              <span className="font-semibold uppercase tracking-wider">
                First Friday Host
              </span>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
