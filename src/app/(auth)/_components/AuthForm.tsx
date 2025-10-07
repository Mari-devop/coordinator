"use client";
import { formStyles } from "../_styles/authStyles";

interface AuthFormProps {
    children: React.ReactNode;
    onSubmit?: (e: React.FormEvent) => void;
    className?: string;
}

export default function AuthForm({ children, onSubmit, className = "" }: AuthFormProps) {
    return (
        <form className={`${formStyles.form} ${className}`} onSubmit={onSubmit}>
            {children}
        </form>
    );
}
