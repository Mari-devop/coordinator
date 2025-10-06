"use client";
import Image from "next/image";
import { CoWorker } from "@/app/types/profile";
import { getStatusColor, getInitials } from "@/app/_lib/co-worker.utils";

interface CoWorkerDetailHeaderProps {
    coWorker: CoWorker;
    onClose: () => void;
}

export default function CoWorkerDetailHeader({ coWorker, onClose }: CoWorkerDetailHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--secondaryBackground)] to-[var(--accentColor)] rounded-full flex items-center justify-center text-white font-semibold text-xl">
                        {coWorker.avatar ? (
                            <Image 
                                src={coWorker.avatar} 
                                alt={coWorker.name}
                                width={64}
                                height={64}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                        ) : (
                            getInitials(coWorker.name)
                        )}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 ${getStatusColor(coWorker.status)} rounded-full border-2 border-white`}></div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">{coWorker.name}</h3>
                    <p className="text-gray-600">{coWorker.position}</p>
                    <p className="text-sm text-gray-500">{coWorker.email}</p>
                </div>
            </div>
            <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                title="Close"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}
