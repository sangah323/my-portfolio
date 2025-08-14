"use client";

import { useState } from "react";
import IssueCard from "./IssueCard";
import { ChevronDown, ChevronRight } from "lucide-react";

interface ToggleIssueCardProps {
  solution: string | string[];
  task: string | string[];
}

export default function ToggleIssueCard({
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
          <IssueCard solution={solution} task={task} />
        </div>
      )}
    </div>
  );
}
