import { IBM_Plex_Sans_Arabic, DM_Sans } from "next/font/google";

/**
 * Project type pair:
 * Arabic UI — IBM Plex Sans Arabic; French/English UI — DM Sans.
 * Fonts are downloaded during the build and self-hosted by Next.js.
 * Never replace the original logo artwork with typeset text.
 */
export const arabicFont = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-mathaba-arabic",
  display: "swap",
  preload: false,
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

export const latinFont = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mathaba-latin",
  display: "swap",
  preload: false,
  fallback: ["Arial", "sans-serif"],
});
