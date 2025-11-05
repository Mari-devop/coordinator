"use client";
import { containerStyles, mobileStyles } from "@/app/(auth)/_styles/authStyles";

interface AuthContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function AuthContainer({ children, className = "" }: AuthContainerProps) {
    return (
        <div className={`mobile-container ${mobileStyles.container} ${className}`}>
            <div className={`auth-form-container ${containerStyles.container}`}>
                {children}
            </div>
        </div>
    );
}
