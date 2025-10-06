"use client";
import { useState } from "react";
import SettingsHeader from "../components/SettingsHeader";
import GeneralSettingsSection from "../components/GeneralSettingsSection";
import GoogleAdsSection from "../components/GoogleAdsSection";
import SaveButton from "../components/SaveButton";

export default function SettingsPage() {
    const [language, setLanguage] = useState("en");
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [managerMode, setManagerMode] = useState(false);

    const handleSave = () => {
        console.log("Saving settings:", {
            language,
            emailNotifications,
            managerMode,
        });

        //TODO: Add a toast notification here
        alert("Settings saved successfully!");
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            <SettingsHeader />
            
            <GeneralSettingsSection
                language={language}
                emailNotifications={emailNotifications}
                managerMode={managerMode}
                onLanguageChange={setLanguage}
                onEmailNotificationsChange={setEmailNotifications}
                onManagerModeChange={setManagerMode}
            />
            
            <GoogleAdsSection />
            
            <SaveButton onSave={handleSave} />
        </div>
    );
}