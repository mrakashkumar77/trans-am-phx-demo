import {
  HeroSection,
  BrandIntroSection,
  MenuSection,
  GallerySection,
  EventsCommunitySection,
  VisitSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      {/* ── Main Hero Section ─────────────────────────────── */}
      <HeroSection />

      {/* ── Brand Introduction & Core Concept ─────────────── */}
      <BrandIntroSection />

      {/* ── Handcrafted Sample Menu (Anchor: #menu) ───────── */}
      <MenuSection />

      {/* ── Section 1: Art Gallery (Anchor: #gallery) ─────── */}
      <GallerySection />

      {/* ── Section 2: Events & Community (Anchor: #events) ── */}
      <EventsCommunitySection />

      {/* ── Visit & Hours (Anchor: #visit) ────────────────── */}
      <VisitSection />
    </>
  );
}
