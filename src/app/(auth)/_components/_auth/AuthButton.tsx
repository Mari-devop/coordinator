"use client";
import { buttonStyles } from "@/app/(auth)/_styles/authStyles";

interface AuthButtonProps {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

export default function AuthButton({
    type = "submit",
    children,
    onClick,
    disabled = false,
    className = ""
}: AuthButtonProps) {
    return (
        <button
            type={type}
            className={`${buttonStyles.button} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
