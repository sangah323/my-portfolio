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
import SkillCard from "../ui/SkillCard";

const skillsByLevel = {
  "Level 5": [
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
    {
      icon: (
        <div className="flex items-center gap-1">
          <SiJsonwebtokens className="text-emerald-500 text-xl" />
          <FaKey className="text-yellow-500 text-lg" />
        </div>
      ),
      label: "JWT / OAuth2",
    },
    { icon: <FaGitAlt className="text-orange-500" />, label: "Git" },
    {
      icon: <FaGithub className="text-black dark:text-white" />,
      label: "GitHub",
    },
  ],
  "Level 4": [
    { icon: <span className="text-2xl">🐻</span>, label: "Zustand" }, // 로고 없음
    { icon: <SiNodedotjs className="text-green-600" />, label: "Node.js" },
    {
      icon: <SiExpress className="text-neutral-800 dark:text-white" />,
      label: "Express",
    },
    { icon: <SiMysql className="text-blue-600" />, label: "MySQL" },
    { icon: <SiSequelize className="text-blue-400" />, label: "Sequelize" },
    {
      icon: <SiVercel className="text-black dark:text-white" />,
      label: "Vercel",
    },
    { icon: <SiPostman className="text-orange-400" />, label: "Postman" },
  ],
  "Level 3": [
    { icon: <SiSolidity className="text-gray-500" />, label: "Solidity" },
    { icon: <SiEthereum className="text-purple-500" />, label: "Ethereum" },
    { icon: <SiWeb3Dotjs className="text-yellow-500" />, label: "web3.js" },
    { icon: <SiAmazon className="text-orange-400" />, label: "AWS" },
    { icon: <SiLinux className="text-yellow-500" />, label: "Linux" },
    { icon: <SiNginx className="text-green-500" />, label: "Nginx" },
  ],
  "Level 2": [
    {
      icon: <SiOpensea className="text-indigo-500" />,
      label: "SBT / NFT 발행",
    },
    { icon: <SiRuff className="text-red-500" />, label: "Truffle" },
  ],
};

const levelNum = (label: string) => {
  const m = label.match(/\d/);
  return m ? Number(m[0]) : 1;
};

export default function Skills() {
  const entries = Object.entries(skillsByLevel).sort(
    (a, b) => levelNum(b[0]) - levelNum(a[0])
  );

  return (
    <div className="space-y-8">
      {entries.map(([levelLabel, items]) => {
        const n = levelNum(levelLabel);
        const width = `${Math.min(Math.max(n, 1), 5) * 20}%`;

        return (
          <section key={levelLabel} className="space-y-3">
            <div className="flex items-center gap-4">
              <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                {levelLabel}
              </h3>

              <div
                className="h-1.5 w-40 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden"
                aria-hidden
              >
                <div
                  className="h-full rounded-full bg-violet-500 transition-[width] duration-300"
                  style={{ width }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {items.map(({ icon, label }) => (
                <SkillCard key={label} icon={icon} label={label} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
