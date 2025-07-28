export default function About() {
  return (
    <section className="scroll-mt-24 space-y-10 text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          사용자 중심의 흐름을 설계하는 프론트엔드 개발자
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          사용자 흐름을 구조화하고, 기술보다 경험을 먼저 생각합니다.
        </p>
      </div>

      <div className="space-y-4">
        <p>
          기능보다 경험을 먼저 생각하며, 직관적이고 매끄러운 UI 흐름을 설계하고
          구현하는 데 집중합니다.
        </p>
        <p>
          <code>Next.js</code>, <code>TypeScript</code>, <code>Zustand</code>,{" "}
          <code>Tailwind CSS</code>를 중심으로 개발하며, 상태 관리와 디자인
          시스템 구성에 익숙합니다.
        </p>
        <p>
          협업과 커뮤니케이션을 중요하게 여기며, 팀과 함께 성장하는 개발자가
          되고자 합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 shadow">
          <div className="text-2xl mb-2">🧠</div>
          <div className="text-sm font-medium">사용자 경험 중심 설계</div>
        </div>
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 shadow">
          <div className="text-2xl mb-2">📦</div>
          <div className="text-sm font-medium">구조화된 상태 관리</div>
        </div>
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 shadow">
          <div className="text-2xl mb-2">🤝</div>
          <div className="text-sm font-medium">협업과 커뮤니케이션</div>
        </div>
      </div>
    </section>
  );
}
