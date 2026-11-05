import Link from "next/link";
import Image from "next/image";
import pinkamaCard from "../../../public/pinkamacard.png";
import dahampaslaLogo from "../../../public/dahampasla.avif";
import ymbaLogo from "../../../public/ymba.avif";
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

      {/* ───────── Pillars (bento) ───────── */}
      <section className="section pillars-section">
        <div className="wrap">
          <div className="flex items-end gap-8">
            <div>
              <span aria-hidden="true" className="mb-5 block h-1 w-14 rounded-full bg-gradient-to-r from-lamp to-gen" />
              <h2 className="display max-w-2xl text-4xl sm:text-5xl">{t.pillarsTitle[lang]}</h2>
            </div>
            <div aria-hidden="true" className="mb-2 hidden h-px flex-1 bg-gradient-to-r from-line to-transparent sm:block" />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-6">
            <Reveal className="md:col-span-4">
              <Lit href={href(lang, "/events")} className="group relative flex h-full min-h-[19rem] flex-col justify-between rounded-5xl bg-vihara p-7 text-white sm:p-9">
                <Wheel className="pointer-events-none absolute -right-14 -top-14 h-72 w-72 text-lamp opacity-25 transition-transform duration-700 group-hover:rotate-45" />
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-lamp text-[#1b0f02]"><Icon name="calendar" /></span>
                <div className="relative">
                  <h3 className="title text-3xl">{t.pillars.events.title[lang]}</h3>
                  <p className="mt-3 max-w-md text-white/75">{t.pillars.events.text[lang]}</p>
                </div>
              </Lit>
            </Reveal>

            <Reveal delay={80} className="md:col-span-2">
              <Lit href={href(lang, "/academy")} className="flex h-full min-h-[19rem] flex-col justify-between rounded-4xl bg-gradient-to-br from-lamp2 to-lamp p-7 text-[#1b0f02]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1b0f02] text-lamp2"><Icon name="cap" /></span>
                <div>
                  <h3 className="title text-2xl">{t.pillars.academy.title[lang]}</h3>
                  <p className="mt-3 text-[#1b0f02]/75">{t.pillars.academy.text[lang]}</p>
                </div>
              </Lit>
            </Reveal>

            <Reveal delay={120} className="md:col-span-2">
              <Lit href={href(lang, "/software")} className="surface flex h-full min-h-[17rem] flex-col justify-between rounded-4xl p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gen text-white"><Icon name="smartphone" /></span>
                <div>
                  <h3 className="title text-2xl">{t.pillars.software.title[lang]}</h3>
                  <p className="mt-3 text-muted">{t.pillars.software.text[lang]}</p>
                </div>
              </Lit>
            </Reveal>

            <Reveal delay={160} className="md:col-span-4">
              <Lit href={href(lang, "/blog")} className="surface flex h-full min-h-[17rem] flex-col justify-between rounded-5xl p-7 sm:p-9">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-bg2"><Icon name="users" /></span>
                <div>
                  <h3 className="title text-3xl">{t.pillars.community.title[lang]}</h3>
                  <p className="mt-3 max-w-md text-muted">{t.pillars.community.text[lang]}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(["dhamma", "education", "community", "technology"] as const).map((c) => (
                      <span key={c} className="chip">{ui.blog.cat[c][lang]}</span>
                    ))}
                  </div>
                </div>
              </Lit>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── Statement ───────── */}
      <section className="pb-6">
        <div className="wrap">
          <div className="grain relative overflow-hidden rounded-5xl bg-vihara px-6 py-14 text-white sm:px-14 sm:py-20">
            <Wheel className="spin-slow pointer-events-none absolute -right-28 -top-28 h-[28rem] w-[28rem] text-lamp opacity-20" />
            <p className="relative font-semibold text-lamp2">{t.quoteLead[lang]}</p>
            <blockquote className="display relative mt-4 max-w-3xl text-3xl sm:text-5xl">{t.quote[lang]}</blockquote>
            <Link href={href(lang, `/events/${featured.slug}`)} className="btn btn-lamp relative mt-9">
              {t.quoteCta[lang]}
            </Link>
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
          <h2 className="display text-4xl sm:text-5xl">{t.leadersTitle[lang]}</h2>
          <p className="mt-3 max-w-xl text-lg text-muted">{t.leadersText[lang]}</p>
          <div className="mt-12">
            <Leaders lang={lang} />
          </div>
        </div>
      </section>

      {/* ───────── Join ───────── */}
      <section className="pb-10 pt-4">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-lamp2 via-lamp to-[#d9660a] px-6 py-14 text-[#1b0f02] sm:px-14 sm:py-20">
            <Wheel className="spin-slow pointer-events-none absolute -bottom-32 -right-24 h-[26rem] w-[26rem] opacity-[0.14]" />
            <h2 className="display relative max-w-xl text-4xl sm:text-5xl">{t.ctaTitle[lang]}</h2>
            <p className="relative mt-4 max-w-md text-lg text-[#1b0f02]/80">{t.ctaText[lang]}</p>
            <Link href={href(lang, "/join")} className="btn btn-ink relative mt-8">{t.ctaButton[lang]}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
