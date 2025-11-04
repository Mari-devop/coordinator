"use client";
import { settingsHeaderStyles } from "@/app/(menu)/_styles/settingsStyles";

export default function SettingsHeader() {
  return (
    <div
      className={`${settingsHeaderStyles.container} border-b border-[var(--borderColor)] pb-6`}
    >
      <h1 className={settingsHeaderStyles.title}>⚙️ Settings</h1>
      <p className={settingsHeaderStyles.subtitle}>
        Manage your account preferences and application settings
      </p>
    </div>
  );
}
