"use client";
import { useState, useEffect } from "react";
import Icon from "@/app/_components/icons/Icon";
import { useToast } from "@/app/_contexts/ToastContext";
import CoWorkersHeader from "@/app/(menu)/_components/coWorker/CoWorkersHeader";
import CoWorkerSearch from "@/app/(menu)/_components/coWorker/CoWorkerSearch";
import CoWorkerCard from "@/app/(menu)/_components/coWorker/CoWorkerCard";
import CoWorkerDetailView from "@/app/(menu)/_components/coWorker/CoWorkerDetailView";
import InviteSection from "@/app/(menu)/_components/coWorker/InviteSection";
import { CoWorker } from "@/app/_types/coworker";
import { coWorkerStyles } from "@/app/(menu)/_styles/coWorkerStyles";

export default function CoWorkersPage() {
    const toast = useToast();
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

    const handleViewReport = () => {
        toast.info(`Opening today's report for ${selectedCoWorker?.name}`);
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

    const { container, grid, emptyState } = coWorkerStyles;

    return (
        <div className={container.page}>
            <CoWorkersHeader />
            
            <CoWorkerSearch
                onSearch={handleSearch}
                onInviteClick={handleInviteClick}
                hasResults={hasSearchResults}
            />

            {filteredCoWorkers.length > 0 ? (
                <div className={grid.container}>
                    {filteredCoWorkers.map((coWorker) => (
                        <CoWorkerCard
                            key={coWorker.id}
                            coWorker={coWorker}
                            onClick={handleCoWorkerClick}
                        />
                    ))}
                </div>
            ) : (
                <div className={emptyState.container}>
                    <div className={emptyState.icon}>
                        <Icon 
                            name="users"
                            className={emptyState.iconSvg} 
                            width={48}
                            height={48}
                        />
                    </div>
                    <h3 className={emptyState.title}>
                        {searchQuery ? 'No co-workers found' : 'No co-workers yet'}
                    </h3>
                    <p className={emptyState.description}>
                        {searchQuery 
                            ? `No co-workers match "${searchQuery}". Try a different search term.`
                            : 'Start by inviting your team members to collaborate.'
                        }
                    </p>
                    {!searchQuery && (
                        <button
                            onClick={handleInviteClick}
                            className={emptyState.button}
                        >
                            <Icon 
                                name="plus"
                                className={emptyState.buttonIcon} 
                                width={16}
                                height={16}
                            />
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

