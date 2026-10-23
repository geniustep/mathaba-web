import type { MetadataRoute } from "next";
import { absoluteUrl, alternateLanguages, locales, sections } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [undefined, ...sections] as const;
  return locales.flatMap((locale) =>
    paths.map((section) => ({
      url: absoluteUrl(locale, section),
      changeFrequency: section === "updates" ? "weekly" as const : "monthly" as const,
      priority: section === undefined ? 1 : section === "updates" ? 0.6 : 0.7,
      alternates: { languages: alternateLanguages(section) },
    })),
  );
}
