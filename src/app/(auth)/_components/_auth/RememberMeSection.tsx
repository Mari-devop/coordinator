"use client";
import { containerStyles } from "@/app/(auth)/_styles/authStyles";
import AuthCheckbox from "./AuthCheckbox";
import AuthLink from "./AuthLink";

interface RememberMeSectionProps {
    forgotPasswordHref?: string;
    className?: string;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}

export default function RememberMeSection({ 
    forgotPasswordHref = "/forgot-password", 
    className = "",
    checked = false,
    onCheckedChange,
}: RememberMeSectionProps) {
    return (
        <div className={`${containerStyles.approvedContainer} ${className}`}>
            <AuthCheckbox
                id="remember-me"
                name="remember-me"
                label="Remember me"
                checked={checked}
                onCheckedChange={onCheckedChange}
            />
            
            {forgotPasswordHref && (
                <div className={containerStyles.linkContainer}>
                    <AuthLink href={forgotPasswordHref}>
                        Forgot your password?
                    </AuthLink>
                </div>
            )}
        </div>
    );
}
