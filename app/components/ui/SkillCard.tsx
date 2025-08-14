"use client";

export default function SkillCard({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className="group rounded-xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3.5 py-3
                 transition-all duration-150 flex items-center justify-around"
      tabIndex={0}
    >
      <div className="grid place-items-center h-9 w-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
        <span className="text-2xl leading-none">{icon}</span>
      </div>
      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100 truncate">
        {label}
      </span>
    </div>
  );
}
