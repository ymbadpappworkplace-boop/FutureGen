import type { Lang } from "@/lib/i18n";
import { ui } from "@/lib/content";
import { Wheel } from "./Logo";

/** Pure-CSS illustration of the DSMS app: a laptop dashboard with a phone in front. */
export function DeviceMockup({ lang }: { lang: Lang }) {
  const m = ui.software.mock;
  const bars = [46, 70, 58, 86, 64, 92, 74];
  return (
    <div className="relative mx-auto w-full max-w-xl pb-10 pr-6 sm:pr-10" aria-hidden="true">
      {/* laptop */}
      <div className="surface overflow-hidden rounded-[1.6rem] shadow-2xl">
        <div className="flex h-9 items-center gap-1.5 border-b border-line px-4">
          <i className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <i className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <i className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-3 rounded-full bg-bg2 px-3 py-0.5 text-[0.65rem] text-muted">dsms</span>
        </div>
        <div className="grid grid-cols-[3.2rem_1fr]">
          <div className="flex flex-col items-center gap-3 border-r border-line bg-bg2/60 py-4">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-lamp text-[#1b0f02]"><Wheel className="h-5 w-5" /></span>
            {[0, 1, 2, 3].map((i) => <i key={i} className="h-5 w-5 rounded-md bg-fg/10" />)}
          </div>
          <div className="p-4 sm:p-5">
            <div className="grid grid-cols-3 gap-3">
              {[
                { l: m.attendance[lang], c: "from-lamp2 to-lamp" },
                { l: m.results[lang], c: "from-[#3b78e8] to-gen" },
                { l: m.grades[lang], c: "from-[#8a1c22] to-vihara" },
              ].map((s) => (
                <div key={s.l} className={`rounded-2xl bg-gradient-to-br ${s.c} p-3 text-white`}>
                  <p className="truncate text-[0.62rem] font-medium opacity-90">{s.l}</p>
                  <p className="mt-2 h-2 w-10 rounded-full bg-white/70" />
                  <p className="mt-1.5 h-1.5 w-6 rounded-full bg-white/40" />
                </div>
              ))}
            </div>
            <div className="mt-4 flex h-28 items-end gap-2 rounded-2xl bg-bg2/70 p-3">
              {bars.map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} className="flex-1 rounded-t-md bg-gradient-to-t from-lamp to-lamp2" />
              ))}
            </div>
            <div className="mt-3 grid gap-2">
              {[0, 1].map((i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-bg2/70 px-3 py-2">
                  <i className="h-6 w-6 rounded-full bg-fg/15" />
                  <i className="h-2 flex-1 rounded-full bg-fg/10" />
                  <i className="h-2 w-8 rounded-full bg-lamp/60" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* phone */}
      <div className="absolute bottom-0 right-0 w-[8.5rem] rounded-[2rem] border-[5px] border-fg bg-solid p-2 shadow-2xl sm:w-40">
        <div className="mx-auto h-1.5 w-12 rounded-full bg-fg/80" />
        <div className="mt-3 rounded-2xl bg-gradient-to-br from-lamp2 to-lamp p-3 text-[#1b0f02]">
          <p className="truncate text-[0.6rem] font-bold">{m.notice[lang]}</p>
          <i className="mt-2 block h-1.5 w-full rounded-full bg-black/25" />
          <i className="mt-1.5 block h-1.5 w-2/3 rounded-full bg-black/25" />
        </div>
        {[0, 1, 2].map((i) => (
          <div key={i} className="mt-2 flex items-center gap-2 rounded-xl bg-bg2 px-2 py-2">
            <i className="h-5 w-5 rounded-full bg-fg/15" />
            <i className="h-1.5 flex-1 rounded-full bg-fg/10" />
          </div>
        ))}
        <i className="mx-auto mt-3 block h-1 w-10 rounded-full bg-fg/30" />
      </div>
    </div>
  );
}
