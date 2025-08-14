import ActiveSectionTracker from "./components/layout/ActiveSectionTracker";
import PageWrapper from "./components/layout/PageWrapper";
import SectionWrapper from "./components/layout/SectionWrapper";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Project from "./components/sections/Project";
import TopButton from "./components/ui/TopButton";
import Education from "./components/sections/Education";

export default function Home() {
  return (
    <>
      <ActiveSectionTracker />
      <PageWrapper>
        <Hero />
        <SectionWrapper id="about" title="소개">
          <About />
        </SectionWrapper>
        <SectionWrapper id="skills" title="기술">
          <Skills />
        </SectionWrapper>
        <SectionWrapper id="projects" title="프로젝트">
          <Project />
        </SectionWrapper>
        {/* <SectionWrapper id="education" title="교육">
          <Education />
        </SectionWrapper> */}
        <Contact />
      </PageWrapper>
      <TopButton />
    </>
  );
}
