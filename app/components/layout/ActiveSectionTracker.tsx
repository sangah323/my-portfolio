"use client";

import { useEffect } from "react";

export default function ActiveSectionTracker() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              history.replaceState(null, "", `#${id}`);
            }
          }
        });
      },
      {
        threshold: 0.6, // 60% 보이면 해당 섹션으로 판단
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
