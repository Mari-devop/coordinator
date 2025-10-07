"use client";

interface SaveButtonProps {
    onSave?: () => void;
    disabled?: boolean;
}

export default function SaveButton({ onSave, disabled = false }: SaveButtonProps) {
    return (
        <div className="flex justify-end pt-6 border-t border-gray-200">
            <button 
                onClick={onSave}
                disabled={disabled}
                className="px-6 py-3 bg-[var(--secondaryBackground)] text-white font-medium rounded-lg hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Save Changes
            </button>
        </div>
    );
}
