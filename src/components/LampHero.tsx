"use client";

import type { PointerEvent, ReactNode } from "react";

/** Hero wrapper: the pointer acts as a lamp, a pool of warm light follows it. */
export function LampHero({ children, className = "" }: { children: ReactNode; className?: string }) {
  const move = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--lx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--ly", `${e.clientY - r.top}px`);
  };
  return (
    <section onPointerMove={move} className={`lamp-hero ${className}`}>
      {children}
    </section>
  );
}
