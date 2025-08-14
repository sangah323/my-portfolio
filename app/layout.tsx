import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "조상아 - 포트폴리오",
  description: "프론트엔드 개발자 조상아의 포트폴리오",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicons/favicon-32x32.png",
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
