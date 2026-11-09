import type { Metadata } from "next";
import Image from "next/image";
import { PinkamaProgramme } from "@/components/PinkamaProgramme";
import Link from "next/link";
import { events, ui, type EventItem } from "@/lib/content";
import { formatDate, formatTime, getLang, href, type Lang } from "@/lib/i18n";
import { Icon } from "@/components/Icon";
import { Countdown } from "@/components/Countdown";

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLang(params);
  return { title: ui.events.title[lang], description: ui.events.intro[lang] };
}

const copy = {
  eyebrow: { si: "භක්තියෙන් එක්වන අපේ ප්‍රජාව", en: "A community gathering in devotion" },
  explore: { si: "පිංකම බලන්න", en: "Explore the pinkama" },
  next: { si: "විශේෂ පිංකම", en: "Featured pinkama" },
  all: { si: "සියලු පිංකම්", en: "All gatherings" },
  allIntro: { si: "ඉදිරි සහ පසුගිය වැඩසටහන් එකම තැනකින් සොයා බලන්න.", en: "Discover upcoming and past programmes in one place." },
  past: { si: "පසුගිය වැඩසටහන්", en: "Past programmes" },
};

function EventCard({ event, lang, past = false }: { event: EventItem; lang: Lang; past?: boolean }) {
  return (
    <Link href={href(lang, `/events/${event.slug}`)} className="group surface relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className={`chip ${past ? "" : "border-lamp/30 bg-lamp/10 text-fg"}`}>{past ? ui.events.badgePast[lang] : ui.events.badgeUpcoming[lang]}</span>
        <span className="grid h-10 w-10 place-items-center rounded-full bg-bg2 transition group-hover:bg-fg group-hover:text-bg"><Icon name="arrowUpRight" size={17} /></span>
      </div>
      <div className="mt-10 flex items-end gap-3 border-b border-line pb-5">
        <strong className="text-5xl font-bold leading-none tabular-nums">{formatDate(event.date, lang, { month: undefined, year: undefined })}</strong>
        <span className="pb-1 text-sm font-semibold uppercase tracking-wide text-muted">{formatDate(event.date, lang, { day: undefined, year: undefined, month: "short" })}</span>
      </div>
      <h3 className="title mt-6 text-2xl">{event.title[lang]}</h3>
      <p className="mt-3 line-clamp-3 text-muted">{event.summary[lang]}</p>
      <div className="mt-auto space-y-2 pt-7 text-sm">
        <p className="flex items-center gap-2"><Icon name="clock" size={16} className="text-lamp" />{formatTime(event.date, lang)}</p>
        <p className="flex items-start gap-2 text-muted"><Icon name="pin" size={16} className="mt-1 shrink-0 text-lamp" />{event.venue[lang]}</p>
      </div>
    </Link>
  );
}

export default async function EventsPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getLang(params);
  const now = Date.now();
  const upcoming = events.filter((event) => new Date(event.date).getTime() >= now).sort((a, b) => a.date.localeCompare(b.date));
  const past = events.filter((event) => new Date(event.date).getTime() < now).sort((a, b) => b.date.localeCompare(a.date));
  const featured = upcoming.find((event) => !event.sample) ?? upcoming[0];
  const remaining = upcoming.filter((event) => event !== featured);

  return (
    <main className="pb-20">
      <section className="relative overflow-hidden bg-[#160b08] pb-16 pt-28 text-white sm:pb-24 sm:pt-36">
        <div className="absolute inset-0 opacity-45">
          <Image src="/pinkamacard.png" alt="" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#160b08] via-[#160b08]/90 to-[#160b08]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#160b08] via-transparent to-[#160b08]/20" />
        </div>
        <div className="wrap relative grid items-end gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div className="hero-in max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-lamp2">{copy.eyebrow[lang]}</p>
            <h1 className="display mt-5 text-5xl sm:text-7xl">{ui.events.title[lang]}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72 sm:text-xl">{ui.events.intro[lang]}</p>
            {featured && <Link href={href(lang, `/events/${featured.slug}`)} className="btn btn-lamp mt-8">{copy.explore[lang]} <Icon name="arrowRight" size={17} /></Link>}
          </div>
          {featured && (
            <div className="glass rounded-[2rem] border-white/15 bg-black/25 p-5 text-white backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between gap-4"><p className="text-xs font-semibold uppercase tracking-[.14em] text-lamp2">{copy.next[lang]}</p><Icon name="sparkles" className="text-lamp2" /></div>
              <h2 className="title mt-4 text-2xl sm:text-3xl">{featured.title[lang]}</h2>
              <div className="mt-5 grid gap-2 text-sm text-white/75">
                <p className="flex items-center gap-2"><Icon name="calendar" size={17} />{formatDate(featured.date, lang, { weekday: "long" })}, {formatTime(featured.date, lang)}</p>
                <p className="flex items-start gap-2"><Icon name="pin" size={17} className="mt-1 shrink-0" />{featured.venue[lang]}</p>
              </div>
              <div className="mt-6"><Countdown target={featured.date} labels={{ d: ui.events.cd.d[lang], h: ui.events.cd.h[lang], m: ui.events.cd.m[lang], s: ui.events.cd.s[lang] }} doneText={ui.events.done[lang]} tone="dark" /></div>
            </div>
          )}
        </div>
      </section>

      <div className="pt-12 sm:pt-16"><PinkamaProgramme lang={lang} /></div>
      <section className="wrap section">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold text-lamp">{copy.all[lang]}</p><h2 className="display mt-2 text-3xl sm:text-5xl">{ui.events.upcoming[lang]}</h2></div><p className="max-w-md text-muted">{copy.allIntro[lang]}</p></div>
        {remaining.length ? <div className="mt-9 grid gap-5 md:grid-cols-2">{remaining.map((event) => <EventCard key={event.slug} event={event} lang={lang} />)}</div> : !featured ? <p className="surface mt-8 rounded-3xl p-8 text-muted">{ui.events.empty[lang]}</p> : null}
      </section>

      {past.length > 0 && <section className="wrap pb-10"><h2 className="title text-2xl">{copy.past[lang]}</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{past.map((event) => <EventCard key={event.slug} event={event} lang={lang} past />)}</div></section>}
    </main>
  );
}
