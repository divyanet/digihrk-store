import Link from "next/link";
import { SITE } from "@/lib/site";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="DigiHRK home">
      <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-light to-brand-dark grid place-items-center text-white font-display font-800 text-lg shadow-lg shadow-orange-500/30" style={{ fontWeight: 800 }}>
        D
      </span>
      <span className={`font-display text-xl tracking-tight ${dark ? "text-white" : "text-ink"}`} style={{ fontWeight: 800 }}>
        Digi<span className="text-brand">HRK</span>
        <span className={`text-[10px] font-sans font-semibold align-top ml-0.5 ${dark ? "text-mist" : "text-muted"}`}>.COM</span>
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-ink/80">
          <Link href="/" className="hover:text-brand transition-colors">Home</Link>
          <Link href="/coloring-pages-bundle/" className="hover:text-brand transition-colors">Coloring Bundle</Link>
          <Link href="/kids-activity-worksheets/" className="hover:text-brand transition-colors">Worksheets Bundle</Link>
          <Link href="/policies/" className="hover:text-brand transition-colors">Policies</Link>
        </nav>
        <Link
          href="/coloring-pages-bundle/"
          className="btn-pill text-white text-sm font-bold px-5 py-2.5 rounded-full"
        >
          View Bundles
        </Link>
      </div>
    </header>
  );
}
