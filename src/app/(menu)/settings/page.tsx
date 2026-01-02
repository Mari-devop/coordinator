"use client";
import { useState, useEffect } from "react";
import { useToast } from "@/app/_contexts/ToastContext";
import SettingsHeader from "@/app/(menu)/_components/settings/SettingsHeader";
import GeneralSettingsSection from "@/app/(menu)/_components/settings/GeneralSettingsSection";
import GoogleAdsSection from "@/app/(menu)/_components/profile/GoogleAdsSection";
import SaveButton from "@/app/(menu)/_components/settings/SaveButton";
import { settingsApi } from "@/app/_lib/api/settings";

export default function SettingsPage() {
    const toast = useToast();
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [managerMode, setManagerMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isInitialLoading, setIsInitialLoading] = useState(true);

    useEffect(() => {
        const loadSettings = async () => {
            try {
                const settings = await settingsApi.getSettings();
                setEmailNotifications(settings.emailNotifications);
                setManagerMode(settings.managerMode);
            } catch {
                toast.error("Failed to load settings");
            } finally {
                setIsInitialLoading(false);
            }
        };

        loadSettings();
    }, [toast]);

    const handleSave = async () => {
        setIsLoading(true);
        try {
            await settingsApi.updateSettings({
                emailNotifications,
                managerMode,
            });
            toast.success("Settings saved successfully!");
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An error occurred";
            toast.error(`Failed to save settings: ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
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
            
            <SaveButton onSave={handleSave} isLoading={isLoading} disabled={isInitialLoading} />
        </div>
    );
}