"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Badge } from "@/components/ui/Badge";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { galleryItems, galleryNotice } from "@/data/gallery";
import type { GalleryItem } from "@/types";
import { Maximize2, Palette, Info } from "lucide-react";

export default function GallerySection() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (item: GalleryItem) => {
    setActiveItem(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveItem(null);
  };

  const navigatePrev = () => {
    if (!activeItem) return;
    const currentIndex = galleryItems.findIndex((i) => i.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setActiveItem(galleryItems[prevIndex]);
  };

  const navigateNext = () => {
    if (!activeItem) return;
    const currentIndex = galleryItems.findIndex((i) => i.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setActiveItem(galleryItems[nextIndex]);
  };

  return (
    <section
      id="gallery"
      className="py-18 sm:py-24 lg:py-28 bg-cream border-b border-charcoal/10"
      aria-labelledby="gallery-heading"
    >
      <Container size="lg">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="mb-3">
            <EyebrowLabel variant="teal" withDash>
              Rotating Visual Showcase
            </EyebrowLabel>
          </div>

          <h2
            id="gallery-heading"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-teal leading-[1.08] uppercase"
          >
            <span className="block">More Than a Cafe.</span>
            <span className="block text-burnt-orange">A Space for Art.</span>
          </h2>

          <div className="mx-auto h-0.5 w-16 bg-burnt-orange my-5" />

          <p className="text-base sm:text-xl text-charcoal-muted leading-relaxed max-w-xl mx-auto">
            Food, creativity, and community come together in one place.
          </p>

          {/* Curatorial Disclaimer */}
          <div className="mt-6 inline-flex items-center gap-2.5 rounded-xs border border-charcoal/15 bg-white px-4 py-2 text-xs text-charcoal-muted shadow-xs max-w-xl text-left">
            <Info className="size-4 text-teal shrink-0" />
            <span className="leading-snug">{galleryNotice}</span>
          </div>
        </div>

        {/* Editorial Asymmetrical Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {galleryItems.map((item, index) => {
            // Asymmetrical grid column and row spanning for editorial rhythm
            const gridClasses = [
              "lg:col-span-5", // Item 1: Contemporary Artwork (Tall portrait focus)
              "lg:col-span-7", // Item 2: Cafe Interior (Wide landscape focus)
              "lg:col-span-4", // Item 3: Creative Details (Standard)
              "lg:col-span-8", // Item 4: Food & Art Combo (Wide)
              "lg:col-span-7", // Item 5: Curated Exhibition Wall (Standard/Wide)
              "lg:col-span-5", // Item 6: Community Gathering (Tall portrait)
            ][index % 6];

            const aspectClass = item.span === "tall"
              ? "aspect-[3/4]"
              : item.span === "wide"
              ? "aspect-[16/10]"
              : "aspect-[4/3]";

            return (
              <figure
                key={item.id}
                className={`group relative flex flex-col overflow-hidden rounded-xs bg-white border border-charcoal/15 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal/30 hover:shadow-md motion-reduce:hover:transform-none motion-reduce:transition-none ${gridClasses}`}
              >
                {/* Image Container with Zoom & Click to Open Lightbox */}
                <div
                  className={`relative w-full overflow-hidden bg-cream-soft cursor-pointer ${aspectClass}`}
                  onClick={() => openLightbox(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(item);
                    }
                  }}
                  aria-label={`Expand ${item.title} in image viewer`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.category}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
                  />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <Badge variant="charcoal" size="sm">
                      {item.category}
                    </Badge>
                  </div>

                  {/* Expand Overlay Icon */}
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="flex size-8 items-center justify-center rounded-xs bg-charcoal/80 text-cream backdrop-blur-xs">
                      <Maximize2 className="size-4" />
                    </span>
                  </div>

                  {/* Subtle Gradient Shade for caption contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
                </div>

                {/* Tasteful Image Caption */}
                <figcaption className="p-5 flex flex-col justify-between border-t border-charcoal/10 bg-white">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-display font-bold text-lg text-charcoal group-hover:text-teal transition-colors">
                        {item.title}
                      </h3>
                      {item.mediumOrTheme && (
                        <span className="text-[11px] font-mono text-burnt-orange font-medium shrink-0">
                          {item.mediumOrTheme}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-charcoal/5 flex items-center justify-between text-[11px] font-mono text-charcoal-subtle">
                    <span className="flex items-center gap-1.5">
                      <Palette className="size-3 text-teal" />
                      <span>Trans Am Gallery</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => openLightbox(item)}
                      className="text-teal font-semibold hover:text-burnt-orange hover:underline focus-visible:outline-2 focus-visible:outline-teal rounded-xs"
                    >
                      View Full Size →
                    </button>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Container>

      {/* Accessible Lightbox Modal */}
      <ImageLightbox
        item={activeItem}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={navigatePrev}
        onNext={navigateNext}
      />
    </section>
  );
}
