"use client";
import { sharedButtonStyles } from "../../_styles/sharedStyles";

interface SaveButtonProps {
  onSave?: () => void;
  disabled?: boolean;
}

export default function SaveButton({
  onSave,
  disabled = false,
}: SaveButtonProps) {
  return (
    <div className="flex justify-end pt-6 border-t border-[var(--borderColor)]">
      <button
        onClick={onSave}
        disabled={disabled}
        className={`px-6 py-3 font-medium rounded-lg ${sharedButtonStyles.primary} disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        Save Changes
      </button>
    </div>
  );
}
