"use client";
import { containerStyles } from "../styles/authStyles";

interface AuthContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function AuthContainer({ children, className = "" }: AuthContainerProps) {
    return (
        <div className={`${containerStyles.container} ${className}`}>
            {children}
        </div>
    );
}
