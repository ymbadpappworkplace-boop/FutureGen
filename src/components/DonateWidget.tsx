"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { ui } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Icon } from "./Icon";

const presets = [1000, 2500, 5000, 10000];

export function DonateWidget({ lang }: { lang: Lang }) {
  const t = ui.donate;
  const [preset, setPreset] = useState<number | null>(2500);
  const [custom, setCustom] = useState("");
  const [freq, setFreq] = useState<"once" | "monthly">("once");

  const amount = custom ? Number(custom.replace(/\D/g, "")) : (preset ?? 0);
  const money = (n: number) => `${lang === "si" ? "රු." : "LKR"} ${n.toLocaleString("en-US")}`;
  const label = amount > 0 ? t.give[lang].replace("{amt}", money(amount)) : t.showBank[lang];

  const link = siteConfig.donateUrl
    ? `${siteConfig.donateUrl}${siteConfig.donateUrl.includes("?") ? "&" : "?"}amount=${amount}&frequency=${freq}`
    : "#bank";

  return (
    <div className="surface rounded-4xl p-6 sm:p-8">
      <div role="group" aria-label="Frequency" className="grid grid-cols-2 gap-1 rounded-full bg-bg2 p-1">
        {(["once", "monthly"] as const).map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={freq === f}
            onClick={() => setFreq(f)}
            className={`h-11 rounded-full text-sm font-semibold transition-all ${freq === f ? "bg-solid shadow-md" : "text-muted"}`}
          >
            {f === "once" ? t.once[lang] : t.monthly[lang]}
          </button>
        ))}
      </div>

      <div role="group" aria-label={t.amountLabel[lang]} className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {presets.map((p) => {
          const on = !custom && preset === p;
          return (
            <button
              key={p}
              type="button"
              aria-pressed={on}
              onClick={() => { setPreset(p); setCustom(""); }}
              className={`h-14 rounded-2xl border text-base font-semibold tabular-nums transition-all ${
                on ? "border-lamp bg-lamp/15 shadow-[0_0_0_3px_color-mix(in_srgb,var(--lamp)_25%,transparent)]" : "border-line hover:border-fg/30"
              }`}
            >
              {p.toLocaleString("en-US")}
            </button>
          );
        })}
      </div>

      <label className="mt-4 grid gap-2 text-sm font-medium">
        {t.other[lang]}
        <input
          inputMode="numeric"
          value={custom}
          onChange={(e) => setCustom(e.target.value.replace(/\D/g, "").slice(0, 9))}
          placeholder={t.amountLabel[lang]}
          className="field tabular-nums"
        />
      </label>

      <a
        href={link}
        {...(siteConfig.donateUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="btn btn-lamp mt-6 w-full"
      >
        <Icon name="heart" size={18} />
        {label}
      </a>
    </div>
  );
}
