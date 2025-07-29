// components/sections/Projects.tsx

import ProjectCard from "../ui/ProjectCard";

const PROJECTS = [
  {
    title: "TUNER",
    description:
      "TUNER는 Web3 기반으로 음원을 공개적으로 평가할 수 있는 설문 플랫폼입니다. 설문 참여자는 보상 토큰을 받을 수 있고, 설문 종료 후에는 조건에 따라 SBT(Soul Bound Token) Expert 뱃지가 발급됩니다. 오피셜/일반 설문으로 구분되며, 퍼널 기반 UI 흐름과 음원 감상 기반의 참여 설계를 통해 설문 경험을 고도화한 것이 특징입니다.",
    role: "프론트엔드 사용자 페이지 전체 설계 및 상태관리 구조 구축",
    techStack: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript", "Axios"],
    imageUrls: ["/images/TUNER-main.png", "/images/TUNER-list.png"],
    link: "https://tunemate.store",
    github: "https://github.com/sangah323/TUNER_PROJECT",
  },
  {
    title: "NuLOOK",
    description:
      "전통주의 문화적 가치에 주목하여, 시음 예약과 AI 기반 주모 추천 기능을 포함한 현대적 경험을 제공하는 예약 서비스입니다.",
    role: "팀장, 백엔드 전체 인증 로직과 DB 스키마 설계 및 API 구현, 프론트엔드 메인 페이지 화면 구현",
    techStack: ["Node.js", "Express", "MySQL", "Sequelize", "OAuth2", "AWS"],
    imageUrls: ["/images/NuLOOK-main.png"],
    link: "http://43.201.101.26/",
    github: "https://github.com/sangah323/Nulook_front",
  },
  {
    title: "BookIsland",
    description:
      "책에 대한 감상문을 작성하고 공유할 수 있는 감상문 중심 커뮤니티 서비스입니다. 리뷰 외에도 자유 커뮤니티 기능, 댓글 기능, 카카오소셜 로그인 등이 구현되어 있으며, 사용자의 경험 기반 책 추천 및 커뮤니케이션 공간을 제공하는 것을 목표로 합니다.",
    role: "백엔드 감상문 기능 및 커뮤니티 흐름 설계, 로그인 인증 구현",
    techStack: [
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "OAuth2",
      "Postman",
    ],
    imageUrls: ["/images/BookIsland-main.png"],
    link: "",
    github: "https://github.com/sangah323/BookReviewProject_front",
  },
  {
    title: "밥먹자",
    description:
      "자취생들의 식사 기록을 돕기 위한 웹 플랫폼으로, 직접 만든 식사 사진과 일기를 기록하고, 나중에 참고하거나 공유할 수 있는 구조를 기반으로 한 개인 프로젝트입니다. UI/UX 기획부터 구현까지 직접 수행하였으며, 기능 설계와 데이터 저장 로직(localStorage) 기반의 CRUD를 연습하는 데 집중했습니다.",
    role: "프론트엔드 설계 및 CRUD 기능 구현 (개인 프로젝트)",
    techStack: ["HTML5", "CSS3", "JavaScript", "localStorage"],
    imageUrls: ["/images/BabmeokJa-main.png"],
    link: "https://bap-meok-ja-project.vercel.app/",
    github: "https://github.com/sangah323/BapMeokJa_PROJECT",
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
