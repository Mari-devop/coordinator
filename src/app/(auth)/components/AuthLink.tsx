"use client";
import { linkStyles } from "../styles/authStyles";

interface AuthLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function AuthLink({ href, children, className = "" }: AuthLinkProps) {
    return (
        <a href={href} className={`${linkStyles.link} ${className}`}>
            {children}
        </a>
    );
}
