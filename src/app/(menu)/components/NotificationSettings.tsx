"use client";
import ToggleSwitch from "./ToggleSwitch";

interface NotificationSettingsProps {
    emailNotifications: boolean;
    onEmailNotificationsChange: (checked: boolean) => void;
}

export default function NotificationSettings({ 
    emailNotifications, 
    onEmailNotificationsChange 
}: NotificationSettingsProps) {
    return (
        <div className="py-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications Preferences</h3>
            <ToggleSwitch
                checked={emailNotifications}
                onChange={onEmailNotificationsChange}
                label="Email Notifications"
                description="Receive important updates via email"
            />
        </div>
    );
}
