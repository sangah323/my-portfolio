import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiAxios,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiSequelize,
  SiVercel,
  SiPostman,
  SiAmazon,
  SiEthereum,
  SiRuff,
  SiWeb3Dotjs,
} from "react-icons/si";

const skills = {
  Blockchain: [
    { icon: <SiEthereum className="text-purple-500" />, label: "Ethereum" },
    { icon: <span className="text-2xl">📜</span>, label: "Smart Contracts" },
    { icon: <span className="text-2xl">🎖️</span>, label: "SBT / NFT 발행" },
    { icon: <SiRuff className="text-red-500" />, label: "Truffle" },
    { icon: <SiWeb3Dotjs className="text-yellow-500" />, label: "web3.js" },
  ],
  Frontend: [
    { icon: <FaReact className="text-cyan-500" />, label: "React" },
    {
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      label: "Next.js",
    },
    { icon: <SiTailwindcss className="text-sky-400" />, label: "Tailwind CSS" },
    { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
    { icon: <span className="text-2xl">🐻</span>, label: "Zustand" },
    { icon: <SiAxios className="text-sky-500" />, label: "Axios" },
    { icon: <span className="text-2xl">🎞️</span>, label: "Swiper.js" },
  ],
  Backend: [
    { icon: <SiNodedotjs className="text-green-600" />, label: "Node.js" },
    {
      icon: <SiExpress className="text-neutral-800 dark:text-white" />,
      label: "Express",
    },
    { icon: <SiMysql className="text-blue-600" />, label: "MySQL" },
    { icon: <SiSequelize className="text-blue-400" />, label: "Sequelize" },
    { icon: <span className="text-2xl">🔐</span>, label: "JWT / OAuth2" },
  ],
  Deployment: [
    {
      icon: <SiVercel className="text-black dark:text-white" />,
      label: "Vercel",
    },
    { icon: <SiAmazon className="text-orange-400" />, label: "AWS" },
    { icon: <span className="text-2xl">🐧</span>, label: "Linux" },
    { icon: <span className="text-2xl">🧭</span>, label: "Nginx" },
  ],
  Tooling: [
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
          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            {category}
          </h3>
          <div className="flex flex-wrap gap-6 items-center">
            {items.map(({ icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-xs text-zinc-600 dark:text-zinc-300"
              >
                <div className="text-3xl">{icon}</div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
