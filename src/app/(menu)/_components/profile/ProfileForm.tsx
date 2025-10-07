"use client";
import FormInput from "./FormInput";
import {
  profileSectionStyles,
  profileFormStyles,
} from "../../_styles/profileStyles";
import {
  sharedButtonStyles,
  sharedFormStyles,
} from "../../_styles/sharedStyles";

interface ProfileFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    password: string;
    confirmPassword: string;
  };
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile?: string;
    password?: string;
    confirmPassword?: string;
  };
  onInputChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
}

export default function ProfileForm({
  formData,
  errors,
  onInputChange,
  onSubmit,
  isLoading = false,
}: ProfileFormProps) {
  return (
    <section className={profileSectionStyles.container}>
      <h2 className={`${profileSectionStyles.title} mb-6 flex items-center`}>
        <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
          <svg
            className="w-4 h-4 text-blue-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        Personal Information
      </h2>

      <form onSubmit={onSubmit} className={profileFormStyles.form}>
        <div className={sharedFormStyles.grid}>
          <FormInput
            id="firstName"
            label="First Name"
            type="text"
            value={formData.firstName}
            onChange={(value) => onInputChange("firstName", value)}
            placeholder="Enter your first name"
            required
            error={errors.firstName}
          />
          <FormInput
            id="lastName"
            label="Last Name"
            type="text"
            value={formData.lastName}
            onChange={(value) => onInputChange("lastName", value)}
            placeholder="Enter your last name"
            required
            error={errors.lastName}
          />
        </div>

        <div className={sharedFormStyles.grid}>
          <FormInput
            id="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(value) => onInputChange("email", value)}
            placeholder="Enter your email"
            required
            error={errors.email}
          />
          <FormInput
            id="mobile"
            label="Mobile Number"
            type="tel"
            value={formData.mobile}
            onChange={(value) => onInputChange("mobile", value)}
            placeholder="Enter your mobile number"
            required
            error={errors.mobile}
          />
        </div>

        <div className="border-t border-[var(--borderColor)] pt-6">
          <h3 className="text-lg font-semibold text-[var(--fontColor)] mb-4">
            Change Password
          </h3>
          <div className={profileFormStyles.fieldGroup}>
            <FormInput
              id="password"
              label="New Password"
              type="password"
              value={formData.password}
              onChange={(value) => onInputChange("password", value)}
              placeholder="Enter new password"
              error={errors.password}
            />
            <FormInput
              id="confirmPassword"
              label="Confirm New Password"
              type="password"
              value={formData.confirmPassword}
              onChange={(value) => onInputChange("confirmPassword", value)}
              placeholder="Confirm new password"
              error={errors.confirmPassword}
            />
          </div>
        </div>

        <div className="flex justify-end pt-6 border-t border-[var(--borderColor)]">
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-3 font-medium rounded-lg ${sharedButtonStyles.primary} disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Updating...
              </div>
            ) : (
              "Update Profile"
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
