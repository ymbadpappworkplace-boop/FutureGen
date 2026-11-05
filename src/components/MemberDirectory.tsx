"use client";

import { useState } from "react";
import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { members, memberCategories, memberCopy as t, type MemberCategory } from "@/lib/members";
import { Icon } from "./Icon";

export function MemberDirectory({ lang }: { lang: Lang }) {
  const [category, setCategory] = useState<MemberCategory | "all">("advisors");
  const [query, setQuery] = useState("");
  const term = query.trim().toLocaleLowerCase();
  const filtered = members.filter((m) => (category === "all" || m.category === category) &&
    `${m.name.en} ${m.name.si} ${m.role.en} ${m.role.si}`.toLocaleLowerCase().includes(term));
  const categories = Object.keys(memberCategories) as MemberCategory[];
  return (
    <section className="wrap pb-16" aria-label={t.title[lang]}>
      <div className="rounded-3xl border border-line bg-card p-4 sm:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-center gap-3 text-sm font-semibold" aria-live="polite" aria-atomic="true">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-lamp/15 text-lamp"><Icon name="users" /></span>
            {filtered.length} {t.count[lang]}
          </div>
          <label className="relative w-full xl:w-80">
            <span className="sr-only">{t.search[lang]}</span>
            <Icon name="search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.search[lang]} className="field !rounded-full !pl-11" />
          </label>
        </div>
        <div role="group" aria-label={t.categories[lang]} className="mt-5 flex gap-2 overflow-x-auto overscroll-x-contain pb-2">
          {[...categories, "all" as const].map((key) => (
            <button key={key} type="button" aria-pressed={category === key} onClick={() => setCategory(key)} className={`min-h-11 shrink-0 rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${category === key ? "border-fg bg-fg text-bg" : "border-line bg-solid text-muted hover:border-lamp hover:text-fg"}`}>
              {key === "all" ? t.all[lang] : memberCategories[key][lang]}
            </button>
          ))}
        </div>
      </div>
      {filtered.length ? (
        <ul className="mt-8 grid gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((member) => (
            <li key={member.id} className="group overflow-hidden rounded-3xl border border-line bg-solid shadow-sm transition-shadow hover:shadow-lg">
              <div className="relative aspect-[5/4] overflow-hidden bg-gradient-to-br from-lamp/15 via-bg2 to-gen/10">
                {member.image ? <Image src={member.image} alt={member.name[lang]} fill sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 480px) 50vw, 100vw" className="object-contain object-bottom p-4 transition-transform duration-500 motion-safe:group-hover:scale-105" /> : (
                  <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                    <span className="grid h-28 w-28 place-items-center rounded-full border border-lamp/30 bg-card text-3xl font-semibold text-muted">{member.name.en.replace(/^(Most Venerable|Mr\.?|Mrs\.?|Ms\.?)\s+/, "").split(" ").slice(0, 2).map((part) => part[0]).join("")}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                {member.category && <p className="mb-3 text-xs font-semibold text-gen">{memberCategories[member.category][lang]}</p>}
                <h2 className="text-lg font-semibold leading-snug">{member.name[lang]}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{member.role[lang]}</p>
                <div aria-hidden="true" className="mt-5 h-0.5 w-8 rounded-full bg-lamp/60" />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 rounded-3xl border border-dashed border-line px-6 py-16 text-center">
          <Icon name="users" size={32} className="mx-auto mb-4 text-muted" />
          <p className="text-muted">{term ? t.none[lang] : t.pending[lang]}</p>
          <button type="button" onClick={() => { setCategory("all"); setQuery(""); }} className="btn btn-ghost mt-5">{t.clear[lang]}</button>
        </div>
      )}
    </section>
  );
}
