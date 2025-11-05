"use client";
import { managerModeStyles, toggleStyles } from "@/app/(menu)/_styles/settingsStyles";

interface ManagerModeSettingsProps {
  managerMode: boolean;
  onManagerModeChange: (checked: boolean) => void;
}

export default function ManagerModeSettings({
  managerMode,
  onManagerModeChange,
}: ManagerModeSettingsProps) {
  return (
    <div className={managerModeStyles.container}>
      <div className={managerModeStyles.item}>
        <div className={managerModeStyles.info}>
          <h3 className={managerModeStyles.title}>Manager Mode</h3>
          <h4 className={managerModeStyles.subtitle}>
            Enable advanced management features
          </h4>
          <p className={managerModeStyles.description}>
            If enabled, you can see and manage your co-workers list
          </p>
        </div>
        <label className={toggleStyles.container}>
          <input
            type="checkbox"
            checked={managerMode}
            onChange={(e) => onManagerModeChange(e.target.checked)}
            className={toggleStyles.input}
          />
          <div className={toggleStyles.switch}></div>
        </label>
      </div>
    </div>
  );
}
