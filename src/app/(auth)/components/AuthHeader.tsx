"use client";
import { titleStyles } from "../styles/authStyles";

interface AuthHeaderProps {
    title: string;
    subtitle: string;
}

export default function AuthHeader({ title, subtitle }: AuthHeaderProps) {
    return (
        <div className={titleStyles.container}>
            <h1 className={titleStyles.title}>{title}</h1>
            <p className={titleStyles.subtitle}>{subtitle}</p>
        </div>
    );
}
