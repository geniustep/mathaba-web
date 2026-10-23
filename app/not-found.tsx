import Link from "next/link";

export default function NotFound() {
  return <main className="not-found container" id="main"><p className="overline">404</p><h1>Page not found · الصفحة غير موجودة</h1><Link href="/ar" className="button button-primary">العودة إلى الرئيسية ↗</Link></main>;
}
