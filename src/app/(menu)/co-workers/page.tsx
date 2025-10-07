"use client";
import { useState, useEffect } from "react";
import CoWorkersHeader from "../_components/coWorker/CoWorkersHeader";
import CoWorkerSearch from "../_components/coWorker/CoWorkerSearch";
import CoWorkerCard from "../_components/coWorker/CoWorkerCard";
import CoWorkerDetailView from "../_components/coWorker/CoWorkerDetailView";
import InviteSection from "../_components/coWorker/InviteSection";
import { CoWorker } from "@/app/_types/profile";

export default function CoWorkersPage() {
    const [coWorkers] = useState<CoWorker[]>([
        {
            id: '1',
            name: 'Sarah Johnson',
            position: 'Marketing Manager',
            email: 'sarah.johnson@company.com',
            status: 'online',
            lastActive: '2 minutes ago',
            department: 'Marketing',
            phone: '+1 (555) 123-4567',
            joinDate: 'Jan 15, 2023'
        },
        {
            id: '2',
            name: 'Mike Chen',
            position: 'Software Developer',
            email: 'mike.chen@company.com',
            status: 'away',
            lastActive: '1 hour ago',
            department: 'Engineering',
            phone: '+1 (555) 234-5678',
            joinDate: 'Mar 22, 2023'
        },
        {
            id: '3',
            name: 'Emily Rodriguez',
            position: 'Project Manager',
            email: 'emily.rodriguez@company.com',
            status: 'offline',
            lastActive: '3 hours ago',
            department: 'Operations',
            phone: '+1 (555) 345-6789',
            joinDate: 'Feb 10, 2023'
        },
        {
            id: '4',
            name: 'David Kim',
            position: 'UX Designer',
            email: 'david.kim@company.com',
            status: 'online',
            lastActive: '5 minutes ago',
            department: 'Design',
            phone: '+1 (555) 456-7890',
            joinDate: 'Apr 5, 2023'
        }
    ]);

    const [filteredCoWorkers, setFilteredCoWorkers] = useState<CoWorker[]>(coWorkers);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCoWorker, setSelectedCoWorker] = useState<CoWorker | null>(null);
    const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);
    const [isInviteSectionOpen, setIsInviteSectionOpen] = useState(false);

    useEffect(() => {
        if (!searchQuery.trim()) {
            setFilteredCoWorkers(coWorkers);
        } else {
            const filtered = coWorkers.filter(coWorker =>
                coWorker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                coWorker.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                coWorker.position.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredCoWorkers(filtered);
        }
    }, [searchQuery, coWorkers]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleCoWorkerClick = (coWorker: CoWorker) => {
        setSelectedCoWorker(coWorker);
        setIsDetailViewOpen(true);
        setIsInviteSectionOpen(false); 
    };

    const handleViewReport = (coWorkerId: string) => {
        console.log(`Viewing report for co-worker: ${coWorkerId}`);
        alert(`Opening today's report for ${selectedCoWorker?.name}`);
        setIsDetailViewOpen(false);
    };

    const handleInviteClick = () => {
        setIsInviteSectionOpen(true);
        setIsDetailViewOpen(false); 
    };

    const handleCloseDetailView = () => {
        setIsDetailViewOpen(false);
        setSelectedCoWorker(null);
    };

    const handleCloseInviteSection = () => {
        setIsInviteSectionOpen(false);
    };

    const hasSearchResults = filteredCoWorkers.length > 0 || !searchQuery;

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8">
            <CoWorkersHeader />
            
            <CoWorkerSearch
                onSearch={handleSearch}
                onInviteClick={handleInviteClick}
                hasResults={hasSearchResults}
            />

            {filteredCoWorkers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCoWorkers.map((coWorker) => (
                        <CoWorkerCard
                            key={coWorker.id}
                            coWorker={coWorker}
                            onClick={handleCoWorkerClick}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {searchQuery ? 'No co-workers found' : 'No co-workers yet'}
                    </h3>
                    <p className="text-gray-600 mb-4">
                        {searchQuery 
                            ? `No co-workers match "${searchQuery}". Try a different search term.`
                            : 'Start by inviting your team members to collaborate.'
                        }
                    </p>
                    {!searchQuery && (
                        <button
                            onClick={handleInviteClick}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[var(--secondaryBackground)] hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Invite Your First Co-Worker
                        </button>
                    )}
                </div>
            )}

            {isDetailViewOpen && (
                <CoWorkerDetailView
                    coWorker={selectedCoWorker}
                    onViewReport={handleViewReport}
                    onClose={handleCloseDetailView}
                />
            )}

            {isInviteSectionOpen && (
                <InviteSection
                    isOpen={isInviteSectionOpen}
                    onClose={handleCloseInviteSection}
                />
            )}
        </div>
    );
}

