"use client";
import { coWorkerActionsStyles } from "../../styles/coWorkerStyles";

interface CoWorkerDetailActionsProps {
  coWorkerId: string;
  onClose: () => void;
  onViewReport: (coWorkerId: string) => void;
}

export default function CoWorkerDetailActions({
  coWorkerId,
  onClose,
  onViewReport,
}: CoWorkerDetailActionsProps) {
  return (
    <div className={coWorkerActionsStyles.container}>
      <button onClick={onClose} className={coWorkerActionsStyles.closeButton}>
        Close
      </button>
      <button
        onClick={() => onViewReport(coWorkerId)}
        className={coWorkerActionsStyles.primaryButton}
      >
        <svg
          className={coWorkerActionsStyles.buttonIcon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        Today&apos;s Report
      </button>
    </div>
  );
}
