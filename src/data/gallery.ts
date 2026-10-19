// ─────────────────────────────────────────────
//  Trans Am Cafe — Centralized Gallery & Community Data
//  Note: Images and artworks are illustrative placeholders
//  representing the cafe's exhibition atmosphere and rotate monthly.
// ─────────────────────────────────────────────

import type { GalleryItem } from "@/types";

export const galleryNotice =
  "Curatorial Note: Photography and artwork shown are illustrative placeholders demonstrating the cafe's rotating visual identity and exhibition space. Authentic works on display rotate monthly and are provided by featured Phoenix artists.";

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-001",
    title: "Vibrant Sonoran Spectrum",
    description:
      "Vivid abstract acrylic exploring the warmth and dynamic palette of the Arizona desert.",
    category: "Artwork",
    image: "/images/gallery/art-contemporary.jpg",
    mediumOrTheme: "Original Canvas · Acrylic",
    span: "tall",
    featured: true,
  },
  {
    id: "gal-002",
    title: "Central Avenue Dining Room",
    description:
      "Our light-filled dining space where handcrafted sandwiches are enjoyed beneath curated gallery walls.",
    category: "Space",
    image: "/images/gallery/cafe-interior.jpg",
    mediumOrTheme: "Interior Atmosphere · North Central Ave",
    span: "wide",
    featured: true,
  },
  {
    id: "gal-003",
    title: "Studio Materials & Pigments",
    description:
      "A tribute to the tactile process of local painters, sculptors, and mixed-media printmakers.",
    category: "Details",
    image: "/images/gallery/creative-detail.jpg",
    mediumOrTheme: "Artist Details · Mixed Media",
    span: "standard",
  },
  {
    id: "gal-004",
    title: "Culinary Craft in the Gallery",
    description:
      "Housemade artisan sandwiches paired with fresh brewed refreshments in an inspiring creative setting.",
    category: "Food & Art",
    image: "/images/gallery/food-art-combo.jpg",
    mediumOrTheme: "Scratch Kitchen · Local Fare",
    span: "wide",
    featured: true,
  },
  {
    id: "gal-005",
    title: "Curated Exhibition Wall",
    description:
      "Rotating monthly exhibitions welcoming both emerging creators and seasoned Downtown Phoenix talent.",
    category: "Artwork",
    image: "/images/hero-gallery.jpg",
    mediumOrTheme: "Exhibition Wall · Rotating Works",
    span: "standard",
  },
  {
    id: "gal-006",
    title: "Community & First Friday Gatherings",
    description:
      "Evenings of conversation, music, and art appreciation bringing together neighborhood residents and art lovers.",
    category: "Space",
    image: "/images/gallery/community-gathering.jpg",
    mediumOrTheme: "Neighborhood Life · First Friday",
    span: "tall",
  },
];

export const communityPillars = [
  {
    tag: "Monthly Rotating Shows",
    title: "New Perspectives Every Month",
    description:
      "Our walls rotate on a regular cycle, giving guests reasons to return and local Phoenix artists a public platform to exhibit and sell their work directly.",
  },
  {
    tag: "First Friday Walk",
    title: "Roosevelt Row Art Walk Connection",
    description:
      "Every first Friday of the month, Trans Am Cafe participates in the historic Downtown Phoenix Art Walk with extended hours, evening bites, and artist meet-ups.",
  },
  {
    tag: "Artist Inquiries",
    title: "Wall Space For Local Talent",
    description:
      "We welcome portfolio submissions and exhibition proposals from Phoenix-area visual artists, photographers, and muralists.",
  },
];
