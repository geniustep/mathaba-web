import type { ReactNode } from "react";
import "../globals.css";
import { arabicFont, latinFont } from "@/lib/fonts";

export default function RootRedirectLayout({ children }: { children: ReactNode }) {
  return <html lang="ar" dir="rtl" className={`${arabicFont.variable} ${latinFont.variable}`}><body>{children}</body></html>;
}
