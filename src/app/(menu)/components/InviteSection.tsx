"use client";
import { useState } from "react";

interface InviteSectionProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function InviteSection({ isOpen, onClose }: InviteSectionProps) {
    const [copied, setCopied] = useState(false);
    const inviteLink = typeof window !== 'undefined' ? `${window.location.origin}/invite/co-worker` : '';

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(inviteLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                    Invite Co-Worker
                </h3>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            
            <div className="space-y-4">
                <p className="text-sm text-gray-600">
                    Share this link with your co-worker to invite them to join your team:
                </p>
                
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={inviteLink}
                        readOnly
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50"
                    />
                    <button
                        onClick={copyToClipboard}
                        className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                            copied 
                                ? 'bg-green-500 text-white' 
                                : 'bg-[var(--secondaryBackground)] text-white hover:bg-[var(--accentColor)]'
                        }`}
                    >
                        {copied ? (
                            <>
                                <svg className="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Copied!
                            </>
                        ) : (
                            <>
                                <svg className="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Copy
                            </>
                        )}
                    </button>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-blue-700">
                                Your co-worker will be able to join your team and you&apos;ll be able to see their reports and collaborate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
