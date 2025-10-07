"use client";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import NotificationSettings from "./NotificationSettings";
import ManagerModeSettings from "./ManagerModeSettings";
import { settingsSectionStyles } from "../../_styles/settingsStyles";

interface GeneralSettingsSectionProps {
  language: string;
  emailNotifications: boolean;
  managerMode: boolean;
  onLanguageChange: (language: string) => void;
  onEmailNotificationsChange: (checked: boolean) => void;
  onManagerModeChange: (checked: boolean) => void;
}

export default function GeneralSettingsSection({
  language,
  emailNotifications,
  managerMode,
  onLanguageChange,
  onEmailNotificationsChange,
  onManagerModeChange,
}: GeneralSettingsSectionProps) {
  return (
    <section className={settingsSectionStyles.container}>
      <h2 className={settingsSectionStyles.title}>
        <span className={settingsSectionStyles.icon}>
          <svg
            className="w-4 h-4 text-blue-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        General Settings
      </h2>

      <div className={settingsSectionStyles.content}>
        <ThemeSelector />
        <LanguageSelector
          language={language}
          onLanguageChange={onLanguageChange}
        />
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
