import type { Lang } from "@/lib/i18n";
import { leaders } from "@/lib/content";
import { palette } from "./Cover";
import { Wheel } from "./Logo";

/** Leadership grid. Replace names in lib/content.ts and add photos to /public when ready. */
export function Leaders({ lang }: { lang: Lang }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
      {leaders.map((l, i) => {
        const p = palette(i + 1);
        return (
          <li key={i} className="text-center">
            <div
              className="relative mx-auto grid aspect-square w-full max-w-[11rem] place-items-center overflow-hidden rounded-full"
              style={{ background: p.bg, color: p.fg }}
            >
              <Wheel className="h-2/5 w-2/5 opacity-60" />
            </div>
            <p className="mt-4 font-semibold">{l.name[lang]}</p>
            <p className="text-sm text-muted">{l.role[lang]}</p>
          </li>
        );
      })}
    </ul>
  );
}
