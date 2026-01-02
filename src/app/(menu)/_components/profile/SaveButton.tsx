"use client";
import { sharedButtonStyles } from "@/app/(menu)/_styles/sharedStyles";
import { profileStyles } from "@/app/(menu)/_styles/profileStyles";

interface SaveButtonProps {
  onSave?: () => void;
  disabled?: boolean;
}

export default function SaveButton({
  onSave,
  disabled = false,
}: SaveButtonProps) {
  const { saveButton } = profileStyles;

  return (
    <div className={saveButton.container}>
      <button
        onClick={onSave}
        disabled={disabled}
        className={`${sharedButtonStyles.primary} ${saveButton.button}`}
      >
        Save Settings
      </button>
    </div>
  );
}
