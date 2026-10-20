"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { MenuItemCard } from "@/components/ui/MenuItemCard";
import { menuItems, menuCategories, menuDisclaimer } from "@/data/menu";
import type { MenuCategory } from "@/types";
import { Info, Sparkles, Utensils } from "lucide-react";

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | MenuCategory>("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="menu"
      className="py-18 sm:py-24 lg:py-28 bg-cream border-b border-charcoal/10"
      aria-labelledby="menu-heading"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="mb-3">
            <EyebrowLabel variant="orange" withDash>
              Handcrafted Kitchen &amp; Deli
            </EyebrowLabel>
          </div>

          <h2
            id="menu-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-teal leading-[1.12]"
          >
            Sample Cafe Menu
          </h2>

          <div className="mx-auto h-0.5 w-14 bg-burnt-orange my-4" />

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-2xl mx-auto">
            Hearty sandwiches prepared on artisan bread baked fresh every morning,
            paired with seasonal sides, slow-steeped cold brews, and craft refreshments.
          </p>

          {/* Unobtrusive Sample Notice */}
          <div className="mt-6 inline-flex items-center gap-2.5 rounded-xs border border-charcoal/15 bg-white px-4 py-2 text-xs text-charcoal-muted shadow-xs max-w-xl text-left">
            <Info className="size-4 text-burnt-orange shrink-0" />
            <span className="leading-snug">
              {menuDisclaimer}
            </span>
          </div>
        </div>

        {/* Category Filters (Accessible Tablist) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <div
            role="tablist"
            aria-label="Filter menu items by category"
            className="inline-flex flex-wrap p-1 rounded-xs bg-white border border-charcoal/15 shadow-xs"
          >
            {menuCategories.map((category) => {
              const isSelected = selectedCategory === category;
              const itemCount =
                category === "All"
                  ? menuItems.length
                  : menuItems.filter((item) => item.category === category).length;

              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2.5 sm:py-2 min-h-[44px] inline-flex items-center text-xs sm:text-sm font-semibold tracking-wide transition-all duration-150 rounded-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-teal ${
                    isSelected
                      ? "bg-teal text-cream shadow-xs"
                      : "text-charcoal hover:text-teal hover:bg-cream"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`ml-1.5 text-[10px] font-mono opacity-80 ${
                      isSelected ? "text-burnt-orange" : "text-charcoal-subtle"
                    }`}
                  >
                    ({itemCount})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Editorial Menu Grid with subtle category cross-fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          >
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Small Bottom Information Strip */}
        <div className="mt-14 pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-muted">
          <div className="flex items-center gap-2">
            <Utensils className="size-3.5 text-burnt-orange" />
            <span>GLUTEN-FREE BREAD AVAILABLE UPON REQUEST</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="size-3.5 text-teal" />
            <span>BOX LUNCHES FOR MEETINGS &amp; STUDIOS · CALL AHEAD</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
