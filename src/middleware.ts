import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["si", "en"] as const;

/**
 * Every URL lives under /si or /en. Anything else is redirected to the visitor's
 * last chosen language (cookie "lang"), falling back to Sinhala.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  const saved = request.cookies.get("lang")?.value;
  const lang = saved === "en" ? "en" : "si";
  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // skip Next internals, API routes and any file with an extension (icons, images, sitemap.xml, ...)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
