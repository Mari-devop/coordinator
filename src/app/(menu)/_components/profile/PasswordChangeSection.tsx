"use client";
import { useState } from "react";
import FormInput from "./FormInput";
import { profileSectionStyles } from "../../_styles/profileStyles";
import { sharedButtonStyles } from "../../_styles/sharedStyles";

interface PasswordChangeSectionProps {
    onPasswordChange: (currentPassword: string, newPassword: string) => void;
    isLoading?: boolean;
}

export default function PasswordChangeSection({ 
    onPasswordChange, 
    isLoading = false 
}: PasswordChangeSectionProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState<{
        currentPassword?: string;
        newPassword?: string;
        confirmPassword?: string;
    }>({});

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));

        if (errors[field as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [field]: undefined,
            }));
        }
    };

    const validateForm = () => {
        const newErrors: typeof errors = {};

        if (!formData.currentPassword) {
            newErrors.currentPassword = "Current password is required";
        }

        if (!formData.newPassword) {
            newErrors.newPassword = "New password is required";
        } else if (formData.newPassword.length < 8) {
            newErrors.newPassword = "Password must be at least 8 characters long";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.newPassword)) {
            newErrors.newPassword = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
        }

        if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        onPasswordChange(formData.currentPassword, formData.newPassword);
        
        setFormData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
        setErrors({});
        setIsExpanded(false);
    };

    return (
        <section className={profileSectionStyles.container}>
            <div className={profileSectionStyles.header}>
                <h2 className={`${profileSectionStyles.title} flex items-center`}>
                    <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    Security
                </h2>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="px-4 py-2 text-sm font-medium text-[var(--accentColor)] hover:text-[var(--lightAccentColor)] transition-colors duration-200"
                >
                    {isExpanded ? 'Cancel' : 'Change Password'}
                </button>
            </div>

            {!isExpanded ? (
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                        <h3 className="font-medium text-gray-900">Password</h3>
                        <p className="text-sm text-gray-600">Last updated 3 months ago</p>
                    </div>
                    <span className="text-sm text-gray-500">••••••••</span>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <FormInput
                        id="currentPassword"
                        label="Current Password"
                        type="password"
                        value={formData.currentPassword}
                        onChange={(value) => handleInputChange('currentPassword', value)}
                        placeholder="Enter your current password"
                        required
                        error={errors.currentPassword}
                    />
                    <FormInput
                        id="newPassword"
                        label="New Password"
                        type="password"
                        value={formData.newPassword}
                        onChange={(value) => handleInputChange('newPassword', value)}
                        placeholder="Enter new password"
                        required
                        error={errors.newPassword}
                    />
                    <FormInput
                        id="confirmPassword"
                        label="Confirm New Password"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(value) => handleInputChange('confirmPassword', value)}
                        placeholder="Confirm new password"
                        required
                        error={errors.confirmPassword}
                    />
                    <div className="flex justify-end space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={() => setIsExpanded(false)}
                            className={sharedButtonStyles.secondary}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`${sharedButtonStyles.primary} disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            {isLoading ? 'Updating...' : 'Update Password'}
                        </button>
                    </div>
                </form>
            )}
        </section>
    );
}
