import type { Locale, Section } from "./site";

type Item = { title: string; body: string };
type Detail = { eyebrow: string; title: string; lead: string; items: Item[]; note?: string };
export type SiteCopy = {
  brand: string; menu: string; nav: Record<Section, string>;
  status: string; heroKicker: string; heroTitle: string; heroAccent: string;
  heroText: string; explore: string; methodologyLink: string; heroNote: string;
  commitmentsTitle: string; commitments: string[];
  featuresKicker: string; featuresTitle: string; featuresIntro: string;
  cards: { number: string; title: string; body: string; status: string }[];
  globalTitle: string; globalBody: string;
  transparencyTitle: string; transparencyText: string; transparencyCta: string;
  footerMission: string; footerNote: string; backHome: string;
  publicIssue: string; publicIssueNote: string;
  developedBy: string; companyContactTitle: string; companyPhoneLabel: string; companyEmailLabel: string; companyAddressLabel: string; companyRegistryLabel: string;
  pages: Record<Section, Detail>;
};

export const translations: Record<Locale, SiteCopy> = {
  ar: {
    brand: "مثابة", menu: "القائمة",
    nav: { features:"المزايا",about:"عن مثابة",methodology:"المنهجية والمصادر",privacy:"الخصوصية",faq:"الأسئلة الشائعة",contact:"التواصل",updates:"المستجدات" },
    status:"المشروع قيد التطوير",
    heroKicker:"مَثَابَة · MATHABA",
    heroTitle:"رفيقك للعبادة والمعرفة،",
    heroAccent:"أينما كنت.",
    heroText:"مساحة رقمية هادئة تجمع مواقيت الصلاة والقرآن والذكر، تُبنى منذ البداية لخدمة المسلمين في مختلف أنحاء العالم، مع احترام اختلاف البلدان واللغات.",
    explore:"تعرّف إلى مثابة", methodologyLink:"كيف نتحقق من المحتوى؟",
    heroNote:"النسخة التجريبية قيد الاختبار. لم يُعلن عن إصدار عام للتنزيل بعد.",
    commitmentsTitle:"مبادئ لا نتنازل عنها",
    commitments:["مجاني بالكامل","بلا إعلانات أو اشتراكات","لا حساب إلزاميًا","الخصوصية أولًا"],
    featuresKicker:"تجربة هادئة",featuresTitle:"ما الذي نبنيه؟",
    featuresIntro:"نعرض قدرات النسخة التطويرية وحدودها بشفافية؛ ظهور ميزة هنا لا يعني أنها منشورة للجمهور.",
    cards:[
      {number:"01",title:"أوقات الصلاة",body:"حساب على الجهاز بعدة طرق ومدن. ما زالت مطابقة الجداول الرسمية واختبارات الأجهزة قيد العمل.",status:"تجريبي · ليس جدولًا رسميًا"},
      {number:"02",title:"القرآن الكريم",body:"مصحف عثماني برواية حفص مع علامات القراءة والختمة. رواية ورش لم تُعتمد بعد.",status:"حفص تجريبي · ورش غير متاح"},
      {number:"03",title:"الذكر والدعاء",body:"أدعية قرآنية وأذكار منتقاة، مع متابعة مراجعة مصادرها وتخريجها.",status:"محتوى قيد المراجعة"},
      {number:"04",title:"القبلة والتقويم",body:"اتجاه القبلة وتقويم هجري حسابي؛ يحتاج سلوك المستشعرات والتنبيهات إلى تحقق على أجهزة حقيقية.",status:"اختبارات ميدانية مطلوبة"}
    ],
    globalTitle:"لكل مسلم، أينما كان.",
    globalBody:"تُبنى مثابة لبلدان ولغات متعددة منذ اليوم الأول، مع احترام طرق حساب مواقيت الصلاة والمرجعيات المحلية، دون افتراض أن طريقة واحدة تناسب الجميع.",
    transparencyTitle:"الموثوقية قبل الإعلان",transparencyText:"نفرّق بين الحساب الفلكي والجداول الرسمية، وبين ما اجتاز الاختبارات التقنية وما يحتاج إلى مراجعة علمية أو ميدانية.",transparencyCta:"اقرأ منهجيتنا",
    footerMission:"مبادرة إسلامية رقمية عالمية، مجانية وخالية من الإعلانات.",
    footerNote:"الموقع تعريفي، والتطبيق لم يصدر للجمهور بعد.",backHome:"العودة إلى الرئيسية",
    developedBy:"من تطوير شركة Genius Step SARL",companyContactTitle:"الجهة المطوّرة والتواصل",companyPhoneLabel:"هاتف الشركة",companyEmailLabel:"البريد الإلكتروني", companyAddressLabel:"العنوان المهني",companyRegistryLabel:"التسجيل التجاري",
    publicIssue:"الإبلاغ عن مشكلة تقنية عبر GitHub",
    publicIssueNote:"هذا الرابط يفتح بلاغًا عامًا يراه الجميع، ويستلزم حساب GitHub. لا تضع فيه بيانات شخصية أو معلومات سرية.",
    pages:{
      features:{eyebrow:"المنتج",title:"المزايا وحالة الجاهزية",lead:"هذا وصف صريح للنسخة التطويرية من مثابة، وليس وعدًا بموعد إطلاق أو إثباتًا لاعتماد جميع المحتويات.",items:[
        {title:"المواقيت",body:"تُحسب محليًا بطرق مختلفة. لم تُستكمل المطابقة مع الجداول الرسمية في المغرب أو البلدان الأخرى. الاختيارات المحلية لا تعني اعتمادًا رسميًا."},
        {title:"المصحف",body:"النص العثماني برواية حفص مع أدوات القراءة والختمة. رواية ورش ما زالت تنتظر مراجعة علمية وحسم حقوق المصدر، ولا تُعرض بوصفها جاهزة."},
        {title:"الأذكار والقبلة",body:"المحتوى القرآني والقبلة والتنبيهات منجز تقنيًا بدرجات مختلفة؛ المراجعة الدينية واختبارات المستشعرات والتنبيهات على الهواتف لم تكتمل."},
        {title:"لغات وخصوصية",body:"واجهة التطوير بالعربية والإنجليزية والفرنسية. يعتمد التطبيق المخصص للإصدار على تخزين محلي دون حساب إجباري، ويخضع لفحوص ما قبل النشر."}
      ],note:"لا يتوفر حتى الآن رابط تنزيل عام معتمد للتطبيق."},
      about:{eyebrow:"الرؤية",title:"ما هي مثابة؟",lead:"مثابة مشروع مستقل لبناء رفيق إسلامي هادئ ومتاح للجميع، يستهدف النفع لا جذب الانتباه أو استغلال البيانات.",items:[
        {title:"عالمي منذ التأسيس",body:"مثابة من إنجاز Genius Step SARL بالمغرب، لكن المشروع عالمي منذ البداية. لا تُقدَّم تجربة بلد باعتبارها المعيار الوحيد؛ تتطلب الاختلافات المحلية في المواقيت واللغة والتقويم تعاملًا مسؤولًا."},
        {title:"هدوء دون منافسة",body:"لا نقاط للعبادة ولا سباقات بين المستخدمين؛ الفكرة هي المساندة اللطيفة للقراءة والذكر وتنظيم اليوم."},
        {title:"وعد المجانية",body:"الهدف تطبيق مجاني، بلا إعلانات ولا اشتراكات أو حسابات إلزامية. لا ندّعي أن الإصدار متاح في المتاجر قبل استكمال بوابات الإطلاق."}
      ]},
      methodology:{eyebrow:"الثقة",title:"المنهجية والمصادر",lead:"المحتوى الديني يحتاج إلى دقة وإفصاح عن مصدره، لا إلى عبارات تسويقية توحي بتوثيق لم يحدث.",items:[
        {title:"مواقيت الصلاة",body:"تُحسب فلكيًا بواسطة مكتبة adhan_dart، ويُعرض أساس الحساب داخل التطبيق. لا يُوصف الميقات بأنه رسمي قبل مقارنته بمصدر معتمد للبلد المعني."},
        {title:"المصحف",body:"النص العثماني التجريبي برواية حفص مصدره Tanzil مع احترام الإسناد وشروط إعادة الاستخدام. ورش ليست جزءًا معتمدًا من الإصدار الحالي."},
        {title:"الأدعية والأذكار",body:"المحتوى القرآني يُحفظ بنصه ومصدره، والمحتوى الآخر لا يُعتمد قبل توثيق المصدر ومراجعته علميًا."},
        {title:"التقويم الهجري",body:"حساب تقريبي لا يحل محل الإعلان الرسمي لرؤية الهلال في بلد المستخدم."},
        {title:"اختبارات الإطلاق",body:"النجاح الآلي لا يغني عن التحقق الميداني من الأجهزة، ومراجعة الترخيص واللغات، والمطابقة مع الجداول الرسمية."}
      ],note:"المراجع: Tanzil Quran Text (tanzil.net) و adhan_dart. لا نعيد نشر نصوص المصادر أو الصور التي لم يُحسم ترخيصها."},
      privacy:{eyebrow:"الثقة",title:"الخصوصية",lead:"نميز هنا بين هذا الموقع التعريفي وبين تطبيق الهاتف الذي لا يزال قبل الإطلاق. آخر مراجعة تحريرية: 23 أكتوبر 2026.",items:[
        {title:"الموقع الإلكتروني",body:"تدير شركة Genius Step SARL هذا الموقع التعريفي. لا تتضمن شيفرته إعلانات أو أدوات قياس تسويقي أو نموذج جمع بريد إلكتروني. عند زيارة الموقع، تعالج خدمات الاستضافة والتوصيل (Vercel وموفر DNS) بيانات تقنية لازمة لتقديم الصفحة، وقد تشمل عنوان IP وسجل الطلب، وفق سياساتها."},
        {title:"ملفات تعريف الارتباط",body:"لا ينشئ الموقع حاليًا حسابات للمستخدمين أو ملفات تعريف تسويقية، ولا يضع آلية اشتراك بريدي. قد تتغير المتطلبات إذا أضفنا خدمات مستقبلًا، وعندئذٍ سنوضحها قبل تفعيلها."},
        {title:"تطبيق الهاتف المرتقب",body:"التصميم الحالي يعتمد الإعدادات والعلامات على الجهاز، دون حساب إجباري أو تتبع إعلاني. الموقع التقريبي واختيار التنبيهات اختياريان. هذه خصائص نسخة تطويرية لا إعلان إصدار."},
        {title:"التحكم والتحديثات",body:"لا ترسل معلومات شخصية من خلال بلاغات GitHub العامة. ستُحدّث هذه الصفحة عند تفعيل أي وسيلة تواصل أو خدمة تجمع بيانات، وبعد مراجعة سياسة التطبيق قانونيًا قبل نشره."}
      ],note:"هذه معلومات عن الوضع التقني الحالي وليست وعدًا بشأن سياسات موفري البنية التحتية أو مدد الاحتفاظ بسجلاتهم."},
      faq:{eyebrow:"مساعدة",title:"أسئلة شائعة",lead:"إجابات واضحة عن المشروع وحالته الفعلية.",items:[
        {title:"هل مثابة متاحة للتنزيل الآن؟",body:"ليس هناك إصدار عام معتمد بعد. نسخة Flutter تجريبية، ولا ننشر روابط متاجر أو APK على هذا الموقع حتى إغلاق بوابات الإطلاق."},
        {title:"هل التطبيق مجاني؟",body:"نعم، مثابة مبادرة مخطط لها أن تبقى مجانية، بلا إعلانات أو اشتراكات أو حسابات إلزامية."},
        {title:"هل مواقيت الصلاة رسمية؟",body:"لا. المواقيت في النسخة التطويرية محسوبة فلكيًا؛ مقارنة الجداول الرسمية المحلية ما زالت قيد العمل."},
        {title:"هل توجد رواية ورش؟",body:"لم تُعتمد بعد؛ النص المتاح في النسخة التطويرية هو المصحف العثماني برواية حفص."},
        {title:"ما اللغات المستهدفة؟",body:"العربية والإنجليزية والفرنسية ضمن تجربة الموقع والنسخة التطويرية للتطبيق، مع الحاجة إلى مراجعة لغوية قبل الإطلاق."},
        {title:"هل سيطلب التطبيق حسابًا؟",body:"لا حساب إلزاميًا ضمن التصميم الحالي، والبيانات الأساسية محلية على الجهاز."}
      ]},
      contact:{eyebrow:"التواصل",title:"التواصل والاقتراحات",lead:"مثابة من تطوير شركة Genius Step SARL المغربية. تتوفر بيانات اتصال الشركة أدناه، ويمكن الإبلاغ عن المشكلات التقنية العامة عبر GitHub.",items:[
        {title:"بلاغات تقنية عامة",body:"يمكن فتح مشكلة في المستودع العام mathaba-web على GitHub. يحتاج ذلك إلى حساب، ويكون وصف المشكلة متاحًا للعموم."},
        {title:"الخصوصية أولًا",body:"لا تُرسل أرقام الهواتف أو بيانات الحسابات أو تفاصيل شخصية أو معلومات أمنية حساسة عبر البلاغات العامة."},
        {title:"البريد الإلكتروني",body:"يمكن التواصل بشأن مثابة على العنوان contact@mathaba.online، وهو مستقل عن بريد مشروع رقيم."}
      ]},
      updates:{eyebrow:"مستجدات",title:"رحلة التطوير",lead:"ملخصات واقعية لا تُعدّ وعودًا بمواعيد إطلاق.",items:[
        {title:"23 أكتوبر 2026 · الموقع",body:"تأسيس الموقع التعريفي الرسمي وتطوير الهوية العالمية والصفحات المعلوماتية بثلاث لغات."},
        {title:"23 أكتوبر 2026 · التطبيق",body:"توضح تقارير Flutter إنجاز 100 اختبار آلي وواجهة بثلاث لغات. ما زالت الاختبارات الميدانية والمواقيت الرسمية والمراجعات العلمية والتوقيع متطلبات مفتوحة."},
        {title:"ما الخطوة القادمة؟",body:"استكمال التحقق الديني والتقني واختبارات الأجهزة، ثم اتخاذ قرار مستقل بموعد الإطلاق دون وعود مسبقة."}
      ],note:"تُحرر هذه الصفحة يدويًا وفق الأدلة، ولا تمثل تغذية تلقائية من إصدار التطبيق."}
    }
  },
  en: {
    brand:"Mathaba",menu:"Menu",
    nav:{features:"Features",about:"About",methodology:"Method & sources",privacy:"Privacy",faq:"FAQ",contact:"Contact",updates:"Updates"},
    status:"In development",heroKicker:"MATHABA · مَثَابَة",heroTitle:"A thoughtful companion for faith,",
    heroAccent:"wherever you are.",heroText:"A calm digital space for prayer times, the Quran and remembrance. Built from day one for Muslims across countries and languages.",
    explore:"Discover Mathaba",methodologyLink:"How we verify content",heroNote:"The app is in testing. No public download has been announced.",
    commitmentsTitle:"Our guiding principles",commitments:["Free for everyone","No ads or subscriptions","No mandatory account","Privacy by design"],
    featuresKicker:"A calmer experience",featuresTitle:"What are we building?",
    featuresIntro:"We explain development features and their limits. A feature listed here is not necessarily available to the public.",
    cards:[
      {number:"01",title:"Prayer times",body:"On-device calculation with various methods and cities. Official timetable comparisons and device testing remain open.",status:"Experimental · not official"},
      {number:"02",title:"The Quran",body:"The Uthmani text in Hafs narration, reading markers and a khatmah planner. Warsh is not yet approved.",status:"Hafs in testing · Warsh unavailable"},
      {number:"03",title:"Remembrance",body:"Quranic supplications and selected adhkar, with scholarly source reviews still underway.",status:"Under review"},
      {number:"04",title:"Qibla and calendar",body:"Qibla direction and a calculated Hijri calendar. Device sensors and notifications need real-world testing.",status:"Device checks pending"}
    ],
    globalTitle:"For every Muslim, wherever they are.",
    globalBody:"Mathaba is designed for different countries and languages from the start, respecting local prayer calculation practices rather than imposing one universal method.",
    transparencyTitle:"Accuracy before announcements",transparencyText:"We distinguish computed from officially published prayer times, and automated test results from religious and real-device verification.",transparencyCta:"Our methodology",
    footerMission:"A worldwide Islamic initiative, free and ad-free.",footerNote:"This is an informational website. The app has not launched publicly.",backHome:"Back to home",
    developedBy:"Developed by Genius Step SARL",companyContactTitle:"Developer and company contact",companyPhoneLabel:"Company phone",companyEmailLabel:"Email address", companyAddressLabel:"Business address",companyRegistryLabel:"Company registration",
    publicIssue:"Report a technical issue on GitHub",publicIssueNote:"This opens a public GitHub issue and requires an account. Do not include personal or confidential information.",
    pages:{
      features:{eyebrow:"The app",title:"Features and readiness",lead:"A transparent look at the development build, not a promise of a release date or final approval.",items:[
        {title:"Prayer calculations",body:"Calculated locally using various methods. Official comparisons in Morocco and other countries are incomplete; results must not be presented as certified official times."},
        {title:"Quran reading",body:"The Uthmani text in Hafs narration with bookmarks and reading goals. Warsh awaits scholarly checks and clarification of source rights."},
        {title:"Remembrance and qibla",body:"Different parts are implemented technically, but religious review and physical-device tests for sensors and notifications remain open."},
        {title:"Languages and privacy",body:"The development app includes Arabic, English and French. The intended release keeps core settings locally and does not require an account."}
      ],note:"There is no approved public app download link at this time."},
      about:{eyebrow:"Our purpose",title:"About Mathaba",lead:"An independent effort to create a calm, accessible Islamic companion that helps without monetizing attention or personal data.",items:[
        {title:"Global from the start",body:"Developed by Genius Step SARL in Morocco, Mathaba is international from day one. No single country is the default standard. Prayer methods, calendars and languages require careful local treatment."},
        {title:"A quiet companion",body:"No worship leaderboards or gamification that turns devotion into competition. A gentle aid to reflection and routine."},
        {title:"A free experience",body:"The goal is a fully free experience with no ads, subscriptions or mandatory accounts, once release checks are complete."}
      ]},
      methodology:{eyebrow:"Trust",title:"Methods and sources",lead:"Religious information deserves careful sourcing and honest disclosure of what has and has not been verified.",items:[
        {title:"Prayer times",body:"Calculated using adhan_dart on the device. These are not described as official without comparison against recognized local sources."},
        {title:"Quran",body:"The Hafs Uthmani text comes from Tanzil with attribution and license compliance. Warsh has not been approved for distribution."},
        {title:"Supplications",body:"Quranic texts are preserved with references. Other material requires sourcing and scholarly review."},
        {title:"Hijri dates",body:"Calculated dates are informative and never replace local official moon-sighting announcements."},
        {title:"Release evidence",body:"Automated tests do not replace testing on actual devices, reviewing licenses, translations or official prayer schedules."}
      ],note:"References include Tanzil Quran Text (tanzil.net) and adhan_dart. Unlicensed text or imagery is not republished."},
      privacy:{eyebrow:"Trust",title:"Privacy",lead:"This page distinguishes the website from the still-unreleased mobile app. Editorial review: 23 October 2026.",items:[
        {title:"This website",body:"Genius Step SARL operates this informational website. Its source contains no advertising or marketing analytics, accounts or email capture forms. Hosting and DNS providers, including Vercel, may process operational request information such as IP addresses to deliver the site."},
        {title:"Cookies and subscriptions",body:"There is no marketing profiling or newsletter signup in the current website. Any future data-collecting service will require an updated notice first."},
        {title:"Mobile app in development",body:"The planned release keeps reading progress and preferences on-device, with optional approximate location and notifications. This is a description of a development build, not a published app."},
        {title:"Changes and control",body:"Please do not put private information in public GitHub issues. This notice will be revised before new data-collecting features are enabled and reviewed before the app launches."}
      ],note:"We cannot promise hosting providers' log retention policies or present this page as a completed legal audit."},
      faq:{eyebrow:"Help",title:"Frequently asked questions",lead:"Clear answers about the current project.",items:[
        {title:"Can I download Mathaba now?",body:"No public release is approved. The Flutter app remains in testing, and no store or APK links are offered here."},
        {title:"Is it free?",body:"Yes. Mathaba is planned as a free app without ads, subscriptions or mandatory accounts."},
        {title:"Are prayer times official?",body:"No. They are calculated. Comparisons with official local schedules are not yet complete."},
        {title:"Does it include Warsh?",body:"Not yet. The development text currently supports the Hafs narration."},
        {title:"Which languages?",body:"Arabic, English and French in the website and development build. Editorial translation review remains pending."},
        {title:"Will I need an account?",body:"An account is not required in the current design; core information is kept on-device."}
      ]},
      contact:{eyebrow:"Get in touch",title:"Contact and feedback",lead:"Mathaba is developed by Genius Step SARL in Morocco. The company’s published business contact details appear below, alongside a channel for public technical reports.",items:[
        {title:"Public technical reports",body:"Open an issue in the public mathaba-web GitHub repository. This requires a GitHub account and the contents are publicly visible."},
        {title:"Protect your privacy",body:"Do not share phone numbers, account details or confidential security information in public reports."},
        {title:"Email",body:"For enquiries about Mathaba, use contact@mathaba.online. This address is separate from the Raqeem project."}
      ]},
      updates:{eyebrow:"Progress",title:"Development updates",lead:"Evidence-based milestones, not promises of release dates.",items:[
        {title:"23 October 2026 · Website",body:"Launched the informational foundation and expanded multilingual content and project transparency."},
        {title:"23 October 2026 · Mobile",body:"The Flutter report records 100 passing tests and a three-language interface. Device tests, official prayer-time verification, scholarly review and release signing remain open."},
        {title:"Next steps",body:"Complete technical, religious and device verification before any public launch decision."}
      ],note:"Updates are manually curated from project evidence, not automatically generated from app releases."}
    }
  },
  fr: {
    brand:"Mathaba",menu:"Menu",
    nav:{features:"Fonctionnalités",about:"À propos",methodology:"Méthode et sources",privacy:"Confidentialité",faq:"Questions",contact:"Contact",updates:"Actualités"},
    status:"En développement",heroKicker:"MATHABA · مَثَابَة",heroTitle:"Un compagnon pour la foi,",
    heroAccent:"où que vous soyez.",heroText:"Un espace numérique apaisant pour les horaires de prière, le Coran et le rappel. Pensé dès le départ pour les musulmans du monde entier.",
    explore:"Découvrir Mathaba",methodologyLink:"Notre méthode de vérification",heroNote:"L'application est en phase de test. Aucun téléchargement public n'a été annoncé.",
    commitmentsTitle:"Nos engagements",commitments:["Gratuit pour tous","Sans publicité ni abonnement","Sans compte obligatoire","Respect de la vie privée"],
    featuresKicker:"Une expérience sereine",featuresTitle:"Que construisons-nous ?",
    featuresIntro:"Nous présentons les fonctions en développement et leurs limites. Leur présence ici ne signifie pas qu'elles sont disponibles au public.",
    cards:[
      {number:"01",title:"Horaires de prière",body:"Calcul local selon plusieurs méthodes et villes. Les comparaisons officielles et les tests sur appareils restent à finaliser.",status:"Expérimental · non officiel"},
      {number:"02",title:"Le Coran",body:"Texte outhmani en lecture Hafs, repères de lecture et programme de khatma. La lecture Warsh n'est pas encore approuvée.",status:"Hafs en test · Warsh indisponible"},
      {number:"03",title:"Invocations",body:"Invocations coraniques et rappels sélectionnés, avec vérification scientifique des sources en cours.",status:"Révision en cours"},
      {number:"04",title:"Qibla et calendrier",body:"Direction de la qibla et calendrier hégirien calculé. Les capteurs et notifications nécessitent des tests réels.",status:"Tests sur appareils requis"}
    ],
    globalTitle:"Pour chaque musulman, partout dans le monde.",
    globalBody:"Mathaba est conçu pour différentes langues et régions dès le premier jour, dans le respect des méthodes locales de calcul de la prière.",
    transparencyTitle:"La rigueur avant les annonces",transparencyText:"Nous distinguons les horaires calculés des horaires officiels et les tests automatiques des validations religieuses et pratiques.",transparencyCta:"Notre méthodologie",
    footerMission:"Une initiative islamique mondiale, gratuite et sans publicité.",footerNote:"Ce site est informatif. L'application n'est pas encore disponible publiquement.",backHome:"Retour à l'accueil",
    developedBy:"Développé par Genius Step SARL",companyContactTitle:"Éditeur et coordonnées",companyPhoneLabel:"Téléphone professionnel",companyEmailLabel:"Courriel", companyAddressLabel:"Adresse professionnelle",companyRegistryLabel:"Immatriculation",
    publicIssue:"Signaler un problème technique sur GitHub",publicIssueNote:"Le signalement est public et nécessite un compte GitHub. N'y indiquez aucune information personnelle ou confidentielle.",
    pages:{
      features:{eyebrow:"L'application",title:"Fonctionnalités et état d'avancement",lead:"Un aperçu transparent de la version en développement, sans promesse de date de sortie ni validation définitive.",items:[
        {title:"Horaires",body:"Calcul local selon plusieurs méthodes. Les comparaisons avec les calendriers officiels au Maroc et ailleurs ne sont pas terminées ; ces horaires ne sont pas certifiés."},
        {title:"Lecture du Coran",body:"Texte outhmani en Hafs, marque-pages et objectifs de lecture. Warsh attend une vérification savante et une clarification des droits de source."},
        {title:"Invocations et qibla",body:"Plusieurs fonctions sont techniquement réalisées, mais des vérifications religieuses et des essais des capteurs et notifications sur téléphones restent nécessaires."},
        {title:"Langues et vie privée",body:"La version de développement comprend l'arabe, l'anglais et le français. La version prévue garde les préférences en local sans compte obligatoire."}
      ],note:"Aucun lien officiel de téléchargement public n'est disponible pour le moment."},
      about:{eyebrow:"Notre mission",title:"À propos de Mathaba",lead:"Une initiative indépendante pour un compagnon islamique simple et accessible, sans monétiser l'attention ni les données personnelles.",items:[
        {title:"Mondial dès le départ",body:"Développé par Genius Step SARL au Maroc, Mathaba a une portée internationale dès l’origine. Aucun pays n'est imposé comme norme unique. Les méthodes de prière, le calendrier et les langues exigent une attention locale."},
        {title:"Un compagnon discret",body:"Ni classement de pratique religieuse ni compétition. Une aide douce à la lecture, au rappel et au quotidien."},
        {title:"Un service gratuit",body:"L'objectif est un service gratuit, sans publicité, abonnement ou compte obligatoire, après validation des conditions de lancement."}
      ]},
      methodology:{eyebrow:"Confiance",title:"Méthodes et sources",lead:"L'information religieuse exige des sources fiables et de la transparence sur les vérifications effectuées.",items:[
        {title:"Horaires de prière",body:"Calculés localement avec adhan_dart. Ils ne sont pas présentés comme officiels sans comparaison avec des sources locales reconnues."},
        {title:"Coran",body:"Le texte outhmani en Hafs provient de Tanzil, avec respect de l'attribution et de la licence. Warsh n'est pas validé pour diffusion."},
        {title:"Invocations",body:"Les textes coraniques sont conservés avec leurs références. Les autres contenus attendent vérification des sources et relecture scientifique."},
        {title:"Calendrier hégirien",body:"Les dates calculées sont indicatives et ne remplacent pas les annonces officielles locales d'observation lunaire."},
        {title:"Tests de lancement",body:"Les tests automatiques ne remplacent pas les essais sur appareils réels, ni les vérifications des licences, traductions et horaires officiels."}
      ],note:"Références : Tanzil Quran Text (tanzil.net) et adhan_dart. Les images ou textes non autorisés ne sont pas reproduits."},
      privacy:{eyebrow:"Confiance",title:"Confidentialité",lead:"Cette page distingue le site informatif de l'application mobile encore non publiée. Révision éditoriale : 23 octobre 2026.",items:[
        {title:"Ce site",body:"Genius Step SARL exploite ce site informatif. Le code ne contient ni publicité, ni outil d'analyse marketing, ni création de compte ou formulaire de collecte d'e-mails. L'hébergeur et les services DNS, dont Vercel, peuvent traiter les données techniques nécessaires au service, notamment l'adresse IP."},
        {title:"Cookies et abonnements",body:"Le site actuel ne crée pas de profil marketing et ne comporte aucune inscription à une newsletter. Tout futur service de collecte fera l'objet d'une information préalable."},
        {title:"L'application en développement",body:"Les réglages et la progression de lecture sont prévus en local sur le téléphone, avec localisation approximative et notifications facultatives. Il ne s'agit pas d'une application déjà publiée."},
        {title:"Évolutions",body:"Ne partagez aucune donnée privée dans les issues GitHub publiques. Cette notice sera mise à jour avant tout nouveau traitement et soumise à une vérification avant la sortie de l'application."}
      ],note:"Cette présentation technique ne garantit pas les durées de conservation des journaux des prestataires et ne remplace pas une validation juridique."},
      faq:{eyebrow:"Aide",title:"Questions fréquentes",lead:"Des réponses sur l'état réel du projet.",items:[
        {title:"Puis-je télécharger Mathaba ?",body:"Aucune version publique n'est encore approuvée. Flutter est en phase de test ; le site ne propose ni APK ni lien vers les boutiques."},
        {title:"Est-ce gratuit ?",body:"Oui. Mathaba est conçu pour être gratuit, sans publicité, abonnement ni compte obligatoire."},
        {title:"Les horaires sont-ils officiels ?",body:"Non. Ils sont calculés ; leur comparaison avec les horaires officiels locaux reste à finaliser."},
        {title:"La lecture Warsh est-elle incluse ?",body:"Pas encore. La version de développement comprend le texte en Hafs."},
        {title:"Quelles langues ?",body:"Arabe, français et anglais pour le site et la version de développement. La relecture linguistique reste à finaliser."},
        {title:"Faut-il créer un compte ?",body:"Non dans le modèle actuel : les préférences principales sont stockées sur l'appareil."}
      ]},
      contact:{eyebrow:"Contact",title:"Contact et suggestions",lead:"Mathaba est développé par Genius Step SARL, au Maroc. Les coordonnées professionnelles publiques figurent ci-dessous, ainsi qu’un espace pour les signalements techniques publics.",items:[
        {title:"Signalements techniques",body:"Ouvrez une issue dans le dépôt GitHub public mathaba-web. Un compte GitHub est nécessaire et le contenu est visible de tous."},
        {title:"Respect de la vie privée",body:"N'indiquez pas de téléphone, d'identifiants ni d'informations sensibles dans un signalement public."},
        {title:"Courriel",body:"Pour toute question concernant Mathaba, écrivez à contact@mathaba.online. Cette adresse est distincte de celle du projet Raqeem."}
      ]},
      updates:{eyebrow:"Actualités",title:"Actualités du développement",lead:"Des étapes documentées, sans promesse de calendrier de sortie.",items:[
        {title:"23 octobre 2026 · Site",body:"Mise en place du site informatif et de contenus multilingues décrivant le projet avec transparence."},
        {title:"23 octobre 2026 · Mobile",body:"Le rapport Flutter fait état de 100 tests réussis et d'une interface trilingue. Les tests réels, les horaires officiels, les révisions scientifiques et la signature restent à finaliser."},
        {title:"À suivre",body:"Achever la validation technique, religieuse et matérielle avant toute décision de publication."}
      ],note:"Les actualités sont rédigées manuellement à partir de preuves de projet, et non d'une publication automatique."}
    }
  }
};
export function getCopy(locale: Locale): SiteCopy { return translations[locale]; }
