"use client";

interface ToggleSwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label: string;
    description: string;
}

export default function ToggleSwitch({ checked, onChange, label, description }: ToggleSwitchProps) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex-1">
                <h4 className="text-base font-medium text-[var(--fontColor)] mb-1">{label}</h4>
                <p className="text-sm text-[var(--textSecondary)]">{description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--accentColor)]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--accentColor)]"></div>
            </label>
        </div>
    );
}
