import { FaReact, FaGitAlt, FaGithub, FaKey } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiSequelize,
  SiVercel,
  SiPostman,
  SiAmazon,
  SiNginx,
  SiEthereum,
  SiRuff,
  SiWeb3Dotjs,
  SiSolidity,
  SiJsonwebtokens,
  SiLinux,
  SiOpensea,
} from "react-icons/si";

const skills = {
  프론트엔드: [
    { icon: <SiHtml5 className="text-orange-500" />, label: "HTML5" },
    { icon: <SiCss3 className="text-blue-500" />, label: "CSS3" },
    { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
    { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
    { icon: <FaReact className="text-cyan-500" />, label: "React" },
    {
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      label: "Next.js",
    },
    { icon: <SiTailwindcss className="text-sky-400" />, label: "Tailwind CSS" },
    { icon: <span className="text-2xl">🐻</span>, label: "Zustand" }, // 로고 없음
  ],
  블록체인: [
    {
      icon: <SiSolidity className="text-gray-500" />,
      label: "Smart Contracts",
    },
    {
      icon: <SiOpensea className="text-indigo-500" />,
      label: "SBT / NFT 발행",
    },
    { icon: <SiEthereum className="text-purple-500" />, label: "Ethereum" },
    { icon: <SiWeb3Dotjs className="text-yellow-500" />, label: "web3.js" },
    { icon: <SiRuff className="text-red-500" />, label: "Truffle" },
  ],
  백엔드: [
    { icon: <SiNodedotjs className="text-green-600" />, label: "Node.js" },
    {
      icon: <SiExpress className="text-neutral-800 dark:text-white" />,
      label: "Express",
    },
    { icon: <SiMysql className="text-blue-600" />, label: "MySQL" },
    { icon: <SiSequelize className="text-blue-400" />, label: "Sequelize" },
    {
      icon: (
        <div className="flex items-center gap-1">
          <SiJsonwebtokens className="text-emerald-500 text-xl" />
          <FaKey className="text-yellow-500 text-lg" />
        </div>
      ),
      label: "JWT / OAuth2",
    },
  ],
  배포: [
    {
      icon: <SiVercel className="text-black dark:text-white" />,
      label: "Vercel",
    },
    { icon: <SiAmazon className="text-orange-400" />, label: "AWS" },
    { icon: <SiLinux className="text-yellow-500" />, label: "Linux" },
    { icon: <SiNginx className="text-green-500" />, label: "Nginx" },
  ],
  툴링: [
    { icon: <FaGitAlt className="text-orange-500" />, label: "Git" },
    {
      icon: <FaGithub className="text-black dark:text-white" />,
      label: "GitHub",
    },
    { icon: <SiPostman className="text-orange-400" />, label: "Postman" },
  ],
};

export default function Skills() {
  return (
    <div className="space-y-10">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            {category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {items.map(({ icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center px-4 py-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:shadow-sm transition-all duration-200"
              >
                <div className="text-3xl mb-2">{icon}</div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
