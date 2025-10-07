"use client";
import { containerStyles } from "../_styles/authStyles";
import AuthCheckbox from "./AuthCheckbox";
import AuthLink from "./AuthLink";

interface RememberMeSectionProps {
    forgotPasswordHref?: string;
    className?: string;
}

export default function RememberMeSection({ 
    forgotPasswordHref = "/forgot-password", 
    className = "" 
}: RememberMeSectionProps) {
    return (
        <div className={`${containerStyles.approvedContainer} ${className}`}>
            <AuthCheckbox
                id="remember-me"
                name="remember-me"
                label="Remember me"
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
