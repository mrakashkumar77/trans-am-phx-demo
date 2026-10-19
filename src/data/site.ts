// ─────────────────────────────────────────────
//  Trans Am Cafe — Site Configuration
// ─────────────────────────────────────────────
import type { SiteInfo } from "@/types";

export const siteConfig: SiteInfo = {
  name: "Trans Am Cafe",
  tagline: "Where Art Meets Appetite",
  description:
    "A beloved Phoenix sandwich shop and art gallery — fresh, handcrafted food served beneath the work of local artists.",
  address: "1234 N Central Ave, Phoenix, AZ 85004",
  phone: "(602) 555-0147",
  email: "hello@transamcafe.com",
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 8:00 PM" },
    { day: "Saturday", time: "8:00 AM – 9:00 PM" },
    { day: "Sunday", time: "9:00 AM – 5:00 PM" },
  ],
  social: [
    {
      platform: "Instagram",
      href: "https://www.instagram.com/trans_am_phx/",
      icon: "Instagram",
    },
    {
      platform: "Facebook",
      href: "https://facebook.com/transamcafe",
      icon: "Facebook",
    },
    {
      platform: "X / Twitter",
      href: "https://twitter.com/transamcafe",
      icon: "Twitter",
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
