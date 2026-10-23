export const locales = ["ar", "en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const sections = [
  "features", "about", "methodology", "privacy", "faq", "contact", "updates",
] as const;
export type Section = (typeof sections)[number];

export const siteUrl = "https://www.mathaba.online";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
export function isSection(value: string): value is Section {
  return (sections as readonly string[]).includes(value);
}
export function sitePath(locale: Locale, section?: Section): string {
  return "/" + locale + (section ? "/" + section : "");
}
export function absoluteUrl(locale: Locale, section?: Section): string {
  return siteUrl + sitePath(locale, section);
}
export function alternateLanguages(section?: Section) {
  return {
    ar: absoluteUrl("ar", section),
    en: absoluteUrl("en", section),
    fr: absoluteUrl("fr", section),
    "x-default": absoluteUrl("ar", section),
  };
}
