"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/lib/i18n";
import { ui } from "@/lib/content";

export function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? `/${lang}`;
  const other: Lang = lang === "si" ? "en" : "si";
  const target = pathname.replace(/^\/(si|en)(?=\/|$)/, `/${other}`);

  return (
    <Link
      href={target}
      hrefLang={other}
      lang={other}
      onClick={() => {
        document.cookie = `lang=${other}; path=/; max-age=31536000; samesite=lax`;
      }}
      aria-label={ui.nav.language[lang]}
      title={ui.nav.language[lang]}
      className="icon-btn !w-auto px-3 text-sm font-semibold"
    >
      {ui.nav.langShort[lang]}
    </Link>
  );
}
