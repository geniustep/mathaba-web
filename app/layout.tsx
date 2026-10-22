import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mathaba.online"),
  title: "مثابة | MATHABA",
  description:
    "مثابة: رفيق إسلامي عالمي يجري تطويره ليكون مجانيًا بالكامل، بلا إعلانات، ويحترم خصوصيتك.",
  applicationName: "Mathaba",
  // The project is not launched yet. Revisit this explicit gate before publishing.
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "مثابة | MATHABA",
    description: "مساحة هادئة للعبادة والمعرفة. مجانًا، بلا إعلانات.",
    type: "website",
    siteName: "مثابة | MATHABA",
    images: ["/brand/logo-primary.webp"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
