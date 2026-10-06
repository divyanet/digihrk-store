"use client";

import { useEffect, useState } from "react";

function msToMidnight() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  return Math.max(0, end.getTime() - now.getTime());
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({ compact = false }: { compact?: boolean }) {
  const [left, setLeft] = useState(msToMidnight);

  useEffect(() => {
    const t = setInterval(() => setLeft(msToMidnight()), 1000);
    return () => clearInterval(t);
  }, []);

  const h = Math.floor(left / 3600000);
  const m = Math.floor((left % 3600000) / 60000);
  const s = Math.floor((left % 60000) / 1000);

  if (compact) {
    return (
      <span className="font-mono font-bold tabular-nums">
        {pad(h)}:{pad(m)}:{pad(s)}
      </span>
    );
  }

  const cell = "bg-navy-deep border border-brand/40 rounded-xl px-3 py-2 min-w-[68px]";
  const num = "font-display text-2xl sm:text-3xl font-bold text-white tabular-nums";
  const lbl = "text-[10px] uppercase tracking-widest text-mist/70 font-semibold";
  return (
    <div className="flex items-center gap-2" role="timer" aria-label="Offer ends in">
      <div className={cell}><div className={num} style={{ fontWeight: 800 }}>{pad(h)}</div><div className={lbl}>Hours</div></div>
      <span className="text-brand text-2xl font-bold">:</span>
      <div className={cell}><div className={num} style={{ fontWeight: 800 }}>{pad(m)}</div><div className={lbl}>Minutes</div></div>
      <span className="text-brand text-2xl font-bold">:</span>
      <div className={cell}><div className={num} style={{ fontWeight: 800 }}>{pad(s)}</div><div className={lbl}>Seconds</div></div>
    </div>
  );
}
