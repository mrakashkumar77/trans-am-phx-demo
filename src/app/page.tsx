import {
  HeroSection,
  AboutSection,
  MenuSection,
  GallerySection,
  EventsCommunitySection,
  VisitSection,
} from "@/components/sections";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  // Verified structured data: only verified Instagram bio details are included.
  // Unverified/uninvented fields (city, state, geo coordinates, phone, email, ratings, price range) are omitted.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Restaurant", "ArtGallery"],
        "@id": "https://transamcafe-demo.local/#business",
        name: siteConfig.name,
        description: siteConfig.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address,
        },
        servesCuisine: "Sandwiches",
        sameAs: [siteConfig.instagramUrl],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "12:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "12:00",
            closes: "18:00",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
