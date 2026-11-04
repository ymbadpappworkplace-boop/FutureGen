
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Inter, Noto_Sans_Sinhala } from "next/font/google";
// @ts-expect-error Next.js processes this stylesheet import at build time.
import "../globals.css";
import { isLang, locales } from "@/lib/i18n";
import { ui } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";
import { Sidebar } from "@/components/Sidebar";

/*
  Typography: the stack in globals.css (--ff) uses the real San Francisco on Apple devices
  (-apple-system / SF Pro). Apple's licence doesn't allow self-hosting SF on the web, so
  Windows / Android visitors get Inter, the closest open match. Sinhala glyphs come from
  Noto Sans Sinhala (SF has no Sinhala), restricted to the Sinhala unicode range.
*/
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  variable: "--font-sinhala",
  display: "swap",
  adjustFontFallback: false,
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isLang(lang)) return {};

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: ui.site.title[lang],
      template: "%s | YMBA FutureGen",
    },
    description: ui.site.description[lang],
    applicationName: "YMBA FutureGen",
    alternates: {
      languages: { si: "/si", en: "/en" },
    },
    openGraph: {
      type: "website",
      siteName: "YMBA FutureGen",
      title: ui.site.title[lang],
      description: ui.site.description[lang],
      locale: lang === "si" ? "si_LK" : "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: ui.site.title[lang],
      description: ui.site.description[lang],
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#120a0c" },
  ],
  width: "device-width",
  initialScale: 1,
};

// runs before first paint: applies the saved/system theme and enables the reveal animations
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}document.documentElement.classList.add('js')})();`;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLang(lang)) notFound();

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${inter.variable} ${sinhala.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body>
        <a href="#main" className="skip">
          {ui.nav.skip[lang]}
        </a>

        <Navbar lang={lang} />

        <Sidebar lang={lang} />

        <div className="lg:pl-[4.75rem]">
          <main id="main">{children}</main>
          <Footer lang={lang} />
        </div>

        <CommandPalette lang={lang} />
      </body>
    </html>
  );
}
