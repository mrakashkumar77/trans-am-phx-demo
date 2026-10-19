// ─────────────────────────────────────────────
//  Trans Am Cafe — Shared TypeScript Types
// ─────────────────────────────────────────────

// ── Site / Navigation ──────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string; // Lucide icon name
}

export interface HeroSlide {
  id: number;
  headline: string;
  subheadline: string;
  cta: { label: string; href: string };
  image: string; // path or URL
}

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: { day: string; time: string }[];
  social: SocialLink[];
  nav: NavLink[];
}

// ── Menu ──────────────────────────────────────
export type MenuCategory = "Sandwiches" | "Sides" | "Drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  tags?: ("vegetarian" | "vegan" | "gluten-free" | "popular" | "signature" | "new")[];
  image?: string;
  featured?: boolean;
}

export type GalleryCategory = "Artwork" | "Space" | "Details" | "Food & Art";

export interface GalleryItem {
  id: string;
  title: string;
  artist?: string;
  description: string;
  category: GalleryCategory;
  image: string;
  featured?: boolean;
  span?: "tall" | "wide" | "standard";
  mediumOrTheme?: string;
}

// ── Testimonials ──────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number; // 1–5
  date: string;
  avatar?: string;
}
