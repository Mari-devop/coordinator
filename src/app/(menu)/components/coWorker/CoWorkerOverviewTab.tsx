"use client";
import { CoWorker } from "@/app/types/profile";
import { getStatusColor } from "@/app/_lib/co-worker.utils";
import { coWorkerTabContentStyles } from "../../styles/coWorkerStyles";

interface CoWorkerOverviewTabProps {
  coWorker: CoWorker;
}

export default function CoWorkerOverviewTab({
  coWorker,
}: CoWorkerOverviewTabProps) {
  return (
    <div className={coWorkerTabContentStyles.container}>
      <div className={coWorkerTabContentStyles.grid}>
        <div className={coWorkerTabContentStyles.field}>
          <label className={coWorkerTabContentStyles.label}>Department</label>
          <p className={coWorkerTabContentStyles.value}>
            {coWorker.department || "Not specified"}
          </p>
        </div>
        <div className={coWorkerTabContentStyles.field}>
          <label className={coWorkerTabContentStyles.label}>Phone</label>
          <p className={coWorkerTabContentStyles.value}>
            {coWorker.phone || "Not provided"}
          </p>
        </div>
        <div className={coWorkerTabContentStyles.field}>
          <label className={coWorkerTabContentStyles.label}>Join Date</label>
          <p className={coWorkerTabContentStyles.value}>
            {coWorker.joinDate || "Unknown"}
          </p>
        </div>
        <div className={coWorkerTabContentStyles.field}>
          <label className={coWorkerTabContentStyles.label}>Status</label>
          <div className={coWorkerTabContentStyles.statusContainer}>
            <div
              className={`${
                coWorkerTabContentStyles.statusDot
              } ${getStatusColor(coWorker.status)}`}
            ></div>
            <span className={coWorkerTabContentStyles.value}>
              {coWorker.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
