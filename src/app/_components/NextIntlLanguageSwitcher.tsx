"use client";
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

const languages = {
  en: { flag: '🇺🇸', name: 'English' },
  ua: { flag: '🇺🇦', name: 'Українська' },
  fr: { flag: '🇫🇷', name: 'Français' }
} as const;

export default function NextIntlLanguageSwitcher({ 
  className = "" 
}: { 
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <select
      value={locale}
      onChange={(e) => handleLanguageChange(e.target.value)}
      className={`px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 ${className}`}
    >
      {Object.entries(languages).map(([code, lang]) => (
        <option key={code} value={code}>
          {lang.flag} {lang.name}
        </option>
      ))}
    </select>
  );
}
