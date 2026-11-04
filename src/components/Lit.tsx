"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

/** A card (or link-card) with a soft lamp glow that follows the pointer. */
export function Lit({ href, className = "", children }: { href?: string; className?: string; children: ReactNode }) {
  const move = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  if (href) {
    return (
      <Link href={href} onMouseMove={move} className={`lit ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <div onMouseMove={move} className={`lit ${className}`}>
      {children}
    </div>
  );
}
