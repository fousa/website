import type { Metadata } from "next";
import { Figtree, Outfit } from "next/font/google";
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
  title: "Jelle Vandebeeck - Full-Stack Developer",
  description: "Senior Full-Stack Developer specializing in React, Next.js, and modern web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
