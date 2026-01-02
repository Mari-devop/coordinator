export const coWorkerContainerStyles = {
    page: "max-w-6xl mx-auto p-6 space-y-8",
    section: "bg-[var(--cardBackground)] rounded-lg shadow-sm border border-[var(--borderColor)] p-6",
    detailView: "bg-[var(--cardBackground)] rounded-lg shadow-sm border border-[var(--borderColor)] p-6",
} as const;

export const coWorkerHeaderStyles = {
    container: "border-b border-[var(--borderColor)] pb-6",
    title: "text-3xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-2",
    subtitle: "text-gray-600 font-[var(--font-dm-sans)]",
} as const;

export const coWorkerSearchStyles = {
    container: "bg-[var(--cardBackground)] rounded-lg shadow-sm border border-[var(--borderColor)] p-6",
    form: "flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between",
    inputContainer: "flex-1 w-full",
    inputWrapper: "relative",
    inputIcon: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
    input: "block w-full pl-10 pr-3 py-2 border border-[var(--borderColor)] rounded-md leading-5 bg-[var(--cardBackground)] placeholder-[var(--textMuted)] focus:outline-none focus:placeholder-[var(--textSecondary)] focus:ring-1 focus:ring-[var(--accentColor)] focus:border-[var(--accentColor)] text-[var(--fontColor)]",
    button: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[var(--secondaryBackground)] hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200",
    buttonIcon: "w-4 h-4 mr-2",
} as const;

export const coWorkerCardStyles = {
    card: "bg-[var(--cardBackground)] rounded-lg shadow-sm border border-[var(--borderColor)] p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer group",
    cardContent: "flex items-center space-x-4",
    avatarContainer: "relative",
    avatar: "w-12 h-12 bg-gradient-to-br from-[var(--secondaryBackground)] to-[var(--accentColor)] rounded-full flex items-center justify-center text-white font-semibold text-lg",
    avatarImage: "w-12 h-12 rounded-full object-cover",
    statusIndicator: "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white",
    infoContainer: "flex-1 min-w-0",
    name: "text-lg font-semibold text-[var(--fontColor)] group-hover:text-[var(--accentColor)] transition-colors duration-200",
    position: "text-sm text-[var(--textSecondary)] truncate",
    email: "text-xs text-[var(--textMuted)] truncate",
    lastActive: "text-xs text-[var(--textMuted)]",
    arrowContainer: "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
    arrowIcon: "w-5 h-5 text-[var(--textMuted)]",
} as const;

export const coWorkerDetailStyles = {
    container: "bg-[var(--cardBackground)] rounded-lg shadow-sm border border-[var(--borderColor)] p-6",
    header: "flex items-center justify-between mb-6",
    headerContent: "flex items-center space-x-4",
    avatarContainer: "relative",
    avatar: "w-16 h-16 bg-gradient-to-br from-[var(--secondaryBackground)] to-[var(--accentColor)] rounded-full flex items-center justify-center text-white font-semibold text-xl",
    avatarImage: "w-16 h-16 rounded-full object-cover",
    statusIndicator: "absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white",
    info: "flex-1",
    name: "text-2xl font-bold text-[var(--fontColor)]",
    position: "text-[var(--textSecondary)]",
    email: "text-sm text-[var(--textMuted)]",
    closeButton: "text-[var(--textMuted)] hover:text-[var(--textSecondary)] transition-colors duration-200",
    closeIcon: "w-6 h-6",
} as const;

export const coWorkerTabsStyles = {
    container: "border-b border-[var(--borderColor)] mb-6",
    nav: "-mb-px flex space-x-8",
    tab: "py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200",
    tabActive: "border-[var(--accentColor)] text-[var(--accentColor)]",
    tabInactive: "border-transparent text-[var(--textMuted)] hover:text-[var(--textSecondary)] hover:border-[var(--borderColor)]",
    tabIcon: "mr-2",
} as const;

export const coWorkerTabContentStyles = {
    container: "space-y-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
    field: "space-y-2",
    label: "block text-sm font-medium text-[var(--fontColor)]",
    value: "text-sm text-[var(--fontColor)]",
    statusContainer: "mt-1 flex items-center",
    statusDot: "w-2 h-2 rounded-full mr-2",
    emptyState: "bg-[var(--hoverBackground)] rounded-lg p-4",
    emptyTitle: "font-medium text-[var(--fontColor)] mb-2",
    emptyDescription: "text-sm text-[var(--textSecondary)]",
} as const;

export const coWorkerActionsStyles = {
    container: "flex justify-end space-x-3 mt-8 pt-6 border-t border-[var(--borderColor)]",
    closeButton: "px-4 py-2 text-sm font-medium text-[var(--textSecondary)] bg-[var(--hoverBackground)] rounded-md hover:bg-[var(--borderColor)] focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:ring-offset-2 transition-colors duration-200",
    primaryButton: "px-4 py-2 text-sm font-medium text-white bg-[var(--secondaryBackground)] rounded-md hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:ring-offset-2 transition-colors duration-200",
    buttonIcon: "w-4 h-4 mr-2 inline",
} as const;

export const coWorkerInviteStyles = {
    container: "bg-[var(--cardBackground)] rounded-lg shadow-sm border border-[var(--borderColor)] p-6",
    header: "flex items-center justify-between mb-4",
    title: "text-lg font-medium text-[var(--fontColor)]",
    closeButton: "text-[var(--textMuted)] hover:text-[var(--textSecondary)] transition-colors duration-200",
    closeIcon: "w-5 h-5",
    content: "space-y-4",
    description: "text-sm text-[var(--textSecondary)]",
    form: "space-y-4",
    inputContainer: "flex items-center space-x-2",
    input: "flex-1 px-3 py-2 border border-[var(--borderColor)] rounded-md text-sm bg-[var(--hoverBackground)] text-[var(--fontColor)]",
    submitButton: "w-full px-4 py-3 bg-[var(--accentColor)] text-white font-semibold rounded-lg hover:bg-[var(--accentColor)]/90 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer",
    submitButtonDisabled: "opacity-50 cursor-not-allowed",
    successMessage: "p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 text-sm",
    errorMessage: "p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm",
    copyButton: "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
    copyButtonDefault: "bg-[var(--secondaryBackground)] text-white hover:bg-[var(--accentColor)]",
    copyButtonSuccess: "bg-green-500 text-white",
    copyIcon: "w-4 h-4 mr-1 inline",
    infoBox: "bg-blue-50 border border-blue-200 rounded-md p-3",
    infoContent: "flex",
    infoIcon: "flex-shrink-0 h-5 w-5 text-blue-400",
    infoText: "ml-3 text-sm text-blue-700",
} as const;

export const coWorkerEmptyStateStyles = {
    container: "text-center py-12",
    icon: "w-24 h-24 bg-[var(--hoverBackground)] rounded-full flex items-center justify-center mx-auto mb-4",
    iconSvg: "w-12 h-12 text-[var(--textMuted)]",
    title: "text-lg font-medium text-[var(--fontColor)] mb-2",
    description: "text-[var(--textSecondary)] mb-4",
    button: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[var(--secondaryBackground)] hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200",
    buttonIcon: "w-4 h-4 mr-2",
} as const;

export const coWorkerGridStyles = {
    container: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
    single: "grid grid-cols-1 gap-6",
    two: "grid grid-cols-1 md:grid-cols-2 gap-6",
    three: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
    four: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
} as const;

export const coWorkerStatusStyles = {
    online: "bg-green-400",
    offline: "bg-gray-400",
    away: "bg-yellow-400",
    busy: "bg-red-400",
    indicator: "w-3 h-3 rounded-full border-2 border-white",
    indicatorLarge: "w-5 h-5 rounded-full border-2 border-white",
} as const;

export const coWorkerStyles = {
    container: coWorkerContainerStyles,
    header: coWorkerHeaderStyles,
    search: coWorkerSearchStyles,
    card: coWorkerCardStyles,
    detail: coWorkerDetailStyles,
    tabs: coWorkerTabsStyles,
    tabContent: coWorkerTabContentStyles,
    actions: coWorkerActionsStyles,
    invite: coWorkerInviteStyles,
    emptyState: coWorkerEmptyStateStyles,
    grid: coWorkerGridStyles,
    status: coWorkerStatusStyles,
} as const;
