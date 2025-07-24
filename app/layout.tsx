import Header from "./components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "조상아조 - 포트폴리오",
  description: "프론트엔드 개발자 상아 조의 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <Header />
      <body>{children}</body>
    </html>
  );
}
