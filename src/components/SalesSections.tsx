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
        <div className="text-4xl">🛡️</div>
        <h2 className="font-display text-2xl sm:text-3xl mt-2" style={{ fontWeight: 800 }}>
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
