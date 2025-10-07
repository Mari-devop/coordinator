"use client";
import Image from "next/image";
import { CoWorker } from "@/app/_types/profile";
import { getStatusColor, getInitials } from "@/app/_lib/co-worker.utils";
import { cn } from "@/app/_lib/cn";

interface CoWorkerCardVariantsProps {
    coWorker: CoWorker;
    onClick: (coWorker: CoWorker) => void;
    variant?: 'default' | 'compact' | 'detailed';
    size?: 'sm' | 'md' | 'lg';
}

const baseStyles = {
    card: "bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer group transition-all duration-200",
    cardContent: "flex items-center",
    avatarContainer: "relative flex-shrink-0",
    avatar: "bg-gradient-to-br from-[var(--secondaryBackground)] to-[var(--accentColor)] rounded-full flex items-center justify-center text-white font-semibold",
    avatarImage: "rounded-full object-cover",
    statusIndicator: "absolute rounded-full border-2 border-white",
    infoContainer: "flex-1 min-w-0",
    name: "font-semibold text-gray-900 group-hover:text-[var(--accentColor)] transition-colors duration-200",
    position: "text-gray-600 truncate",
    email: "text-gray-500 truncate",
    lastActive: "text-gray-400",
    arrowContainer: "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
    arrowIcon: "text-gray-400"
} as const;

const variants = {
    default: {
        card: "p-4 hover:shadow-md",
        cardContent: "space-x-4",
        avatar: "w-12 h-12 text-lg",
        avatarImage: "w-12 h-12",
        statusIndicator: "-bottom-1 -right-1 w-4 h-4",
        name: "text-lg",
        position: "text-sm",
        email: "text-xs",
        lastActive: "text-xs",
        arrowIcon: "w-5 h-5"
    },
    compact: {
        card: "p-3 hover:shadow-sm",
        cardContent: "space-x-3",
        avatar: "w-10 h-10 text-sm",
        avatarImage: "w-10 h-10",
        statusIndicator: "-bottom-0.5 -right-0.5 w-3 h-3",
        name: "text-base",
        position: "text-xs",
        email: "text-xs",
        lastActive: "text-xs",
        arrowIcon: "w-4 h-4"
    },
    detailed: {
        card: "p-6 hover:shadow-lg",
        cardContent: "space-x-6",
        avatar: "w-16 h-16 text-xl",
        avatarImage: "w-16 h-16",
        statusIndicator: "-bottom-1 -right-1 w-5 h-5",
        name: "text-xl",
        position: "text-base",
        email: "text-sm",
        lastActive: "text-sm",
        arrowIcon: "w-6 h-6"
    }
} as const;

const sizes = {
    sm: {
        card: "text-xs",
        avatar: "w-8 h-8 text-xs",
        avatarImage: "w-8 h-8",
        statusIndicator: "w-2 h-2",
        name: "text-sm",
        position: "text-xs",
        email: "text-xs",
        lastActive: "text-xs"
    },
    md: {
        card: "text-sm",
        avatar: "w-12 h-12 text-base",
        avatarImage: "w-12 h-12",
        statusIndicator: "w-3 h-3",
        name: "text-base",
        position: "text-sm",
        email: "text-xs",
        lastActive: "text-xs"
    },
    lg: {
        card: "text-base",
        avatar: "w-16 h-16 text-lg",
        avatarImage: "w-16 h-16",
        statusIndicator: "w-4 h-4",
        name: "text-lg",
        position: "text-base",
        email: "text-sm",
        lastActive: "text-sm"
    }
} as const;

export default function CoWorkerCardVariants({ 
    coWorker, 
    onClick, 
    variant = 'default',
    size = 'md'
}: CoWorkerCardVariantsProps) {
    const variantStyles = variants[variant];
    const sizeStyles = sizes[size];

    return (
        <div 
            className={cn(
                baseStyles.card,
                variantStyles.card,
                sizeStyles.card
            )}
            onClick={() => onClick(coWorker)}
        >
            <div className={cn(baseStyles.cardContent, variantStyles.cardContent)}>
                <div className={baseStyles.avatarContainer}>
                    <div className={cn(
                        baseStyles.avatar,
                        variantStyles.avatar,
                        sizeStyles.avatar
                    )}>
                        {coWorker.avatar ? (
                            <Image 
                                src={coWorker.avatar} 
                                alt={coWorker.name}
                                width={48}
                                height={48}
                                className={cn(
                                    baseStyles.avatarImage,
                                    variantStyles.avatarImage,
                                    sizeStyles.avatarImage
                                )}
                            />
                        ) : (
                            getInitials(coWorker.name)
                        )}
                    </div>
                    <div className={cn(
                        baseStyles.statusIndicator,
                        variantStyles.statusIndicator,
                        sizeStyles.statusIndicator,
                        getStatusColor(coWorker.status)
                    )}></div>
                </div>

                <div className={baseStyles.infoContainer}>
                    <h3 className={cn(
                        baseStyles.name,
                        variantStyles.name,
                        sizeStyles.name
                    )}>
                        {coWorker.name}
                    </h3>
                    <p className={cn(
                        baseStyles.position,
                        variantStyles.position,
                        sizeStyles.position
                    )}>
                        {coWorker.position}
                    </p>
                    <p className={cn(
                        baseStyles.email,
                        variantStyles.email,
                        sizeStyles.email
                    )}>
                        {coWorker.email}
                    </p>
                    {coWorker.lastActive && (
                        <p className={cn(
                            baseStyles.lastActive,
                            variantStyles.lastActive,
                            sizeStyles.lastActive
                        )}>
                            Last active: {coWorker.lastActive}
                        </p>
                    )}
                </div>

                <div className={baseStyles.arrowContainer}>
                    <svg className={cn(
                        baseStyles.arrowIcon,
                        variantStyles.arrowIcon
                    )} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
