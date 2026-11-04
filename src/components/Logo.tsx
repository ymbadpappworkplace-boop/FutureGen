import Link from "next/link";
import { href, type Lang } from "@/lib/i18n";

/** Dhammacakka (Wheel of Dhamma): eight spokes, hub, rim and rim-studs. */
export function Wheel({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="33" strokeWidth="5" />
      <circle cx="50" cy="50" r="8" strokeWidth="5" />
      <circle cx="50" cy="50" r="2.5" fill="currentColor" stroke="none" />
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 45} 50 50)`}>
          <line x1="50" y1="42" x2="50" y2="20" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="9" r="4.2" fill="currentColor" stroke="none" />
        </g>
      ))}
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-bold tracking-tight ${className}`}>
      <span className="text-lamp">&ldquo;YMBA&rdquo;</span> Future<span className="text-gen">Gen</span>
    </span>
  );
}

export function Logo({ lang, className = "" }: { lang: Lang; className?: string }) {
  return (
    <Link href={href(lang)} className={`inline-flex items-center gap-2.5 ${className}`} aria-label="YMBA FutureGen">
      <span className="grid h-9 w-9 place-items-center rounded-[0.6rem] bg-gradient-to-br from-lamp2 to-lamp text-[#1b0f02] shadow-[0_6px_16px_-6px_rgba(232,154,0,.8)]">
        <Wheel className="h-6 w-6" />
      </span>
      <Wordmark className="text-[1.05rem]" />
    </Link>
  );
}
