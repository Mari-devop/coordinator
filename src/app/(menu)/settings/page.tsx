"use client";
import { useState } from "react";
import { useToast } from "@/app/_contexts/ToastContext";
import SettingsHeader from "@/app/(menu)/_components/settings/SettingsHeader";
import GeneralSettingsSection from "@/app/(menu)/_components/settings/GeneralSettingsSection";
import GoogleAdsSection from "@/app/(menu)/_components/profile/GoogleAdsSection";
import SaveButton from "@/app/(menu)/_components/profile/SaveButton";

export default function SettingsPage() {
    const toast = useToast();
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [managerMode, setManagerMode] = useState(false);

    const handleSave = () => {
        toast.success("Settings saved successfully!");
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