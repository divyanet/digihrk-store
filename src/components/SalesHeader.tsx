import { Logo } from "./SiteHeader";
import { razorpayLinks, type ProductKey } from "@/lib/site";

/* Slim dark header used on long-form sales pages. */
export default function SalesHeader({ product }: { product: ProductKey }) {
  return (
    <header className="bg-navy-deep border-b border-white/10 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Logo dark />
        <a
          href={razorpayLinks[product]}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta text-white text-sm font-display font-bold px-6 py-2.5 rounded-xl whitespace-nowrap"
          style={{ fontWeight: 700 }}
        >
          Get Instant Access →
        </a>
      </div>
    </header>
  );
}
