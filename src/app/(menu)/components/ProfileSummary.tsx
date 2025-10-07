"use client";
import EditableField from "./EditableField";

interface ProfileSummaryProps {
    profileData: {
        firstName: string;
        lastName: string;
        email: string;
        mobile: string;
    };
    onFieldUpdate: (field: string, value: string) => void;
    errors: {
        firstName?: string;
        lastName?: string;
        email?: string;
        mobile?: string;
    };
}

export default function ProfileSummary({
    profileData,
    onFieldUpdate,
    errors
}: ProfileSummaryProps) {
    return (
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </span>
                Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>
        </section>
    );
}
