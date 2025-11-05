"use client";
import { forwardRef } from "react";
import { inputStyles } from "@/app/(auth)/_styles/authStyles";

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

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(({
    id,
    label,
    type,
    placeholder,
    value,
    onChange,
    required = false,
    className = ""
}, ref) => {
    return (
        <div className={className}>
            <label htmlFor={id} className={inputStyles.label}>
                {label}
            </label>
            <input
                ref={ref}
                type={type}
                id={id}
                className={inputStyles.input}
                placeholder={placeholder}
                {...(value !== undefined && { value })}
                {...(onChange && { onChange })}
                required={required}
            />
        </div>
    );
});

AuthInput.displayName = "AuthInput";

export default AuthInput;
