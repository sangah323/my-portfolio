interface IssueCardProps {
  issue: string[];
  solution: string[];
  task: string[];
}

export default function IssueCard({ issue, solution, task }: IssueCardProps) {
  return (
    <section className="border-t border-zinc-200 dark:border-zinc-800 pt-4">
      <div>
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          이슈
        </h4>
        {Array.isArray(issue) ? (
          <ul className="mt-1 list-decimal pl-5 space-y-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {issue.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {issue}
          </p>
        )}
      </div>
      <div className="pt-4">
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          해결방안
        </h4>
        {Array.isArray(solution) ? (
          <ul className="mt-1 list-decimal pl-5 space-y-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {solution.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {solution}
          </p>
        )}
      </div>
      <div className="pt-4">
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          향후 과제
        </h4>
        {Array.isArray(task) ? (
          <ul className="mt-1 list-decimal pl-5 space-y-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {task.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {task}
          </p>
        )}
      </div>
    </section>
  );
}
