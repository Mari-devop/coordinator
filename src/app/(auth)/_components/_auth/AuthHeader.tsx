"use client";
import { titleStyles } from "@/app/(auth)/_styles/authStyles";

interface AuthHeaderProps {
    title: string;
    subtitle?: string;
}

export default function AuthHeader({ title, subtitle }: AuthHeaderProps) {
    return (
        <div className={titleStyles.container}>
            <h1 className={titleStyles.title}>{title}</h1>
            {subtitle && <p className={titleStyles.subtitle}>{subtitle}</p>}
        </div>
    );
}
