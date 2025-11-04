export const coWorkerCardStyles = {
    card: "bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer group",
    cardContent: "flex items-center space-x-4",
    avatarContainer: "relative",
    avatar: "w-12 h-12 bg-gradient-to-br from-[var(--secondaryBackground)] to-[var(--accentColor)] rounded-full flex items-center justify-center text-white font-semibold text-lg",
    avatarImage: "w-12 h-12 rounded-full object-cover",
    statusIndicator: "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white",
    infoContainer: "flex-1 min-w-0",
    name: "text-lg font-semibold text-gray-900 group-hover:text-[var(--accentColor)] transition-colors duration-200",
    position: "text-sm text-gray-600 truncate",
    email: "text-xs text-gray-500 truncate",
    lastActive: "text-xs text-gray-400",
    arrowContainer: "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
    arrowIcon: "w-5 h-5 text-gray-400"
} as const;

export const coWorkerCardLayoutStyles = {
    card: "bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer group",
    cardContent: "flex items-center space-x-4",
    avatarContainer: "relative",
    infoContainer: "flex-1 min-w-0",
    arrowContainer: "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
} as const;

export const coWorkerCardAvatarStyles = {
    avatar: "w-12 h-12 bg-gradient-to-br from-[var(--secondaryBackground)] to-[var(--accentColor)] rounded-full flex items-center justify-center text-white font-semibold text-lg",
    avatarImage: "w-12 h-12 rounded-full object-cover",
    statusIndicator: "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white"
} as const;

export const coWorkerCardTextStyles = {
    name: "text-lg font-semibold text-gray-900 group-hover:text-[var(--accentColor)] transition-colors duration-200",
    position: "text-sm text-gray-600 truncate",
    email: "text-xs text-gray-500 truncate",
    lastActive: "text-xs text-gray-400"
} as const;

export const coWorkerCardIconStyles = {
    arrowIcon: "w-5 h-5 text-gray-400"
} as const;

export const coWorkerCardVariantsBaseStyles = {
    card: "bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer group transition-all duration-200",
    cardContent: "flex items-center",
    avatarContainer: "relative flex-shrink-0",
    avatar: "bg-gradient-to-br from-[var(--secondaryBackground)] to-[var(--accentColor)] rounded-full flex items-center justify-center text-white font-semibold",
    avatarImage: "rounded-full object-cover",
    statusIndicator: "absolute rounded-full border-2 border-white",
    infoContainer: "flex-1 min-w-0",
    name: "font-semibold text-gray-900 group-hover:text-[var(--accentColor)] transition-colors duration-200",
    position: "text-gray-600 truncate",
    email: "text-gray-500 truncate",
    lastActive: "text-gray-400",
    arrowContainer: "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
    arrowIcon: "text-gray-400"
} as const;

export const coWorkerCardVariants = {
    default: {
        card: "p-4 hover:shadow-md",
        cardContent: "space-x-4",
        avatar: "w-12 h-12 text-lg",
        avatarImage: "w-12 h-12",
        statusIndicator: "-bottom-1 -right-1 w-4 h-4",
        name: "text-lg",
        position: "text-sm",
        email: "text-xs",
        lastActive: "text-xs",
        arrowIcon: "w-5 h-5"
    },
    compact: {
        card: "p-3 hover:shadow-sm",
        cardContent: "space-x-3",
        avatar: "w-10 h-10 text-sm",
        avatarImage: "w-10 h-10",
        statusIndicator: "-bottom-0.5 -right-0.5 w-3 h-3",
        name: "text-base",
        position: "text-xs",
        email: "text-xs",
        lastActive: "text-xs",
        arrowIcon: "w-4 h-4"
    },
    detailed: {
        card: "p-6 hover:shadow-lg",
        cardContent: "space-x-6",
        avatar: "w-16 h-16 text-xl",
        avatarImage: "w-16 h-16",
        statusIndicator: "-bottom-1 -right-1 w-5 h-5",
        name: "text-xl",
        position: "text-base",
        email: "text-sm",
        lastActive: "text-sm",
        arrowIcon: "w-6 h-6"
    }
} as const;

export const coWorkerCardSizes = {
    sm: {
        card: "text-xs",
        avatar: "w-8 h-8 text-xs",
        avatarImage: "w-8 h-8",
        statusIndicator: "w-2 h-2",
        name: "text-sm",
        position: "text-xs",
        email: "text-xs",
        lastActive: "text-xs"
    },
    md: {
        card: "text-sm",
        avatar: "w-12 h-12 text-base",
        avatarImage: "w-12 h-12",
        statusIndicator: "w-3 h-3",
        name: "text-base",
        position: "text-sm",
        email: "text-xs",
        lastActive: "text-xs"
    },
    lg: {
        card: "text-base",
        avatar: "w-16 h-16 text-lg",
        avatarImage: "w-16 h-16",
        statusIndicator: "w-4 h-4",
        name: "text-lg",
        position: "text-base",
        email: "text-sm",
        lastActive: "text-sm"
    }
} as const;
