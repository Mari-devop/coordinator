"use client";
import { useState } from "react";
import ProfileHeader from "../_components/profile/ProfileHeader";
import ProfileSummary from "../_components/profile/ProfileSummary";
import PasswordChangeSection from "../_components/profile/PasswordChangeSection";

export default function ProfilePage() {
    const [isLoading, setIsLoading] = useState(false);
    const [profileData, setProfileData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        mobile: "+1 (555) 123-4567",
    });

    const [errors, setErrors] = useState<{
        firstName?: string;
        lastName?: string;
        email?: string;
        mobile?: string;
    }>({});

    const validateField = (field: string, value: string) => {
        const newErrors = { ...errors };

        switch (field) {
            case 'firstName':
                if (!value.trim()) {
                    newErrors.firstName = "First name is required";
                } else if (value.trim().length < 2) {
                    newErrors.firstName = "First name must be at least 2 characters";
                } else {
                    delete newErrors.firstName;
                }
                break;
            case 'lastName':
                if (!value.trim()) {
                    newErrors.lastName = "Last name is required";
                } else if (value.trim().length < 2) {
                    newErrors.lastName = "Last name must be at least 2 characters";
                } else {
                    delete newErrors.lastName;
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    newErrors.email = "Email is required";
                } else if (!emailRegex.test(value)) {
                    newErrors.email = "Please enter a valid email address";
                } else {
                    delete newErrors.email;
                }
                break;
            case 'mobile':
                const mobileRegex = /^[\+]?[1-9][\d]{0,15}$/;
                if (!value) {
                    newErrors.mobile = "Mobile number is required";
                } else if (!mobileRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                    newErrors.mobile = "Please enter a valid mobile number";
                } else {
                    delete newErrors.mobile;
                }
                break;
        }

        setErrors(newErrors);
        return !newErrors[field as keyof typeof newErrors];
    };

    const handleFieldUpdate = async (field: string, value: string) => {
        if (!validateField(field, value)) {
            return;
        }

        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setProfileData(prev => ({
                ...prev,
                [field]: value,
            }));

            console.log(`Updated ${field}:`, value);
            
            alert(`${field.charAt(0).toUpperCase() + field.slice(1)} updated successfully!`);

        } catch (error) {
            console.error(`Error updating ${field}:`, error);
            alert(`Failed to update ${field}. Please try again.`);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePasswordChange = async (currentPassword: string, newPassword: string) => {
        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            console.log("Password changed successfully");
            alert("Password updated successfully!");

        } catch (error) {
            console.error("Error changing password:", error);
            alert("Failed to update password. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
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