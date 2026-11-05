"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { href, type Lang } from "@/lib/i18n";
import { courses, events, posts, ui } from "@/lib/content";
import { navItems } from "@/lib/site";
import { Icon, type IconName } from "./Icon";

type Item = { id: string; title: string; hint: string; to: string; icon: IconName; keys: string };

/** Ctrl/⌘ + K quick search across pages, events, articles and courses. */
export function CommandPalette({ lang }: { lang: Lang }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo<Item[]>(() => {
    const both = (l: { si: string; en: string }) => `${l.si} ${l.en}`.toLowerCase();
    return [
      { id: "home", title: ui.nav.home[lang], hint: ui.nav.pages[lang], to: href(lang), icon: "home", keys: both(ui.nav.home) },
      ...navItems.map<Item>((n) => ({
        id: n.key, title: ui.nav[n.key][lang], hint: ui.nav.pages[lang], to: href(lang, n.path), icon: n.icon, keys: both(ui.nav[n.key]),
      })),
      { id: "donate", title: ui.nav.donate[lang], hint: ui.nav.pages[lang], to: href(lang, "/donate"), icon: "heart", keys: both(ui.nav.donate) },
      { id: "contact", title: ui.nav.contact[lang], hint: ui.nav.pages[lang], to: href(lang, "/contact"), icon: "mail", keys: both(ui.nav.contact) },
      ...events.map<Item>((e) => ({
        id: `e-${e.slug}`, title: e.title[lang], hint: ui.nav.events[lang], to: href(lang, `/events/${e.slug}`), icon: "calendar", keys: both(e.title),
      })),
      ...posts.map<Item>((p) => ({
        id: `p-${p.slug}`, title: p.title[lang], hint: ui.nav.blog[lang], to: href(lang, `/blog/${p.slug}`), icon: "book", keys: both(p.title),
      })),
      ...courses.map<Item>((c) => ({
        id: `c-${c.id}`, title: c.title[lang], hint: ui.nav.academy[lang], to: href(lang, "/academy"), icon: "cap", keys: both(c.title),
      })),
    ];
  }, [lang]);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    return (s ? items.filter((i) => i.keys.includes(s)) : items).slice(0, 8);
  }, [q, items]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    setQ("");
    setIdx(0);
    const t = setTimeout(() => inputRef.current?.focus(), 30);
    return () => clearTimeout(t);
  }, [open]);

  const go = (item: Item) => {
    setOpen(false);
    router.push(item.to);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-black/40 px-3 pb-4 pt-[max(1rem,env(safe-area-inset-top))] backdrop-blur-sm sm:px-4 sm:pt-[10dvh]" onMouseDown={() => setOpen(false)}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ui.nav.search[lang]}
        onMouseDown={(e) => e.stopPropagation()}
        className="surface w-full max-w-xl overflow-hidden rounded-3xl"
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Icon name="search" className="text-muted" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => { setQ(e.target.value); setIdx(0); }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") { e.preventDefault(); setIdx((i) => Math.min(i + 1, results.length - 1)); }
              if (e.key === "ArrowUp") { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
              if (e.key === "Enter" && results[idx]) go(results[idx]);
            }}
            placeholder={ui.nav.searchPlaceholder[lang]}
            aria-label={ui.nav.search[lang]}
            className="h-14 min-w-0 w-full bg-transparent text-base outline-none placeholder:text-muted"
          />
          <button type="button" onClick={() => setOpen(false)} aria-label={ui.nav.close[lang]} className="icon-btn"><Icon name="x" size={18} /></button>
        </div>
        <ul role="listbox" className="max-h-[60dvh] overflow-y-auto overscroll-contain p-2">
          {results.length === 0 && <li className="px-4 py-6 text-center text-muted">{ui.nav.noResults[lang]}</li>}
          {results.map((r, i) => (
            <li key={r.id} role="option" aria-selected={i === idx}>
              <button
                type="button"
                onClick={() => go(r)}
                onMouseEnter={() => setIdx(i)}
                className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left ${i === idx ? "bg-lamp/20" : ""}`}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-bg2"><Icon name={r.icon} size={18} /></span>
                <span className="min-w-0 flex-1 truncate font-medium">{r.title}</span>
                <span className="text-xs text-muted">{r.hint}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
