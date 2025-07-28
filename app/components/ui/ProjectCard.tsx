interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  techStack: string[];
  imageUrls?: string[];
  link?: string;
  reverse?: boolean; // 이미지 왼쪽/오른쪽 배치 전환
}

export default function ProjectCard({
  title,
  description,
  role,
  techStack,
  imageUrls,
  link,
}: ProjectCardProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-6 items-center mb-12`}>
      <div className="w-full md:w-1/2 aspect-video rounded-lg bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
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
      </div>

      <div className="w-full md:w-1/2 space-y-3">
        <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
          {title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          <span className="font-medium">기여도:</span> {role}
        </p>
        <ul className="flex flex-wrap gap-2 text-xs text-violet-500 font-medium">
          {techStack.map((tech) => (
            <li key={tech}>#{tech}</li>
          ))}
        </ul>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-violet-600 dark:text-violet-400 hover:underline"
          >
            프로젝트 바로가기
          </a>
        )}
      </div>
    </div>
  );
}
