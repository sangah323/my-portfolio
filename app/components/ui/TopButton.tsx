"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function TopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="스크롤 맨 위로"
      className="fixed bottom-6 right-6 z-[999] bg-violet-600 hover:bg-violet-700 text-white p-3 rounded-full shadow-lg transition"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
