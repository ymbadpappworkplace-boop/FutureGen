import type { Metadata } from "next";
import Link from "next/link";
import { ui } from "@/lib/content";
import { getLang, href } from "@/lib/i18n";
import { PageHeader } from "@/components/PageHeader";
import { Leaders } from "@/components/Leaders";
import { Wheel } from "@/components/Logo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLang(params);
  return { title: ui.about.title[lang], description: ui.about.intro[lang] };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getLang(params);
  const t = ui.about;

  return (
    <>
      <PageHeader title={t.title[lang]} intro={t.intro[lang]} />

      <section className="wrap grid gap-4 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-5xl bg-vihara p-8 text-white sm:p-10">
          <Wheel className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 text-lamp opacity-20" />
          <h2 className="relative font-semibold text-lamp2">{t.mission[lang]}</h2>
          <p className="display relative mt-3 text-2xl sm:text-3xl">{t.missionText[lang]}</p>
        </div>
        <div className="surface rounded-5xl p-8 sm:p-10">
          <h2 className="font-semibold text-lamp">{t.vision[lang]}</h2>
          <p className="display mt-3 text-2xl sm:text-3xl">{t.visionText[lang]}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="display text-3xl sm:text-4xl">{t.valuesTitle[lang]}</h2>
          <ul className="mt-8 grid border-t border-line md:grid-cols-3">
            {t.values.map((v, i) => (
              <li key={i} className="border-b border-line py-8 md:pr-8">
                <h3 className="title text-2xl">{v.title[lang]}</h3>
                <p className="mt-2 text-muted">{v.text[lang]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-12">
        <div className="wrap">
          <h2 className="display text-3xl sm:text-4xl">{ui.home.leadersTitle[lang]}</h2>
          <div className="mt-10"><Leaders lang={lang} /></div>
          <div className="mt-14">
            <Link href={href(lang, "/join")} className="btn btn-lamp">{ui.home.ctaJoin[lang]}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
