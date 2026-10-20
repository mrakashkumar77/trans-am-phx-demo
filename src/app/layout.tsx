import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://transamcafe-demo.local";

/* ── Metadata ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trans Am Cafe | Sandwiches & Art Gallery",
    template: "%s | Trans Am Cafe",
  },
  description:
    "Trans Am Cafe is a neighborhood sandwich shop and art gallery at 1506 Grand Ave, featuring handcrafted sandwiches, daily refreshments, and rotating local art exhibitions.",
  keywords: [
    "Trans Am Cafe",
    "sandwich shop",
    "art gallery",
    "1506 Grand Ave",
    "handcrafted sandwiches",
    "local art exhibitions",
    "Grand Ave sandwiches",
  ],
  authors: [{ name: "Trans Am Cafe" }],
  creator: "Trans Am Cafe",
  publisher: "Trans Am Cafe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Trans Am Cafe",
    title: "Trans Am Cafe | Sandwiches & Art Gallery",
    description:
      "A neighborhood sandwich shop and art gallery bringing together good food, creative expression, and community at 1506 Grand Ave.",
    images: [
      {
        url: "/images/hero-sandwich.jpg",
        width: 1200,
        height: 800,
        alt: "Fresh handcrafted sandwiches and local art at Trans Am Cafe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trans Am Cafe | Sandwiches & Art Gallery",
    description:
      "A neighborhood sandwich shop and art gallery bringing together good food, creative expression, and community at 1506 Grand Ave.",
    images: ["/images/hero-sandwich.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#123F40",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ── Root Layout ──────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full scroll-smooth ${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-cream text-charcoal antialiased selection:bg-teal selection:text-cream">
        {/* Skip to Main Content Landmark Link (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-teal focus:text-cream focus:font-semibold focus:rounded-xs focus:shadow-xl focus:outline-2 focus:outline-burnt-orange focus:border focus:border-cream"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 pt-16 focus:outline-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
