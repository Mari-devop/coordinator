"use client";
import { useState } from "react";
import { CoWorker } from "@/app/types/profile";
import CoWorkerDetailHeader from "./CoWorkerDetailHeader";
import CoWorkerDetailTabs from "./CoWorkerDetailTabs";
import CoWorkerOverviewTab from "./CoWorkerOverviewTab";
import CoWorkerReportsTab from "./CoWorkerReportsTab";
import CoWorkerActivityTab from "./CoWorkerActivityTab";
import CoWorkerDetailActions from "./CoWorkerDetailActions";
import { coWorkerDetailStyles } from "../../styles/coWorkerStyles";

interface CoWorkerDetailViewProps {
  coWorker: CoWorker | null;
  onViewReport: (coWorkerId: string) => void;
  onClose: () => void;
}

export default function CoWorkerDetailView({
  coWorker,
  onViewReport,
  onClose,
}: CoWorkerDetailViewProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "reports" | "activity"
  >("overview");

  if (!coWorker) return null;

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <CoWorkerOverviewTab coWorker={coWorker} />;
      case "reports":
        return <CoWorkerReportsTab />;
      case "activity":
        return <CoWorkerActivityTab />;
      default:
        return <CoWorkerOverviewTab coWorker={coWorker} />;
    }
  };

  return (
    <div className={coWorkerDetailStyles.container}>
      <CoWorkerDetailHeader coWorker={coWorker} onClose={onClose} />

      <CoWorkerDetailTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="space-y-6">{renderTabContent()}</div>

      <CoWorkerDetailActions
        coWorkerId={coWorker.id}
        onClose={onClose}
        onViewReport={onViewReport}
      />
    </div>
  );
}
