import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SalesHeader from "@/components/SalesHeader";
import SiteFooter from "@/components/SiteFooter";
import BuyButton from "@/components/BuyButton";
import Faq from "@/components/Faq";
import StickyBuyBar from "@/components/StickyBuyBar";
import {
  PriceBox,
  TrustRow,
  Checklist,
  InsideBundle,
  HowItWorks,
  GuaranteeStrip,
  FinalCta,
  HeroVisual,
} from "@/components/SalesSections";
import { products, discountPct } from "@/lib/site";

export const metadata: Metadata = {
  title: "10,000,000+ Coloring Pages Bundle — 100,000+ Coloring Books (PDF + SVG + AI)",
  description:
    "The mega coloring bundle: 10,000,000+ coloring pages, 100,000+ coloring books in PDF, SVG & AI formats for kids & adults. Instant download, secure Razorpay payment, lifetime access.",
};

const p = products.coloring;

const checklist = [
  {
    h: "10,000,000+ Coloring Pages — An Endless Supply of Creativity",
    p: "Animals, festivals, cartoons, mandalas, educational themes and thousands more. Your child will never run out of pages to color — and neither will you.",
  },
  {
    h: "100,000+ Complete Coloring Books",
    p: "Fully organized coloring books you can print as-is. Perfect for gifting, classrooms, activity centers, or quiet evenings at home.",
  },
  {
    h: "3 Print-Ready Formats: PDF + SVG + AI",
    p: "Crisp PDFs for home printing, SVGs for Cricut & cutting machines, AI files for designers. Whatever your printer or project — you're covered.",
  },
  {
    h: "For Kids AND Adults",
    p: "Simple bold designs for little hands, plus intricate mandalas and detailed art for grown-ups. One bundle the whole family actually uses.",
  },
  {
    h: "MRR + PLR Rights Included",
    p: "Master Resell Rights and Private Label Rights come with the bundle — rebrand it, bundle it, even resell it and keep every rupee.",
  },
  {
    h: "Instant Download + Lifetime Access",
    p: "Pay once on secure Razorpay checkout. Download links hit your email within minutes — print anytime, forever.",
  },
];

const inside = [
  { icon: "🎨", h: "Coloring Pages 1", p: "The core mega-collection — thousands of hand-picked coloring pages across every theme kids love." },
  { icon: "📚", h: "Kids Education 1", p: "Learning-through-coloring: alphabets, numbers, shapes and first words in fun printable form." },
  { icon: "✏️", h: "Kids Education 2", p: "More educational coloring sets that build vocabulary, recognition and early concepts while kids play." },
  { icon: "🧩", h: "Kids Worksheets Bundle", p: "Activity worksheets mixed into the bundle — puzzles, tracing and practice sheets for extra fun." },
  { icon: "📖", h: "Busy Book", p: "The beloved quiet-time busy book — interactive printable activities that keep little hands busy anywhere." },
  { icon: "💎", h: "Bonus: Organized Books", p: "100,000+ ready-to-print coloring books, neatly organized so you find the perfect page in seconds." },
];

const faqs = [
  {
    q: "Is this a physical product or a digital download?",
    a: "It's 100% digital. After payment, you get download links on your email within minutes. Nothing is shipped — you print the pages at home or at any print shop, as many times as you like.",
  },
  {
    q: "What file formats are included?",
    a: "PDF (print-ready), SVG (for Cricut, Silhouette & cutting machines) and AI (Adobe Illustrator, for designers). Every format is high-resolution and prints crisply on A4.",
  },
  {
    q: "How will I receive my files?",
    a: "Right after your Razorpay payment succeeds, download links are emailed to you instantly. The files are hosted on Google Drive — just open, save, and print.",
  },
  {
    q: "Can I print with a black & white printer?",
    a: "Absolutely — coloring pages are designed to be colored in, so they print perfectly in black & white. Color printing works great too for the educational sets.",
  },
  {
    q: "What do MRR + PLR rights mean?",
    a: "Master Resell Rights (MRR) let you resell the bundle as-is and keep 100% of the profit. Private Label Rights (PLR) let you rebrand it with your own name and logo. Both are included with your purchase.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "All of them — UPI (GPay, PhonePe, Paytm), credit & debit cards, net banking and wallets — processed securely through Razorpay. We never see or store your card details.",
  },
  {
    q: "What if my download link doesn't work?",
    a: "Just reply to your delivery email and our support team will fix it fast — usually within a few hours. If we can't deliver your files at all, you get a full refund. Simple.",
  },
];

const steps = [
  { n: "1", h: "Tap the buy button", p: "Hit any orange button on this page — it opens our secure Razorpay payment page." },
  { n: "2", h: "Pay your way", p: "UPI, card, netbanking or wallet. The whole thing takes under a minute." },
  { n: "3", h: "Download & print", p: "Links land in your inbox instantly. Print at home and start coloring today." },
];

export default function ColoringBundlePage() {
  return (
    <>
      <AnnouncementBar text={`LIMITED TIME OFFER — ${discountPct(p)}% OFF ends tonight`} />
      <SalesHeader product={p.key} />

      {/* HERO */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,122,26,0.12),transparent_60%)]" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4 py-14 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-brand/15 border border-brand/40 text-brand text-xs font-bold px-4 py-1.5 rounded-full tracking-widest">
              🎨 10 MILLION+ PAGES MEGA BUNDLE
            </span>
            <h1 className="font-display text-4xl sm:text-5xl text-white leading-[1.1] mt-5" style={{ fontWeight: 900 }}>
              Turn Boring Screen Time Into <span className="text-brand">Hours of Creative Fun</span>
            </h1>
            <p className="text-mist text-lg mt-4 leading-relaxed">
              10,000,000+ coloring pages and 100,000+ coloring books in PDF, SVG &amp; AI —
              for kids <em>and</em> adults. Print at home, color anywhere, keep forever.
            </p>
            <ul className="mt-6 space-y-2.5 text-[15px]">
              {[
                "10,000,000+ coloring pages across every theme",
                "100,000+ ready-to-print coloring books",
                "PDF + SVG + AI formats — print, cut & design",
                "MRR + PLR rights included",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-white/90">
                  <span className="text-brand font-bold mt-0.5">✓</span> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <BuyButton product={p.key}>👉 YES! Give Me Instant Access</BuyButton>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <HeroVisual product={p} />
            <PriceBox product={p} />
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-navy-deep py-12">
        <div className="max-w-6xl mx-auto px-4">
          <TrustRow dark />
        </div>
      </section>

      <Checklist title="Here's Everything You Get" items={checklist} />

      <InsideBundle
        title="Inside the Bundle: 5 Power-Packed Folders"
        sub="Every folder opens instantly from your email — save it to your own Drive, print what you love, skip what you don't."
        cards={inside}
      />

      {/* PAIN / AGITATION — honest, gentle */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-ink" style={{ fontWeight: 800 }}>
            Do You Know Where Your Child's <span className="text-brand">Hours Go Every Day?</span>
          </h2>
          <p className="text-muted mt-4 leading-relaxed max-w-2xl mx-auto">
            Endless cartoons and games keep kids quiet — but they don't build anything.
            Coloring is different: it trains focus, patience, hand control and creativity,
            all while kids think they're just having fun. Give them pages, not just pixels.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
            {[
              ["🎯", "Builds Focus", "Finishing a page teaches kids to concentrate on one task till it's done."],
              ["✋", "Stronger Hands", "Coloring inside the lines develops the fine motor control writing needs."],
              ["🌈", "Real Creativity", "Choosing colors and patterns grows imagination — no algorithm required."],
            ].map(([icon, h, t]) => (
              <div key={h} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                <div className="text-3xl">{icon}</div>
                <h3 className="font-display font-bold text-ink mt-2">{h}</h3>
                <p className="text-muted text-sm mt-1">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks steps={steps} />

      <FinalCta product={p} headline="Ready for a Lifetime of Coloring?" />

      {/* FAQ */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl text-center text-ink" style={{ fontWeight: 800 }}>
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <GuaranteeStrip />
      <SiteFooter />
      <StickyBuyBar product={p} />
    </>
  );
}
