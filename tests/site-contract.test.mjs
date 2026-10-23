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
