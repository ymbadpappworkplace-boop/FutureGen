import Link from "next/link";
import { href, type Lang } from "@/lib/i18n";
import { ui } from "@/lib/content";
import { navItems, siteConfig } from "@/lib/site";
import { Icon } from "./Icon";
import { Logo, Wheel } from "./Logo";

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="mt-10 border-t border-line pb-28 pt-14 lg:pb-12">
      <div className="wrap grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo lang={lang} />
          <p className="mt-4 max-w-sm text-muted">{ui.site.slogan[lang]}.</p>
          <p className="mt-1 max-w-sm text-sm text-muted">{ui.site.org[lang]}</p>
          <div className="mt-5 flex gap-2">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="icon-btn border border-line">
              <Icon name="facebook" />
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="icon-btn border border-line">
              <Icon name="youtube" />
            </a>
          </div>
        </div>

        <nav aria-label={ui.footer.explore[lang]}>
          <h2 className="text-sm font-semibold">{ui.footer.explore[lang]}</h2>
          <ul className="mt-4 grid gap-2.5 text-muted">
            {[...navItems.map((n) => ({ key: n.key, path: n.path })), { key: "donate" as const, path: "/donate" }].map((n) => (
              <li key={n.key}>
                <Link href={href(lang, n.path)} className="transition-colors hover:text-fg">
                  {ui.nav[n.key][lang]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold">{ui.footer.connect[lang]}</h2>
          <ul className="mt-4 grid gap-2.5 text-muted">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-fg">
                <Icon name="mail" size={16} /> {siteConfig.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2"><Icon name="phone" size={16} /> {siteConfig.phone}</li>
            <li className="inline-flex items-center gap-2"><Icon name="pin" size={16} /> {siteConfig.address[lang]}</li>
            <li>
              <Link href={href(lang, "/contact")} className="font-medium text-gen">{ui.nav.contact[lang]}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {ui.site.org[lang]}. {ui.footer.rights[lang]}
        </p>
        <p className="inline-flex items-center gap-2">
          <Wheel className="h-4 w-4 text-lamp" /> YMBA FutureGen
        </p>
      </div>
    </footer>
  );
}
