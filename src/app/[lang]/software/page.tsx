import type { Metadata } from "next";
import Link from "next/link";
import { ui } from "@/lib/content";
import { getLang, href } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { DeviceMockup } from "@/components/DeviceMockup";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLang(params);
  return { title: `DSMS — ${ui.software.subtitle[lang]}`, description: ui.software.intro[lang] };
}

export default async function SoftwarePage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getLang(params);
  const t = ui.software;

  return (
    <>
      <header className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[460px]" style={{ background: "radial-gradient(60% 80% at 25% 0%, var(--glow), transparent 72%)" }} />
        <div className="wrap relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h1 className="display text-[2.6rem] sm:text-6xl">
              {t.title[lang]}
              <span className="mt-1 block text-[0.5em] font-semibold text-muted">{t.subtitle[lang]}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted">{t.intro[lang]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={siteConfig.appUrl} target="_blank" rel="noopener noreferrer" className="btn btn-lamp">
                <Icon name="smartphone" size={18} />
                {ui.home.getApp[lang]}
              </a>
              <Link href={href(lang, "/contact")} className="btn btn-ghost">{ui.nav.contact[lang]}</Link>
            </div>
          </div>
          <DeviceMockup lang={lang} />
        </div>
      </header>

      <section className="section pt-4">
        <div className="wrap">
          <h2 className="display text-3xl sm:text-4xl">{t.featuresTitle[lang]}</h2>
          <ul className="mt-10 grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((f, i) => (
              <li key={i} className="border-b border-line py-8 sm:pr-8">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-bg2"><Icon name={f.icon} /></span>
                <h3 className="title mt-5 text-xl">{f.title[lang]}</h3>
                <p className="mt-2 text-muted">{f.text[lang]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
