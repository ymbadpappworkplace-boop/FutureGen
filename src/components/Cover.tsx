import { Wheel } from "./Logo";

const palettes = [
  { bg: "linear-gradient(150deg,#ffd978 0%,#f3a51d 55%,#c9650a 100%)", fg: "#3a1700" },
  { bg: "linear-gradient(150deg,#8a1c22 0%,#5c0f14 60%,#2a0508 100%)", fg: "#ffe9b8" },
  { bg: "linear-gradient(150deg,#3b78e8 0%,#0057b8 55%,#06306b 100%)", fg: "#ffffff" },
  { bg: "linear-gradient(150deg,#35958a 0%,#1a5e57 60%,#0c3532 100%)", fg: "#ffffff" },
  { bg: "linear-gradient(150deg,#d9648d 0%,#a0305f 60%,#5c1536 100%)", fg: "#ffffff" },
];

export const palette = (seed: number) => palettes[Math.abs(seed) % palettes.length];

/** Generative artwork used where no photograph is supplied yet (blog, events). */
export function Cover({ seed, className = "", children }: { seed: number; className?: string; children?: React.ReactNode }) {
  const p = palette(seed);
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: p.bg, color: p.fg }}>
      <Wheel className="absolute -bottom-12 -right-12 h-52 w-52 opacity-20" />
      <Wheel className="absolute -left-8 -top-10 h-28 w-28 opacity-10" />
      {children}
    </div>
  );
}

/** A book-style cover for Academy courses. */
export function Book({ seed, title, badge }: { seed: number; title: string; badge?: string }) {
  const p = palette(seed);
  return (
    <div
      className="academy-book relative aspect-[3/4] w-full rounded-r-xl rounded-l-[0.2rem] shadow-[0_18px_36px_-16px_rgba(0,0,0,.55)]"
    >
      <div aria-hidden="true" className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-r-xl rounded-l-[0.2rem] border border-[#d8d0bb] bg-[#fffaf0] px-6 text-center text-[#39271d]">
        <div className="absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-black/20 to-transparent" />
        <div className="absolute inset-y-2 right-0 w-1.5 border-x border-[#ded6c3] bg-[repeating-linear-gradient(0deg,#e1d9c7_0px,#e1d9c7_1px,#fffaf0_1px,#fffaf0_3px)]" />
        <Wheel className="mb-5 h-10 w-10 text-[#b58a39]/60" />
        <p className="text-lg font-bold leading-snug">{title}</p>
        <div className="mt-5 h-px w-10 bg-[#b58a39]/50" />
        <p className="mt-4 text-[0.6rem] font-semibold tracking-[0.16em] text-[#79674e]">FUTUREGEN ACADEMY</p>
      </div>
      <div className="academy-book-cover absolute inset-0 overflow-hidden rounded-r-xl rounded-l-[0.2rem]" style={{ background: p.bg, color: p.fg }}>
      <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/30 to-transparent" />
      <div className="absolute inset-y-0 left-3 w-px bg-white/25" />
      <Wheel className="absolute -right-8 -top-8 h-32 w-32 opacity-20" />
      {badge && (
        <span className="absolute right-3 top-3 rounded-md bg-black/55 px-2 py-0.5 text-[0.7rem] font-bold text-white">{badge}</span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-5 pl-7">
        <div className="mb-3 h-0.5 w-8 rounded-full bg-current opacity-60" />
        <p className="text-lg font-bold leading-snug">{title}</p>
      </div>
      </div>
    </div>
  );
}
