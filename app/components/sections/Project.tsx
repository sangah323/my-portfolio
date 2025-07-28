// components/sections/Projects.tsx

import ProjectCard from "../ui/ProjectCard";

const PROJECTS = [
  {
    title: "TUNER",
    description:
      "Web3 기반 음악 가치 평가 설문 서비스로, 퍼널 기반 사용자 흐름을 고려한 UI 설계 및 프론트엔드 전반을 구현하였습니다. Zustand로 전역 상태를 관리하고 axios 인터셉터 기반 에러 핸들링 구조를 설계하였습니다.",
    role: "사용자 페이지 프론트엔드 전체 설계 및 상태관리 구조 구축",
    techStack: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript", "Axios"],
    imageUrl: "",
    link: "https://tunemate.store",
  },
  {
    title: "NuLOOK",
    description:
      "시음 예약 및 전통주 추천 기능이 포함된 서비스로, 팀장으로서 전체 백엔드 구조를 설계하였습니다.",
    role: "팀장, 인증/예약 흐름 백엔드 구현",
    techStack: ["Node.js", "Express", "MySQL", "Sequelize", "OAuth2", "AWS"],
    imageUrl: "",
    link: "http://43.201.101.26/",
  },
  {
    title: "BookIsland",
    description:
      "감상문 공유 중심의 도서 커뮤니티 서비스로, 리뷰 등록/조회 기능과 자유 게시판, 카카오 OAuth 로그인 기능을 구현하였습니다.",
    role: "리뷰 기능 및 커뮤니티 흐름 설계, 로그인 인증 구현",
    techStack: [
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "OAuth2",
      "Postman",
    ],
    imageUrl: "",
    link: "",
  },
  {
    title: "밥먹자",
    description:
      "자취생들의 식사 기록을 위한 웹 플랫폼입니다. localStorage를 활용한 CRUD 기능을 구현하고, 회원가입/로그인 및 게시글 업로드/수정/삭제 기능을 직접 개발했습니다. UI/UX 기획부터 퍼블리싱까지 전 과정을 주도한 개인 프로젝트입니다.",
    role: "개인 프로젝트 – 프론트엔드 설계 및 CRUD 기능 구현",
    techStack: ["HTML5", "CSS3", "JavaScript", "localStorage"],
    imageUrl: "",
    link: "https://bap-meok-ja-project.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="space-y-12">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
