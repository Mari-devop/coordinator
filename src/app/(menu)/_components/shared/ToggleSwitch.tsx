"use client";
import { toggleStyles } from "../../_styles/settingsStyles";

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
    <div className={`${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h4 className="text-base font-medium text-[var(--fontColor)] mb-1">
            {label}
          </h4>
          <p className="text-sm text-[var(--textSecondary)]">{description}</p>
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
