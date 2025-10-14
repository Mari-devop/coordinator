"use client";
import { useState, useEffect } from "react";
import NotificationSettings from "./NotificationSettings";
import ManagerModeSettings from "./ManagerModeSettings";
import { settingsSectionStyles } from "../../_styles/settingsStyles";

interface GeneralSettingsSectionProps {
  emailNotifications: boolean;
  managerMode: boolean;
  onEmailNotificationsChange: (checked: boolean) => void;
  onManagerModeChange: (checked: boolean) => void;
}

// Working Theme Selector Component
function WorkingThemeSelector() {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const systemTheme = prefersDark ? "dark" : "light";
      setTheme(systemTheme);
      document.documentElement.setAttribute("data-theme", systemTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-[var(--borderColor)]">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-[var(--fontColor)] mb-1">
          Theme
        </h3>
        <p className="text-sm text-[var(--textSecondary)]">
          Choose your preferred color scheme
        </p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => handleThemeChange("light")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
            theme === "light"
              ? "bg-[var(--secondaryBackground)] text-white"
              : "bg-[var(--hoverBackground)] text-[var(--fontColor)] hover:bg-[var(--borderColor)]"
          }`}
        >
          ☀️ Light
        </button>
        <button
          onClick={() => handleThemeChange("dark")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
            theme === "dark"
              ? "bg-[var(--secondaryBackground)] text-white"
              : "bg-[var(--hoverBackground)] text-[var(--fontColor)] hover:bg-[var(--borderColor)]"
          }`}
        >
          🌙 Dark
        </button>
      </div>
    </div>
  );
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
