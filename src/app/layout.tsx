import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.brand} — Printable Coloring Pages & Kids Worksheets Bundles`,
    template: `%s | ${SITE.brand}`,
  },
  description:
    "Instant-download printable bundles: 10,000,000+ coloring pages (PDF + SVG + AI) and 15,000+ kids activity worksheets. Secure Razorpay payment, lifetime access.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
