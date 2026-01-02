"use client";
import { useState, useEffect } from "react";
import { profileApi, type ProfileData } from "@/app/_lib/api/profile";
import { validateProfileField } from "@/app/_lib/validations";
import { type ProfileFieldErrors } from "@/app/_types/profile";
import { useToast } from "@/app/_contexts/ToastContext";
import { profileStyles } from "@/app/(menu)/_styles/profileStyles";
import ProfileHeader from "@/app/(menu)/_components/profile/ProfileHeader";
import ProfileSummary from "@/app/(menu)/_components/profile/ProfileSummary";
import PasswordChangeSection from "@/app/(menu)/_components/profile/PasswordChangeSection";


export default function ProfilePage() {
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [profileData, setProfileData] = useState<ProfileData>({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        userType: null,
    });

    const [errors, setErrors] = useState<ProfileFieldErrors>({});

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                setIsInitialLoading(true);
                const data = await profileApi.getProfile();
                setProfileData(data);
            } catch {
                toast.error("Failed to load profile data. Please refresh the page.");
            } finally {
                setIsInitialLoading(false);
            }
        };

        fetchProfileData();
    }, []);

    const validateField = (field: string, value: string) => {
        const error = validateProfileField(field, value);
        const newErrors = { ...errors };
        
        if (error) {
            newErrors[field as keyof ProfileFieldErrors] = error;
        } else {
            delete newErrors[field as keyof ProfileFieldErrors];
        }
        
        setErrors(newErrors);
        return !error;
    };

    const handleFieldUpdate = async (field: string, value: string) => {
        if (!validateField(field, value)) {
            return;
        }

        setIsLoading(true);

        try {
            const updatedData = await profileApi.updateProfile(field, value);
            setProfileData(updatedData);
            toast.success(`${field.charAt(0).toUpperCase() + field.slice(1)} updated successfully!`);
        } catch (error) {
            console.error(`Error updating ${field}:`, error);
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            toast.error(`Failed to update ${field}: ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePasswordChange = async (currentPassword: string, newPassword: string) => {
        setIsLoading(true);

        try {
            await profileApi.changePassword(currentPassword, newPassword);
            toast.success("Password updated successfully!");
        } catch (error) {
            console.error("Error changing password:", error);
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            toast.error(`Failed to update password: ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    };

    const { loading, container } = profileStyles;

    if (isInitialLoading) {
        return (
            <div className={loading.container}>
                <div className={loading.loadingWrapper}>
                    <div className={loading.loadingContent}>
                        <div className={loading.spinner}></div>
                        <p className={loading.text}>Loading profile data...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={container.container}>
            <ProfileHeader />
            
            <ProfileSummary
                profileData={profileData}
                onFieldUpdate={handleFieldUpdate}
                errors={errors}
            />
            
            <PasswordChangeSection
                onPasswordChange={handlePasswordChange}
                isLoading={isLoading}
            />
        </div>
    );
}