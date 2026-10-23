import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { locales, isLocale, siteUrl } from "@/lib/site";
import { developer } from "@/lib/company";
import "../globals.css";
import { arabicFont, latinFont } from "@/lib/fonts";

export const dynamicParams = false;
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function LocaleLayout({
  children, params,
}: {
  children: ReactNode; params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const structured = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization", "@id": siteUrl + "/#developer",
        name: developer.name,
        legalName: developer.legalName,
        email: developer.email,
        telephone: developer.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: developer.postalAddress.street,
          addressLocality: developer.postalAddress.city,
          postalCode: developer.postalAddress.postalCode,
          addressCountry: "MA",
        },
        description: "Independent developer of the Mathaba Islamic companion.",
      },
      {
        "@type": "WebSite", name: "Mathaba | مثابة", url: siteUrl,
        publisher: { "@id": siteUrl + "/#developer" },
        inLanguage: ["ar", "en", "fr"],
      },
    ],
  };
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={`${arabicFont.variable} ${latinFont.variable}`}>
      <body>
        <a className="skip-link" href="#main"> {locale === "ar" ? "تجاوز إلى المحتوى" : locale === "fr" ? "Aller au contenu" : "Skip to content"} </a>
        <SiteHeader locale={locale} />
        {children}
        <SiteFooter locale={locale} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
