"use client";
import Image from "next/image";
import { CoWorker } from "@/app/types/profile";
import { getStatusColor, getInitials } from "@/app/_lib/co-worker.utils";
import { cn } from "@/app/_lib/cn";
import { coWorkerCardStyles } from "./CoWorkerCard.styles";

interface CoWorkerCardProps {
    coWorker: CoWorker;
    onClick: (coWorker: CoWorker) => void;
}

export default function CoWorkerCard({ coWorker, onClick }: CoWorkerCardProps) {
    return (
        <div 
            className={coWorkerCardStyles.card}
            onClick={() => onClick(coWorker)}
        >
            <div className={coWorkerCardStyles.cardContent}>
                <div className={coWorkerCardStyles.avatarContainer}>
                    <div className={coWorkerCardStyles.avatar}>
                        {coWorker.avatar ? (
                            <Image 
                                src={coWorker.avatar} 
                                alt={coWorker.name}
                                width={48}
                                height={48}
                                className={coWorkerCardStyles.avatarImage}
                            />
                        ) : (
                            getInitials(coWorker.name)
                        )}
                    </div>
                    <div className={cn(coWorkerCardStyles.statusIndicator, getStatusColor(coWorker.status))}></div>
                </div>

                <div className={coWorkerCardStyles.infoContainer}>
                    <h3 className={coWorkerCardStyles.name}>
                        {coWorker.name}
                    </h3>
                    <p className={coWorkerCardStyles.position}>
                        {coWorker.position}
                    </p>
                    <p className={coWorkerCardStyles.email}>
                        {coWorker.email}
                    </p>
                    {coWorker.lastActive && (
                        <p className={coWorkerCardStyles.lastActive}>
                            Last active: {coWorker.lastActive}
                        </p>
                    )}
                </div>

                <div className={coWorkerCardStyles.arrowContainer}>
                    <svg className={coWorkerCardStyles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
