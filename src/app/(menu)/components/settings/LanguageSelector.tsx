"use client";
import { languageSelectorStyles } from "../../styles/settingsStyles";

interface LanguageSelectorProps {
  language: string;
  onLanguageChange: (language: string) => void;
}

export default function LanguageSelector({
  language,
  onLanguageChange,
}: LanguageSelectorProps) {
  return (
    <div className={languageSelectorStyles.container}>
      <div className={languageSelectorStyles.info}>
        <h3 className={languageSelectorStyles.title}>Language</h3>
        <p className={languageSelectorStyles.subtitle}>
          Select your preferred language
        </p>
      </div>
      <select
        value={language}
        onChange={(e) => onLanguageChange(e.target.value)}
        className={languageSelectorStyles.select}
      >
        <option value="en">🇺🇸 English</option>
        <option value="ua">🇺🇦 Ukrainian</option>
      </select>
    </div>
  );
}
