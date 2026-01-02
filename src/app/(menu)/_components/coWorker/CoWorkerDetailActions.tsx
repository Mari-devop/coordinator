"use client";
import { coWorkerActionsStyles } from "@/app/(menu)/_styles/coWorkerStyles";
import Icon from "@/app/_components/icons/Icon";

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
        <Icon
          name="chart-bar"
          className={coWorkerActionsStyles.buttonIcon}
        />
        Today&apos;s Report
      </button>
    </div>
  );
}
