"use client";
import { coWorkerTabsStyles } from "../../styles/coWorkerStyles";

interface Tab {
  id: "overview" | "reports" | "activity";
  label: string;
  icon: string;
}

interface CoWorkerDetailTabsProps {
  activeTab: "overview" | "reports" | "activity";
  onTabChange: (tab: "overview" | "reports" | "activity") => void;
}

const tabs: Tab[] = [
  { id: "overview", label: "Overview", icon: "👤" },
  { id: "reports", label: "Reports", icon: "📊" },
  { id: "activity", label: "Activity", icon: "📈" },
];

export default function CoWorkerDetailTabs({
  activeTab,
  onTabChange,
}: CoWorkerDetailTabsProps) {
  return (
    <div className={coWorkerTabsStyles.container}>
      <nav className={coWorkerTabsStyles.nav}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`${coWorkerTabsStyles.tab} ${
              activeTab === tab.id
                ? coWorkerTabsStyles.tabActive
                : coWorkerTabsStyles.tabInactive
            }`}
          >
            <span className={coWorkerTabsStyles.tabIcon}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
