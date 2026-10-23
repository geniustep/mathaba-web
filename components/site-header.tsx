"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCopy } from "@/lib/content";
import { sitePath, type Locale, type Section } from "@/lib/site";
import { LanguageSwitcher } from "./language-switcher";

const primary: Section[] = ["features", "about", "methodology"];
const secondary: Section[] = ["updates", "faq", "privacy"];
const allLinks = [...primary, ...secondary];
const words: Record<Locale, {
  home: string; more: string; open: string; close: string; contact: string;
  discover: string; headline: string; note: string; tagline: string; language: string;
}> = {
  ar: { home: "الرئيسية", more: "المزيد", open: "فتح القائمة", close: "إغلاق القائمة",
    contact: "تواصل معنا", discover: "اكتشف مثابة", headline: "رحلة هادئة، تبدأ من هنا.",
    note: "مثابة للجميع، مجانًا ودون إعلانات.", tagline: "رفيقك في كل يوم", language: "اللغة" },
  en: { home: "Home", more: "More", open: "Open navigation", close: "Close navigation",
    contact: "Get in touch", discover: "Explore Mathaba", headline: "Your calmer journey starts here.",
    note: "A free, ad-free Islamic companion for everyone.", tagline: "For every day", language: "Language" },
  fr: { home: "Accueil", more: "Plus", open: "Ouvrir le menu", close: "Fermer le menu",
    contact: "Nous contacter", discover: "Découvrir Mathaba", headline: "Un chemin plus serein commence ici.",
    note: "Un compagnon islamique gratuit et sans publicité.", tagline: "À vos côtés chaque jour", language: "Langue" },
};

function Arrow() {
  return <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>;
}

function MenuGlyph({ open }: { open: boolean }) {
  return <span className={"nav-menu-glyph" + (open ? " is-open" : "")} aria-hidden="true">
    <span /><span /><span /><span />
  </span>;
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getCopy(locale), ui = words[locale], pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const active = (section?: Section) => pathname === sitePath(locale, section);
  const close = () => { setMoreOpen(false); setMobileOpen(false); };

  useEffect(() => { setMoreOpen(false); setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    if (!moreOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!moreRef.current?.contains(event.target as Node)) setMoreOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMoreOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [moreOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    mobileRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const focusables = mobileRef.current?.querySelectorAll<HTMLElement>("a, button");
      if (!focusables?.length) return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <div className="mathaba-nav">
        <Link href={sitePath(locale)} className="nav-identity" onClick={close}
          aria-label={t.brand + " — " + ui.home}>
          <span className="nav-identity-icon">
            <Image src="/brand/logo-symbol.webp" width={48} height={48} alt="" priority />
          </span>
          <span className="nav-identity-text"><strong>{t.brand}</strong><small>{ui.tagline}</small></span>
        </Link>

        <nav className="nav-center" aria-label={t.menu}>
          <Link className={"nav-main-link" + (active() ? " is-current" : "")}
            href={sitePath(locale)} aria-current={active() ? "page" : undefined}>{ui.home}</Link>
          <span className="nav-separator" aria-hidden="true" />
          {primary.map((section) => (
            <Link key={section} href={sitePath(locale, section)}
              className={"nav-main-link" + (active(section) ? " is-current" : "")}
              aria-current={active(section) ? "page" : undefined}>{t.nav[section]}</Link>
          ))}
          <div className="nav-more" ref={moreRef}>
            <button type="button" className={"nav-more-toggle" + (moreOpen ? " is-current" : "")}
              aria-controls="mathaba-more" aria-expanded={moreOpen}
              onClick={() => setMoreOpen(value => !value)}>
              {ui.more}<span className={"nav-chevron" + (moreOpen ? " is-up" : "")} aria-hidden="true">⌄</span>
            </button>
            {moreOpen && (
              <nav id="mathaba-more" className="nav-more-popover" aria-label={ui.more}>
                {secondary.map((section) => (
                  <Link key={section} href={sitePath(locale, section)} onClick={close}
                    className={"nav-more-link" + (active(section) ? " is-current" : "")}
                    aria-current={active(section) ? "page" : undefined}>
                    {t.nav[section]}<Arrow />
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </nav>

        <div className="nav-actions">
          <div className="nav-desktop-languages"><LanguageSwitcher locale={locale} /></div>
          <Link href={sitePath(locale, "contact")} className="nav-contact"
            aria-current={active("contact") ? "page" : undefined}>{ui.contact}<Arrow /></Link>
        </div>

        <button type="button" ref={triggerRef} className="nav-mobile-trigger"
          aria-label={mobileOpen ? ui.close : ui.open} aria-expanded={mobileOpen}
          aria-controls="mathaba-mobile-menu"
          onClick={() => { setMobileOpen(value => !value); setMoreOpen(false); }}>
          <MenuGlyph open={mobileOpen} />
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile-layer">
          <button type="button" className="nav-mobile-scrim" tabIndex={-1}
            aria-label={ui.close} onClick={() => { setMobileOpen(false); triggerRef.current?.focus(); }} />
          <nav ref={mobileRef} className="nav-mobile-card" id="mathaba-mobile-menu"
            aria-label={t.menu}>
            <div className="nav-mobile-heading">
              <span className="nav-mobile-eyebrow">✧ {ui.discover}</span>
              <h2>{ui.headline}</h2>
            </div>
            <div className="nav-mobile-links">
              <Link href={sitePath(locale)} onClick={close}
                className={"nav-mobile-link" + (active() ? " is-current" : "")}
                aria-current={active() ? "page" : undefined}>
                <span className="nav-mobile-count">00</span><span>{ui.home}</span><Arrow />
              </Link>
              {allLinks.map((section, index) => (
                <Link key={section} href={sitePath(locale, section)} onClick={close}
                  className={"nav-mobile-link" + (active(section) ? " is-current" : "")}
                  aria-current={active(section) ? "page" : undefined}>
                  <span className="nav-mobile-count">{String(index + 1).padStart(2, "0")}</span>
                  <span>{t.nav[section]}</span><Arrow />
                </Link>
              ))}
            </div>
            <div className="nav-mobile-bottom">
              <Link href={sitePath(locale, "contact")} onClick={close}
                className="nav-mobile-contact">{ui.contact}<Arrow /></Link>
              <div className="nav-mobile-language">
                <span>{ui.language}</span><LanguageSwitcher locale={locale} />
              </div>
              <p>{ui.note}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
