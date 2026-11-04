import type { Metadata } from "next";
import { ui } from "@/lib/content";
import { getLang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLang(params);
  return { title: ui.contact.title[lang], description: ui.contact.intro[lang] };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getLang(params);
  const t = ui.contact;

  return (
    <>
      <PageHeader title={t.title[lang]} intro={t.intro[lang]} />
      <section className="wrap grid items-start gap-8 pb-12 lg:grid-cols-[1.3fr_0.7fr]">
        <ContactForm lang={lang} type="contact" />
        <aside className="surface rounded-4xl p-6 sm:p-8">
          <h2 className="title text-xl">{t.reach[lang]}</h2>
          <ul className="mt-5 grid gap-4">
            <li><a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 font-medium"><Icon name="mail" className="text-lamp" />{siteConfig.email}</a></li>
            <li><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 font-medium"><Icon name="phone" className="text-lamp" />{siteConfig.phone}</a></li>
            <li className="flex items-center gap-3 font-medium"><Icon name="pin" className="text-lamp" />{siteConfig.address[lang]}</li>
          </ul>
        </aside>
      </section>
    </>
  );
}
