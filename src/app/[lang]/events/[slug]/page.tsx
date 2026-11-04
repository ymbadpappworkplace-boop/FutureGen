import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events, getEvent, ui } from "@/lib/content";
import { formatDate, formatTime, href, isLang, locales, type Lang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { Cover } from "@/components/Cover";
import { Countdown } from "@/components/Countdown";

export const revalidate = 3600;
type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((lang) => events.map((e) => ({ lang, slug: e.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const e = getEvent(slug);
  if (!isLang(lang) || !e) return {};
  return { title: e.title[lang], description: e.summary[lang] };
}

export default async function EventPage({ params }: Props) {
  const { lang: l, slug } = await params;
  if (!isLang(l)) notFound();
  const lang: Lang = l;
  const e = getEvent(slug);
  if (!e) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.title[lang],
    startDate: e.date,
    description: e.summary[lang],
    inLanguage: lang,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: { "@type": "Place", name: e.venue[lang], address: siteConfig.address.en },
    organizer: { "@type": "Organization", name: ui.site.org.en, url: siteConfig.url },
  };

  return (
    <article className="wrap pb-12 pt-28 sm:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href={href(lang, "/events")} className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-fg">
        <Icon name="arrowRight" size={16} className="rotate-180" />
        {ui.events.all[lang]}
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Cover seed={e.seed} className="grain rounded-5xl p-7 sm:p-12">
            <h1 className="display relative text-3xl sm:text-5xl">{e.title[lang]}</h1>
            <p className="relative mt-4 max-w-xl text-lg opacity-85">{e.summary[lang]}</p>
          </Cover>

          <div className="mt-10 max-w-2xl space-y-5 text-lg">
            {e.story[lang].map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {e.quote && (
            <blockquote className="display mt-10 max-w-2xl border-l-4 border-lamp pl-6 text-2xl sm:text-3xl">{e.quote[lang]}</blockquote>
          )}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="surface rounded-4xl p-6">
            <dl className="grid gap-4">
              <div className="flex gap-3">
                <Icon name="calendar" className="mt-1 shrink-0 text-lamp" />
                <div><dt className="text-xs font-semibold text-muted">{ui.events.when[lang]}</dt><dd className="font-semibold">{formatDate(e.date, lang, { weekday: "long" })}, {formatTime(e.date, lang)}</dd></div>
              </div>
              <div className="flex gap-3">
                <Icon name="pin" className="mt-1 shrink-0 text-lamp" />
                <div><dt className="text-xs font-semibold text-muted">{ui.events.venue[lang]}</dt><dd className="font-semibold">{e.venue[lang]}</dd></div>
              </div>
            </dl>
            <div className="mt-6">
              <Countdown target={e.date} labels={{ d: ui.events.cd.d[lang], h: ui.events.cd.h[lang], m: ui.events.cd.m[lang], s: ui.events.cd.s[lang] }} doneText={ui.events.done[lang]} />
            </div>
            <Link href={href(lang, "/donate")} className="btn btn-lamp mt-6 w-full">
              <Icon name="heart" size={18} />
              {ui.events.donateCta[lang]}
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
