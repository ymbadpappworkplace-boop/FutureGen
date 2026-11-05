"use client";

import { useMemo, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { courses, ui, type Course } from "@/lib/content";
import { Icon } from "./Icon";
import { Book } from "./Cover";

const levels = ["all", "beginner", "intermediate", "advanced"] as const;

export function CourseExplorer({ lang }: { lang: Lang }) {
  const t = ui.academy;
  const [level, setLevel] = useState<(typeof levels)[number]>("all");
  const [q, setQ] = useState("");

  const list = useMemo<Course[]>(() => {
    const s = q.trim().toLowerCase();
    return courses.filter(
      (c) => (level === "all" || c.level === level) && (!s || `${c.title.si} ${c.title.en} ${c.subtitle.si} ${c.subtitle.en}`.toLowerCase().includes(s)),
    );
  }, [level, q]);

  return (
    <div>
      <div className="flex min-w-0 flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div role="group" aria-label="Level" className="flex min-w-0 max-w-full gap-2 overflow-x-auto overscroll-x-contain pb-2">
          {levels.map((l) => (
            <button
              key={l}
              type="button"
              aria-pressed={level === l}
              onClick={() => setLevel(l)}
              className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors ${
                level === l ? "border-fg bg-fg text-bg" : "border-line bg-card hover:border-fg/30"
              }`}
            >
              {t.level[l][lang]}
            </button>
          ))}
        </div>
        <label className="relative block w-full xl:w-64 xl:shrink-0">
          <span className="sr-only">{t.search[lang]}</span>
          <Icon name="search" size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.search[lang]} className="field !rounded-full !py-2.5 pl-11" />
        </label>
      </div>

      {list.length === 0 ? (
        <p className="mt-12 text-center text-muted">{t.none[lang]}</p>
      ) : (
        <ul className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 min-[400px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {list.map((c) => (
            <li key={c.id} id={c.id} className="transition-transform duration-300 hover:-translate-y-1.5">
              <Book seed={c.seed} title={c.title[lang]} badge={c.kind === "pdf" ? "PDF" : undefined} />
              <p className="mt-4 text-sm font-semibold">{c.subtitle[lang]}</p>
              <p className="mt-0.5 text-xs text-muted">
                {t.level[c.level][lang]} · {t.kind[c.kind][lang]}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
