interface IssueCardProps {
  solution: string | string[];
  task: string | string[];
}

export default function IssueCard({ solution, task }: IssueCardProps) {
  return (
    <section className="border-t border-zinc-200 dark:border-zinc-800 pt-4">
      <div>
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          해결방안
        </h4>
        {Array.isArray(solution) ? (
          <ul className="mt-2 list-decimal pl-5 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {solution.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {solution}
          </p>
        )}
      </div>
      <div className="pt-4">
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          향후 과제
        </h4>
        {Array.isArray(task) ? (
          <ul className="mt-2 list-decimal pl-5 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {task.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {task}
          </p>
        )}
      </div>
    </section>
  );
}
