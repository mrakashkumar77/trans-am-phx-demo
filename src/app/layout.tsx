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

/* ── Metadata ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Trans Am Cafe | Sandwiches & Art Gallery · Phoenix, AZ",
    template: "%s | Trans Am Cafe",
  },
  description:
    "Trans Am Cafe is a beloved Phoenix sandwich shop and art gallery on N Central Ave. Handcrafted sandwiches, fresh soups, local art, and great coffee.",
  keywords: [
    "Trans Am Cafe",
    "Phoenix sandwich shop",
    "Phoenix art gallery",
    "N Central Ave Phoenix",
    "handcrafted sandwiches",
    "local art Phoenix",
  ],
  authors: [{ name: "Trans Am Cafe" }],
  creator: "Trans Am Cafe",
  metadataBase: new URL("https://transamcafe.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://transamcafe.com",
    siteName: "Trans Am Cafe",
    title: "Trans Am Cafe | Sandwiches & Art Gallery · Phoenix, AZ",
    description:
      "Fresh, handcrafted sandwiches served beneath the work of local Phoenix artists.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#123F40",
  width: "device-width",
  initialScale: 1,
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
        <Header />
        <main id="main-content" className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
