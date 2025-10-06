"use client";
import { cn } from "@/app/_lib/cn";
import { baseStyles, componentVariants } from "./styles";

interface StyledButtonProps {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function StyledButton({ 
    variant = 'primary', 
    size = 'md', 
    disabled = false,
    children,
    className,
    onClick,
    ...props 
}: StyledButtonProps) {
    return (
        <button
            className={cn(
                baseStyles.button,
                
                {
                    [baseStyles.buttonPrimary]: variant === 'primary',
                    [baseStyles.buttonSecondary]: variant === 'secondary',
                    [baseStyles.buttonDanger]: variant === 'danger',
                },
                
                componentVariants.buttonSize[size],
                
                {
                    "opacity-50 cursor-not-allowed": disabled,
                    "cursor-pointer": !disabled,
                },
                
                className
            )}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}
