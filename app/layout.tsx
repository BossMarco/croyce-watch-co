import type { Metadata } from "next";
import "@designcodeio/threeui/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "C. Royce Watch Co. | Vintage Watches in McAllen, TX",
  description: "Buy, sell, trade, consign, and source vintage watches with C. Royce Watch Co. in McAllen, Texas.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
