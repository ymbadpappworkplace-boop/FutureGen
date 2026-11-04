import type { ReactNode } from "react";

export function PageHeader({ title, intro, children }: { title: string; intro?: string; children?: ReactNode }) {
  return (
    <header className="relative overflow-hidden pb-10 pt-32 sm:pb-14 sm:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[440px]"
        style={{ background: "radial-gradient(60% 80% at 50% 0%, var(--glow), transparent 72%)" }}
      />
      <div className="wrap relative">
        <h1 className="display max-w-3xl text-[2.5rem] sm:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p>}
        {children}
      </div>
    </header>
  );
}
