import type { Metadata } from "next";
import { ui } from "@/lib/content";
import { getLang } from "@/lib/i18n";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLang(params);
  return { title: ui.contact.joinTitle[lang], description: ui.contact.joinIntro[lang] };
}

export default async function JoinPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getLang(params);
  const t = ui.contact;

  return (
    <>
      <PageHeader title={t.joinTitle[lang]} intro={t.joinIntro[lang]} />
      <section className="wrap grid items-start gap-8 pb-12 lg:grid-cols-[1.3fr_0.7fr]">
        <ContactForm lang={lang} type="membership" />
        <ul className="grid gap-4">
          {t.joinPerks.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-lg">
              <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lamp/20 text-lamp"><Icon name="check" size={16} /></span>
              {p[lang]}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
