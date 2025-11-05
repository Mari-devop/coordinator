"use client";
import Icon from "@/app/_components/icons/Icon";
import { saveButtonStyles } from "@/app/(menu)/_styles/settingsStyles";

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
        <Icon
          name="check"
          className={saveButtonStyles.icon}
          width={20}
          height={20}
        />
        {isLoading ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}
