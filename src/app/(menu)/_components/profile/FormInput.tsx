"use client";
import { sharedInputStyles } from "../../_styles/sharedStyles";

interface FormInputProps {
    id: string;
    label: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    error?: string;
}

export default function FormInput({
    id,
    label,
    type,
    value,
    onChange,
    placeholder,
    required = false,
    error
}: FormInputProps) {
    return (
        <div>
            <label htmlFor={id} className={sharedInputStyles.label}>
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
                className={`${sharedInputStyles.base} ${
                    error ? sharedInputStyles.error : ''
                }`}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}
