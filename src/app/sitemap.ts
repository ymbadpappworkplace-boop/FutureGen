import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { events, posts } from "@/lib/content";
import { locales } from "@/lib/i18n";

const staticPaths = ["", "/events", "/blog", "/academy", "/software", "/community", "/about", "/donate", "/contact", "/join"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...events.map((e) => `/events/${e.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
  ];
  return locales.flatMap((lang) =>
    paths.map((p) => ({
      url: `${siteConfig.url}/${lang}${p}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}/${l}${p}`])),
      },
    })),
  );
}
