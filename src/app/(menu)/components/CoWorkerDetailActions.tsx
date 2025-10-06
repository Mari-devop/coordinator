"use client";

interface CoWorkerDetailActionsProps {
    coWorkerId: string;
    onClose: () => void;
    onViewReport: (coWorkerId: string) => void;
}

export default function CoWorkerDetailActions({ 
    coWorkerId, 
    onClose, 
    onViewReport 
}: CoWorkerDetailActionsProps) {
    return (
        <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-gray-200">
            <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
            >
                Close
            </button>
            <button
                onClick={() => onViewReport(coWorkerId)}
                className="px-4 py-2 text-sm font-medium text-white bg-[var(--secondaryBackground)] rounded-md hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:ring-offset-2 transition-colors duration-200"
            >
                <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Today&apos;s Report
            </button>
        </div>
    );
}
