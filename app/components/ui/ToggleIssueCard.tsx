"use client";

import { useState } from "react";
import IssueCard from "./IssueCard";
import { ChevronDown, ChevronRight } from "lucide-react";

interface ToggleIssueCardProps {
  issue: string[];
  solution: string[];
  task: string[];
}

export default function ToggleIssueCard({
  issue,
  solution,
  task,
}: ToggleIssueCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mt-4">
      <button
        className="flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-800 transition-colors"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
        {isOpen ? "내용 접기" : "해결 과정 보기"}
      </button>
      {isOpen && (
        <div className="mt-4">
          <IssueCard issue={issue} solution={solution} task={task} />
        </div>
      )}
    </div>
  );
}
