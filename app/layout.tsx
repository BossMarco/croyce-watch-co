import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-content";
import "@designcodeio/threeui/style.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "C. Royce Watch Co. | Vintage Watches in McAllen, TX", template: "%s | C. Royce Watch Co." },
  description: "Buy, sell, trade, consign, and source vintage watches with C. Royce Watch Co. in McAllen, Texas.",
  alternates: { canonical: "/" },
  keywords: ["vintage watches McAllen", "vintage watches Rio Grande Valley", "sell watch McAllen", "watch consignment Texas", "vintage watch dealer RGV"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "en_US", url: "/", siteName: "C. Royce Watch Co.", title: "C. Royce Watch Co. | Vintage Watches in McAllen, TX", description: "Collector-focused vintage watches in McAllen: buy, sell, trade, consign, and source across the Rio Grande Valley.", images: [{ url: "/croyce-watch-hero.webp", width: 1400, height: 875, alt: "Vintage mechanical wristwatch" }] },
  twitter: { card: "summary_large_image", title: "C. Royce Watch Co.", description: "Vintage watches and collector-focused guidance in McAllen, Texas.", images: ["/croyce-watch-hero.webp"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${SITE_URL}/#store`,
    name: "C. Royce Watch Co.",
    url: SITE_URL,
    image: `${SITE_URL}/croyce-watch-hero.webp`,
    description: "Vintage watch shop in McAllen, Texas offering buying, selling, trading, consignment, and sourcing guidance.",
    address: { "@type": "PostalAddress", streetAddress: "3911 N. 10th Street, Second Floor", addressLocality: "McAllen", addressRegion: "TX", addressCountry: "US" },
    areaServed: ["Rio Grande Valley", "Hidalgo County", "Cameron County", "Starr County"],
    sameAs: ["https://www.instagram.com/c_royce_co", "https://www.facebook.com/Croycewatchco"],
    knowsAbout: ["Vintage watches", "Mechanical watches", "Watch collecting", "Watch consignment", "Watch sourcing"],
  };
  return <html lang="en"><body className="antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />{children}</body></html>;
}
