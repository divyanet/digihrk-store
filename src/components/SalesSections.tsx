import Image from "next/image";
import BuyButton from "./BuyButton";
import Countdown from "./Countdown";
import { inr, discountPct, type Product, type ProductKey } from "@/lib/site";

/* ---------- Price card used in hero + repeat before FAQ ---------- */
export function PriceBox({ product, id }: { product: Product; id?: string }) {
  return (
    <div id={id} className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/40 max-w-md w-full pop-in">
      <div className="flex items-center justify-between">
        <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
          {discountPct(product)}% OFF — TODAY ONLY
        </span>
        <span className="text-xs font-semibold text-muted">One-time payment</span>
      </div>
      <div className="mt-4 flex items-end gap-3">
        <span className="text-slate-400 line-through text-xl font-semibold">{inr(product.mrp)}</span>
        <span className="font-display text-5xl text-ink" style={{ fontWeight: 900 }}>{inr(product.price)}</span>
        <span className="text-muted text-sm font-semibold mb-1.5">/- only</span>
      </div>
      <div className="mt-5">
        <BuyButton product={product.key} className="w-full">
          👉 YES! Give Me Instant Access
        </BuyButton>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4 text-[11px] font-semibold text-muted">
        <span>⚡ Instant download</span>
        <span>🔒 100% secure</span>
        <span>♾️ Lifetime access</span>
      </div>
    </div>
  );
}

/* ---------- Compact trust row ---------- */
export function TrustRow({ dark = false }: { dark?: boolean }) {
  const items = [
    ["⚡", "Instant Download", "Get files on email right after payment"],
    ["🔒", "Secure Payment", "Pay safely via Razorpay — UPI, cards, netbanking"],
    ["♾️", "Lifetime Access", "Download & print anytime, forever"],
  ];
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {items.map(([icon, title, sub]) => (
        <div
          key={title}
          className={`rounded-2xl p-5 text-center ${dark ? "bg-navy-card border border-white/10" : "bg-white border border-slate-100 shadow-sm"}`}
        >
          <div className="text-3xl">{icon}</div>
          <h3 className={`font-display font-bold mt-2 ${dark ? "text-white" : "text-ink"}`}>{title}</h3>
          <p className={`text-sm mt-1 ${dark ? "text-mist" : "text-muted"}`}>{sub}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Benefit checklist (orange checks) ---------- */
export function Checklist({ title, items }: { title: string; items: { h: string; p: string }[] }) {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl text-center text-ink" style={{ fontWeight: 800 }}>
          {title}
        </h2>
        <div className="mt-10 space-y-4">
          {items.map((it, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border-l-4 border-brand flex gap-4 pop-in">
              <span className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-brand-light to-brand-dark text-white grid place-items-center font-bold">
                ✓
              </span>
              <div>
                <h3 className="font-display font-bold text-ink">{it.h}</h3>
                <p className="text-muted text-sm mt-1 leading-relaxed">{it.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- "Inside the bundle" cards ---------- */
export function InsideBundle({
  title,
  sub,
  cards,
}: {
  title: string;
  sub: string;
  cards: { icon: string; h: string; p: string }[];
}) {
  return (
    <section className="bg-navy py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl text-center text-white" style={{ fontWeight: 800 }}>
          {title}
        </h2>
        <p className="text-mist text-center mt-3 max-w-2xl mx-auto">{sub}</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div key={i} className="bg-navy-card border border-brand/25 rounded-2xl p-6 hover:border-brand/60 transition-colors">
              <div className="text-4xl">{c.icon}</div>
              <h3 className="font-display font-bold text-white mt-3">{c.h}</h3>
              <p className="text-mist text-sm mt-2 leading-relaxed">{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works — dark cards, orange offset border ---------- */
export function HowItWorks({ steps }: { steps: { n: string; h: string; p: string }[] }) {
  return (
    <section className="bg-navy-deep py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl text-center text-white" style={{ fontWeight: 800 }}>
          Get Started in <span className="text-brand">3 Easy Steps</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((s) => (
            <div key={s.n} className="step-card p-7">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-light to-brand-dark text-white font-display text-xl grid place-items-center" style={{ fontWeight: 800 }}>
                {s.n}
              </div>
              <h3 className="font-display font-bold text-white text-lg mt-4">{s.h}</h3>
              <p className="text-mist text-sm mt-2 leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Guarantee strip ---------- */
export function GuaranteeStrip() {
  return (
    <section className="bg-gradient-to-r from-brand-dark via-brand to-brand-dark py-10">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <Image
          src="/guarantee-seal.png"
          alt="100% Instant Delivery Guarantee — DigiHRK"
          width={180}
          height={180}
          className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full shadow-2xl shadow-black/30 bg-white"
        />
        <h2 className="font-display text-2xl sm:text-3xl mt-4" style={{ fontWeight: 800 }}>
          100% Instant Delivery Guarantee
        </h2>
        <p className="mt-2 text-white/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Your download links arrive on your email within minutes of payment. Facing any
          issue? Just reply to the email — our support team will sort it out fast.
        </p>
      </div>
    </section>
  );
}

/* ---------- Countdown + final CTA ---------- */
export function FinalCta({ product, headline }: { product: Product; headline: string }) {
  return (
    <section className="bg-navy py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-brand font-bold tracking-widest text-xs uppercase">Limited time offer</p>
        <h2 className="font-display text-3xl sm:text-4xl text-white mt-3" style={{ fontWeight: 800 }}>
          {headline}
        </h2>
        <div className="mt-6 flex justify-center">
          <Countdown />
        </div>
        <div className="mt-8 flex justify-center">
          <PriceBox product={product} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Product hero visual ---------- */
export function HeroVisual({ product }: { product: Product }) {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-brand/20 blur-3xl rounded-full" aria-hidden />
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-brand text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest shadow-lg whitespace-nowrap">
        ⭐ {product.badge}
      </span>
      <Image
        src={product.image}
        alt={product.imageAlt}
        width={520}
        height={520}
        priority
        className="relative rounded-3xl shadow-2xl shadow-black/50 w-full max-w-[420px] mx-auto animate-floaty bg-white"
      />
    </div>
  );
}

/* ============================================================
   Crevvo sales-page mirror sections
   (same flow as crevvo.in/step/preschool-worksheet-bundle/,
    with honest claims only — no fake counters or reviews)
   ============================================================ */

/* ---------- NOTE strip: soft-copy / instant email ---------- */
export function NoteStrip({ text }: { text: string }) {
  return (
    <div className="bg-navy-deep border-y border-brand/30">
      <p className="max-w-4xl mx-auto px-4 py-4 text-center text-sm sm:text-[15px] text-mist">
        <span className="text-brand font-bold">NOTE:</span> {text}
      </p>
    </div>
  );
}

/* ---------- "DO YOU KNOW?" — gentle, honest version ---------- */
export function DoYouKnow({ title, intro, points }: { title: React.ReactNode; intro: string; points: string[] }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl text-center text-ink" style={{ fontWeight: 800 }}>
          {title}
        </h2>
        <p className="text-muted text-center mt-4 max-w-2xl mx-auto leading-relaxed">{intro}</p>
        <div className="mt-8 bg-cream border border-orange-100 rounded-3xl p-6 sm:p-8">
          <ul className="space-y-3.5">
            {points.map((pt, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-ink/90">
                <span className="shrink-0 w-7 h-7 rounded-full bg-brand/15 text-brand-dark grid place-items-center font-bold text-sm">!</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- "What you need" — kid + 15 min + printer ---------- */
export function WhatYouNeed({ title, items }: { title: string; items: { icon: string; h: string; p: string }[] }) {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-ink" style={{ fontWeight: 800 }}>{title}</h2>
        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.h} className="bg-navy rounded-3xl p-8 border border-brand/25">
              <div className="text-5xl">{it.icon}</div>
              <h3 className="font-display font-bold text-white text-lg mt-4 tracking-wide">{it.h}</h3>
              <p className="text-mist text-sm mt-2">{it.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- "Which will you choose?" A vs B + countdown ---------- */
export function ChooseSection({ product, aTitle, aSub, bTitle, bSub }: {
  product: Product;
  aTitle: string; aSub: string; bTitle: string; bSub: string;
}) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-ink" style={{ fontWeight: 800 }}>
          Which Will <span className="text-brand">You Choose?</span>
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 gap-6 text-left">
          <div className="rounded-3xl border-2 border-slate-200 bg-slate-50 p-8 opacity-80">
            <span className="inline-block bg-slate-400 text-white font-display font-bold text-lg w-12 h-12 rounded-2xl grid place-items-center" style={{ fontWeight: 800 }}>A</span>
            <h3 className="font-display font-bold text-xl text-ink mt-4">{aTitle}</h3>
            <p className="text-muted text-sm mt-2 leading-relaxed">{aSub}</p>
          </div>
          <div className="rounded-3xl border-2 border-brand bg-gradient-to-b from-orange-50 to-white p-8 shadow-xl shadow-orange-500/10 relative">
            <span className="absolute -top-3 right-6 bg-brand text-white text-[11px] font-bold px-3 py-1 rounded-full tracking-widest">SMART CHOICE</span>
            <span className="inline-block bg-gradient-to-br from-brand-light to-brand-dark text-white font-display font-bold text-lg w-12 h-12 rounded-2xl grid place-items-center" style={{ fontWeight: 800 }}>B</span>
            <h3 className="font-display font-bold text-xl text-ink mt-4">{bTitle}</h3>
            <p className="text-muted text-sm mt-2 leading-relaxed">{bSub}</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-5">
          <p className="text-sm font-bold text-muted tracking-widest uppercase">Offer ends in</p>
          <Countdown />
          <BuyButton product={product.key}>
            👉 I Choose {product.key === "coloring" ? "Creativity" : "Smart Learning"} — Give Me Access
          </BuyButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- "Here are the samples" ---------- */
export function SamplesStrip({ title, sub, images }: { title: string; sub: string; images: { src: string; alt: string }[] }) {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-ink" style={{ fontWeight: 800 }}>{title}</h2>
        <p className="text-muted mt-3 max-w-xl mx-auto">{sub}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {images.map((im) => (
            <Image
              key={im.src}
              src={im.src}
              alt={im.alt}
              width={380}
              height={380}
              className="rounded-3xl shadow-xl shadow-slate-900/10 w-64 sm:w-80 bg-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Package contents ("Unlock ... today") ---------- */
export function PackageContents({ title, items, product }: { title: string; items: string[]; product: Product }) {
  return (
    <section className="bg-navy py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl text-center text-white" style={{ fontWeight: 800 }}>{title}</h2>
        <div className="mt-8 bg-navy-card border border-brand/30 rounded-3xl p-6 sm:p-8">
          <ul className="space-y-3">
            {items.map((it, i) => (
              <li key={i} className="flex items-start gap-3 text-white/90 text-[15px]">
                <span className="text-brand font-bold mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: it }} />
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-mist text-sm">Regular Price: <span className="line-through">{inr(product.mrp)}</span></p>
              <p className="text-white font-display text-2xl mt-1" style={{ fontWeight: 800 }}>
                Buy Today At Just <span className="text-brand">{inr(product.price)}/-</span>
              </p>
            </div>
            <BuyButton product={product.key} className="shrink-0">Get It Now →</BuyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
