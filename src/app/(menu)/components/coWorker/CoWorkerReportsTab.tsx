"use client";
import { coWorkerTabContentStyles } from "../../styles/coWorkerStyles";

export default function CoWorkerReportsTab() {
  return (
    <div className={coWorkerTabContentStyles.container}>
      <div className={coWorkerTabContentStyles.emptyState}>
        <h4 className={coWorkerTabContentStyles.emptyTitle}>Recent Reports</h4>
        <p className={coWorkerTabContentStyles.emptyDescription}>
          No recent reports available
        </p>
      </div>
    </div>
  );
}
