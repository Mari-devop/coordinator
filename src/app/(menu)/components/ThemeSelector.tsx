"use client";
import { useTheme } from "../../contexts/ThemeContext";

export default function ThemeSelector() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center justify-between py-4 border-b border-[var(--borderColor)]">
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-[var(--fontColor)] mb-1">Theme</h3>
                <p className="text-sm text-[var(--textSecondary)]">Choose your preferred color scheme</p>
            </div>
            <div className="flex space-x-2">
                <button
                    onClick={() => setTheme("light")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        theme === "light"
                            ? "bg-[var(--secondaryBackground)] text-white"
                            : "bg-[var(--hoverBackground)] text-[var(--fontColor)] hover:bg-[var(--borderColor)]"
                    }`}
                >
                    ☀️ Light
                </button>
                <button
                    onClick={() => setTheme("dark")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        theme === "dark"
                            ? "bg-[var(--secondaryBackground)] text-white"
                            : "bg-[var(--hoverBackground)] text-[var(--fontColor)] hover:bg-[var(--borderColor)]"
                    }`}
                >
                    🌙 Dark
                </button>
            </div>
        </div>
    );
}
