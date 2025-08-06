"use client";

import { useState } from "react";
import ToggleIssueCard from "./ToggleIssueCard";
import VideoModal from "./VideoModal";
import { PlayCircle } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  role?: string;
  contribution: string;
  techStack: string[];
  imageUrls?: string[];
  link?: string;
  github?: string;
  issueCard?: {
    issue: string;
    solution: string;
    task: string;
  };
  videoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  role,
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
      <div className="flex flex-col gap-6 items-center pb-8">
        <h3 className="w-full text-2xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-violet-500 pl-4">
          {title}
        </h3>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div
            className="relative w-full md:w-1/2 aspect-video rounded-lg bg-zinc-200 dark:bg-zinc-800 overflow-hidden"
            onClick={() => videoUrl && setShowVideo(true)}
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
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-30 transition cursor-pointer">
                <PlayCircle className="w-16 h-16 text-white drop-shadow-md" />
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2 space-y-3">
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              {description}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              <span className="font-medium">역할:</span> {role}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              <span className="font-medium">기여도:</span> {contribution}
            </p>
            <ul className="flex flex-wrap gap-2 text-xs text-violet-500 font-medium">
              {techStack.map((tech) => (
                <li key={tech}>#{tech}</li>
              ))}
            </ul>
            <div className="flex gap-3 pt-2">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm rounded-md bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-violet-900 dark:text-violet-300 dark:hover:bg-violet-800 transition-colors"
                >
                  프로젝트 바로가기
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm rounded-md bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600 transition-colors"
                >
                  GitHub 보기
                </a>
              )}
            </div>
          </div>
        </div>
        {issueCard && (
          <ToggleIssueCard
            issue={issueCard.issue}
            solution={issueCard.solution}
            task={issueCard.task}
          />
        )}
      </div>
      {videoUrl && showVideo && (
        <VideoModal videoUrl={videoUrl} onClose={() => setShowVideo(false)} />
      )}
    </>
  );
}
