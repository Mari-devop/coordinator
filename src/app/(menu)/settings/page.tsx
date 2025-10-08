"use client";
import { useState } from "react";
import SettingsHeader from "../_components/settings/SettingsHeader";
import GeneralSettingsSection from "../_components/settings/GeneralSettingsSection";
import GoogleAdsSection from "../_components/profile/GoogleAdsSection";
import SaveButton from "../_components/profile/SaveButton";

//TODO: #4 Add the language selector here

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