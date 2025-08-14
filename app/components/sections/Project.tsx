import ProjectCard from "../ui/ProjectCard";

const PROJECTS = [
  {
    title: "TUNER",
    description: [
      "Web3 기반 음원 평가 설문 플랫폼으로, 누구나 음원을 평가하고 토큰 보상을 받을 수 있습니다.",
      "유튜브 시청 후 응답하는 설문 구조와 퍼널 기반 UI, 오피셜/일반 설문 구분 및 SBT Expert 뱃지 발급을 제공합니다.",
    ],
    date: "영업일 기준 총 32일",
    contribution: [
      "Web3 환경(블록체인·스마트계약 연동)에서 사용자 페이지 전체 단독 설계·구현",
      "지갑 연결·네트워크 상태·서명 흐름 등 Web3 UX 최적화",
      "설문 보상 토큰·SBT Expert 배지 발급 플로우 구현",
      "모바일 중심 4단계 퍼널 UI 설계 및 구현",
    ],
    techStack: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript", "Axios"],
    imageUrls: ["/images/TUNER-main.png", "/images/TUNER-list.png"],
    link: "https://tunemate.store",
    github: "https://github.com/sangah323/TUNER_PROJECT",
    issueCard: {
      issue: [
        "모바일 환경에서 설문 UX 저하: 모든 질문이 한 페이지에 몰려 있어 스크롤이 길고, 집중도와 응답 품질이 저하됨",
      ],
      solution: [
        "토스페이먼트의 useFunnel 구조를 참고해 커스텀 퍼널 로직 구현",
        "퍼널 단계를 4단계로 재설계해 질문량 최소화 및 모바일 집중도 향상",
      ],
      task: ["퍼널 내 설문 데이터 자동 저장 주기·복원 기능 고도화"],
    },
    videoUrl: "https://www.youtube.com/embed/oWuGPQrgAko",
  },
  {
    title: "NuLOOK",
    description: [
      "전통주 시음 예약 서비스로, 오프라인 경험을 온라인에서 간편하게 예약·관리할 수 있습니다.",
      "OAuth2 로그인과 AI 기반 주모 추천, EC2(Nginx+Express) 통합 배포 구조를 적용했습니다.",
    ],
    date: "영업일 기준 총 13일",
    contribution: [
      "프로젝트 팀장: 정기 회의 진행·회의록 작성, 일정·작업 분배 및 진행 상황 관리",
      "백엔드 일부 기능 구현: OAuth2 로그인 인증 로직, DB 스키마 설계 일부 참여(MySQL+Sequelize)",
      "프론트엔드 메인 페이지 반응형 UI 설계·구현 (모바일·데스크톱 최적화)",
      "배포 초기 환경 구성: EC2(Nginx+Express) 세팅 및 커스텀 도메인 연결(최종 CORS 이슈 해결은 팀원 진행)",
    ],
    techStack: ["Node.js", "Express", "MySQL", "Sequelize", "OAuth2", "AWS"],
    imageUrls: ["/images/NuLOOK-main.png"],
    link: "http://43.201.101.26/",
    github: "https://github.com/sangah323/Nulook_back",
    issueCard: {
      issue: [
        "프론트엔드 전용 배포 환경(Vercel)만 가정해 설계 → 백엔드 연동 어려움, HTTPS·커스텀 도메인 설정 복잡",
        "메인 페이지가 데스크톱 중심 설계 → 모바일에서 가독성과 주요 버튼 접근성이 떨어짐",
      ],
      solution: [
        "프론트·백 통합 EC2 배포로 HTTPS·도메인·네트워크 경로 통합 제어",
        "모바일 우선 설계로 메인 페이지 재구성: 한 섹션=한 화면 노출, 주요 액션 버튼 상단 고정",
      ],
      task: [
        "Access/Refresh Token 기반 세션 연장 및 자동 재로그인 구현",
        "DB 동시성 제어(트랜잭션·락)로 중복 예약 방지",
      ],
    },
    videoUrl: "https://www.youtube.com/embed/xMNwOQQiYkI",
  },
  {
    title: "BookIsland",
    description: [
      "감상문 중심 커뮤니티로, 사용자가 책 리뷰를 작성·공유하고 소통할 수 있습니다.",
      "리뷰 CRUD·댓글·카카오 소셜 로그인 등 핵심 기능을 제공하며 커뮤니티 기반 추천을 지향합니다.",
    ],
    date: "영업일 기준 총 10일",
    contribution: [
      "백엔드: 카카오 소셜 로그인 인증 로직 구현, DB 스키마 일부 설계(MySQL+Sequelize)",
      "프론트엔드: 커뮤니티 페이지 및 감상문 상세·작성·수정 페이지 UI 설계·구현, 감상문 수정 API 연동",
      "팀 협업: 기능 명세 기반 API·UI 연동 논의 및 테스트 참여, 정기 회의록 작성 및 진행 상황 기록",
    ],
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
    github: "https://github.com/sangah323/BookReviewProject_back",
    issueCard: {
      issue: [
        "프론트엔드 전용 배포 환경(Vercel)만 가정해 설계 → 백엔드 연동 어려움, HTTPS·커스텀 도메인 설정 복잡",
        "메인 페이지가 데스크톱 중심 설계 → 모바일에서 가독성과 주요 버튼 접근성이 떨어짐",
      ],
      solution: [
        "프론트·백 통합 EC2 배포로 HTTPS·도메인·네트워크 경로 통합 제어",
        "모바일 우선 설계로 메인 페이지 재구성: 한 섹션=한 화면 노출, 주요 액션 버튼 상단 고정",
      ],
      task: [
        "Access/Refresh Token 기반 세션 연장 및 자동 재로그인 구현",
        "DB 동시성 제어(트랜잭션·락)로 중복 예약 방지",
      ],
    },
    videoUrl: "https://www.youtube.com/embed/tkNDZJjryZM",
  },
  {
    title: "밥먹자",
    description: [
      "자취생의 식사 사진·일기를 기록해 되돌아볼 수 있는 개인 프로젝트입니다.",
      "로컬 저장소 기반의 사진·일기 CRUD와 간결한 UI로 빠른 기록 경험을 제공합니다.",
    ],
    date: "영업일 기준 총 7일",
    contribution: [
      "기획·설계·구현 전 과정 단독 진행 (개인 프로젝트)",
      "UI/UX 기획 및 로컬 스토리지 기반 CRUD 기능 구현",
      "localStorage 기반 단일 사용자 로그인/인증 로직 구현 (다중 사용자·보안 한계 존재)",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "localStorage"],
    imageUrls: ["/images/BabMeokJa-main.png"],
    link: "https://bap-meok-ja-project.vercel.app/",
    github: "https://github.com/sangah323/BapMeokJa_PROJECT",
    issueCard: {
      issue: [
        "localStorage 기반 로그인/인증의 한계: 다중 사용자 구조 구현이 어렵고 보안 취약",
      ],
      solution: [
        "인증·데이터 관리 고도화를 위해 다음 프로젝트부터 MySQL 등 DB 활용 예정",
      ],
      task: [
        "DB 도입 후 랜덤 기반 메뉴 추천 기능 구현",
        "체크리스트 기반 장보기 기능 설계·적용",
        "반응형 웹 대응 개선 및 모바일 최적화 추가",
      ],
    },
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
