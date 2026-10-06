"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function Faq({ items, dark = false }: { items: FaqItem[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`faq-item ${isOpen ? "open" : ""} rounded-2xl border overflow-hidden transition-colors ${
              dark
                ? "bg-navy-card border-white/10"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className={`font-display font-semibold text-[15px] ${dark ? "text-white" : "text-ink"}`}>
                {f.q}
              </span>
              <span className={`faq-chevron shrink-0 w-8 h-8 rounded-full grid place-items-center text-sm font-bold ${dark ? "bg-brand/15 text-brand" : "bg-orange-50 text-brand-dark"}`}>
                ▼
              </span>
            </button>
            <div className="faq-answer">
              <div>
                <p className={`px-5 pb-5 text-sm leading-relaxed ${dark ? "text-mist" : "text-muted"}`}>
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
