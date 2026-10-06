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
  title: "15,000+ Kids Activity Worksheets Bundle — Printable Learning (Ages 3–8)",
  description:
    "15,000+ printable kids worksheets: alphabets, Hindi, numbers, coloring, cut & glue, word search. Ages 3–8. Instant download, secure Razorpay payment, lifetime access.",
};

const p = products.worksheets;

const heroBullets = [
  "15,000+ printable worksheets — years of learning material",
  "Made for ages 3–8, grows with your child",
  "6 categories: alphabets, Hindi, numbers, coloring, cut & glue, word search",
  "Turns screen time into real learning time",
  "Print at home in color or black & white",
  "Instant download + lifetime access",
];

const giveBlocks = [
  {
    h: "Years of Learning in One Purchase",
    p: "15,000+ sheets cover your child from preschool to early primary. Print fresh worksheets every week — never buy another workbook again.",
  },
  {
    h: "School-Ready Skills, Built Through Play",
    p: "Tracing builds handwriting, counting builds maths confidence, word games build vocabulary. Kids think they're playing — you know they're learning.",
  },
  {
    h: "One Bundle for Every Age 3–8",
    p: "Simple tracing for toddlers, puzzles and word search for older kids. Siblings of different ages can finally share one bundle happily.",
  },
  {
    h: "Zero Prep, Zero Stress for Parents",
    p: "No more hunting the internet for printable ideas every evening. Everything is organized, printable, and ready — just print today's sheet.",
  },
];

const faqs = [
  {
    q: "Which age group are these worksheets for?",
    a: "They're designed for ages 3–8. Younger kids start with tracing and coloring; older ones move to word search, numbers and puzzles. The variety means siblings of different ages can share one bundle.",
  },
  {
    q: "Is this a physical product or a digital download?",
    a: "It's 100% digital. After payment, download links arrive on your email within minutes. You print the sheets at home or at any print shop — nothing is shipped.",
  },
  {
    q: "What paper size should I print on?",
    a: "All worksheets are A4-sized PDFs — the standard home-printer size in India. They print perfectly on any inkjet or laser printer.",
  },
  {
    q: "Can I print in black & white?",
    a: "Yes. Everything works in B&W, which also keeps printing cheap. Color printing makes the sheets extra engaging if you prefer it.",
  },
  {
    q: "How will I receive my files?",
    a: "Instantly by email after your Razorpay payment succeeds. Files are hosted on Google Drive — open the links, save them, print anytime.",
  },
  {
    q: "Do I need any teaching experience to use these?",
    a: "None at all. Every sheet is self-explanatory — if you can print a page, you can use the whole bundle. Just hand your child a sheet and a pencil.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "UPI (GPay, PhonePe, Paytm), credit & debit cards, net banking and wallets — all processed securely through Razorpay. We never see or store your payment details.",
  },
  {
    q: "What if my download link doesn't work?",
    a: "Reply to your delivery email and our support team will fix it fast. If we can't deliver your files at all, you get a full refund — no drama.",
  },
];

const steps = [
  { n: "1", h: "Tap the buy button", p: "Hit any orange button on this page — it opens our secure Razorpay payment page." },
  { n: "2", h: "Pay your way", p: "UPI, card, netbanking or wallet. The whole thing takes under a minute." },
  { n: "3", h: "Download & print", p: "Links land in your inbox instantly. Print today's worksheet in minutes." },
];

const packageItems = [
  "<strong>15,000+ printable worksheets</strong> — the complete early-learning library",
  "<strong>Alphabets (A–Z)</strong> — tracing, matching & recognition sheets",
  "<strong>Hindi (अ–ज्ञ)</strong> — varnamala tracing, shabd & picture matching",
  "<strong>Numbers</strong> — counting, tracing & early maths games",
  "<strong>Coloring, Cut & Glue, Word Search</strong> — creativity + skills in every pack",
  "<strong>Instant email delivery + lifetime access</strong> — print forever",
];

export default function WorksheetsBundlePage() {
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
              Turn Screen Time Into <span className="text-brand">Smart Learning Time</span> with 15,000+ Printable Worksheets!
            </h1>
            <p className="text-mist text-lg mt-4 leading-relaxed">
              15,000+ worksheets for ages 3–8 — alphabets, Hindi, numbers, coloring,
              cut &amp; glue and word search. Designed to make your child <em>want</em> to learn.
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
              <span>📁 6 learning categories</span>
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
        title={<>What Is Your Child <span className="text-brand">Actually Learning</span> on That Screen?</>}
        intro="Cartoons entertain and games distract — but neither builds school skills. Here's what passive screen time quietly replaces:"
        points={[
          "Practice time — the 15 minutes a day that build handwriting and counting.",
          "Attention span — fast-paced content trains kids to need constant stimulation.",
          "Curiosity — ready-made entertainment replaces the urge to figure things out.",
          "Family learning time — worksheets done together beat solo scrolling, every time.",
        ]}
      />

      <NoteStrip text="All worksheets are in soft-copy (digital PDF) format. You will receive download links instantly via email right after payment — print at home anytime, in color or black & white." />

      {/* INSIDE THE BUNDLE */}
      <InsideBundle
        title="Inside This Bundle You Will Discover"
        sub="Six learning categories, thousands of sheets each — organized and printable."
        cards={[
          { icon: "🔤", h: "Alphabets", p: "A–Z tracing, matching and recognition sheets that make letter learning stick through play." },
          { icon: "🅰️", h: "Hindi", p: "अ से ज्ञ तक — varnamala tracing, shabd and picture-matching worksheets for strong Hindi foundations." },
          { icon: "🔢", h: "Numbers", p: "Counting, number tracing, simple addition and number games that build early maths confidence." },
          { icon: "🎨", h: "Coloring", p: "Fun coloring sheets woven into the learning pack — creativity breaks between study activities." },
          { icon: "✂️", h: "Cut & Glue", p: "Scissor-skill activities that develop hand control, patience and following instructions." },
          { icon: "🔍", h: "Word Search", p: "Age-perfect word puzzles that grow vocabulary, spelling and sharp eyes." },
        ]}
      />
      <div className="bg-navy pb-14 -mt-6">
        <p className="text-center text-brand font-display text-xl" style={{ fontWeight: 700 }}>
          And Many More!… Discover the joy of learning through play! 🎉
        </p>
      </div>

      {/* SAMPLES */}
      <SamplesStrip
        title="Here Are The Samples"
        sub="A peek at the worksheets box — thousands of sheets inside match this quality throughout."
        images={[
          { src: p.image, alt: p.imageAlt },
          { src: products.coloring.image, alt: products.coloring.imageAlt },
        ]}
      />

      {/* PACKAGE CONTENTS */}
      <PackageContents
        title="Unlock Your Child's Bright Future Today!"
        items={packageItems}
        product={p}
      />

      {/* WHAT YOU NEED */}
      <WhatYouNeed
        title="What You Need for This Worksheets Bundle"
        items={[
          { icon: "🧒", h: "A CURIOUS 3–8 YEAR OLD KID", p: "That's the only qualification needed." },
          { icon: "⏰", h: "15 MINUTES A DAY", p: "Short, fun sessions beat long boring ones." },
          { icon: "🖨️", h: "AND A PRINTER", p: "Any home printer works — color or black & white." },
        ]}
      />

      {/* WHY RECOMMEND */}
      <section className="bg-navy-deep py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl text-center text-white" style={{ fontWeight: 800 }}>
            Why Parents &amp; Teachers Recommend <span className="text-brand">DigiHRK</span>
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              ["⚡", "Instant Download", "Download links hit your email within minutes of payment. Plus lifetime access — print forever."],
              ["💎", "Premium Quality", "High-resolution A4 PDFs designed by educators. Crisp prints every single time."],
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
        aSub="One pizza. Two movie tickets. Gone by tomorrow — and your child's learning stays exactly where it is."
        bTitle={`Invest ${inr(p.price)} in Your Child's Education`}
        bSub="15,000+ worksheets, 6 categories, ages 3–8, lifetime access. One payment — years of smart learning at home."
      />

      <HowItWorks steps={steps} />

      <FinalCta product={p} headline="Give Your Child a Head Start Today" />

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
