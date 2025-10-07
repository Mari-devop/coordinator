"use client";
import ToggleSwitch from "../shared/ToggleSwitch";
import { notificationStyles } from "../../_styles/settingsStyles";

interface NotificationSettingsProps {
  emailNotifications: boolean;
  onEmailNotificationsChange: (checked: boolean) => void;
}

export default function NotificationSettings({
  emailNotifications,
  onEmailNotificationsChange,
}: NotificationSettingsProps) {
  return (
    <div className={notificationStyles.container}>
      <h3 className="text-lg font-semibold text-[var(--fontColor)] mb-4">
        Notifications Preferences
      </h3>
      <ToggleSwitch
        checked={emailNotifications}
        onChange={onEmailNotificationsChange}
        label="Email Notifications"
        description="Receive important updates via email"
      />
    </div>
  );
}
