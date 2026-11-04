import Link from "next/link";
import { ui } from "@/lib/content";
import { Wheel } from "@/components/Logo";

// Note: not-found has no access to route params, so this page shows both languages.
export default function NotFound() {
  return (
    <section className="wrap grid min-h-[80dvh] place-items-center py-32 text-center">
      <div>
        <Wheel className="spin-slow mx-auto h-24 w-24 text-lamp" />
        <h1 className="display mt-8 text-5xl">404</h1>
        <p className="mt-4 text-lg font-semibold">
          {ui.common.notFoundTitle.si} <span className="text-muted">/</span> {ui.common.notFoundTitle.en}
        </p>
        <p className="mx-auto mt-2 max-w-md text-muted">{ui.common.notFoundText.en}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/si" className="btn btn-lamp">{ui.common.goHome.si}</Link>
          <Link href="/en" className="btn btn-ghost">{ui.common.goHome.en}</Link>
        </div>
      </div>
    </section>
  );
}
