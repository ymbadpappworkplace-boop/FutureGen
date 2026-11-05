import Image from "next/image";
import { ui } from "@/lib/content";
import { href, type Lang } from "@/lib/i18n";
import { Icon } from "./Icon";
import { Lit } from "./Lit";
import { Reveal } from "./Reveal";
import pinkam from "../../public/blog/pinkam.jpg";
import academy from "../../public/blog/education.jpg";
import software from "../../public/blog/technology.jpg";
import community from "../../public/blog/community.jpg";

const cards = [
  { key: "events", path: "/events", image: pinkam, icon: "calendar", layout: "lg:col-span-6 lg:row-span-2", position: "center" },
  { key: "academy", path: "/academy", image: academy, icon: "cap", layout: "lg:col-span-6", position: "center" },
  { key: "software", path: "/software", image: software, icon: "smartphone", layout: "lg:col-span-3", position: "center" },
  { key: "community", path: "/blog", image: community, icon: "users", layout: "lg:col-span-3", position: "center" },
] as const;

export function PillarsSection({ lang }: { lang: Lang }) {
  const t = ui.home;
  return (
    <section className="section" aria-labelledby="pillars-title">
      <div className="wrap">
        <div className="mb-9 flex items-end justify-between gap-6">
          <div>
            <span aria-hidden="true" className="mb-5 block h-1 w-14 rounded-full bg-lamp" />
            <h2 id="pillars-title" className="display max-w-2xl text-4xl sm:text-5xl">{t.pillarsTitle[lang]}</h2>
          </div>
          <span aria-hidden="true" className="hidden text-sm font-medium tracking-[0.25em] text-muted sm:block">YMBA · FUTUREGEN</span>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {cards.map((card, index) => (
            <Reveal key={card.key} delay={index * 60} className={card.layout}>
              <Lit href={href(lang, card.path)} className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] bg-[#21070b] p-6 text-white shadow-lg ring-1 ring-black/10 sm:p-7 ${card.key === "events" ? "min-h-[28rem] lg:min-h-[39rem]" : "min-h-[19rem]"}`}>
                <Image src={card.image} alt="" fill placeholder="blur" sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw" className="pointer-events-none object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" style={{ objectPosition: card.position }} />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#16090b] via-[#16090b]/55 to-black/15" />
                <div className="relative flex items-center justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/25 bg-black/25 text-[#ffe39a] backdrop-blur-md"><Icon name={card.icon} size={21} /></span>
                  <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-black/20 transition-colors group-hover:bg-white group-hover:text-[#21070b] group-focus-visible:bg-white group-focus-visible:text-[#21070b]"><Icon name="arrowUpRight" size={20} /></span>
                </div>
                <div className="relative mt-14">
                  {card.key === "events" && <span aria-hidden="true" className="mb-5 block h-1 w-10 rounded-full bg-lamp" />}
                  <h3 className={`title ${card.key === "events" ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{t.pillars[card.key].title[lang]}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">{t.pillars[card.key].text[lang]}</p>
                </div>
              </Lit>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
