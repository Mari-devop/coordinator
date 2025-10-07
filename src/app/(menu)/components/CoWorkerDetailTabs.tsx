"use client";

interface Tab {
    id: 'overview' | 'reports' | 'activity';
    label: string;
    icon: string;
}

interface CoWorkerDetailTabsProps {
    activeTab: 'overview' | 'reports' | 'activity';
    onTabChange: (tab: 'overview' | 'reports' | 'activity') => void;
}

const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: '👤' },
    { id: 'reports', label: 'Reports', icon: '📊' },
    { id: 'activity', label: 'Activity', icon: '📈' },
];

export default function CoWorkerDetailTabs({ activeTab, onTabChange }: CoWorkerDetailTabsProps) {
    return (
        <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                            activeTab === tab.id
                                ? 'border-[var(--accentColor)] text-[var(--accentColor)]'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                    >
                        <span className="mr-2">{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </nav>
        </div>
    );
}
