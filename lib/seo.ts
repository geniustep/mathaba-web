import type { Metadata } from "next";
import { absoluteUrl, alternateLanguages, type Locale, type Section, siteUrl } from "./site";
import { getCopy } from "./content";

export function seoMetadata(locale: Locale, section?: Section): Metadata {
  const t = getCopy(locale);
  const title = section ? t.pages[section].title + " | " + t.brand : t.brand + " | MATHABA";
  const description = section ? t.pages[section].lead : t.heroText;
  const url = absoluteUrl(locale, section);
  return {
    metadataBase: new URL(siteUrl),
    title, description, applicationName: "Mathaba",
    alternates: {
      canonical: url,
      languages: alternateLanguages(section),
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website", url, siteName: "Mathaba | مثابة",
      title, description, locale: locale === "ar" ? "ar" : locale,
      images: [{ url: "/brand/logo-primary.webp", alt: "Mathaba — مثابة" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/brand/logo-primary.webp"] },
    icons: { icon: "/icon.png" },
  };
}
