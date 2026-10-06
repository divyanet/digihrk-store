"use client";

import { razorpayLinks, type ProductKey } from "@/lib/site";

/* Orange gradient CTA that opens the product's Razorpay payment page.
   HRK: apna payment-page link src/lib/site.ts me `razorpayLinks` me paste karo. */
export default function BuyButton({
  product,
  children,
  className = "",
  sub = "Instant download • Secure payment",
}: {
  product: ProductKey;
  children: React.ReactNode;
  className?: string;
  sub?: string;
}) {
  return (
    <span className={`inline-flex flex-col items-center gap-1.5 ${className}`}>
      <a
        href={razorpayLinks[product]}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta text-white font-display font-bold text-lg sm:text-xl px-10 py-4 rounded-2xl inline-flex items-center gap-2"
        style={{ fontWeight: 700 }}
      >
        {children}
      </a>
      <span className="text-xs text-mist/80 font-medium">🔒 {sub}</span>
    </span>
  );
}
