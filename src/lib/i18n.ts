import { notFound } from "next/navigation";

export type Lang = "si" | "en";
export type L = Record<Lang, string>;

export const locales: Lang[] = ["si", "en"];
export const isLang = (v: string): v is Lang => v === "si" || v === "en";

/** Build a locale-prefixed URL: href("si", "/events") -> "/si/events" */
export const href = (lang: Lang, path = "/") => `/${lang}${path === "/" ? "" : path}`;

/** Resolve + validate the [lang] route param (404 if unknown). */
export async function getLang(params: Promise<{ lang: string }>): Promise<Lang> {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return lang;
}

/* Sinhala names are explicit so output never depends on the runtime's ICU data
   (some ICU builds return traditional lunar month names such as "දුරුතු" for January). */
const SI_MONTHS = ["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"];
const SI_MONTHS_SHORT = ["ජන", "පෙබ", "මාර්", "අප්‍රේ", "මැයි", "ජූනි", "ජූලි", "අගෝ", "සැප්", "ඔක්", "නොවැ", "දෙසැ"];
const SI_DAYS = ["ඉරිදා", "සඳුදා", "අඟහරුවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා"];

// Sri Lanka is UTC+5:30 all year (no daylight saving)
function colomboParts(iso: string) {
  const d = new Date(new Date(iso).getTime() + 5.5 * 3_600_000);
  return { y: d.getUTCFullYear(), m: d.getUTCMonth(), d: d.getUTCDate(), w: d.getUTCDay(), h: d.getUTCHours(), min: d.getUTCMinutes() };
}

/** Format a date in Sri Lanka time. Pass `undefined` for a field to omit it. */
export function formatDate(iso: string, lang: Lang, opts?: Intl.DateTimeFormatOptions) {
  const o: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric", ...opts };
  if (lang === "si") {
    const p = colomboParts(iso);
    const month = o.month ? (o.month === "short" ? SI_MONTHS_SHORT[p.m] : SI_MONTHS[p.m]) : "";
    const date = [o.year ? String(p.y) : "", month, o.day ? String(p.d) : ""].filter(Boolean).join(" ");
    return o.weekday ? [date, SI_DAYS[p.w]].filter(Boolean).join(", ") : date;
  }
  return new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Colombo", ...o }).format(new Date(iso));
}

export function formatTime(iso: string, lang: Lang) {
  if (lang === "si") {
    const p = colomboParts(iso);
    const h12 = p.h % 12 === 0 ? 12 : p.h % 12;
    return `${p.h < 12 ? "පෙ.ව." : "ප.ව."} ${h12}.${String(p.min).padStart(2, "0")}`;
  }
  return new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Colombo", hour: "numeric", minute: "2-digit", hour12: true }).format(new Date(iso));
}
