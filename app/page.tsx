import ActiveSectionTracker from "./components/layout/ActiveSectionTracker";
import PageWrapper from "./components/layout/PageWrapper";
import SectionWrapper from "./components/layout/SectionWrapper";
import About from "./components/ui/About";
import Hero from "./components/ui/Hero";
import Skills from "./components/ui/Skills";

export default function Home() {
  return (
    <>
      <ActiveSectionTracker />
      <PageWrapper>
        <Hero />
        <SectionWrapper id="about">
          <About />
        </SectionWrapper>
        <SectionWrapper id="skills" title="기술">
          <Skills />
        </SectionWrapper>
        <SectionWrapper id="projects" title="프로젝트">
          <p>프로젝트 카드 자리</p>
          <div className="h-[500px] bg-zinc-100 dark:bg-zinc-900" />
        </SectionWrapper>
        <SectionWrapper id="contact" title="연락처 및 링크">
          <p>이메일 / GitHub / 블로그 등</p>
          <div className="h-[500px] bg-zinc-100 dark:bg-zinc-900" />
        </SectionWrapper>
      </PageWrapper>
    </>
  );
}
