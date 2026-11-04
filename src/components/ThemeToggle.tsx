"use client";

import { Icon } from "./Icon";

export function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const el = document.documentElement;
    const dark = !el.classList.contains("dark");
    el.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* storage can be blocked; the toggle still works for this visit */
    }
  };
  return (
    <button type="button" onClick={toggle} aria-label={label} title={label} className="icon-btn">
      <Icon name="sun" className="hidden dark:block" />
      <Icon name="moon" className="dark:hidden" />
    </button>
  );
}
