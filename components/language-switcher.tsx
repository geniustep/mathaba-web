"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isSection, locales, sitePath, type Locale } from "@/lib/site";

const display: Record<Locale, string> = { ar: "العربية", en: "English", fr: "Français" };

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "";
  const sectionCandidate = pathname.split("/")[2];
  const section = sectionCandidate && isSection(sectionCandidate) ? sectionCandidate : undefined;
  return (
    <nav className="language-picker" aria-label="Language / اللغة">
      {locales.map((item) => (
        <Link key={item} href={sitePath(item, section)} hrefLang={item} lang={item}
          aria-current={item === locale ? "page" : undefined} title={display[item]}>
          {item.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
