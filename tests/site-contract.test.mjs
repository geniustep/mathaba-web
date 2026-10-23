import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const text = (file) => readFileSync(new URL("../" + file, import.meta.url), "utf8");

test("all informational site routes and locale variants are statically declared", () => {
  const site = text("lib/site.ts");
  for (const locale of ["ar", "en", "fr"]) assert.match(site, new RegExp('"' + locale + '"'));
  for (const section of ["features", "about", "methodology", "privacy", "faq", "contact", "updates"]) {
    assert.match(site, new RegExp('"' + section + '"'));
  }
  assert.equal(existsSync(new URL("../app/[locale]/[section]/page.tsx", import.meta.url)), true);
});

test("public SEO paths and canonical follow actual Vercel domain", () => {
  assert.match(text("lib/site.ts"), /https:\/\/www\.mathaba\.online/);
  assert.match(text("app/sitemap.ts"), /alternateLanguages/);
  assert.match(text("app/robots.ts"), /allow: "\/"/);
  assert.doesNotMatch(text("app/robots.ts"), /disallow: "\/"/);
  assert.match(text("lib/seo.ts"), /canonical: url/);
});

test("release disclaimers and protected branding remain in source", () => {
  const content = text("lib/content.ts");
  assert.match(content, /رواية ورش لم تُعتمد/);
  assert.match(content, /not official/);
  assert.match(content, /non officiel/);
  assert.match(content, /100 اختبار/);
  assert.match(content, /100 passing tests/);
  assert.equal(existsSync(new URL("../public/brand/logo-primary.webp", import.meta.url)), true);
  assert.equal(existsSync(new URL("../public/brand/logo-symbol.webp", import.meta.url)), true);
});

test("no fake newsletter form or promotional analytics", () => {
  const routes = text("app/[locale]/page.tsx") + text("app/[locale]/[section]/page.tsx");
  assert.doesNotMatch(routes, /<form\b/);
  assert.doesNotMatch(routes, /gtag\(|fbq\(/);
});

test("Arabic and Latin families are self-hosted and script-aware", () => {
  const fonts = text("lib/fonts.ts");
  assert.match(fonts, /IBM_Plex_Sans_Arabic/);
  assert.match(fonts, /DM_Sans/);
  assert.match(fonts, /from "next\/font\/google"/);
  assert.match(fonts, /display: "swap"/);
  const css = text("app/globals.css");
  assert.match(css, /--font-mathaba-arabic/);
  assert.match(css, /--font-mathaba-latin/);
  for (const layout of ["app/(root)/layout.tsx", "app/[locale]/layout.tsx"]) {
    const code = text(layout);
    assert.match(code, /arabicFont\.variable/);
    assert.match(code, /latinFont\.variable/);
  }
});

test("public Genius Step developer details remain consistent", () => {
  const company = text("lib/company.ts");
  assert.match(company, /Genius Step/);
  assert.match(company, /geniustep\.com/);
  assert.match(company, /geniustep\.ma/);
  assert.match(company, /\+212661339892/);
  const contact = text("app/[locale]/[section]/page.tsx");
  assert.match(contact, /tel:\$\{developer\.phone\}/);
  assert.match(contact, /companyContactTitle/);
  const footer = text("components/site-footer.tsx");
  assert.match(footer, /t\.developedBy/);
  const schema = text("app/[locale]/layout.tsx");
  assert.match(schema, /siteUrl \+ "\/#developer"/);
  assert.match(schema, /developer\.phone/);
});

test("Mathaba contact email is consistently published without cross-project address", () => {
  const company = text("lib/company.ts");
  const content = text("lib/content.ts");
  const contact = text("app/[locale]/[section]/page.tsx");
  const footer = text("components/site-footer.tsx");
  const structured = text("app/[locale]/layout.tsx");
  assert.match(company, /contact@mathaba\.online/);
  for (const localeCopy of ["البريد الإلكتروني", "Email address", "Courriel"]) {
    assert.ok(content.includes(localeCopy));
  }
  assert.equal((content.match(/contact@mathaba\.online/g) || []).length, 3);
  assert.doesNotMatch(content, /contact@raqeem\.ma/);
  assert.match(contact, /mailto:\$\{developer\.email\}/);
  assert.match(footer, /mailto:\$\{developer\.email\}/);
  assert.match(structured, /email: developer\.email/);
});

test("private, old and unapproved contact fields are excluded from all published sources", () => {
  const published = [
    "lib/company.ts", "lib/content.ts", "app/[locale]/layout.tsx",
    "app/[locale]/[section]/page.tsx", "components/site-footer.tsx", "README.md"
  ].map(text).join("\n");
  for (const forbidden of [
    "66039", "000210358000072", "620976497",
    "Rue 40", "Lot 271", "Aouama", "Genius Step SARL",
    "developer.registration", "developer.postalAddress",
    "contact@raqeem.ma"
  ]) assert.ok(!published.includes(forbidden), "Unexpected restricted field in current source");
});
