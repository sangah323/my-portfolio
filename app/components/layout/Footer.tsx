export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 py-10 text-center space-y-4">
      <h2 className="text-lg sm:text-xl font-semibold text-zinc-700 dark:text-zinc-300">
        2025 프론트엔드 개발자{" "}
        <span className="text-violet-500 dark:text-violet-400">조상아</span>의
        포트폴리오를 끝까지 읽어주셔서 감사합니다.
      </h2>

      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        더 궁금한 점이 있다면 이메일을 통해 편하게 연락 주세요.
      </p>

      <p className="text-xs text-zinc-400 dark:text-zinc-600 pt-8">
        © Copyright 2025. 조상아 All rights reserved.
      </p>
    </footer>
  );
}
