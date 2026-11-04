import type { Metadata } from "next";
import Link from "next/link";
import { ui } from "@/lib/content";
import { getLang, href } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLang(params);
  return { title: ui.community.title[lang], description: ui.community.intro[lang] };
}

export default async function CommunityPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getLang(params);
  const t = ui.community;

  return (
    <>
      <PageHeader title={t.title[lang]} intro={t.intro[lang]} />
      <section className="wrap pb-10">
        <ul className="border-t border-line">
          {t.ways.map((w, i) => (
            <li key={i} className="grid items-center gap-5 border-b border-line py-8 sm:grid-cols-[auto_1fr_auto] sm:gap-8">
              <span className="grid h-14 w-14 place-items-center rounded-3xl bg-gradient-to-br from-lamp2 to-lamp text-[#1b0f02]"><Icon name={w.icon} size={26} /></span>
              <div>
                <h2 className="title text-2xl">{w.title[lang]}</h2>
                <p className="mt-1.5 max-w-xl text-muted">{w.text[lang]}</p>
              </div>
              <Link href={href(lang, w.path)} className="btn btn-ghost w-full sm:w-auto">{w.cta[lang]}</Link>
            </li>
          ))}
        </ul>

        <h2 className="title mt-16 text-2xl">{t.follow[lang]}</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Icon name="facebook" size={18} /> Facebook</a>
          <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Icon name="youtube" size={18} /> YouTube</a>
        </div>
      </section>
    </>
  );
}
