"use client";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { languageSelectorStyles } from "../../_styles/settingsStyles";

const languages = {
  en: { flag: '🇺🇸', name: 'English' },
  ua: { flag: '🇺🇦', name: 'Українська' },
  fr: { flag: '🇫🇷', name: 'Français' }
} as const;

export default function LanguageSelector() {
  const t = useTranslations('Settings');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className={languageSelectorStyles.container}>
      <div className={languageSelectorStyles.info}>
        <h3 className={languageSelectorStyles.title}>{t('language')}</h3>
        <p className={languageSelectorStyles.subtitle}>
          {t('languageSubtitle')}
        </p>
      </div>
      <select
        value={locale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className={languageSelectorStyles.select}
      >
        {Object.entries(languages).map(([code, lang]) => (
          <option key={code} value={code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
