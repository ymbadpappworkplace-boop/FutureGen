"use client";

import { useEffect, useRef } from "react";
import { Wheel } from "./Logo";

// Show the bilingual notice even if the earlier version was dismissed.
const dismissalKey = "development-notice-bilingual-dismissed";

export function DevelopmentNotice() {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const notice = dialog.current;
    if (!notice || notice.open) return;
    try {
      if (sessionStorage.getItem(dismissalKey)) return;
    } catch {}
    notice.showModal();
  }, []);

  function rememberDismissal() {
    try {
      sessionStorage.setItem(dismissalKey, "true");
    } catch {}
  }

  return (
    <dialog
      ref={dialog}
      onClose={rememberDismissal}
      aria-labelledby="development-notice-title"
      aria-describedby="development-notice-message development-notice-message-si"
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-3xl border border-line bg-solid p-0 text-fg shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <div className="relative isolate overflow-hidden border-t-4 border-lamp bg-[#5c0f14] px-6 py-7 text-white sm:px-8">
        <Wheel aria-hidden="true" className="pointer-events-none absolute -right-12 -top-14 -z-10 h-52 w-52 text-lamp opacity-20" />
        <h2 id="development-notice-title" lang="en" className="display text-3xl sm:text-4xl">
          Welcome to FutureGen
        </h2>
        <p lang="si" className="mt-2 text-sm font-medium leading-relaxed text-[#ffe3a0]">
          FutureGen වෙත සාදරයෙන් පිළිගනිමු
        </p>
      </div>
      <div className="space-y-5 px-6 py-6 sm:px-8">
        <p id="development-notice-message" lang="en" className="leading-relaxed text-muted">
          You can use our website while we continue to develop it. Thank you for your patience as we make improvements.
        </p>
        <p id="development-notice-message-si" lang="si" className="border-t border-line pt-5 leading-loose text-muted">
          අපගේ වෙබ් අඩවිය තවමත් සංවර්ධනය වෙමින් පවතී. මේ අතරතුර ඔබට වෙබ් අඩවිය භාවිත කළ හැකිය. ඔබගේ ඉවසීමට ස්තූතියි!
        </p>
        <form method="dialog">
          <button className="btn btn-lamp h-auto min-h-12 w-full flex-col gap-0.5 py-2 sm:w-auto" autoFocus>
            <span lang="en">Continue to site</span>
            <span lang="si" className="text-xs">වෙබ් අඩවියට පිවිසෙන්න</span>
          </button>
        </form>
      </div>
    </dialog>
  );
}
