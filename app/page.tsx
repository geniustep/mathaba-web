import Image from "next/image";

const values = [
  { symbol: "✦", label: "مجاني بالكامل" },
  { symbol: "◈", label: "بلا إعلانات" },
  { symbol: "◎", label: "يحترم الخصوصية" },
];

const directions = [
  {
    number: "01",
    title: "أوقات الصلاة",
    description: "مواقيت قابلة للتكيّف مع بلدك وطريقة الحساب المناسبة لموقعك.",
  },
  {
    number: "02",
    title: "القرآن الكريم",
    description: "قراءة متأنية ومريحة، مع أدوات تعين على العودة إلى القرآن كل يوم.",
  },
  {
    number: "03",
    title: "الذكر والدعاء",
    description: "لحظات هادئة للأذكار والأدعية في تجربة واضحة وبعيدة عن التشتيت.",
  },
];

export default function Home() {
  return (
    <main id="main">
      <div className="page-shell">
        <header className="site-header" aria-label="ترويسة الموقع">
          <div className="brand">
            <Image
              src="/brand/logo-symbol.webp"
              alt=""
              width={48}
              height={48}
              priority
            />
            <span className="brand-name">مثابة</span>
          </div>
          <span className="header-status">MATHABA · قيد الإعداد</span>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-text">
            <p className="eyebrow">مَثَابَة · MATHABA</p>
            <h1 id="hero-title">
              مساحة يعود إليها <span>القلب.</span>
            </h1>
            <p className="hero-description">
              نعمل على بناء رفيق إسلامي يجمع ما يعين على العبادة والمعرفة،
              في تجربة هادئة ومفتوحة للجميع، أينما كانوا.
            </p>
            <div className="principles" aria-label="مبادئ مثابة">
              {values.map((value) => (
                <div className="principle" key={value.label}>
                  <span aria-hidden="true">{value.symbol}</span>
                  {value.label}
                </div>
              ))}
            </div>
            <p className="development-note">
              المشروع قيد التطوير، ولم يُعلَن بعد عن إصدار عام للتطبيق.
            </p>
          </div>
          <div className="hero-visual">
            <div className="visual-halo" aria-hidden="true" />
            <div className="logo-surface">
              <Image
                src="/brand/logo-primary.webp"
                alt="الشعار الرسمي لمثابة بالعربية واللاتينية"
                width={430}
                height={430}
                priority
                className="hero-logo"
              />
            </div>
          </div>
        </section>

        <section className="vision" aria-labelledby="vision-title">
          <div className="section-heading">
            <p className="eyebrow">ما نعمل عليه</p>
            <h2 id="vision-title">البساطة في كل ما هو مهم.</h2>
            <p>
              هذه مجالات يركّز عليها المشروع أثناء التطوير، وليست إعلانًا عن
              مزايا متاحة للتنزيل حاليًا.
            </p>
          </div>
          <div className="feature-grid">
            {directions.map((item) => (
              <article className="feature-card" key={item.number}>
                <span className="feature-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="global-note" aria-label="رؤية عالمية">
          <span className="global-icon" aria-hidden="true">✧</span>
          <div>
            <h2>من المغرب، إلى العالم.</h2>
            <p>
              يبدأ التحقق الأولي في المغرب، بينما تُبنى مثابة منذ البداية
              لتراعي اختلاف البلدان واللغات وطرق حساب مواقيت الصلاة.
            </p>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-brand">
            <Image src="/brand/logo-symbol.webp" alt="" width={32} height={32} />
            <span>مثابة · MATHABA</span>
          </div>
          <span>مبادرة رقمية مجانية بلا إعلانات.</span>
          <span className="footer-domain">mathaba.online</span>
        </footer>
      </div>
    </main>
  );
}
