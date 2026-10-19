import {
  HeroSection,
  AboutSection,
  MenuSection,
  GallerySection,
  EventsCommunitySection,
  VisitSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section (Good Food. Great Art. Local Vibes.) ── */}
      <HeroSection />

      {/* ── Section 1: About the Cafe (Anchor: #about) ───────── */}
      <AboutSection />

      {/* ── Sample Cafe Menu (Anchor: #menu) ─────────────────── */}
      <MenuSection />

      {/* ── Art Gallery Section (Anchor: #gallery) ───────────── */}
      <GallerySection />

      {/* ── Events & Community Section ───────────────────────── */}
      <EventsCommunitySection />

      {/* ── Sections 2, 3 & 4: Visit Us, Hours & Contact (#visit) */}
      <VisitSection />
    </>
  );
}
