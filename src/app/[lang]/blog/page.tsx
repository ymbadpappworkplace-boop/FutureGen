import type { Metadata } from "next";
import { posts, ui } from "@/lib/content";
import { formatDate, getLang, href } from "@/lib/i18n";
import { PageHeader } from "@/components/PageHeader";
import { BlogExplorer, type PostCard } from "@/components/BlogExplorer";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLang(params);
  return { title: ui.blog.title[lang], description: ui.blog.intro[lang] };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getLang(params);
  // dates are formatted on the server so the client never has to guess locale output
  const cards: PostCard[] = [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((p) => ({
      slug: p.slug,
      url: href(lang, `/blog/${p.slug}`),
      category: p.category,
      title: p.title[lang],
      excerpt: p.excerpt[lang],
      dateLabel: formatDate(p.date, lang, { day: "numeric", month: "short", year: "numeric" }),
      readLabel: ui.blog.minRead[lang].replace("{n}", String(p.read)),
      seed: p.seed,
    }));

  return (
    <>
      <PageHeader title={ui.blog.title[lang]} intro={ui.blog.intro[lang]} />
      <div className="wrap pb-12">
        <BlogExplorer lang={lang} posts={cards} />
      </div>
    </>
  );
}
