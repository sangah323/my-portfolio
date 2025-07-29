import Link from "next/link";

export default function About() {
  return (
    <section className="scroll-mt-24 max-w-5xl mx-auto py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
      <div className="space-y-4 border-l-4 border-violet-500 pl-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          구조와 흐름을 설계하는 프론트엔드 개발자
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          비전공자의 시선으로, 사용자 관점의 문제를 기술로 풀어갑니다.
        </p>
        <div className="pt-10 space-y-2 text-base text-zinc-700 dark:text-zinc-300">
          <p>
            사용자 행동의 흐름과 맥락을 먼저 고민하고,
            <br />
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
      </div>

      <div className="text-center md:text-left">
        <Link
          href="/self-intro"
          className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 px-7 rounded-xl text-base transition"
        >
          자기소개서 읽으러 가기 →
        </Link>
      </div>
    </section>
  );
}
