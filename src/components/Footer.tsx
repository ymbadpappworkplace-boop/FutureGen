import Link from "next/link";
import { href, type Lang } from "@/lib/i18n";
import { ui } from "@/lib/content";
import { navItems, siteConfig } from "@/lib/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="relative mt-10 border-t border-line bg-bg2/50 pb-[calc(7rem+env(safe-area-inset-bottom))] pt-12 lg:pb-8 lg:pt-16">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 mx-auto h-px w-1/3 bg-gradient-to-r from-transparent via-lamp/60 to-transparent" />
      <div className="wrap grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr] lg:gap-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo lang={lang} />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg/80">{ui.site.slogan[lang]}.</p>
          <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted">{ui.site.org[lang]}</p>
          <div className="mt-6 flex gap-3">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="icon-btn border border-line">
              <Icon name="facebook" />
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="icon-btn border border-line">
              <Icon name="youtube" />
            </a>
          </div>
        </div>

        <nav aria-label={ui.footer.explore[lang]}>
          <h2 className="text-sm font-semibold tracking-wide">{ui.footer.explore[lang]}</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-1 text-sm text-muted">
            {[...navItems.map((n) => ({ key: n.key, path: n.path })), { key: "donate" as const, path: "/donate" }].map((n) => (
              <li key={n.key}>
                <Link href={href(lang, n.path)} className="inline-flex min-h-10 items-center transition-colors hover:text-fg">
                  {ui.nav[n.key][lang]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold tracking-wide">{ui.footer.connect[lang]}</h2>
          <ul className="mt-5 grid gap-4 text-sm text-muted">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex max-w-full items-center gap-3 transition-colors hover:text-fg">
                <Icon name="mail" size={17} className="shrink-0" /> <span className="break-all">{siteConfig.email}</span>
              </a>
            </li>
            <li><a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-3 transition-colors hover:text-fg"><Icon name="phone" size={17} className="shrink-0" /> {siteConfig.phone}</a></li>
            <li className="inline-flex items-start gap-3"><Icon name="pin" size={17} className="mt-0.5 shrink-0" /> {siteConfig.address[lang]}</li>
            <li>
              <Link href={href(lang, "/contact")} className="mt-1 inline-flex min-h-10 items-center gap-3 rounded-full border border-line bg-card px-4 text-xs font-semibold text-fg transition-colors hover:border-lamp/60">{ui.nav.contact[lang]} <Icon name="arrowUpRight" size={15} /></Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap mt-10 flex flex-col gap-4 border-t border-line pt-6 text-xs leading-relaxed text-muted sm:flex-row sm:items-center sm:justify-between lg:mt-12">
        <p>
          © {new Date().getFullYear()} {ui.site.org[lang]}. {ui.footer.rights[lang]}
        </p>
        <a href="#main" className="inline-flex shrink-0 items-center gap-2 self-start py-1 font-medium transition-colors hover:text-fg sm:self-auto">
          {lang === "si" ? "ඉහළට යන්න" : "Back to top"}
          <Icon name="arrowRight" size={14} className="-rotate-90" />
        </a>
      </div>
    </footer>
  );
}
