"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import technologyPhoto from "../../public/blog/technology.jpg";
import educationPhoto from "../../public/blog/education.jpg";
import communityPhoto from "../../public/blog/community.jpg";
import dhammaPhoto from "../../public/blog/dhamma.jpg";
import type { Lang } from "@/lib/i18n";
import { ui, type PostCategory } from "@/lib/content";
import { Icon } from "./Icon";
import { Lit } from "./Lit";

const photos = {
  technology: technologyPhoto,
  education: educationPhoto,
  community: communityPhoto,
  dhamma: dhammaPhoto,
};

export type PostCard = {
  slug: string;
  url: string;
  category: PostCategory;
  title: string;
  excerpt: string;
  dateLabel: string;
  readLabel: string;
  seed: number;
};

const cats: PostCategory[] = ["dhamma", "education", "community", "technology"];

export function BlogExplorer({ lang, posts, limit }: { lang: Lang; posts: PostCard[]; limit?: number }) {
  const t = ui.blog;
  const [cat, setCat] = useState<PostCategory | "all">("all");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return posts.filter(
      (p) => (cat === "all" || p.category === cat) && (!s || `${p.title} ${p.excerpt}`.toLowerCase().includes(s)),
    );
  }, [posts, cat, q]);

  return (
    <div>
      <div className="flex min-w-0 flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div role="group" aria-label={lang === "si" ? "ලිපි කාණ්ඩ" : "Article categories"} className="flex min-w-0 max-w-full gap-2 overflow-x-auto overscroll-x-contain pb-2">
          {(["all", ...cats] as const).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors ${
                cat === c ? "border-fg bg-fg text-bg" : "border-line bg-card hover:border-fg/30"
              }`}
            >
              {c === "all" ? t.all[lang] : t.cat[c][lang]}
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
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.slice(0, limit ?? list.length).map((p) => (
            <li key={p.slug}>
              <Lit href={p.url} className="surface group flex h-full flex-col rounded-3xl">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={photos[p.category]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    placeholder="blur"
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {t.cat[p.category][lang]}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="title text-lg">{p.title}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-[0.95rem] text-muted">{p.excerpt}</p>
                  <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                    <Icon name="clock" size={15} /> {p.dateLabel} · {p.readLabel}
                  </p>
                </div>
              </Lit>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
