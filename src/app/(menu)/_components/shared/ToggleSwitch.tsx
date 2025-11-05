"use client";
import { toggleStyles } from "@/app/(menu)/_styles/settingsStyles";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  description: string;
  disabled?: boolean;
  className?: string;
}

export default function ToggleSwitch({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  className = "",
}: ToggleSwitchProps) {
  return (
    <div className={className}>
      <div className={toggleStyles.wrapper}>
        <div className={toggleStyles.content}>
          <h4 className={toggleStyles.label}>
            {label}
          </h4>
          <p className={toggleStyles.description}>{description}</p>
        </div>
        <label className={toggleStyles.container}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            disabled={disabled}
            className={toggleStyles.input}
          />
          <div className={toggleStyles.switch}></div>
        </label>
      </div>
    </div>
  );
}
