export const baseStyles = {
    card: "bg-white rounded-lg shadow-sm border border-gray-200",
    cardHover: "hover:shadow-md transition-shadow duration-200",
    cardPadding: "p-4",
    
    button: "font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
    buttonPrimary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    buttonSecondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    buttonDanger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    
    input: "w-full px-3 py-2 border rounded-md shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
    inputDefault: "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
    inputError: "border-red-300 focus:border-red-500 focus:ring-red-500",
    inputSuccess: "border-green-300 focus:border-green-500 focus:ring-green-500",
    
    text: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
    },
    
    colors: {
        primary: "text-blue-600",
        secondary: "text-gray-600",
        success: "text-green-600",
        warning: "text-yellow-600",
        error: "text-red-600",
        muted: "text-gray-500",
    },
    
    spacing: {
        xs: "space-x-1",
        sm: "space-x-2",
        md: "space-x-4",
        lg: "space-x-6",
        xl: "space-x-8",
    },
    
    layout: {
        flex: "flex",
        flexCol: "flex flex-col",
        flexRow: "flex flex-row",
        itemsCenter: "items-center",
        justifyCenter: "justify-center",
        justifyBetween: "justify-between",
    }
} as const;

export const componentVariants = {
    avatar: {
        sm: "w-8 h-8 text-xs",
        md: "w-12 h-12 text-base",
        lg: "w-16 h-16 text-lg",
        xl: "w-20 h-20 text-xl",
    },
    
    statusIndicator: {
        sm: "w-2 h-2",
        md: "w-3 h-3",
        lg: "w-4 h-4",
    },
    
    buttonSize: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    },
    
    cardPadding: {
        none: "p-0",
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
        xl: "p-8",
    }
} as const;

export const themeStyles = {
    background: {
        primary: "bg-[var(--background)]",
        secondary: "bg-[var(--secondaryBackground)]",
        card: "bg-[var(--cardBackground)]",
    },
    
    text: {
        primary: "text-[var(--fontColor)]",
        secondary: "text-[var(--textSecondary)]",
        muted: "text-[var(--textMuted)]",
    },
    
    border: {
        default: "border-[var(--borderColor)]",
        hover: "border-[var(--hoverBackground)]",
    },
    
    accent: {
        primary: "text-[var(--accentColor)]",
        secondary: "text-[var(--lightAccentColor)]",
        background: "bg-[var(--accentColor)]",
        hover: "hover:bg-[var(--lightAccentColor)]",
    }
} as const;
