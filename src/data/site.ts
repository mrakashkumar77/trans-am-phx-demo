// ─────────────────────────────────────────────
//  Trans Am Cafe — Centralized Site & Business Data
//  Note: Only verified owner details from the Instagram bio
//  are included. Missing or unconfirmed details are clearly noted.
// ─────────────────────────────────────────────
import type { SiteInfo } from "@/types";

export const siteConfig: SiteInfo = {
  name: "Trans Am Cafe",
  tagline: "Sandwiches & Art Gallery",
  description:
    "A neighborhood sandwich shop and art gallery bringing together handcrafted food, creative expression, and community.",
  address: "1506 Grand Ave",
  isAddressVerified: false,
  addressNotice:
    "Street address sourced directly from the cafe's Instagram bio (1506 Grand Ave). Complete city, state, and zip code are pending confirmation prior to enabling turn-by-turn map directions.",
  // No phone or email has been confirmed by the owner yet — left uninvented as required.
  phone: undefined,
  email: undefined,
  instagramHandle: "@trans_am_phx",
  instagramUrl: "https://www.instagram.com/trans_am_phx/",
  hoursNotice:
    "Hours sourced from the official Instagram bio. Please confirm the current schedule with management before final launch.",
  hours: [
    { day: "Tuesday", time: "12:00 PM – 7:00 PM", isClosed: false },
    { day: "Wednesday", time: "12:00 PM – 7:00 PM", isClosed: false },
    { day: "Thursday", time: "12:00 PM – 7:00 PM", isClosed: false },
    { day: "Friday", time: "12:00 PM – 7:00 PM", isClosed: false },
    { day: "Saturday", time: "12:00 PM – 6:00 PM", isClosed: false },
    { day: "Sunday", time: "Closed", isClosed: true },
    { day: "Monday", time: "Closed", isClosed: true },
  ],
  social: [
    {
      platform: "Instagram",
      href: "https://www.instagram.com/trans_am_phx/",
      icon: "Instagram",
    },
  ],
  nav: [
    { label: "Home", href: "#top" },
    { label: "Menu", href: "#menu" },
    { label: "Art Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Visit", href: "#visit" },
  ],
};
