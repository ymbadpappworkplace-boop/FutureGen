"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { href, type Lang } from "@/lib/i18n";
import { ui } from "@/lib/content";
import { navItems } from "@/lib/site";
import { Icon, type IconName } from "./Icon";

export function Sidebar({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? "";
  const rel = pathname.replace(/^\/(si|en)/, "") || "/";
  const [open, setOpen] = useState(false);

  // remember the last state
  useEffect(() => {
    try {
      setOpen(localStorage.getItem("sidebar") === "open");
    } catch {}
  }, []);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    try {
      localStorage.setItem("sidebar", next ? "open" : "closed");
    } catch {}
  };

  const active = (p: string) => (p === "/" ? rel === "/" : rel === p || rel.startsWith(`${p}/`));

  // remove the Home line if you don't want it
  const items: { key: string; path: string; icon: IconName; label: string }[] = [
    { key: "home", path: "/", icon: "home", label: ui.nav.home[lang] },
    ...navItems.map((n) => ({ key: n.key, path: n.path, icon: n.icon, label: ui.nav[n.key][lang] })),
  ];

  return (
    <aside
      aria-label="Sidebar"
      className={`glass fixed bottom-3 left-3 top-[4.75rem] z-40 hidden flex-col overflow-hidden rounded-3xl p-2 transition-[width] duration-300 ease-out lg:flex ${
        open ? "w-56" : "w-14"
      }`}
    >
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-label={ui.nav.menu[lang]}
        className="flex h-11 w-full items-center gap-3 rounded-2xl px-2.5 text-muted transition-colors hover:bg-fg/[0.06] hover:text-fg"
      >
        <Icon name="chevronRight" className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        <span className={`whitespace-nowrap text-sm font-semibold transition-opacity ${open ? "opacity-100" : "opacity-0"}`}>
          {ui.nav.menu[lang]}
        </span>
      </button>

      <nav className="mt-2 grid min-h-0 gap-1 overflow-x-hidden overflow-y-auto overscroll-contain">
        {items.map((it) => (
          <Link
            key={it.key}
            href={href(lang, it.path)}
            title={open ? undefined : it.label}
            aria-current={active(it.path) ? "page" : undefined}
            className={`flex h-11 items-center gap-3 rounded-2xl px-2.5 transition-colors ${
              active(it.path) ? "bg-lamp/20 text-fg" : "text-muted hover:bg-fg/[0.06] hover:text-fg"
            }`}
          >
            <Icon name={it.icon} className="shrink-0" />
            <span
              className={`whitespace-nowrap text-[0.95rem] font-medium transition-opacity duration-200 ${
                open ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              {it.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
