import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { TrustRow } from "@/components/SalesSections";
import { SITE, products, inr, discountPct } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.brand} — Printable Coloring Pages & Kids Worksheets Bundles`,
  description:
    "Instant-download printable bundles: 10,000,000+ coloring pages and 15,000+ kids activity worksheets. Pay securely via Razorpay, lifetime access.",
};

const why = [
  ["🎨", "Premium Quality", "High-resolution, print-ready files designed for crisp A4 prints at home or school."],
  ["⚡", "Instant Delivery", "No waiting, no shipping. Download links land in your email minutes after payment."],
  ["👨‍👩‍👧", "Made for Families", "Screen-free fun for kids — plus thousands of designs adults will love too."],
  ["♾️", "Lifetime Access", "Pay once. Download, print and re-print forever. Free future updates included."],
];

export default function Home() {
  const list = [products.coloring, products.worksheets];
  return (
    <>
      <AnnouncementBar text={`Launch Offer: Flat ${discountPct(products.coloring)}% OFF on both bundles — today only`} />
      <SiteHeader />

      {/* HERO — pale green to blue, Crevvo homepage style */}
      <section className="bg-gradient-to-br from-[#e9f8ef] via-[#f2fbf5] to-[#e4f1fd] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-14 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white border border-emerald-200 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
              ⚡ INSTANT DIGITAL DOWNLOADS
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-ink mt-5" style={{ fontWeight: 900 }}>
              Printable Bundles Your <span className="text-brand">Kids Will Love</span>
            </h1>
            <p className="text-muted text-lg mt-4 max-w-lg leading-relaxed">
              Millions of coloring pages and thousands of learning worksheets — download
              instantly, print at home, and turn screen time into creative time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/coloring-pages-bundle/" className="btn-cta text-white font-display font-bold px-8 py-4 rounded-2xl" style={{ fontWeight: 700 }}>
                🎨 Coloring Bundle
              </Link>
              <Link href="/kids-activity-worksheets/" className="btn-pill text-white font-display font-bold px-8 py-4 rounded-2xl" style={{ fontWeight: 700 }}>
                📝 Worksheets Bundle
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted font-medium">🔒 Secure payment via Razorpay • UPI, Cards, NetBanking</p>
          </div>
          <div className="relative flex justify-center items-start gap-4 sm:gap-6">
            {list.map((p, i) => (
              <Link key={p.key} href={`/${p.slug}/`} className={i === 0 ? "animate-floaty" : "animate-floaty2 mt-10"}>
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  width={300}
                  height={300}
                  priority={i === 0}
                  className="rounded-3xl shadow-2xl shadow-slate-900/20 w-40 sm:w-64 bg-white hover:scale-[1.03] transition-transform"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST ROW */}
      <section className="max-w-6xl mx-auto px-4 -mt-2 py-12">
        <TrustRow />
      </section>

      {/* PRODUCTS */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl text-center text-ink" style={{ fontWeight: 800 }}>
            Our Bestselling Bundles
          </h2>
          <p className="text-muted text-center mt-3 max-w-xl mx-auto">
            Two mega bundles. One-time payment. Yours forever.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {list.map((p) => (
              <article key={p.key} className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-900/5 border border-slate-100 flex flex-col">
                <div className="relative">
                  <Image src={p.image} alt={p.imageAlt} width={640} height={400} className="w-full h-64 object-cover object-top" />
                  <span className="absolute top-4 left-4 bg-brand text-white text-[11px] font-bold px-3 py-1 rounded-full tracking-widest">
                    {p.badge}
                  </span>
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <h3 className="font-display text-xl text-ink" style={{ fontWeight: 800 }}>{p.name}</h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed">{p.tagline}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-slate-400 line-through font-semibold">{inr(p.mrp)}</span>
                    <span className="font-display text-3xl text-ink" style={{ fontWeight: 900 }}>{inr(p.price)}</span>
                    <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded-md">{discountPct(p)}% OFF</span>
                  </div>
                  <Link
                    href={`/${p.slug}/`}
                    className="btn-pill text-white text-center font-display font-bold px-6 py-3.5 rounded-full mt-5"
                    style={{ fontWeight: 700 }}
                  >
                    VIEW BUNDLE →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl text-center text-ink" style={{ fontWeight: 800 }}>
            Why Families Choose <span className="text-brand">DigiHRK</span>
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {why.map(([icon, h, p]) => (
              <div key={h} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl">{icon}</div>
                <h3 className="font-display font-bold text-ink mt-3">{h}</h3>
                <p className="text-muted text-sm mt-2 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl text-center text-white" style={{ fontWeight: 800 }}>
            From Payment to Print in <span className="text-brand">Minutes</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-6">
            {[
              ["1", "Pick your bundle", "Choose the coloring mega-bundle, the worksheets bundle — or grab both."],
              ["2", "Pay securely", "Checkout on Razorpay with UPI, cards, netbanking or wallets."],
              ["3", "Download & print", "Links arrive on your email instantly. Print at home, anytime."],
            ].map(([n, h, p]) => (
              <div key={n} className="step-card p-7">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-light to-brand-dark text-white font-display text-xl grid place-items-center" style={{ fontWeight: 800 }}>{n}</div>
                <h3 className="font-display font-bold text-white text-lg mt-4">{h}</h3>
                <p className="text-mist text-sm mt-2 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[#e9f8ef] to-[#e4f1fd] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-ink" style={{ fontWeight: 800 }}>
            Ready to make learning fun?
          </h2>
          <p className="text-muted mt-3">One-time payment. Lifetime of printing. Zero boredom.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/coloring-pages-bundle/" className="btn-cta text-white font-display font-bold px-8 py-4 rounded-2xl" style={{ fontWeight: 700 }}>
              🎨 Get Coloring Bundle
            </Link>
            <Link href="/kids-activity-worksheets/" className="btn-cta text-white font-display font-bold px-8 py-4 rounded-2xl" style={{ fontWeight: 700 }}>
              📝 Get Worksheets Bundle
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
