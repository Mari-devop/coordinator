"use client";
import { checkboxStyles } from "@/app/(auth)/_styles/authStyles";

interface AuthCheckboxProps {
    id: string;
    name: string;
    label: React.ReactNode;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCheckedChange?: (checked: boolean) => void;
    required?: boolean;
    className?: string;
}

export default function AuthCheckbox({
    id,
    name,
    label,
    checked,
    onChange,
    onCheckedChange,
    required = false,
    className = ""
}: AuthCheckboxProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        }
        if (onCheckedChange) {
            onCheckedChange(e.target.checked);
        }
    };

    return (
        <div className={`${checkboxStyles.checkboxContainer} ${className}`}>
            <input
                id={id}
                name={name}
                type="checkbox"
                className={checkboxStyles.checkbox}
                checked={checked}
                onChange={handleChange}
                required={required}
            />
            <label htmlFor={id} className={checkboxStyles.label}>
                {label}
            </label>
        </div>
    );
}
