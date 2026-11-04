import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts, ui } from "@/lib/content";
import { formatDate, href, isLang, locales, type Lang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { Cover } from "@/components/Cover";
import { Lit } from "@/components/Lit";

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((lang) => posts.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const p = getPost(slug);
  if (!isLang(lang) || !p) return {};
  return { title: p.title[lang], description: p.excerpt[lang], openGraph: { type: "article", publishedTime: p.date } };
}

export default async function PostPage({ params }: Props) {
  const { lang: l, slug } = await params;
  if (!isLang(l)) notFound();
  const lang: Lang = l;
  const post = getPost(slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title[lang],
    datePublished: post.date,
    inLanguage: lang,
    author: { "@type": "Organization", name: post.author.en },
    publisher: { "@type": "Organization", name: ui.site.org.en, url: siteConfig.url },
  };

  return (
    <article className="pb-12 pt-28 sm:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap">
        <Link href={href(lang, "/blog")} className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-fg">
          <Icon name="arrowRight" size={16} className="rotate-180" />
          {ui.blog.back[lang]}
        </Link>
        <p className="mt-6 text-sm font-semibold text-lamp">{ui.blog.cat[post.category][lang]}</p>
        <h1 className="display mt-2 max-w-3xl text-4xl sm:text-6xl">{post.title[lang]}</h1>
        <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-muted">
          <span>{ui.blog.by[lang]} {post.author[lang]}</span>
          <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
          <span>{ui.blog.minRead[lang].replace("{n}", String(post.read))}</span>
        </p>
        <Cover seed={post.seed} className="mt-10 h-56 rounded-5xl sm:h-80" />
        <div className="mx-auto mt-12 max-w-2xl space-y-6 text-lg">
          {post.body[lang].map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      <div className="wrap mt-20">
        <h2 className="title text-2xl">{ui.blog.more[lang]}</h2>
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {more.map((p) => (
            <li key={p.slug}>
              <Lit href={href(lang, `/blog/${p.slug}`)} className="surface flex h-full flex-col rounded-3xl p-5">
                <p className="text-xs font-semibold text-muted">{ui.blog.cat[p.category][lang]}</p>
                <h3 className="title mt-1.5 text-lg">{p.title[lang]}</h3>
                <p className="mt-2 line-clamp-2 text-[0.95rem] text-muted">{p.excerpt[lang]}</p>
              </Lit>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
