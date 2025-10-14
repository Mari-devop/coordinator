"use client";
import { useLanguage, languages } from "../_contexts/LanguageContext";

interface LanguageSwitcherProps {
  className?: string;
  showFlags?: boolean;
  showNativeNames?: boolean;
}

export default function LanguageSwitcher({ 
  className = "",
  showFlags = true,
  showNativeNames = true 
}: LanguageSwitcherProps) {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <select
      value={currentLanguage}
      onChange={(e) => setLanguage(e.target.value as keyof typeof languages)}
      className={`px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 ${className}`}
    >
      {Object.values(languages).map((lang) => (
        <option key={lang.code} value={lang.code}>
          {showFlags && `${lang.flag} `}
          {showNativeNames ? lang.nativeName : lang.name}
        </option>
      ))}
    </select>
  );
}
