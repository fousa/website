import type { Metadata, Viewport } from "next";
import { Figtree, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jelle Vandebeeck - I make iOS apps and Rails backends",
  description: "Senior Developer specializing in Ruby on Rails and iOS applications",
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${outfit.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
