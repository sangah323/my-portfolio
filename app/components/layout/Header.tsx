"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import Link from "next/link";

const navItems = [
  { href: "#about", label: "소개" },
  { href: "#skills", label: "기술" },
  { href: "#projects", label: "프로젝트" },
  { href: "#contact", label: "연락처 및 링크" },
];

export default function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShow(scrollTop > 80); // 80px 이상 스크롤하면 나타나게
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out
        ${
          show
            ? "opacity-100 translate-y-0 backdrop-blur bg-white/70 dark:bg-black/70 border-b border-zinc-200 dark:border-zinc-800 shadow-sm"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
    >
      <nav className="max-w-5xl mx-auto px-4 py-5 flex justify-between items-center">
        <Link
          href="/"
          className="text-base md:text-xl font-bold text-violet-500 dark:text-violet-400"
        >
          포트폴리오
        </Link>
        <ul className="flex items-center gap-2.5 md:gap-14 md:text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-violet-500 hover:font-semibold transition"
              >
                {item.label}
              </a>
            </li>
          ))}
          <ThemeToggle />
        </ul>
      </nav>
    </header>
  );
}
