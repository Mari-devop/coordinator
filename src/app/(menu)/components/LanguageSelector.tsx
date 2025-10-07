"use client";

interface LanguageSelectorProps {
    language: string;
    onLanguageChange: (language: string) => void;
}

export default function LanguageSelector({ language, onLanguageChange }: LanguageSelectorProps) {
    return (
        <div className="flex items-center justify-between py-4 border-b border-[var(--borderColor)]">
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-[var(--fontColor)] mb-1">Language</h3>
                <p className="text-sm text-[var(--textSecondary)]">Select your preferred language</p>
            </div>
            <select
                value={language}
                onChange={(e) => onLanguageChange(e.target.value)}
                className="px-4 py-2 border border-[var(--borderColor)] rounded-lg focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent bg-[var(--cardBackground)] text-[var(--fontColor)]"
            >
                <option value="en">🇺🇸 English</option>
                <option value="ua">🇺🇦 Ukrainian</option>
            </select>
        </div>
    );
}
