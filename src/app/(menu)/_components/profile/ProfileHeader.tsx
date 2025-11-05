import { profileHeaderStyles } from "@/app/(menu)/_styles/profileStyles";

export default function ProfileHeader() {
  return (
    <div
      className={`${profileHeaderStyles.container} border-b border-[var(--borderColor)] pb-6`}
    >
      <h1 className={profileHeaderStyles.title}>👤 Profile</h1>
      <p className={profileHeaderStyles.subtitle}>
        Manage your personal information and account details
      </p>
    </div>
  );
}
