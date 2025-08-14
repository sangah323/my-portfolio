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
      "Zustand 전역 상태 관리와 axios 전역 에러 핸들링 구조 구축",
      "로그인 가드·권한 기반 UI 제어 및 공통 컴포넌트화",
    ],
    techStack: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript", "Axios"],
    imageUrls: ["/images/TUNER-main.png", "/images/TUNER-list.png"],
    link: "https://tunemate.store",
    github: "https://github.com/sangah323/TUNER_PROJECT",
    issueCard: {
      issue: [
        "SSR 구조에 대한 이해 부족으로 퍼널 상태 전달 실패 : Next.js layout.tsx(서버 컴포넌트)에서 클라이언트 상태를 직접 참조하려다 버튼 동작이 정상 작동하지 않음",

        "모바일 환경에서의 설문 UX 저하 : 기존 UI는 한 페이지에 모든 질문을 나열하는 구조라 작은 화면에서 스크롤이 길어지고, 집중도와 응답 품질이 떨어짐",
      ],
      solution: [
        "퍼널 상태를 layout.tsx가 아닌 page 단에서 직접 관리하도록 구조 변경",
        "'Zustand'로 전역 상태를 정의하여 단계별 버튼 동작을 제어",

        "모바일 설문 UX 개선을 위해 토스페이먼트의 useFunnel 구조를 참고하여 커스텀 퍼널 로직 구현",
        "퍼널 단계를 4단계로 재설계하여 각 단계의 질문량을 최소화하고, 모바일 집중도 향상",
      ],
      task: [
        "퍼널 구조 재사용성을 높여 다른 프로젝트에도 적용",
        "퍼널 내 설문 데이터 자동 저장 주기 및 복원 기능 고도화",
      ],
    },
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
        "초기 Vercel 단독 배포 검토 → 백엔드 연동 구조상 제약 발생",
        "Vercel의 HTTPS 및 커스텀 도메인 설정 복잡도 문제",
        "예약 시스템 설계에서 자원 단위가 불명확",
        "하나의 공간만 예약 대상으로 설정되어 술 종류별 병렬 예약 불가",
        "백엔드 역할이 실질적으로 약했고, 단순 API 제공에 그침",
      ],
      solution: [
        "프론트/백 통합 EC2 배포 전환 (Nginx + Express)",
        "도메인 DNS 설정 완료 후, 통합 서버로 배포 환경 전환",
        "전통주를 단위 자원으로 보고 술별 예약 수량/시간대 추천 시스템 기획",
        "백엔드가 기능 주체가 될 수 있도록, 이후 프로젝트에서 구조 설계 초기부터 책임 부여 예정",
      ],
      task: [
        "HTTPS 적용 - SSL 인증서 발급 (Ex) Let’s Encrypt, Cloudflare) - Nginx Reverse Proxy + TLS 설정 - 브라우저 보안 정책 대응 및 사용자 신뢰 확보",
        "Access/Refresh Token 체계 도입 및 자동 재발급 기능 구현",
        "예약 병렬성 허용을 위한 DB 모델링 개선 (Ex) liquor_id별 max count)",
        "예약 실패 시 대체 추천 로직 설계 및 API 레벨에서 반영",
        "역할 분배를 명확히 한 상태에서 백엔드의 책임 강화",
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
        "Git 협업 전략 부재 - 4인 팀 구성에서 'main'과 'develop' 브랜치만 운영 → 병합 충돌 및 작업 분기 어려움 발생",

        "API 경로 비RESTful - '/review/list', '/review/ReviewAll' 등 URL 경로 설계가 일관성 없음 - RESTful 원칙(리소스 기반 설계, HTTP 메서드와 URL의 명확한 매핑)이 지켜지지 않음",

        "유저 플로우 픽스 미흡 - 초기에 설문이나 유저 흐름을 명확히 정리하지 않아, 구현 후 수정과 병합이 반복됨 - 작업량이 많아져 백엔드 팀이 프론트 작업까지 관여하게 되는 구조 발생",
      ],
      solution: [
        "Git 커밋 컨벤션 정립 필요 - Ex) 'fix: 북마크 페이지에서 쿼리스트링 기본값 오류 수정'",
        "RESTful API 원칙 적용 - Ex) '/review/:review_id'에서 PUT 사용하여 수정 처리",
        "유저 플로우 확정 및 기능 명세화 문서 작성 필요",
        "기능별 브랜치 생성 → develop 브랜치로 merge → main 배포 구조 체득이 필요",
      ],
      task: [
        "브랜치 전략 숙련화 - Git Flow 전략을 도입하고 실습 중심 운영 필요",
        "RESTful 설계 리팩토링 - 일관된 경로와 메서드 매핑으로 API 명확성 확보",
        "초기 설계 명세화 강화 - UX 플로우 / API 흐름 / 역할 분담 사전 확정 필수",
        "소통 프로세스 개선 - 기능 단위 문서화 및 회의 방식의 적용 검토",
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
        "localStorage만 사용한 로그인/인증의 한계 - 다중 사용자 구조를 구현하기 어려웠고 보안에 취약함",
        "기능별 모듈화 부족으로 유지보수가 어려움",
        "JS 코드가 HTML에 섞여 구조가 복잡해짐",
        "CRUD 기능 구현은 성공했지만, 테스트와 예외처리 부족",
      ],
      solution: [
        "인증/데이터 관리 고도화를 위해 다음 프로젝트부터 MySQL 등 DB 활용 예정",
        "JS 구조화/모듈화 학습 병행 후 구조 개선 리팩토링 예정",
        "기본적인 try-catch 예외 처리 및 사용자 피드백 UI 적용 고려 중",
      ],
      task: [
        "메뉴 추천 기능을 랜덤 기반으로 구현",
        "체크리스트 기반 장보기 기능 구조 설계 및 적용",
        "반응형 웹 대응 개선 및 모바일 최적화 추가 예정",
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
