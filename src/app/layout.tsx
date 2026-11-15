import type { Metadata } from "next";
import { MotionProvider } from "@/components/motion";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://marketmymarket.vercel.app"),
  title: "Market My Market | SEO & Content Marketing Agency",
  description: "Market My Market helps businesses grow with transparent digital marketing, SEO, content, and strategy.",
  openGraph: {
    title: "Market My Market | SEO & Content Marketing Agency",
    description: "Driven by what matters.",
    images: ["/images/hero-original.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body><MotionProvider>{children}</MotionProvider></body>
    </html>
  );
}
