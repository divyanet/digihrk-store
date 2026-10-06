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
  NoteStrip,
  DoYouKnow,
  WhatYouNeed,
  ChooseSection,
  SamplesStrip,
  PackageContents,
} from "@/components/SalesSections";
import { products, inr } from "@/lib/site";

export const metadata: Metadata = {
  title: "10,000,000+ Coloring Pages Bundle — 100,000+ Coloring Books (PDF + SVG + AI)",
  description:
    "The mega coloring bundle: 10,000,000+ coloring pages, 100,000+ coloring books in PDF, SVG & AI formats for kids & adults. Instant download, secure Razorpay payment, lifetime access.",
};

const p = products.coloring;

const heroBullets = [
  "10,000,000+ coloring pages across every theme kids love",
  "100,000+ ready-to-print coloring books",
  "3 formats: PDF + SVG + AI — print, cut & design",
  "Made for kids AND adults",
  "MRR + PLR rights included — resell & keep 100% profit",
  "Instant download + lifetime access",
];

const giveBlocks = [
  {
    h: "Endless Hours of Creative Fun",
    p: "With 10 million+ pages, the fun never runs out. Rainy day, long drive, quiet evening — there's always a fresh page waiting. No more 'I'm bored' on repeat.",
  },
  {
    h: "Skills That Grow While They Play",
    p: "Coloring builds focus, patience and hand control — the exact fine-motor skills writing needs. Kids think they're just having fun; you're building foundations.",
  },
  {
    h: "One Bundle for the Whole Family",
    p: "Simple bold designs for little hands, plus intricate mandalas and detailed art for grown-ups. This isn't a kids-only pack gathering dust — everyone uses it.",
  },
  {
    h: "A Business in a Box",
    p: "MRR + PLR rights come included. Rebrand the bundle, sell it as your own product, and keep every rupee. The bundle can pay for itself many times over.",
  },
];

const faqs = [
  {
    q: "Is this a physical product or a digital download?",
    a: "It's 100% digital. After payment, download links arrive on your email within minutes. Nothing is shipped — you print the pages at home or at any print shop, as many times as you like.",
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

const packageItems = [
  "<strong>10,000,000+ coloring pages</strong> — animals, festivals, cartoons, mandalas, educational themes & more",
  "<strong>100,000+ complete coloring books</strong> — organized, print-as-is books",
  "<strong>PDF + SVG + AI formats</strong> — for home printers, cutting machines & designers",
  "<strong>5 organized Drive folders</strong> — Coloring Pages 1, Kids Education 1 & 2, Worksheets Bundle, Busy Book",
  "<strong>MRR + PLR rights included</strong> — rebrand & resell, keep 100% profit",
  "<strong>Instant email delivery + lifetime access</strong> — print forever",
];

export default function ColoringBundlePage() {
  return (
    <>
      <AnnouncementBar text={`Offer Valid Only For Today — ${inr(p.mrp)}/- ${inr(p.price)}/- Only`} />
      <SalesHeader product={p.key} />

      {/* HERO */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,122,26,0.12),transparent_60%)]" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4 py-14 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl text-white leading-[1.1]" style={{ fontWeight: 900 }}>
              Turn Boring Screen Time Into <span className="text-brand">Hours of Creative Fun</span> with 10,000,000+ Coloring Pages!
            </h1>
            <p className="text-mist text-lg mt-4 leading-relaxed">
              10,000,000+ coloring pages &amp; 100,000+ coloring books in PDF, SVG &amp; AI —
              for kids <em>and</em> adults. Print at home, color anywhere, keep forever.
            </p>
            <ul className="mt-6 space-y-2.5 text-[15px]">
              {heroBullets.map((t) => (
                <li key={t} className="flex items-start gap-3 text-white/90">
                  <span className="text-brand font-bold mt-0.5">✓</span> {t}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-mist/80 font-medium">
              <span>📥 Digital download</span>
              <span>📁 5 organized folders</span>
              <span>⚡ Instant email delivery</span>
            </div>
            <div className="mt-6">
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

      {/* WHAT YOU GIVE YOUR CHILD */}
      <Checklist
        title="Here Is What You Are Going to Give Your Child"
        items={giveBlocks}
      />

      {/* DO YOU KNOW */}
      <DoYouKnow
        title={<>Do You Know Where Your Child's <span className="text-brand">Hours Go Every Day?</span></>}
        intro="Hours of cartoons and games keep kids quiet — but they don't build anything. Here's what too much passive screen time quietly replaces:"
        points={[
          "Creative play time — the hours kids once spent drawing, building and imagining.",
          "Attention span — fast-paced content trains kids to need constant stimulation.",
          "Family time — everyone on their own screen, in the same room, barely talking.",
          "Restful evenings — late-night scrolling pushes bedtimes later and mornings harder.",
        ]}
      />

      <NoteStrip text="All files are in soft-copy (digital) format. You will receive download links instantly via email right after payment — print at home anytime." />

      {/* INSIDE THE BUNDLE */}
      <InsideBundle
        title="Inside This Bundle You Will Discover"
        sub="Five power-packed folders, organized and ready — plus thousands of bonus books."
        cards={[
          { icon: "🎨", h: "Coloring Pages 1", p: "The core mega-collection — thousands of hand-picked coloring pages across every theme kids love." },
          { icon: "📚", h: "Kids Education 1", p: "Learning-through-coloring: alphabets, numbers, shapes and first words in fun printable form." },
          { icon: "✏️", h: "Kids Education 2", p: "More educational coloring sets that build vocabulary, recognition and early concepts while kids play." },
          { icon: "🧩", h: "Kids Worksheets Bundle", p: "Activity worksheets mixed into the bundle — puzzles, tracing and practice sheets for extra fun." },
          { icon: "📖", h: "Busy Book", p: "The beloved quiet-time busy book — interactive printable activities that keep little hands busy anywhere." },
          { icon: "💎", h: "100,000+ Coloring Books", p: "Fully organized, ready-to-print coloring books — find the perfect page in seconds." },
        ]}
      />
      <div className="bg-navy pb-14 -mt-6">
        <p className="text-center text-brand font-display text-xl" style={{ fontWeight: 700 }}>
          And Many More!… Discover the joy of endless coloring! 🎉
        </p>
      </div>

      {/* SAMPLES */}
      <SamplesStrip
        title="Here Are The Samples"
        sub="A peek at the bundle cover and the worksheets box — the real files match this quality throughout."
        images={[
          { src: p.image, alt: p.imageAlt },
          { src: products.worksheets.image, alt: products.worksheets.imageAlt },
        ]}
      />

      {/* PACKAGE CONTENTS */}
      <PackageContents
        title="Unlock a Lifetime of Creativity Today!"
        items={packageItems}
        product={p}
      />

      {/* WHAT YOU NEED */}
      <WhatYouNeed
        title="What You Need for This Mega Bundle"
        items={[
          { icon: "🧒", h: "A CURIOUS KID", p: "(or a grown-up who loves to color!)" },
          { icon: "⏰", h: "15 MINUTES A DAY", p: "That's all it takes to build a creative habit." },
          { icon: "🖨️", h: "AND A PRINTER", p: "Any home printer works — color or black & white." },
        ]}
      />

      {/* WHY RECOMMEND */}
      <section className="bg-navy-deep py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl text-center text-white" style={{ fontWeight: 800 }}>
            Why Families Recommend <span className="text-brand">DigiHRK</span>
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              ["⚡", "Instant Download", "Download links hit your email within minutes of payment. Plus lifetime access — print forever."],
              ["💎", "Premium Quality", "High-resolution, print-ready files in PDF, SVG & AI. Crisp prints every single time."],
              ["🎧", "Live Support", "Stuck anywhere? Email us anytime — real humans reply fast and sort it out."],
            ].map(([icon, h, t]) => (
              <div key={h} className="bg-navy-card border border-white/10 rounded-3xl p-7 text-center">
                <div className="text-4xl">{icon}</div>
                <h3 className="font-display font-bold text-white text-lg mt-3">{h}</h3>
                <p className="text-mist text-sm mt-2 leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHOOSE */}
      <ChooseSection
        product={p}
        aTitle={`Keep Your ${inr(p.price)} & Spend It Anywhere`}
        aSub="One pizza. Two movie tickets. Gone by tomorrow — and your child's screen time stays exactly the same."
        bTitle={`Invest ${inr(p.price)} in Unlimited Creativity`}
        bSub="10 million+ pages, 100,000+ books, MRR+PLR rights, lifetime access. One payment — years of creative fun for the whole family."
      />

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
