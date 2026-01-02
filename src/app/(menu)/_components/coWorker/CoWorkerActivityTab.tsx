"use client";
import { coWorkerTabContentStyles } from "@/app/(menu)/_styles/coWorkerStyles";

export default function CoWorkerActivityTab() {
  return (
    <div className={coWorkerTabContentStyles.container}>
      <div className={coWorkerTabContentStyles.emptyState}>
        <h4 className={coWorkerTabContentStyles.emptyTitle}>Recent Activity</h4>
        <p className={coWorkerTabContentStyles.emptyDescription}>
          No recent activity to show
        </p>
      </div>
    </div>
  );
}
