import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

// Next.js downloads the font at build time and self-hosts it,
// so visitors' browsers never contact Google.
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.role}`,
  description: site.headline,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.headline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
