"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { razorpayLinks, inr, type Product } from "@/lib/site";
import Countdown from "./Countdown";

/* Sticky bottom buy bar — appears after scrolling past the hero. */
export default function StickyBuyBar({ product }: { product: Product }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="sticky-bar"
      className={`${visible ? "visible" : ""} fixed bottom-0 inset-x-0 z-40 bg-navy-deep/95 backdrop-blur-md border-t border-brand/30 shadow-[0_-8px_30px_rgba(0,0,0,0.4)]`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2.5 flex items-center gap-3">
        <Image
          src={product.image}
          alt={product.imageAlt}
          width={52}
          height={52}
          className="rounded-lg object-cover w-11 h-11 sm:w-[52px] sm:h-[52px] shrink-0"
        />
        <div className="min-w-0 flex-1">
          <p className="text-white text-[13px] sm:text-sm font-bold truncate">{product.shortName}</p>
          <p className="text-xs">
            <span className="text-mist/70 line-through mr-1.5">{inr(product.mrp)}</span>
            <span className="text-brand font-display font-bold text-base" style={{ fontWeight: 800 }}>{inr(product.price)}</span>
            <span className="hidden sm:inline text-mist/70 text-[11px] ml-2">• Offer ends in <Countdown compact /></span>
          </p>
        </div>
        <a
          href={razorpayLinks[product.key]}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta text-white font-display font-bold text-sm sm:text-base px-6 sm:px-8 py-3 rounded-xl whitespace-nowrap"
          style={{ fontWeight: 700 }}
        >
          BUY NOW →
        </a>
      </div>
      {/* spacer so footer content isn't hidden behind the bar */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
