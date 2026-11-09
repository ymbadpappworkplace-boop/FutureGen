import { PinkamaProgramme } from "@/components/PinkamaProgramme";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events, getEvent, ui } from "@/lib/content";
import { formatDate, formatTime, href, isLang, locales, type Lang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { Countdown } from "@/components/Countdown";

export const revalidate = 3600;
type Props = { params: Promise<{ lang: string; slug: string }> };
export function generateStaticParams() { return locales.flatMap((lang) => events.map((event) => ({ lang, slug: event.slug }))); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const event = getEvent(slug);
  if (!isLang(lang) || !event) return {};
  return { title: event.title[lang], description: event.summary[lang] };
}

const copy = {
  about: { si: "පිංකම ගැන", en: "About the gathering" },
  join: { si: "අප සමඟ එක්වන්න", en: "Join us" },
  joinText: { si: "මෙම පුණ්‍ය කටයුත්තට සහභාගී වන්න. ඔබේ පවුලේ අය සහ මිතුරන් සමඟ මෙම ආරාධනය බෙදාගන්න.", en: "Take part in this act of merit and share the invitation with family and friends." },
  directions: { si: "මාර්ග උපදෙස්", en: "Get directions" },
  support: { si: "සහන කටයුතු සඳහා දායක වන්න", en: "Support the relief effort" },
  supportText: { si: "ඔබේ දායකත්වය අවතැන් වූ පවුල් වෙත අවශ්‍ය සහන ලබා දීමට උපකාරී වේ.", en: "Your contribution helps essential relief reach displaced families." },
  contact: { si: "වැඩි විස්තර", en: "More information" },
  call: { si: "අමතන්න / WhatsApp", en: "Call / WhatsApp" },
};

export default async function EventPage({ params }: Props) {
  const { lang: rawLang, slug } = await params;
  if (!isLang(rawLang)) notFound();
  const lang: Lang = rawLang;
  const event = getEvent(slug);
  if (!event) notFound();
  const isMainPinkama = event.slug === "thesaththa-gnana-ashirwada-maha-pujawa";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.venue.en)}`;
  const jsonLd = { "@context": "https://schema.org", "@type": "Event", name: event.title[lang], startDate: event.date, description: event.summary[lang], inLanguage: lang, eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode", location: { "@type": "Place", name: event.venue[lang], address: siteConfig.address.en }, organizer: { "@type": "Organization", name: ui.site.org.en, url: siteConfig.url } };

  return (
    <article className="pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="relative min-h-[760px] overflow-hidden bg-[#160b08] pt-28 text-white sm:min-h-[720px] sm:pt-36">
        {isMainPinkama ? <Image src="/pinkamacard.png" alt="" fill priority className="object-cover" sizes="100vw" /> : <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#8a4b16,transparent_35%),linear-gradient(135deg,#160b08,#4c190d)]" />}
        <div className="absolute inset-0 bg-gradient-to-r from-[#160b08] via-[#160b08]/85 to-[#160b08]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#160b08] via-transparent to-[#160b08]/30" />
        <div className="wrap relative flex min-h-[600px] flex-col justify-between pb-12">
          <Link href={href(lang, "/events")} className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/75 hover:text-white"><Icon name="arrowRight" size={16} className="rotate-180" />{ui.events.all[lang]}</Link>
          <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_.75fr]">
            <div className="hero-in max-w-4xl">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.15em] text-lamp2 backdrop-blur">{ui.events.badgeUpcoming[lang]}</span>
              <h1 className="display mt-5 text-4xl leading-tight sm:text-6xl lg:text-7xl">{event.title[lang]}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/72">{event.summary[lang]}</p>
            </div>
            <div className="glass rounded-[2rem] border-white/15 bg-black/30 p-6 text-white backdrop-blur-xl">
              <p className="flex gap-3"><Icon name="calendar" className="mt-1 shrink-0 text-lamp2" /><span><small className="block text-white/55">{ui.events.when[lang]}</small><strong>{formatDate(event.date, lang, { weekday: "long" })}, {formatTime(event.date, lang)}</strong></span></p>
              <p className="mt-5 flex gap-3"><Icon name="pin" className="mt-1 shrink-0 text-lamp2" /><span><small className="block text-white/55">{ui.events.venue[lang]}</small><strong>{event.venue[lang]}</strong></span></p>
              <div className="mt-6"><Countdown target={event.date} labels={{ d: ui.events.cd.d[lang], h: ui.events.cd.h[lang], m: ui.events.cd.m[lang], s: ui.events.cd.s[lang] }} doneText={ui.events.done[lang]} tone="dark" /></div>
            </div>
          </div>
        </div>
      </header>

      <div className="wrap section grid gap-12 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <p className="text-sm font-semibold text-lamp">{copy.about[lang]}</p>
          <h2 className="display mt-3 text-3xl sm:text-5xl">{copy.join[lang]}</h2>
          <div className="mt-7 max-w-3xl space-y-5 text-lg leading-relaxed text-muted">{event.story[lang].map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
          {event.quote && <blockquote className="mt-10 rounded-[2rem] bg-vihara p-7 text-2xl font-semibold leading-relaxed text-white sm:p-10 sm:text-3xl"><Icon name="sparkles" className="mb-5 text-lamp2" />{event.quote[lang]}</blockquote>}
        </div>
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="surface rounded-[2rem] p-6 sm:p-7"><Icon name="pin" className="text-lamp" /><h3 className="title mt-4 text-2xl">{event.venue[lang]}</h3><p className="mt-3 text-muted">{copy.joinText[lang]}</p><a href={mapUrl} target="_blank" rel="noreferrer" className="btn btn-ink mt-6 w-full">{copy.directions[lang]}<Icon name="arrowUpRight" size={17} /></a></div>
          <div className="rounded-[2rem] bg-gradient-to-br from-lamp2 to-lamp p-6 text-[#1b0f02] sm:p-7"><Icon name="heart" /><h3 className="title mt-4 text-2xl">{copy.support[lang]}</h3><p className="mt-3 opacity-75">{copy.supportText[lang]}</p><Link href={href(lang, "/donate")} className="btn mt-6 w-full bg-[#1b0f02] text-white">{ui.events.donateCta[lang]}<Icon name="arrowRight" size={17} /></Link></div>
        </aside>
      </div>

      {isMainPinkama && <PinkamaProgramme lang={lang} />}
    </article>
  );
}
