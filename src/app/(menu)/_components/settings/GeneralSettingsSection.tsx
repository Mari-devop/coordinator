"use client";
import Icon from "@/app/_components/icons/Icon";
import NotificationSettings from "./NotificationSettings";
import ManagerModeSettings from "./ManagerModeSettings";
import WorkingThemeSelector from "./WorkingThemeSelector";
import { settingsSectionStyles } from "@/app/(menu)/_styles/settingsStyles";

interface GeneralSettingsSectionProps {
  emailNotifications: boolean;
  managerMode: boolean;
  onEmailNotificationsChange: (checked: boolean) => void;
  onManagerModeChange: (checked: boolean) => void;
}

export default function GeneralSettingsSection({
  emailNotifications,
  managerMode,
  onEmailNotificationsChange,
  onManagerModeChange,
}: GeneralSettingsSectionProps) {
  return (
    <section className={settingsSectionStyles.container}>
      <h2 className={settingsSectionStyles.title}>
        <span className={settingsSectionStyles.icon}>
          <Icon
            name="settings"
            className="w-4 h-4 text-blue-600"
            width={16}
            height={16}
          />
        </span>
        General Settings
      </h2>

      <div className={settingsSectionStyles.content}>
        <WorkingThemeSelector />
        <NotificationSettings
          emailNotifications={emailNotifications}
          onEmailNotificationsChange={onEmailNotificationsChange}
        />
        <ManagerModeSettings
          managerMode={managerMode}
          onManagerModeChange={onManagerModeChange}
        />
      </div>
    </section>
  );
}
