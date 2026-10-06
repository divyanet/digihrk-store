import Link from "next/link";
import { SITE } from "@/lib/site";
import { Logo } from "./SiteHeader";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-mist">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo dark />
          <p className="mt-4 text-sm leading-relaxed max-w-sm">
            {SITE.tagline} High-quality printable digital bundles with instant
            download and lifetime access. Pay securely via Razorpay.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["UPI", "Cards", "NetBanking", "Wallets"].map((m) => (
              <span key={m} className="text-[11px] font-bold bg-white/10 border border-white/15 rounded-md px-2.5 py-1 tracking-wide">
                {m}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-display font-bold mb-4 text-sm tracking-wide">PRODUCTS</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/coloring-pages-bundle/" className="hover:text-brand transition-colors">Coloring Pages Bundle</Link></li>
            <li><Link href="/kids-activity-worksheets/" className="hover:text-brand transition-colors">Kids Worksheets Bundle</Link></li>
            <li><Link href="/" className="hover:text-brand transition-colors">All Bundles</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-display font-bold mb-4 text-sm tracking-wide">SUPPORT</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/policies/" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
            <li><Link href="/policies/" className="hover:text-brand transition-colors">Terms &amp; Conditions</Link></li>
            <li><Link href="/policies/" className="hover:text-brand transition-colors">Refund Policy</Link></li>
            <li><a href={`mailto:${SITE.supportEmail}`} className="hover:text-brand transition-colors">{SITE.supportEmail}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-mist/70">
          <span>© {new Date().getFullYear()} {SITE.brand}.com — All rights reserved.</span>
          <span>Secure payments powered by Razorpay</span>
        </div>
      </div>
    </footer>
  );
}
