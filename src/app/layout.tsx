import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fousa - Portfolio",
  description: "Personal portfolio and timeline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
