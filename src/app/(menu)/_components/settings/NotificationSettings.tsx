"use client";
import ToggleSwitch from "@/app/(menu)/_components/shared/ToggleSwitch";
import { notificationStyles } from "@/app/(menu)/_styles/settingsStyles";

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
        Notifications
      </h3>
      <ToggleSwitch
        checked={emailNotifications}
        onChange={onEmailNotificationsChange}
        label="Email Notifications"
        description="Receive email notifications about important updates"
      />
    </div>
  );
}
