"use client";
import FormInput from "./FormInput";
import Icon from "@/app/_components/icons/Icon";
import { ProfileFormProps } from "@/app/_types/profile";
import {
  profileSectionStyles,
  profileFormStyles,
  profileStyles,
} from "@/app/(menu)/_styles/profileStyles";
import {
  sharedButtonStyles,
  sharedFormStyles,
} from "@/app/(menu)/_styles/sharedStyles";

export default function ProfileForm({
  formData,
  errors,
  onInputChange,
  onSubmit,
  isLoading = false,
}: ProfileFormProps) {
  const { formSection } = profileStyles;

  return (
    <section className={profileSectionStyles.container}>
      <h2 className={formSection.title}>
        <span className={formSection.titleIconContainer}>
          <Icon
            name="user"
            className={formSection.titleIcon}
            width={16}
            height={16}
          />
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

        <div className={formSection.passwordSection}>
          <h3 className={formSection.passwordTitle}>
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

        <div className={formSection.actions}>
          <button
            type="submit"
            disabled={isLoading}
            className={`${sharedButtonStyles.primary} ${formSection.submitButton}`}
          >
            {isLoading ? (
              <div className={formSection.loadingWrapper}>
                <Icon
                  name="spinner"
                  className={formSection.spinner}
                  width={20}
                  height={20}
                />
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
