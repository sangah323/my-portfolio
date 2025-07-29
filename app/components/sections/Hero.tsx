import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen
      px-4 sm:px-8 lg:px-28
      flex flex-col justify-center
      text-zinc-800 dark:text-zinc-100 space-y-4"
    >
      <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
        👋 안녕하세요
      </p>
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-snug tracking-tight max-w-4xl">
        프론트엔드 개발자{" "}
        <span className="block sm:inline">
          <span className="text-violet-500 dark:text-violet-400">조상아</span>
          입니다.
        </span>
      </h1>
      <p className="text-base sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl">
        사용자 흐름을 구조화하고,{" "}
        <span className="block sm:inline">
          기술보다 경험을 먼저 생각합니다.
        </span>
      </p>
      <a
        href="#about"
        className="group inline-flex items-center gap-1 mt-6 text-sm sm:text-base text-violet-500 hover:text-violet-600 transition-colors"
      >
        <ChevronDown
          size={18}
          className="group-hover:translate-y-1 transition-transform duration-200"
        />
        소개 보기
      </a>
    </section>
  );
}
