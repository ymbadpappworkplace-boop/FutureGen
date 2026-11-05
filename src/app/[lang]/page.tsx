import Link from "next/link";
import Image from "next/image";
import pinkamaCard from "../../../public/pinkamacard.png";
import dahampaslaLogo from "../../../public/dahampasla.avif";
import ymbaLogo from "../../../public/ymba.avif";
import { PillarsSection } from "@/components/PillarsSection";
import { courses, events, posts, ui } from "@/lib/content";
import { formatDate, getLang, href } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { Wheel } from "@/components/Logo";
import { LampHero } from "@/components/LampHero";
import { Countdown } from "@/components/Countdown";
import { Reveal } from "@/components/Reveal";
import { Lit } from "@/components/Lit";
import { Book } from "@/components/Cover";
import { DeviceMockup } from "@/components/DeviceMockup";
import { Leaders } from "@/components/Leaders";
import { BlogExplorer } from "@/components/BlogExplorer";

export const revalidate = 3600; // refresh hourly so "next / recent" labels stay correct

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getLang(params);
  const t = ui.home;

  // the first item in `events` is the one featured in the hero
  const featured = events[0];
  const isPast = new Date(featured.date).getTime() < Date.now();
  const blogCards = [...posts].sort((a, b) => b.date.localeCompare(a.date)).map((p) => ({
    slug: p.slug,
    url: href(lang, `/blog/${p.slug}`),
    category: p.category,
    title: p.title[lang],
    excerpt: p.excerpt[lang],
    dateLabel: formatDate(p.date, lang, { day: "numeric", month: "short", year: "numeric" }),
    readLabel: ui.blog.minRead[lang].replace("{n}", String(p.read)),
    seed: p.seed,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ui.site.org.en,
    alternateName: "YMBA FutureGen",
    url: siteConfig.url,
    email: siteConfig.email,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ───────── Hero ───────── */}
      <LampHero className="pb-16 pt-24 sm:pb-24 sm:pt-28">
        <Wheel className="spin-slow wheel-in pointer-events-none absolute -right-44 -top-28 -z-10 h-[46rem] w-[46rem] text-lamp opacity-[0.13]" />
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="hero-in">
            <p className="chip">{t.eyebrow[lang]}</p>
            <h1 className="display mt-6 text-[2.6rem] sm:text-6xl lg:text-[4.6rem]">
              {t.line1[lang]}
              <br />
              <span className="text-gradient">{t.line2[lang]}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">{t.sub[lang]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={href(lang, "/events")} className="btn btn-lamp">
                {t.ctaEvents[lang]}
              </Link>
              <Link href={href(lang, "/join")} className="btn btn-ghost">
                {t.ctaRegisterPinkama[lang]}
              </Link>
            </div>
            <p className="mt-10 flex items-center gap-3 text-sm font-medium text-muted">
              <Wheel className="h-6 w-6 shrink-0 text-lamp" />
              {t.motto[lang]}
            </p>
          </div>

          <article className="hero-card">
            <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-[#ffe39a] via-[#f6b81c] to-[#e07a0b] p-6 text-[#5c0f14] shadow-[0_40px_80px_-30px_rgba(232,120,11,.65)] transition-transform duration-500 sm:p-8">
              <Wheel className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 opacity-[0.14]" />
              <div className="relative mb-2 overflow-hidden rounded-2xl p-1 ring-1 ring-white/40">
                <Image
                  src={pinkamaCard}
                  alt={featured.title[lang]}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  priority
                  className="h-auto w-full rounded-xl"
                />
              </div>
              <p className="relative inline-flex items-center gap-2 rounded-full bg-[#5c0f14] px-3 py-1 text-xs font-semibold text-[#ffe9b8]">
                <Icon name="calendar" size={14} />
                {isPast ? t.recentEvent[lang] : t.nextEvent[lang]}
              </p>
              <h2 className="display relative mt-2 text-xl sm:text-2xl">{featured.title[lang]}</h2>
              <p className="relative mt-1.5 flex items-start gap-2 text-xs font-medium">
                <Icon name="pin" size={16} className="mt-0.5 shrink-0" />
                {featured.venue[lang]}
              </p>
              <p className="relative mt-1 flex items-center gap-2 text-xs font-medium">
                <Icon name="clock" size={16} />
                {formatDate(featured.date, lang)}
              </p>
              <div className="relative mt-2 [&_[role=timer]>div]:py-1.5 [&_[role=timer]>div>div:first-child]:text-lg [&_[role=timer]>div>div:last-child]:mt-0.5">
                <Countdown target={featured.date} labels={{ d: ui.events.cd.d[lang], h: ui.events.cd.h[lang], m: ui.events.cd.m[lang], s: ui.events.cd.s[lang] }} doneText={ui.events.done[lang]} tone="gold" />
              </div>
              <Link href={href(lang, `/events/${featured.slug}`)} className="btn btn-ink relative mt-2 w-full !py-2 !text-sm !bg-[#5c0f14] !text-[#ffe9b8]">
                {t.quoteCta[lang]}
              </Link>
            </div>
          </article>
        </div>
      </LampHero>

      {/* ───────── Word strip ───────── */}
      <div className="marquee flex h-20 items-center overflow-hidden border-y border-line" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <ul key={k} className="flex min-w-[100vw] shrink-0 items-center justify-around gap-10 pr-10">
              {[dahampaslaLogo, ymbaLogo, dahampaslaLogo, ymbaLogo, dahampaslaLogo, ymbaLogo].map((logo, i) => (
                <li key={i} className="flex shrink-0 items-center justify-center">
                  <Image
                    src={logo}
                    alt=""
                    sizes="(min-width: 640px) 224px, 192px"
                    className="h-20 w-48 object-contain sm:w-56"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* ───────── Blog preview ───────── */}
      <section className="section" aria-labelledby="home-blog-title">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-5xl border border-line bg-gradient-to-br from-lamp/10 via-card to-card p-5 sm:p-8 lg:p-10">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-lamp/10 blur-3xl" />
            <div className="relative mb-8 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span aria-hidden="true" className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-vihara text-lamp2"><Icon name="book" size={22} /></span>
                <h2 id="home-blog-title" className="display text-3xl sm:text-4xl lg:text-5xl">{t.blogPreviewTitle[lang]}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{t.blogPreviewIntro[lang]}</p>
              </div>
              <Link href={href(lang, "/blog")} className="btn btn-ghost shrink-0">
                {t.allPosts[lang]} <Icon name="arrowUpRight" size={18} />
              </Link>
            </div>
            <div className="relative">
              <BlogExplorer lang={lang} posts={blogCards} limit={3} />
            </div>
          </div>
        </div>
      </section>

      <PillarsSection lang={lang} />

      {/* ───────── Statement ───────── */}
      <section className="pb-6">
        <div className="wrap">
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-[#d8a650]/25 bg-gradient-to-br from-[#68151e] via-[#420b13] to-[#21070c] px-7 py-10 text-white shadow-[0_24px_65px_-32px_rgba(67,10,19,0.65)] sm:rounded-5xl sm:px-12 sm:py-14 lg:px-14">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#ffe1a0]/70 to-transparent" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#edac42]/10 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_15rem] lg:gap-14">
              <div>
                <p className="flex items-center gap-3 text-sm font-semibold tracking-wide text-[#f5d28e]">
                  <span aria-hidden="true" className="h-px w-8 shrink-0 bg-[#f5d28e]/60" />
                  {t.quoteLead[lang]}
                </p>
                <blockquote className="mt-6 max-w-3xl text-3xl font-semibold !leading-[1.2] tracking-tight text-[#fffaf0] sm:text-4xl lg:text-[2.65rem]">{t.quote[lang]}</blockquote>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
                  <Link href={href(lang, `/events/${featured.slug}`)} className="group inline-flex min-h-12 items-center gap-5 rounded-full border border-[#ffe3a1]/60 bg-gradient-to-b from-[#ffe3a1] to-[#eeb74f] px-6 py-3 text-sm font-semibold text-[#381018] shadow-[0_6px_20px_-8px_rgba(238,183,79,0.5)] transition-shadow hover:shadow-[0_8px_26px_-6px_rgba(238,183,79,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffe3a1]">
                    {t.quoteCta[lang]}
                    <Icon name="arrowRight" size={18} className="transition-transform motion-safe:group-hover:translate-x-1" />
                  </Link>
                  <span className="text-xs font-medium tracking-[0.2em] text-[#f5d28e]/60">YMBA FUTUREGEN</span>
                </div>
              </div>
              <div aria-hidden="true" className="pointer-events-none relative hidden aspect-square items-center justify-center rounded-full border border-[#e8ba60]/15 p-7 lg:flex">
                <div className="absolute inset-3 rounded-full border border-[#e8ba60]/10" />
                <div className="absolute inset-8 rounded-full bg-[#e8ba60]/5 blur-xl" />
                <Wheel className="relative h-full w-full text-[#e8ba60]/60 drop-shadow-[0_0_18px_rgba(232,186,96,0.15)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Academy shelf ───────── */}
      <section className="section">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="display text-4xl sm:text-5xl">{ui.academy.title[lang]}</h2>
              <p className="mt-4 text-lg text-muted">{t.academyText[lang]}</p>
            </div>
            <Link href={href(lang, "/academy")} className="btn btn-ghost">{t.academyCta[lang]}</Link>
          </div>
        </div>
        <div className="snap-row wrap mt-10 flex gap-5 overflow-x-auto pb-6 pl-1 pt-2">
          {courses.map((c) => (
            <Link key={c.id} href={href(lang, "/academy")} className="w-40 shrink-0 transition-transform duration-300 hover:-translate-y-1.5 sm:w-48">
              <Book seed={c.seed} title={c.title[lang]} badge={c.kind === "pdf" ? "PDF" : undefined} />
            </Link>
          ))}
        </div>
      </section>

      {/* ───────── Software ───────── */}
      <section className="section">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 className="display text-4xl sm:text-5xl">{t.softwareTitle[lang]}</h2>
            <p className="mt-5 max-w-lg text-lg text-muted">{t.softwareText[lang]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={siteConfig.appUrl} className="btn btn-ink" target="_blank" rel="noopener noreferrer">
                <Icon name="smartphone" size={18} />
                {t.getApp[lang]}
              </a>
              <Link href={href(lang, "/software")} className="btn btn-ghost">{t.seeFeatures[lang]}</Link>
            </div>
          </div>
          <DeviceMockup lang={lang} />
        </div>
      </section>

      {/* ───────── Leadership ───────── */}
      <section className="section">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <span aria-hidden="true" className="mx-auto mb-5 block h-1 w-12 rounded-full bg-lamp" />
            <h2 className="display text-4xl sm:text-5xl">{t.leadersTitle[lang]}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{t.leadersText[lang]}</p>
          </div>
          <div className="mt-12 rounded-[2.5rem] border border-line bg-gradient-to-b from-card to-transparent px-5 py-10 sm:px-10 sm:py-12">
            <Leaders lang={lang} />
          </div>
        </div>
      </section>

      {/* ───────── Join ───────── */}
      <section className="pb-10 pt-4">
        <div className="wrap">
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-[#e9b84d] bg-gradient-to-br from-[#fff0bf] via-[#ffda77] to-[#edb03d] px-7 py-10 text-[#38131a] shadow-[0_24px_60px_-35px_rgba(166,104,10,0.55)] sm:rounded-5xl sm:px-12 sm:py-12">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <Wheel className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 text-[#a16414] opacity-[0.08]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-2xl">
                <span aria-hidden="true" className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-white/60 bg-white/35 text-[#68151e] shadow-sm"><Icon name="users" size={24} /></span>
                <h2 className="display text-3xl sm:text-4xl lg:text-5xl">{t.ctaTitle[lang]}</h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-[#38131a]/75 sm:text-lg">{t.ctaText[lang]}</p>
              </div>
              <div className="shrink-0 lg:border-l lg:border-[#8a561c]/20 lg:py-8 lg:pl-12">
                <Link href={href(lang, "/join")} className="group inline-flex min-h-14 items-center justify-between gap-8 rounded-full border border-white/15 bg-[#4c101a] px-7 py-4 font-semibold text-[#fff5dd] shadow-[0_10px_24px_-12px_rgba(76,16,26,0.65)] transition-colors hover:bg-[#68151e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4c101a]">
                  {t.ctaButton[lang]}
                  <Icon name="arrowRight" size={20} className="transition-transform motion-safe:group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
