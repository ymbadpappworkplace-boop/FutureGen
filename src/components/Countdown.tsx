"use client";

import { useEffect, useState } from "react";

type Labels = { d: string; h: string; m: string; s: string };

export function Countdown({ target, labels, doneText, tone = "light" }: { target: string; labels: Labels; doneText: string; tone?: "light" | "dark" | "gold" }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // render nothing until mounted so server and client markup match
  if (now === null) return <div className="h-[76px]" aria-hidden="true" />;

  const diff = new Date(target).getTime() - now;
  if (diff <= 0) {
    return <p className={`text-sm font-semibold ${tone === "dark" ? "text-white/75" : tone === "gold" ? "text-vihara/80" : "text-muted"}`}>{doneText}</p>;
  }

  const parts = [
    { v: Math.floor(diff / 86_400_000), l: labels.d },
    { v: Math.floor((diff / 3_600_000) % 24), l: labels.h },
    { v: Math.floor((diff / 60_000) % 60), l: labels.m },
    { v: Math.floor((diff / 1000) % 60), l: labels.s },
  ];

  return (
    <div className="grid grid-cols-4 gap-2" role="timer" aria-live="off">
      {parts.map((p) => (
        <div
          key={p.l}
          className={`rounded-2xl px-2 py-2.5 text-center ${
            tone === "dark" ? "bg-white/10 ring-1 ring-white/15" : tone === "gold" ? "bg-white/40 text-vihara ring-1 ring-white/50" : "bg-bg2"
          }`}
        >
          <div className="text-2xl font-bold tabular-nums leading-none sm:text-3xl">{String(p.v).padStart(2, "0")}</div>
          <div className={`mt-1.5 text-[0.7rem] font-medium ${tone === "dark" ? "text-white/70" : tone === "gold" ? "text-vihara/75" : "text-muted"}`}>{p.l}</div>
        </div>
      ))}
    </div>
  );
}
