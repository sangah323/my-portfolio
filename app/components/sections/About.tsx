import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="scroll-mt-24 max-w-5xl mx-auto py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
      <div className="md:w-3/5 space-y-4 border-l-4 border-violet-500 pl-6">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
          구조와 흐름을 설계하는 프론트엔드 개발자
        </h2>

        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          사용자 경험을 중심에 두고 문제를 구조적으로 해결합니다.
        </p>

        <div className="pt-8 space-y-2 text-base text-zinc-700 dark:text-zinc-300">
          <p>복잡함을 단순하고 직관적인 UI로 바꾸는 데 집중합니다.</p>
          <p>
            <code>Next.js</code>, <code>TypeScript</code>,{" "}
            <code>TailwindCSS</code>, <code>Zustand</code>를 중심으로 <br />
            상태와 UI 일관성을 유지합니다.
          </p>
          <p>주도적으로 문제를 정의하고, 팀과의 소통으로 빠르게 해결합니다.</p>
        </div>
      </div>

      <div className="md:w-2/5 flex flex-col items-center justify-center gap-4 text-center md:text-left">
        <Image
          src="/images/Profile.jpeg"
          alt="조상아 프로필"
          width={220}
          height={300}
          sizes="(max-width: 768px) 200px, 220px"
          className="rounded-full object-cover transition-transform duration-300"
          priority
        />
        <div className="flex gap-3">
          <Link
            href="/self-intro"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2.5 px-6 rounded-xl text-sm transition"
          >
            자기소개서 보기 →
          </Link>
          <Link
            href="/#projects"
            className="inline-block bg-zinc-800/5 hover:bg-zinc-800/10 dark:bg-zinc-100/5 dark:hover:bg-zinc-100/10 text-zinc-700 dark:text-zinc-200 font-semibold py-2.5 px-6 rounded-xl text-sm transition"
          >
            프로젝트 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
