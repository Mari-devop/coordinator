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
import { coWorkersApi } from "@/app/_lib/api/coWorkers";

export default function CoWorkersPage() {
    const toast = useToast();
    const [coWorkers, setCoWorkers] = useState<CoWorker[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [filteredCoWorkers, setFilteredCoWorkers] = useState<CoWorker[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCoWorker, setSelectedCoWorker] = useState<CoWorker | null>(null);
    const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);
    const [isInviteSectionOpen, setIsInviteSectionOpen] = useState(false);

    useEffect(() => {
        const loadCoWorkers = async () => {
            try {
                setIsLoading(true);
                const response = await coWorkersApi.getCoWorkers();
                setCoWorkers(response.coWorkers);
            } catch (error) {
                console.error("Error loading co-workers:", error);
                toast.error("Failed to load co-workers");
            } finally {
                setIsLoading(false);
            }
        };

        loadCoWorkers();
    }, [toast]);

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
        const reloadCoWorkers = async () => {
            try {
                const response = await coWorkersApi.getCoWorkers();
                setCoWorkers(response.coWorkers);
            } catch (error) {
                console.error("Error reloading co-workers:", error);
            }
        };
        reloadCoWorkers();
    };

    const hasSearchResults = filteredCoWorkers.length > 0 || !searchQuery;

    const { container, grid, emptyState } = coWorkerStyles;

    if (isLoading) {
        return (
            <div className={container.page}>
                <CoWorkersHeader />
                <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--accentColor)]"></div>
                </div>
            </div>
        );
    }

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

