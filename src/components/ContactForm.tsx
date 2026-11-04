"use client";

import { useState, type FormEvent } from "react";
import type { Lang } from "@/lib/i18n";
import { ui } from "@/lib/content";
import { Icon } from "./Icon";

type State = "idle" | "sending" | "ok" | "error";

export function ContactForm({ lang, type }: { lang: Lang; type: "contact" | "membership" }) {
  const t = ui.contact;
  const [state, setState] = useState<State>("idle");
  const isContact = type === "contact";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // capture before the first await
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, ...data }),
      });
      if (!res.ok) throw new Error("request failed");
      form.reset();
      setState("ok");
    } catch {
      setState("error");
    }
  }

  if (state === "ok") {
    return (
      <div role="status" className="surface rounded-4xl p-8 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-lamp/20 text-lamp">
          <Icon name="check" size={28} />
        </span>
        <p className="mt-5 text-lg font-semibold">{t.success[lang]}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="surface grid gap-5 rounded-4xl p-6 sm:p-8" noValidate={false}>
      <label className="grid gap-2 text-sm font-medium">
        {t.name[lang]}
        <input name="name" required minLength={2} autoComplete="name" className="field" />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          {t.email[lang]}
          <input name="email" type="email" required autoComplete="email" className="field" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          {t.phone[lang]}
          <input name="phone" type="tel" autoComplete="tel" className="field" />
        </label>
      </div>
      {isContact && (
        <label className="grid gap-2 text-sm font-medium">
          {t.interest[lang]}
          <select name="interest" className="field" defaultValue="general">
            {t.interests.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label[lang]}
              </option>
            ))}
          </select>
        </label>
      )}
      <label className="grid gap-2 text-sm font-medium">
        {t.message[lang]}
        <textarea name="message" required={isContact} rows={5} className="field resize-y" />
      </label>

      {/* honeypot: hidden from people, irresistible to bots */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

      {state === "error" && (
        <p role="alert" className="rounded-2xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400">
          {t.error[lang]}
        </p>
      )}
      <button type="submit" disabled={state === "sending"} className="btn btn-lamp w-full disabled:opacity-60 sm:w-auto sm:justify-self-start">
        {state === "sending" ? t.sending[lang] : isContact ? t.send[lang] : t.joinSend[lang]}
      </button>
    </form>
  );
}
