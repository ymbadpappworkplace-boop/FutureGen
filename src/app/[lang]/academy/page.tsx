import type { Metadata } from "next";
import Link from "next/link";
import { ui } from "@/lib/content";
import { getLang, href } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { CourseExplorer } from "@/components/CourseExplorer";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLang(params);
  return { title: ui.academy.title[lang], description: ui.academy.quote[lang] };
}

export default async function AcademyPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getLang(params);
  const t = ui.academy;

  return (
    <>
      <PageHeader title={t.title[lang]} intro={t.quote[lang]} />

      <section className="wrap">
        <div className="surface max-w-3xl rounded-4xl p-6 text-lg sm:p-8">{t.intro[lang]}</div>
      </section>

      <section className="section">
        <div className="wrap">
          <CourseExplorer lang={lang} />
        </div>
      </section>

      <section className="pb-12">
        <div className="wrap">
          <h2 className="display text-3xl sm:text-4xl">{t.howTitle[lang]}</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {t.steps.map((s, i) => (
              <li key={i} className="surface rounded-4xl p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lamp/20 text-lamp"><Icon name={s.icon} /></span>
                <h3 className="title mt-5 text-xl">{s.title[lang]}</h3>
                <p className="mt-2 text-muted">{s.text[lang]}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={siteConfig.appUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ink">{t.openDsms[lang]}</a>
            <Link href={href(lang, "/software")} className="btn btn-ghost">{ui.common.learnMore[lang]}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
