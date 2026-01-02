"use client";
import Image from "next/image";
import { CoWorker } from "@/app/_types/coworker";
import { getStatusColor, getInitials } from "@/app/_lib/co-worker.utils";
import { cn } from "@/app/_lib/cn";
import Icon from "@/app/_components/icons/Icon";
import { 
    coWorkerCardVariantsBaseStyles, 
    coWorkerCardVariants, 
    coWorkerCardSizes 
} from "@/app/(menu)/_styles/coWorkerCardStyles";

interface CoWorkerCardVariantsProps {
    coWorker: CoWorker;
    onClick: (coWorker: CoWorker) => void;
    variant?: 'default' | 'compact' | 'detailed';
    size?: 'sm' | 'md' | 'lg';
}

export default function CoWorkerCardVariants({ 
    coWorker, 
    onClick, 
    variant = 'default',
    size = 'md'
}: CoWorkerCardVariantsProps) {
    const variantStyles = coWorkerCardVariants[variant];
    const sizeStyles = coWorkerCardSizes[size];
    const baseStyles = coWorkerCardVariantsBaseStyles;

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
                    <Icon
                        name="chevron-right"
                        className={cn(
                            baseStyles.arrowIcon,
                            variantStyles.arrowIcon
                        )}
                    />
                </div>
            </div>
        </div>
    );
}
