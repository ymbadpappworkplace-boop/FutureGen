import type { Lang } from "@/lib/i18n";
import { leaders } from "@/lib/content";
import Image from "next/image";

/** Bilingual leadership profiles with locally hosted portraits. */
export function Leaders({ lang }: { lang: Lang }) {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-10 lg:grid-cols-4">
      {leaders.map((l) => {
        return (
          <li key={l.image} className="group text-center">
            <div className="relative mx-auto w-full max-w-[13rem] rounded-full border border-lamp/30 p-2 transition-colors duration-300 group-hover:border-lamp/70 sm:p-2.5">
              <div aria-hidden="true" className="pointer-events-none absolute inset-4 rounded-full bg-lamp/15 blur-xl" />
              <div className="relative aspect-square overflow-hidden rounded-full bg-white shadow-[0_12px_30px_-15px_rgba(66,28,13,0.4)] ring-1 ring-line">
                <Image src={l.image} alt={l.name[lang]} fill sizes="(min-width: 640px) 188px, 40vw" className="object-cover object-top transition-transform duration-700 motion-safe:group-hover:scale-105" />
              </div>
              <span aria-hidden="true" className="absolute -bottom-1 left-1/2 h-2 w-8 -translate-x-1/2 rounded-full border-2 border-bg bg-lamp" />
            </div>
            <div className="mx-auto mt-6 max-w-[15rem]">
              <p className="text-base font-semibold leading-snug tracking-tight sm:text-lg">{l.name[lang]}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{l.role[lang]}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
