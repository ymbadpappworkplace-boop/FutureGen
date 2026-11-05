import Link from "next/link";
import Image from "next/image";
import brandLogo from "../../public/YMBA FutureGen Yellow Ring Logo.png";
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
      <Image src={brandLogo} alt="" width={48} height={48} sizes="48px" priority className="h-12 w-12 shrink-0 rounded-full object-contain" />
      <Wordmark className="text-[1.05rem]" />
    </Link>
  );
}
