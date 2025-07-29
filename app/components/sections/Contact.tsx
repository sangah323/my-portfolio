import { Mail, Github, BookOpenText } from "lucide-react";

const CONTACTS = [
  {
    icon: <Mail className="w-5 h-5 text-violet-500" />,
    label: "이메일",
    value: "choa323@naver.com",
    href: "mailto:choa323@naver.com",
  },
  {
    icon: <Github className="w-5 h-5 text-violet-500" />,
    label: "GitHub",
    value: "github.com/sangah323",
    href: "https://github.com/sangah323",
  },
  {
    icon: <BookOpenText className="w-5 h-5 text-violet-500" />,
    label: "Blog",
    value: "choa323.tistory.com",
    href: "https://choa323.tistory.com",
  },
];

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-[60vh] md:min-h-[70vh] flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 flex-wrap"
    >
      {CONTACTS.map(({ icon, label, value, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[240px] md:w-[220px] h-[115px] p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors shadow flex flex-col items-start gap-2"
        >
          <div className="flex items-center gap-2">{icon}</div>
          <div className="text-medium text-zinc-500 dark:text-zinc-400">
            {label}
          </div>
          <div className="font-lg font-bold text-zinc-800 dark:text-zinc-100 underline underline-offset-4 break-all">
            {value}
          </div>
        </a>
      ))}
    </div>
  );
}
