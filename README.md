# مثابة | MATHABA Web

الموقع المستقل لمشروع **مثابة** — تطبيق إسلامي عالمي، مجاني، بلا إعلانات، قائم على احترام الخصوصية.

## نطاق العمل

- **المستودع:** `geniustep/mathaba-web`
- **التقنية:** Next.js (App Router) + TypeScript
- **النطاق المخصّص لاحقًا:** `mathaba.online` (مسجّل في Namecheap)
- **الحالة:** أساس موقع وصفحة تعريفية تحضيرية، دون نشر أو ربط Vercel
- **محتوى الواجهة:** عربي، متجاوب؛ توسيع اللغات والمحتوى لاحقًا وفق القرار المعتمد

## الشعار الرسمي

النُسخ الموجودة هنا مطابقة *بايتًا ببايت* للأصول المعتمدة في مستودع Flutter `geniustep/MATHABA`، فرع `dev`:

| ملف الموقع | مصدر Flutter |
| --- | --- |
| `public/brand/logo-primary.webp` | `assets/brand/logo-primary.webp` |
| `public/brand/logo-symbol.webp` | `assets/brand/logo-symbol.webp` |
| `app/icon.png` | `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png` |

**لا تُعد رسم الشعار أو تغيّر نسبه أو ألوانه** دون اعتماد صريح. مرجع الهوية: `MATHABA/docs/BRAND_IDENTITY_AR.md`.

## التشغيل المحلي

يتطلب Node.js 22 أو أحدث (أو نسخة مدعومة من Next.js 16).

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## بوابة الإطلاق

1. لا يوجد ربط أو نشر إلى Vercel حتى صدور تعليمات صريحة.
2. الصفحة الحالية تعرض **خطة تطوير** ولا تدّعي أن التطبيق متاح في المتاجر.
3. `robots.ts` و`metadata.robots` يمنعان الفهرسة في هذه المرحلة، ويجب تغييرهما عند اعتماد الإطلاق العام.
4. لم تُضف ملفات أسرار أو مفاتيح API أو تحليلات أو أدوات تتبع.
5. لا تُنسب مواقيت الصلاة المحسوبة إلى جهة رسمية دون تحقق؛ لا يُدّعى دعم رواية ورش قبل اعتماد مصدرها.
