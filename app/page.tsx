import Skills from "./components/ui/Skills";

export default function Home() {
  return (
    <>
      <main className="pt-24 pb-20 px-4 max-w-4xl mx-auto space-y-32">
        <section id="about">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-zinc-700 dark:text-zinc-300">소개글 자리</p>
        </section>
        <section id="skills">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <Skills />
        </section>
        <section id="projects">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <p>프로젝트 카드 자리</p>
          <div className="h-[800px] bg-zinc-100 dark:bg-zinc-900" />
        </section>
        <section id="contact">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>이메일 / GitHub / 블로그 등</p>
          <div className="h-[800px] bg-zinc-100 dark:bg-zinc-900" />
        </section>
      </main>
    </>
  );
}
