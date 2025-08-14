"use client";

import { useState } from "react";
import VideoModal from "./VideoModal";
import { PlayCircle, ExternalLink, Layers, User2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import IssueCard from "./IssueCard";

interface ProjectCardProps {
  title: string;
  description: string[];
  date: string;
  contribution: string[];
  techStack: string[];
  imageUrls?: string[];
  link?: string;
  github?: string;
  issueCard?: {
    issue: string[];
    solution: string[];
    task: string[];
  };
  videoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  date,
  contribution,
  techStack,
  imageUrls,
  link,
  github,
  issueCard,
  videoUrl,
}: ProjectCardProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-6 pb-10">
        <header className="space-y-3">
          <h3 className="w-full text-2xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-violet-500 pl-4">
            {title}
          </h3>

          {Array.isArray(description) ? (
            <div className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {description.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          ) : (
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {description}
            </p>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start md:items-stretch">
          <div className="order-2 md:order-1 md:col-span-5 flex flex-col md:self-stretch md:h-full">
            <div
              className="relative w-full aspect-video md:max-h-[360px] lg:max-h-[420px] rounded-lg bg-zinc-200 dark:bg-zinc-800 overflow-hidden"
              onClick={() => videoUrl && setShowVideo(true)}
              role={videoUrl ? "button" : undefined}
              aria-label={videoUrl ? `${title} 데모 영상 열기` : undefined}
            >
              {imageUrls && imageUrls.length > 0 ? (
                imageUrls.length === 1 ? (
                  <img
                    src={imageUrls[0]}
                    alt={`${title} screenshot`}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex w-full h-full">
                    <img
                      src={imageUrls[0]}
                      alt={`${title} screenshot 1`}
                      className="w-1/2 h-full object-cover"
                    />
                    <img
                      src={imageUrls[1]}
                      alt={`${title} screenshot 2`}
                      className="w-1/2 h-full object-cover"
                    />
                  </div>
                )
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-400">
                  이미지 준비 중
                </div>
              )}

              {videoUrl && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition cursor-pointer">
                  <PlayCircle className="w-16 h-16 text-white drop-shadow-md" />
                </div>
              )}
            </div>

            <section className="mt-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-4">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 text-sm font-semibold">
                <Layers className="w-4 h-4 text-violet-500" />
                사용 기술
              </div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {techStack.slice(0, 10).map((tech) => (
                  <li
                    key={tech}
                    className="text-xs font-medium rounded-full border border-zinc-300/60 dark:border-zinc-700/70 px-3 py-1 bg-zinc-900/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>

            <div className="flex flex-wrap gap-2 pt-6">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-md bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-violet-900 dark:text-violet-200 dark:hover:bg-violet-800 transition-colors"
                  aria-label="프로젝트 사이트 열기"
                >
                  <ExternalLink className="w-4 h-4" />
                  프로젝트 바로 가기
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-md bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600 transition-colors"
                  aria-label="GitHub 저장소 열기"
                >
                  <FaGithub className="w-4 h-4 text-black dark:text-white" />
                  GitHub
                </a>
              )}
            </div>

            <p className="mt-auto text-xs text-zinc-500 dark:text-zinc-500 pt-2">
              기간: {date}
            </p>
          </div>

          <aside className="order-1 md:order-2 md:col-span-7 md:sticky md:top-24 self-stretch">
            <div className="h-full flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 gap-6 shadow-sm">
              <section>
                <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold">
                  <User2 className="w-4 h-4 text-violet-500" />
                  맡은 역할
                </div>
                {Array.isArray(contribution) ? (
                  <ul className="mt-2 list-disc pl-5 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {contribution.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {contribution}
                  </p>
                )}
              </section>
              <section>
                {issueCard && (
                  <IssueCard
                    issue={issueCard?.issue}
                    solution={issueCard?.solution}
                    task={issueCard?.task}
                  />
                )}
              </section>
            </div>
          </aside>
        </div>
      </div>

      {videoUrl && showVideo && (
        <VideoModal videoUrl={videoUrl} onClose={() => setShowVideo(false)} />
      )}
    </>
  );
}
