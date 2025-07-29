import Link from "next/link";

export default function About() {
  return (
    <section className="scroll-mt-24 space-y-10 text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          구조와 흐름을 설계하는 프론트엔드 개발자
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          비전공자의 시선으로, 사용자 관점의 문제를 기술로 풀어갑니다.
        </p>
      </div>

      <div className="space-y-4">
        <p>
          사용자 행동의 흐름과 맥락을 먼저 고민하고, <br />
          기능은 그 흐름을 방해하지 않도록 자연스럽게 설계합니다.
        </p>
        <p>복잡한 과정을 단순하고 직관적인 UI로 풀어내는 데 집중합니다.</p>
        <p>
          <code>Next.js</code>, <code>TypeScript</code>,{" "}
          <code>TailwindCSS</code>, <code>Zustand</code>를 중심으로 개발하며,
          <br />
          상태 관리와 UI 일관성을 고려한 구조 설계에 익숙합니다.
        </p>
        <p>
          함께 일하는 사람들과의 소통을 중요하게 생각하며,
          <br />
          주도적으로 해결하고 함께 성장하는 팀을 추구합니다.
        </p>
      </div>
      <Link
        href="/self-intro"
        className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-xl transition"
      >
        자기소개서 읽으러 가기 →
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 shadow text-center">
          <div className="text-2xl mb-2">🧭</div>
          <h4 className="font-semibold text-sm text-zinc-800 dark:text-white">
            흐름 중심의 UI 설계
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            사용자의 행동을 예측하고, 전환 흐름을 끊기지 않게 설계합니다.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 shadow text-center">
          <div className="text-2xl mb-2">🛠️</div>
          <h4 className="font-semibold text-sm text-zinc-800 dark:text-white">
            안정적인 컴포넌트 구조
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            상태 변화와 재사용성을 고려한 컴포넌트와 상태관리 구조를 설계합니다.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 shadow text-center">
          <div className="text-2xl mb-2">🤝</div>
          <h4 className="font-semibold text-sm text-zinc-800 dark:text-white">
            함께 성장하는 협업자
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            다양한 직군과 소통하며 문제를 해결하고, 책임감 있게 개발합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
