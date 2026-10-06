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
  title: "15,000+ Kids Activity Worksheets Bundle — Printable Learning (Ages 3–8)",
  description:
    "15,000+ printable kids worksheets: alphabets, Hindi, numbers, coloring, cut & glue, word search. Ages 3–8. Instant download, secure Razorpay payment, lifetime access.",
};

const p = products.worksheets;

const checklist = [
  {
    h: "15,000+ Printable Worksheets — Years of Learning Material",
    p: "One purchase covers your child from preschool to early primary. Print fresh sheets every week — never buy another workbook again.",
  },
  {
    h: "Made for Ages 3–8",
    p: "Age-appropriate activities that grow with your child: simple tracing for toddlers, puzzles and word games for older kids.",
  },
  {
    h: "6 Learning Categories in One Bundle",
    p: "Alphabets, Hindi (अ-ज्ञ), Numbers, Coloring, Cut & Glue, and Word Search — every core early skill in a single organized pack.",
  },
  {
    h: "Turns Screen Time Into Learning Time",
    p: "Kids think they're playing. You know they're practicing handwriting, counting, vocabulary and focus. Everybody wins.",
  },
  {
    h: "Print at Home, Anytime",
    p: "Crisp A4 PDFs that print beautifully in color or black & white. Re-print favorites as many times as your child wants.",
  },
  {
    h: "Instant Download + Lifetime Access",
    p: "Pay once on secure Razorpay checkout. Download links hit your email within minutes — yours forever, with free updates.",
  },
];

const inside = [
  { icon: "🔤", h: "Alphabets", p: "A–Z tracing, matching and recognition sheets that make letter learning stick through play." },
  { icon: "🅰️", h: "Hindi", p: "अ से ज्ञ तक — varnamala tracing, shabd and picture-matching worksheets for strong Hindi foundations." },
  { icon: "🔢", h: "Numbers", p: "Counting, number tracing, simple addition and number games that build early maths confidence." },
  { icon: "🎨", h: "Coloring", p: "Fun coloring sheets woven into the learning pack — creativity breaks between study activities." },
  { icon: "✂️", h: "Cut & Glue", p: "Scissor-skill activities that develop hand control, patience and following instructions." },
  { icon: "🔍", h: "Word Search", p: "Age-perfect word puzzles that grow vocabulary, spelling and sharp eyes — kids get addicted (in a good way)." },
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

export default function WorksheetsBundlePage() {
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
              📝 15,000+ PRINTABLE WORKSHEETS
            </span>
            <h1 className="font-display text-4xl sm:text-5xl text-white leading-[1.1] mt-5" style={{ fontWeight: 900 }}>
              Turn Screen Time Into <span className="text-brand">Smart Learning Time</span>
            </h1>
            <p className="text-mist text-lg mt-4 leading-relaxed">
              15,000+ printable worksheets for ages 3–8 — alphabets, Hindi, numbers,
              coloring, cut &amp; glue and word search. Designed to make your child
              <em> want</em> to learn.
            </p>
            <ul className="mt-6 space-y-2.5 text-[15px]">
              {[
                "15,000+ worksheets across 6 learning categories",
                "Ages 3–8 — grows with your child",
                "Hindi + English — alphabets, numbers & more",
                "Print at home in color or B&W",
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

      <Checklist title="Here's Everything Your Child Gets" items={checklist} />

      <InsideBundle
        title="6 Learning Categories, One Mega Bundle"
        sub="Thousands of sheets in every category — organized, printable, and ready the moment your payment completes."
        cards={inside}
      />

      {/* PAIN / AGITATION — honest, gentle */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-ink" style={{ fontWeight: 800 }}>
            What Is Your Child <span className="text-brand">Actually Learning</span> on That Screen?
          </h2>
          <p className="text-muted mt-4 leading-relaxed max-w-2xl mx-auto">
            Cartoons entertain. Games distract. But 15 minutes a day with the right
            worksheet builds handwriting, counting, vocabulary and focus — skills that
            show up in school, not just on a screen. Make those 15 minutes count.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
            {[
              ["✍️", "Better Handwriting", "Daily tracing practice builds the muscle memory neat writing needs."],
              ["🧠", "Sharper Thinking", "Puzzles and word games train problem-solving while kids play."],
              ["🏫", "School-Ready", "Alphabets, Hindi and numbers — the exact foundations early classes demand."],
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
