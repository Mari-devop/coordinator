"use client";
import { useState } from "react";
import FormInput from "./FormInput";
import Icon from "@/app/_components/icons/Icon";
import { passwordChangeSchema, validatePasswordChangeField } from "@/app/_lib/validations";
import { profileSectionStyles, profileStyles } from "@/app/(menu)/_styles/profileStyles";
import { sharedButtonStyles } from "@/app/(menu)/_styles/sharedStyles";

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

        const error = validatePasswordChangeField(field, value, { ...formData, [field]: value });
        setErrors(prev => ({
            ...prev,
            [field]: error,
        }));
    };

    const validateForm = () => {
        const result = passwordChangeSchema.safeParse(formData);
        
        if (!result.success) {
            const newErrors: typeof errors = {};
            result.error.issues.forEach((issue) => {
                const field = issue.path[0] as keyof typeof errors;
                if (field) {
                    newErrors[field] = issue.message;
                }
            });
            setErrors(newErrors);
            return false;
        }

        setErrors({});
        return true;
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

    const { passwordChange } = profileStyles;

    return (
        <section className={profileSectionStyles.container}>
            <div className={profileSectionStyles.header}>
                <h2 className={passwordChange.title}>
                    <span className={passwordChange.titleIconContainer}>
                        <Icon
                            name="lock"
                            className={passwordChange.titleIcon}
                            width={16}
                            height={16}
                        />
                    </span>
                    Security
                </h2>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={passwordChange.toggleButton}
                >
                    {isExpanded ? 'Cancel' : 'Change Password'}
                </button>
            </div>

            {!isExpanded ? (
                <div className={passwordChange.collapsedState}>
                    <div className={passwordChange.collapsedContent}>
                        <h3 className={passwordChange.collapsedTitle}>Password</h3>
                        <p className={passwordChange.collapsedSubtitle}>Last updated 3 months ago</p>
                    </div>
                    <span className={passwordChange.collapsedMask}>••••••••</span>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className={passwordChange.form}>
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
                    <div className={passwordChange.actions}>
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
                            className={`${sharedButtonStyles.primary} ${passwordChange.submitButton}`}
                        >
                            {isLoading ? 'Updating...' : 'Update Password'}
                        </button>
                    </div>
                </form>
            )}
        </section>
    );
}
