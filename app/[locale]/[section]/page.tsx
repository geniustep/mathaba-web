import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCopy } from "@/lib/content";
import { developer } from "@/lib/company";
import { seoMetadata } from "@/lib/seo";
import { isLocale, isSection, locales, sections, sitePath } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((locale) => sections.map((section) => ({ locale, section })));
}
type Route = { params: Promise<{ locale: string; section: string }> };

export async function generateMetadata({ params }: Route): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isLocale(locale) || !isSection(section)) notFound();
  return seoMetadata(locale, section);
}

export default async function InformationPage({ params }: Route) {
  const { locale, section } = await params;
  if (!isLocale(locale) || !isSection(section)) notFound();
  const t = getCopy(locale);
  const page = t.pages[section];
  const isFAQ = section === "faq";
  return (
    <main id="main" className="subpage">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href={sitePath(locale)}>{t.brand}</Link><span aria-hidden="true">/</span><span aria-current="page">{t.nav[section]}</span>
        </nav>
        <div className="page-intro">
          <p className="overline">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.lead}</p>
        </div>
        {section === "contact" ? null : isFAQ ? (
          <div className="faq-list">
            {page.items.map((item, index) => (
              <details key={item.title} className="faq-entry" open={index === 0}>
                <summary>{item.title}<span aria-hidden="true">+</span></summary>
                <p>{item.body}</p>
              </details>
            ))}
          </div>
        ) : (
          <div className="detail-grid">
            {page.items.map((item, index) => (
              <article className="detail-card" key={item.title}>
                <span className="detail-index">{String(index + 1).padStart(2, "0")}</span>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        )}
        {page.note && <aside className="page-note">{page.note}</aside>}
        {section === "methodology" && (
          <div className="reference-links">
            <a href="https://tanzil.net/" target="_blank" rel="noopener noreferrer">Tanzil Quran Text ↗</a>
            <a href="https://pub.dev/packages/adhan_dart" target="_blank" rel="noopener noreferrer">adhan_dart ↗</a>
          </div>
        )}
        {section === "contact" && (
          <section className="company-contact" aria-label={t.companyContactTitle}>
            <dl className="company-facts">
              <div><dt>{t.companyEmailLabel}</dt><dd><a href={`mailto:${developer.email}`} dir="ltr">{developer.email}</a></dd></div>
              <div><dt>{t.companyPhoneLabel}</dt><dd><a href={`tel:${developer.phone}`} dir="ltr">{developer.phoneDisplay}</a></dd></div>
              <div><dt>{t.companyWebsitesLabel}</dt><dd>
                <div className="company-websites">
                  {developer.websites.map((url) => (
                    <a key={url} href={url} dir="ltr" lang="en" target="_blank" rel="noopener noreferrer">
                      {new URL(url).hostname} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </dd></div>
            </dl>
          </section>
        )}
        {section === "privacy" && (
          <div className="privacy-email"><span>{t.companyEmailLabel}: </span><a href={`mailto:${developer.email}`} dir="ltr">{developer.email}</a></div>
        )}
        <div className="back-navigation"><Link href={sitePath(locale)}>{t.backHome} <span aria-hidden="true">↗</span></Link></div>
      </div>
    </main>
  );
}
