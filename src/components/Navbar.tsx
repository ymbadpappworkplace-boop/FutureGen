"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { href, type Lang } from "@/lib/i18n";
import { ui } from "@/lib/content";
import { navItems } from "@/lib/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LangSwitch } from "./LangSwitch";

export function Navbar({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? "";
  const rel = pathname.replace(/^\/(si|en)/, "") || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const active = (p: string) => (p === "/" ? rel === "/" : rel === p || rel.startsWith(`${p}/`));
  const openSearch = () => window.dispatchEvent(new Event("open-palette"));

  const tabs = [
    { path: "/", icon: "home" as const, label: ui.nav.home[lang] },
    { path: "/events", icon: "calendar" as const, label: ui.nav.events[lang] },
    { path: "/blog", icon: "book" as const, label: ui.nav.blog[lang] },
    { path: "/academy", icon: "cap" as const, label: ui.nav.academy[lang] },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <nav
          aria-label="Main"
          className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full pl-4 pr-2 transition-all duration-300 ${
            scrolled ? "glass" : "border border-transparent"
          }`}
        >
          <Logo lang={lang} compact />

         {/*<ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  href={href(lang, item.path)}
                  aria-current={active(item.path) ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors ${
                    active(item.path) ? "bg-fg/[0.08] text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {ui.nav[item.key][lang]}
                </Link>
              </li>
            ))}
          </ul> */}

          <div className="flex items-center gap-0.5">
            <button type="button" onClick={openSearch} aria-label={ui.nav.search[lang]} title="Ctrl/⌘ K" className="icon-btn">
              <Icon name="search" />
            </button>
            <LangSwitch lang={lang} />
            <ThemeToggle label={ui.nav.theme[lang]} />
            <Link href={href(lang, "/donate")} className="btn btn-lamp ml-1 hidden !h-10 !px-5 sm:inline-flex">
              <Icon name="heart" size={16} />
              {ui.nav.donate[lang]}
            </Link>
          </div>
        </nav>
      </header>

      {/* app-style tab bar on phones */}
      <nav aria-label="Quick" className="glass fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 flex justify-around rounded-[1.6rem] p-1.5 lg:hidden">
        {tabs.map((t) => (
          <Link
            key={t.path}
            href={href(lang, t.path)}
            aria-current={active(t.path) ? "page" : undefined}
            className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-2xl px-1 py-2 text-[0.68rem] font-semibold transition-colors ${
              active(t.path) ? "bg-lamp/20 text-fg" : "text-muted"
            }`}
          >
            <Icon name={t.icon} size={22} />
            <span className="max-w-full truncate">{t.label}</span>
          </Link>
        ))}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={ui.nav.menu[lang]}
          aria-expanded={open}
          className="flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-2xl px-1 py-2 text-[0.68rem] font-semibold text-muted"
        >
          <Icon name="menu" size={22} />
          <span className="max-w-full truncate">{ui.nav.menu[lang]}</span>
        </button>
      </nav>

      {open && (
        <div role="dialog" aria-modal="true" aria-label={ui.nav.menu[lang]} className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-bg/95 px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))] backdrop-blur-2xl lg:hidden">
          <div className="flex items-center justify-between">
            <Logo lang={lang} />
            <button type="button" onClick={() => setOpen(false)} aria-label={ui.nav.close[lang]} className="icon-btn">
              <Icon name="x" />
            </button>
          </div>
          <ul className="mt-8 grid gap-1">
            {[{ key: "home" as const, path: "/" }, ...navItems, { key: "contact" as const, path: "/contact" }].map((item) => (
              <li key={item.key}>
                <Link
                  href={href(lang, item.path)}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-2xl font-bold ${
                    active(item.path) ? "bg-lamp/20" : ""
                  }`}
                >
                  {ui.nav[item.key][lang]}
                  <Icon name="chevronRight" className="text-muted" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <Link href={href(lang, "/donate")} className="btn btn-lamp">
              <Icon name="heart" size={18} />
              {ui.nav.donate[lang]}
            </Link>
            <Link href={href(lang, "/join")} className="btn btn-ghost">
              {ui.nav.join[lang]}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
