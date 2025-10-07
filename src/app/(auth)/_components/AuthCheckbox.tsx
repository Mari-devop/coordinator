"use client";
import { checkboxStyles } from "../_styles/authStyles";

interface AuthCheckboxProps {
    id: string;
    name: string;
    label: React.ReactNode;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    className?: string;
}

export default function AuthCheckbox({
    id,
    name,
    label,
    checked,
    onChange,
    required = false,
    className = ""
}: AuthCheckboxProps) {
    return (
        <div className={`${checkboxStyles.checkboxContainer} ${className}`}>
            <input
                id={id}
                name={name}
                type="checkbox"
                className={checkboxStyles.checkbox}
                checked={checked}
                onChange={onChange}
                required={required}
            />
            <label htmlFor={id} className={checkboxStyles.label}>
                {label}
            </label>
        </div>
    );
}
