"use client";
import { useState } from "react";
import SettingsHeader from "../_components/settings/SettingsHeader";
import GeneralSettingsSection from "../_components/settings/GeneralSettingsSection";
import GoogleAdsSection from "../_components/profile/GoogleAdsSection";
import SaveButton from "../_components/profile/SaveButton";

export default function SettingsPage() {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [managerMode, setManagerMode] = useState(false);

    const handleSave = () => {
        console.log("Saving settings:", {
            emailNotifications,
            managerMode,
        });

        // Show success message
        alert("Settings saved successfully!");
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            <SettingsHeader />
            
            <GeneralSettingsSection
                emailNotifications={emailNotifications}
                managerMode={managerMode}
                onEmailNotificationsChange={setEmailNotifications}
                onManagerModeChange={setManagerMode}
            />
            
            <GoogleAdsSection />
            
            <SaveButton onSave={handleSave} />
        </div>
    );
}