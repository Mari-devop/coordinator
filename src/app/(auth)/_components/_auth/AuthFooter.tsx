"use client";
import { titleStyles } from "../../_styles/authStyles";
import AuthLink from "../../_components/_auth/AuthLink";

interface AuthFooterProps {
    text: string;
    linkText: string;
    linkHref: string;
    className?: string;
}

export default function AuthFooter({ text, linkText, linkHref, className = "" }: AuthFooterProps) {
    return (
        <div className={`mt-6 text-center ${className}`}>
            <p className={titleStyles.text}>
                {text}{" "}
                <AuthLink href={linkHref}>
                    {linkText}
                </AuthLink>
            </p>
        </div>
    );
}
