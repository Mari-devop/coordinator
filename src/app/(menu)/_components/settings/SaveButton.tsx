"use client";
import { saveButtonStyles } from "../../_styles/settingsStyles";

interface SaveButtonProps {
  onSave: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export default function SaveButton({
  onSave,
  isLoading = false,
  disabled = false,
}: SaveButtonProps) {
  return (
    <div className={saveButtonStyles.container}>
      <button
        onClick={onSave}
        disabled={disabled || isLoading}
        className={saveButtonStyles.button}
      >
        <svg
          className={saveButtonStyles.icon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        {isLoading ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}
