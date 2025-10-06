"use client";

interface ManagerModeSettingsProps {
    managerMode: boolean;
    onManagerModeChange: (checked: boolean) => void;
}

export default function ManagerModeSettings({ 
    managerMode, 
    onManagerModeChange 
}: ManagerModeSettingsProps) {
    return (
        <div className="py-4">
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Manager Mode</h3>
                    <h4 className="text-base font-medium text-gray-800 mb-1">Enable Manager Features</h4>
                    <p className="text-sm text-gray-600">If enabled, you can see and manage your co-workers list</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={managerMode}
                        onChange={(e) => onManagerModeChange(e.target.checked)}
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--accentColor)]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--accentColor)]"></div>
                </label>
            </div>
        </div>
    );
}
