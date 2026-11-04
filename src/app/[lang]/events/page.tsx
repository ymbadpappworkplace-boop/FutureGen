import type { Metadata } from "next";
import { events, ui, type EventItem } from "@/lib/content";
import { formatDate, formatTime, getLang, href, type Lang } from "@/lib/i18n";
import { Icon } from "@/components/Icon";
import { Lit } from "@/components/Lit";
import { PageHeader } from "@/components/PageHeader";

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLang(params);
  return { title: ui.events.title[lang], description: ui.events.intro[lang] };
}

function EventRow({ e, lang, past }: { e: EventItem; lang: Lang; past: boolean }) {
  return (
    <Lit href={href(lang, `/events/${e.slug}`)} className="surface grid gap-5 rounded-4xl p-5 sm:grid-cols-[6.5rem_1fr_auto] sm:items-center sm:p-6">
      <div className={`grid place-items-center rounded-3xl py-4 ${past ? "bg-bg2 text-muted" : "bg-gradient-to-br from-lamp2 to-lamp text-[#1b0f02]"}`}>
        <span className="text-4xl font-bold leading-none tabular-nums">{formatDate(e.date, lang, { month: undefined, year: undefined })}</span>
        <span className="mt-1.5 text-sm font-semibold">{formatDate(e.date, lang, { day: undefined, year: undefined, month: "short" })}</span>
      </div>
      <div>
        <p className="mb-1 text-xs font-semibold text-muted">{past ? ui.events.badgePast[lang] : ui.events.badgeUpcoming[lang]}</p>
        <h3 className="title text-xl sm:text-2xl">{e.title[lang]}</h3>
        <p className="mt-2 line-clamp-2 text-muted">{e.summary[lang]}</p>
        <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5"><Icon name="clock" size={15} />{formatTime(e.date, lang)}</span>
          <span className="inline-flex items-center gap-1.5"><Icon name="pin" size={15} />{e.venue[lang]}</span>
        </p>
      </div>
      <span className="hidden h-11 w-11 place-items-center rounded-full bg-bg2 sm:grid"><Icon name="arrowUpRight" size={18} /></span>
    </Lit>
  );
}

export default async function EventsPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getLang(params);
  const now = Date.now();
  const upcoming = events.filter((e) => new Date(e.date).getTime() >= now).sort((a, b) => a.date.localeCompare(b.date));
  const past = events.filter((e) => new Date(e.date).getTime() < now).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHeader title={ui.events.title[lang]} intro={ui.events.intro[lang]} />
      <div className="wrap pb-12">
        <h2 className="title text-2xl">{ui.events.upcoming[lang]}</h2>
        {upcoming.length ? (
          <ul className="mt-5 grid gap-4">{upcoming.map((e) => <li key={e.slug}><EventRow e={e} lang={lang} past={false} /></li>)}</ul>
        ) : (
          <p className="surface mt-5 rounded-3xl p-8 text-muted">{ui.events.empty[lang]}</p>
        )}

        {past.length > 0 && (
          <>
            <h2 className="title mt-14 text-2xl">{ui.events.past[lang]}</h2>
            <ul className="mt-5 grid gap-4">{past.map((e) => <li key={e.slug}><EventRow e={e} lang={lang} past /></li>)}</ul>
          </>
        )}
      </div>
    </>
  );
}
