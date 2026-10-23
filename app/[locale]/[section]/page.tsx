import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCopy } from "@/lib/content";
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
        {isFAQ ? (
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
          <div className="contact-action">
            <a className="button button-primary" href="https://github.com/geniustep/mathaba-web/issues/new" target="_blank" rel="noopener noreferrer">{t.publicIssue}<span aria-hidden="true">↗</span></a>
            <p>{t.publicIssueNote}</p>
          </div>
        )}
        <div className="back-navigation"><Link href={sitePath(locale)}>{t.backHome} <span aria-hidden="true">↗</span></Link></div>
      </div>
    </main>
  );
}
