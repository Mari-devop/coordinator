"use client";
import { inputStyles } from "../_styles/authStyles";

interface AuthInputProps {
    id: string;
    label: string;
    type: "text" | "email" | "password";
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    className?: string;
}

export default function AuthInput({
    id,
    label,
    type,
    placeholder,
    value,
    onChange,
    required = false,
    className = ""
}: AuthInputProps) {
    return (
        <div className={className}>
            <label htmlFor={id} className={inputStyles.label}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                className={inputStyles.input}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
}
