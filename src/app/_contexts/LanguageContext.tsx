"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export const languages = {
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    nativeName: 'English'
  },
  ua: {
    code: 'ua',
    name: 'Ukrainian',
    flag: '🇺🇦',
    nativeName: 'Українська'
  },
  fr: {
    code: 'fr',
    name: 'French',
    flag: '🇫🇷',
    nativeName: 'Français'
  },
} as const;

export type LanguageCode = keyof typeof languages;

interface LanguageContextType {
  currentLanguage: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: string) => string;
  availableLanguages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'settings.title': 'Settings',
    'settings.subtitle': 'Manage your account preferences and application settings',
    'settings.general': 'General Settings',
    'settings.language': 'Language',
    'settings.language.subtitle': 'Select your preferred language',
    'settings.theme': 'Theme',
    'settings.theme.subtitle': 'Choose your preferred theme',
    'settings.notifications': 'Notifications',
    'settings.notifications.subtitle': 'Manage your notification preferences',
    'settings.emailNotifications': 'Email Notifications',
    'settings.emailNotifications.subtitle': 'Receive email notifications about important updates',
    'settings.managerMode': 'Manager Mode',
    'settings.managerMode.subtitle': 'Enable advanced management features',
    'settings.googleAds': 'Google Ads Integration',
    'settings.googleAds.subtitle': 'Connect your Google Ads account',
    'settings.save': 'Save Settings',
    'settings.saved': 'Settings saved successfully!',
    
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
  },
  ua: {
    'settings.title': 'Налаштування',
    'settings.subtitle': 'Керуйте налаштуваннями облікового запису та програми',
    'settings.general': 'Загальні налаштування',
    'settings.language': 'Мова',
    'settings.language.subtitle': 'Оберіть бажану мову',
    'settings.theme': 'Тема',
    'settings.theme.subtitle': 'Оберіть бажану тему',
    'settings.notifications': 'Сповіщення',
    'settings.notifications.subtitle': 'Керуйте налаштуваннями сповіщень',
    'settings.emailNotifications': 'Email сповіщення',
    'settings.emailNotifications.subtitle': 'Отримувати email сповіщення про важливі оновлення',
    'settings.managerMode': 'Режим менеджера',
    'settings.managerMode.subtitle': 'Увімкнути розширені функції управління',
    'settings.googleAds': 'Інтеграція Google Ads',
    'settings.googleAds.subtitle': 'Підключіть свій обліковий запис Google Ads',
    'settings.save': 'Зберегти налаштування',
    'settings.saved': 'Налаштування успішно збережено!',
    
    'common.save': 'Зберегти',
    'common.cancel': 'Скасувати',
    'common.loading': 'Завантаження...',
    'common.error': 'Помилка',
    'common.success': 'Успіх',
  },
  fr: {
    'settings.title': 'Paramètres',
    'settings.subtitle': 'Gérez vos préférences de compte et paramètres d\'application',
    'settings.general': 'Paramètres Généraux',
    'settings.language': 'Langue',
    'settings.language.subtitle': 'Sélectionnez votre langue préférée',
    'settings.theme': 'Thème',
    'settings.theme.subtitle': 'Choisissez votre thème préféré',
    'settings.notifications': 'Notifications',
    'settings.notifications.subtitle': 'Gérez vos préférences de notification',
    'settings.emailNotifications': 'Notifications Email',
    'settings.emailNotifications.subtitle': 'Recevoir des notifications email sur les mises à jour importantes',
    'settings.managerMode': 'Mode Manager',
    'settings.managerMode.subtitle': 'Activer les fonctionnalités avancées de gestion',
    'settings.googleAds': 'Intégration Google Ads',
    'settings.googleAds.subtitle': 'Connectez votre compte Google Ads',
    'settings.save': 'Enregistrer les Paramètres',
    'settings.saved': 'Paramètres enregistrés avec succès !',
    
    'common.save': 'Enregistrer',
    'common.cancel': 'Annuler',
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.success': 'Succès',
  },
} as const;

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as LanguageCode;
    if (savedLanguage && languages[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (language: LanguageCode) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language);
    
    document.documentElement.lang = language;
    
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language } 
    }));
  };

  const t = (key: string): string => {
    const currentTranslations = translations[currentLanguage];
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage: handleSetLanguage,
    t,
    availableLanguages: languages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
