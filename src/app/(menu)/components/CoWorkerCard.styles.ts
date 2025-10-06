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
