import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCopy } from "@/lib/content";
import { seoMetadata } from "@/lib/seo";
import { isLocale, locales, sitePath } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return seoMetadata(locale);
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  return (
    <main id="main">
      <div className="container">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />{t.heroKicker}</div>
            <h1 id="hero-title">{t.heroTitle} <em>{t.heroAccent}</em></h1>
            <p className="hero-lead">{t.heroText}</p>
            <div className="hero-cta">
              <Link className="button button-primary" href={sitePath(locale, "features")}>{t.explore}<span aria-hidden="true">↗</span></Link>
              <Link className="button button-link" href={sitePath(locale, "methodology")}>{t.methodologyLink}<span aria-hidden="true">←</span></Link>
            </div>
            <p className="notice"><span aria-hidden="true">◌</span> {t.heroNote}</p>
          </div>
          <div className="hero-art">
            <div className="art-orbit orbit-one" aria-hidden="true" />
            <div className="art-orbit orbit-two" aria-hidden="true" />
            <div className="art-card">
              <Image src="/brand/logo-primary.webp" alt={locale === "ar" ? "الشعار الرسمي لمثابة" : "Official Mathaba logo"} width={440} height={440} className="hero-logo" priority />
            </div>
          </div>
        </section>
        <section className="commitments" aria-labelledby="commitment-title">
          <h2 id="commitment-title">{t.commitmentsTitle}</h2>
          <div className="commitment-list">
            {t.commitments.map((text) => <span key={text}><span aria-hidden="true" className="tiny-star">✧</span>{text}</span>)}
          </div>
        </section>
        <section className="section feature-section" aria-labelledby="features-title">
          <div className="section-header">
            <p className="overline">{t.featuresKicker}</p>
            <h2 id="features-title">{t.featuresTitle}</h2>
            <p className="muted">{t.featuresIntro}</p>
          </div>
          <div className="feature-grid">
            {t.cards.map((card) => (
              <article className="feature-card" key={card.number}>
                <span className="feature-num">{card.number} /</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <span className="feature-tag">{card.status}</span>
              </article>
            ))}
          </div>
        </section>
        <section className="global-panel" aria-labelledby="global-title">
          <div className="global-sigil" aria-hidden="true">✧</div>
          <div>
            <p className="overline overline-light">MATHABA · GLOBAL BY DESIGN</p>
            <h2 id="global-title">{t.globalTitle}</h2>
            <p>{t.globalBody}</p>
          </div>
        </section>
        <section className="ethics-section" aria-labelledby="ethics-title">
          <div>
            <p className="overline">TRUST & TRANSPARENCY</p>
            <h2 id="ethics-title">{t.transparencyTitle}</h2>
            <p>{t.transparencyText}</p>
          </div>
          <Link className="button button-outline" href={sitePath(locale, "methodology")}>{t.transparencyCta}<span aria-hidden="true">↗</span></Link>
        </section>
      </div>
    </main>
  );
}
