import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "د. [الاسم] | أخصائية الأحياء الدقيقة",
  description: "الموقع الرسمي للدكتورة المتخصصة في الأحياء الدقيقة - أبحاث، منشورات علمية، مقررات دراسية",
  keywords: "أحياء دقيقة، ميكروبيولوجي، بكتيريا، فيروسات، مقاومة المضادات الحيوية، باحثة، أكاديمية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Tajawal', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
