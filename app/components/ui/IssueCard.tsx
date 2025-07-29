interface IssueCardProps {
  issue: string;
  solution: string;
  task: string;
}

export default function IssueCard({ issue, solution, task }: IssueCardProps) {
  const formatLines = (text: string) =>
    text
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line, i) => (
        <li
          key={i}
          className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed"
        >
          {line.trim()}
        </li>
      ));

  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 shadow-sm w-full mt-4">
      <div className="flex flex-col w-full">
        <h4 className="text-md font-semibold text-purple-600">이슈</h4>
        <ul className="list-image-none list-inside">{formatLines(issue)}</ul>
      </div>
      <div className="flex flex-col w-full">
        <h4 className="text-md font-semibold text-purple-600">해결 방안</h4>
        <ul className="list-image-none list-inside">{formatLines(solution)}</ul>
      </div>
      <div className="flex flex-col w-full">
        <h4 className="text-md font-semibold text-purple-600">향후 과제</h4>
        <ul className="list-image-none list-inside">{formatLines(task)}</ul>
      </div>
    </div>
  );
}
