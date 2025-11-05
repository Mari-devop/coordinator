export const settingsContainerStyles = {
    container: "max-w-4xl mx-auto p-6 space-y-8",
    section: "bg-[var(--cardBackground)] rounded-lg shadow-sm border border-[var(--borderColor)] p-6",
    header: "text-2xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-6 flex items-center",
} as const;

export const settingsHeaderStyles = {
    container: "text-center mb-8",
    title: "text-3xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-2",
    subtitle: "text-gray-600 font-[var(--font-dm-sans)]",
    icon: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3",
} as const;

export const settingsSectionStyles = {
    container: "bg-[var(--cardBackground)] rounded-lg shadow-sm border border-[var(--borderColor)] p-6",
    header: "flex items-center mb-6",
    title: "text-2xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] flex items-center",
    icon: "w-8 h-8 rounded-full flex items-center justify-center mr-3",
    content: "space-y-6",
} as const;

export const settingItemStyles = {
    container: "flex items-center justify-between py-4 border-b border-[var(--borderColor)] last:border-b-0",
    info: "flex-1",
    title: "text-lg font-semibold text-[var(--fontColor)] mb-1",
    subtitle: "text-sm text-[var(--textSecondary)]",
    control: "flex items-center space-x-2",
} as const;

export const toggleStyles = {
    container: "relative inline-flex items-center cursor-pointer",
    input: "sr-only peer",
    switch: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--accentColor)]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--accentColor)]",
    wrapper: "flex items-center justify-between",
    content: "flex-1",
    label: "text-base font-medium text-[var(--fontColor)] mb-1",
    description: "text-sm text-[var(--textSecondary)]",
} as const;

export const selectStyles = {
    container: "relative",
    select: "px-4 py-2 border border-[var(--borderColor)] rounded-lg focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent bg-[var(--cardBackground)] text-[var(--fontColor)] appearance-none pr-8",
    icon: "absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none",
} as const;

export const buttonGroupStyles = {
    container: "flex space-x-2",
    button: "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
    active: "bg-[var(--secondaryBackground)] text-white",
    inactive: "bg-[var(--hoverBackground)] text-[var(--fontColor)] hover:bg-[var(--borderColor)]",
} as const;

export const themeSelectorStyles = {
    container: "flex items-center justify-between py-4 border-b border-[var(--borderColor)]",
    info: "flex-1",
    title: "text-lg font-semibold text-[var(--fontColor)] mb-1",
    subtitle: "text-sm text-[var(--textSecondary)]",
    buttons: "flex space-x-2",
    button: "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
    active: "bg-[var(--secondaryBackground)] text-white",
    inactive: "bg-[var(--hoverBackground)] text-[var(--fontColor)] hover:bg-[var(--borderColor)]",
} as const;

export const languageSelectorStyles = {
    container: "flex items-center justify-between py-4 border-b border-[var(--borderColor)]",
    info: "flex-1",
    title: "text-lg font-semibold text-[var(--fontColor)] mb-1",
    subtitle: "text-sm text-[var(--textSecondary)]",
    select: "px-4 py-2 border border-[var(--borderColor)] rounded-lg focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent bg-[var(--cardBackground)] text-[var(--fontColor)]",
} as const;

export const notificationStyles = {
    container: "py-4 border-b border-[var(--borderColor)]",
    item: "flex items-center justify-between",
    info: "flex-1",
    title: "text-base font-medium text-[var(--fontColor)] mb-1",
    description: "text-sm text-[var(--textSecondary)]",
    toggle: "relative inline-flex items-center cursor-pointer",
} as const;

export const managerModeStyles = {
    container: "py-4",
    item: "flex items-center justify-between",
    info: "flex-1",
    title: "text-lg font-semibold text-[var(--fontColor)] mb-1",
    subtitle: "text-base font-medium text-[var(--fontColor)] mb-1",
    description: "text-sm text-[var(--textSecondary)]",
    toggle: "relative inline-flex items-center cursor-pointer",
} as const;

export const googleAdsStyles = {
    container: "bg-[var(--cardBackground)] rounded-lg shadow-sm border border-[var(--borderColor)] p-6",
    header: "flex items-center mb-6",
    title: "text-2xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] flex items-center",
    icon: "w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3",
    iconStyle: "w-4 h-4 text-green-600",
    content: "space-y-4",
    emptyState: "text-center py-12 border-2 border-dashed border-gray-300 rounded-lg",
    emptyIcon: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
    emptyIconStyle: "w-8 h-8 text-gray-400",
    emptyTitle: "text-lg font-medium text-[var(--fontColor)] mb-2",
    emptyDescription: "text-[var(--textSecondary)] mb-4",
    connectButton: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[var(--secondaryBackground)] hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200",
    connectButtonIcon: "w-4 h-4 mr-2",
} as const;

export const saveButtonStyles = {
    container: "flex justify-end",
    button: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[var(--secondaryBackground)] hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
    icon: "w-5 h-5 mr-2",
} as const;

export const statusMessageStyles = {
    container: "p-4 rounded-md border text-sm font-medium",
    success: "text-green-600 bg-green-50 border-green-200",
    error: "text-red-600 bg-red-50 border-red-200",
    warning: "text-yellow-600 bg-yellow-50 border-yellow-200",
    info: "text-blue-600 bg-blue-50 border-blue-200",
} as const;

export const settingsStyles = {
    container: settingsContainerStyles,
    header: settingsHeaderStyles,
    section: settingsSectionStyles,
    item: settingItemStyles,
    toggle: toggleStyles,
    select: selectStyles,
    buttonGroup: buttonGroupStyles,
    theme: themeSelectorStyles,
    language: languageSelectorStyles,
    notification: notificationStyles,
    managerMode: managerModeStyles,
    googleAds: googleAdsStyles,
    save: saveButtonStyles,
    status: statusMessageStyles,
} as const;
