"use client";
import EditableField from "./EditableField";
import ReadOnlyField from "./ReadOnlyField";
import Icon from "@/app/_components/icons/Icon";
import { ProfileSummaryProps } from "@/app/_types/profile";
import { profileStyles } from "@/app/(menu)/_styles/profileStyles";

export default function ProfileSummary({
    profileData,
    onFieldUpdate,
    errors
}: ProfileSummaryProps) {
    const { summary } = profileStyles;

    return (
        <section className={summary.container}>
            <h2 className={summary.title}>
                <span className={summary.titleIconContainer}>
                    <Icon
                        name="user"
                        className={summary.titleIcon}
                        width={16}
                        height={16}
                    />
                </span>
                Personal Information
            </h2>

            <div className={summary.fieldsGrid}>
                <EditableField
                    label="First Name"
                    value={profileData.firstName}
                    onSave={(value) => onFieldUpdate('firstName', value)}
                    required
                    error={errors.firstName}
                />
                <EditableField
                    label="Last Name"
                    value={profileData.lastName}
                    onSave={(value) => onFieldUpdate('lastName', value)}
                    required
                    error={errors.lastName}
                />
                <EditableField
                    label="Email Address"
                    value={profileData.email}
                    type="email"
                    onSave={(value) => onFieldUpdate('email', value)}
                    required
                    error={errors.email}
                />
                <EditableField
                    label="Mobile Number"
                    value={profileData.mobile}
                    type="tel"
                    onSave={(value) => onFieldUpdate('mobile', value)}
                    required
                    error={errors.mobile}
                />
                <ReadOnlyField
                    label="Role"
                    value={profileData.userType}
                />
            </div>
        </section>
    );
}
