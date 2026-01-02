"use client";
import { forwardRef, useState, useEffect } from "react";
import { inputStyles } from "@/app/(auth)/_styles/authStyles";
import Icon from "@/app/_components/icons/Icon";

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
    const [showPassword, setShowPassword] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    useEffect(() => {
        const checkTheme = () => {
            const theme = document.documentElement.getAttribute('data-theme');
            setIsDark(theme === 'dark');
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
        return () => observer.disconnect();
    }, []);

    return (
        <div className={className}>
            <label 
                htmlFor={id} 
                className={`${inputStyles.label} ${isDark ? 'dark:text-gray-200' : 'text-black'}`}
                style={{ color: isDark ? '#E5E7EB' : '#888888' }}
            >
                {label}
            </label>
            <div className={inputStyles.inputWrapper}>
                <input
                    ref={ref}
                    type={inputType}
                    id={id}
                    className={inputStyles.input}
                    placeholder={placeholder}
                    {...(value !== undefined && { value })}
                    {...(onChange && { onChange })}
                    required={required}
                />
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className={inputStyles.toggleButton}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        <Icon
                            name={showPassword ? "eye" : "eye-off"}
                            className={inputStyles.toggleIcon}
                            width={20}
                            height={20}
                        />
                    </button>
                )}
            </div>
        </div>
    );
});

AuthInput.displayName = "AuthInput";

export default AuthInput;
