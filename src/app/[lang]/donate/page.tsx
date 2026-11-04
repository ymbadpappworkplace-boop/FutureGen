import type { Metadata } from "next";
import { ui } from "@/lib/content";
import { getLang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { DonateWidget } from "@/components/DonateWidget";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLang(params);
  return { title: ui.donate.title[lang], description: ui.donate.intro[lang] };
}

export default async function DonatePage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getLang(params);
  const t = ui.donate;
  const bank = [
    { l: t.labels.accountName[lang], v: siteConfig.bank.accountName },
    { l: t.labels.bank[lang], v: siteConfig.bank.bank },
    { l: t.labels.branch[lang], v: siteConfig.bank.branch },
    { l: t.labels.accountNo[lang], v: siteConfig.bank.accountNo },
  ];

  return (
    <>
      <PageHeader title={t.title[lang]} intro={t.intro[lang]} />
      <section className="wrap grid items-start gap-6 pb-10 lg:grid-cols-[1.1fr_0.9fr]">
        <DonateWidget lang={lang} />

        <div id="bank" className="surface scroll-mt-28 rounded-4xl p-6 sm:p-8">
          <h2 className="title text-2xl">{t.bankTitle[lang]}</h2>
          <dl className="mt-5 divide-y divide-line">
            {bank.map((b) => (
              <div key={b.l} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3">
                <dt className="text-muted">{b.l}</dt>
                <dd className="font-semibold tabular-nums">{b.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-sm text-muted">{t.bankNote[lang]}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="display text-3xl sm:text-4xl">{t.usesTitle[lang]}</h2>
          <ul className="mt-8 grid border-t border-line md:grid-cols-3">
            {t.uses.map((u, i) => (
              <li key={i} className="border-b border-line py-8 md:pr-8">
                <h3 className="title text-xl">{u.title[lang]}</h3>
                <p className="mt-2 text-muted">{u.text[lang]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
