import Image from "next/image";
import Link from "next/link";
import { getCopy } from "@/lib/content";
import { sitePath, type Locale, type Section } from "@/lib/site";
import { developer } from "@/lib/company";

const footerSections: Section[] = ["about", "methodology", "privacy", "faq", "contact", "updates"];

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getCopy(locale);
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-identity">
          <Link href={sitePath(locale)} className="footer-logo">
            <Image src="/brand/logo-symbol.webp" alt="" width={39} height={39} />
            <span>مثابة <span dir="ltr" lang="en">· MATHABA</span></span>
          </Link>
          <p>{t.footerMission}</p>
          <p className="quiet">{t.footerNote}</p>
          <p className="company-credit"><Link href={sitePath(locale, "contact")}>{t.developedBy}</Link> · <span dir="ltr">{developer.registration}</span></p>
        </div>
        <nav className="footer-links" aria-label={t.menu}>
          {footerSections.map((section) => <Link key={section} href={sitePath(locale, section)}>{t.nav[section]}</Link>)}
        </nav>
      </div>
      <div className="footer-bottom">
        <span dir="ltr">© MATHABA · 2026</span>
        <span dir="ltr">www.mathaba.online</span>
      </div>
    </footer>
  );
}
