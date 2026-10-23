import Image from "next/image";
import Link from "next/link";
import { getCopy } from "@/lib/content";
import { sitePath, type Locale, type Section } from "@/lib/site";
import { LanguageSwitcher } from "./language-switcher";

const headerSections: Section[] = ["features", "about", "methodology", "updates", "faq", "contact"];

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getCopy(locale);
  return (
    <header className="site-header">
      <div className="header-main">
        <Link className="brand-link" href={sitePath(locale)} aria-label={t.brand}>
          <Image src="/brand/logo-symbol.webp" width={50} height={50} alt="" priority />
          <span className="brand-word">{t.brand}</span>
          <span className="brand-latin" dir="ltr">MATHABA</span>
        </Link>
        <nav className="desktop-nav" aria-label={t.menu}>
          {headerSections.map((section) => <Link key={section} href={sitePath(locale, section)}>{t.nav[section]}</Link>)}
        </nav>
        <LanguageSwitcher locale={locale} />
        <details className="mobile-nav">
          <summary>{t.menu}<span aria-hidden="true">☰</span></summary>
          <nav aria-label={t.menu}>
            {headerSections.map((section) => <Link key={section} href={sitePath(locale, section)}>{t.nav[section]}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
