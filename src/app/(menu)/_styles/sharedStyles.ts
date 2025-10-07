export const sharedContainerStyles = {
    page: "max-w-6xl mx-auto p-6 space-y-8",
    section: "bg-[var(--cardBackground)] rounded-lg shadow-sm border border-[var(--borderColor)] p-6",
    card: "bg-[var(--cardBackground)] rounded-lg shadow-sm border border-[var(--borderColor)] p-4 hover:shadow-md transition-shadow duration-200",
    modal: "bg-[var(--cardBackground)] rounded-lg shadow-lg border border-[var(--borderColor)] p-6",
} as const;

export const sharedHeaderStyles = {
    page: "text-center mb-8",
    section: "flex items-center mb-6",
    title: "text-3xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-2",
    subtitle: "text-gray-600 font-[var(--font-dm-sans)]",
    icon: "w-8 h-8 rounded-full flex items-center justify-center mr-3",
} as const;

export const sharedButtonStyles = {
    primary: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[var(--secondaryBackground)] hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200",
    secondary: "inline-flex items-center px-4 py-2 border border-[var(--borderColor)] text-sm font-medium rounded-md text-[var(--fontColor)] bg-[var(--cardBackground)] hover:bg-[var(--hoverBackground)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200",
    danger: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[var(--accentColor2)] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200",
    ghost: "inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-[var(--fontColor)] hover:bg-[var(--hoverBackground)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200",
    fullWidth: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--secondaryBackground)] hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200",
} as const;

export const sharedInputStyles = {
    base: "w-full px-3 py-2 border border-[var(--borderColor)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent bg-[var(--cardBackground)] text-[var(--fontColor)]",
    label: "block text-sm font-medium text-[var(--fontColor)] mb-2",
    error: "border-red-300 focus:ring-red-500 focus:border-red-500",
    success: "border-green-300 focus:ring-green-500 focus:border-green-500",
    disabled: "bg-gray-100 cursor-not-allowed opacity-50",
} as const;

export const sharedFormStyles = {
    container: "space-y-6",
    field: "space-y-2",
    fieldGroup: "space-y-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
    gridThree: "grid grid-cols-1 md:grid-cols-3 gap-4",
} as const;

export const sharedTextStyles = {
    heading: "text-2xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)]",
    subheading: "text-xl font-semibold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)]",
    body: "text-[var(--fontColor)]",
    secondary: "text-[var(--textSecondary)]",
    muted: "text-[var(--textMuted)]",
    link: "text-[var(--accentColor)] hover:text-[var(--lightAccentColor)] transition-colors duration-200",
    error: "text-red-600",
    success: "text-green-600",
    warning: "text-yellow-600",
} as const;

export const sharedSpacingStyles = {
    section: "space-y-6",
    item: "space-y-4",
    field: "space-y-2",
    button: "space-x-2",
    padding: {
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
        xl: "p-8",
    },
    margin: {
        sm: "m-2",
        md: "m-4",
        lg: "m-6",
        xl: "m-8",
    },
} as const;

export const sharedLayoutStyles = {
    flex: {
        row: "flex flex-row items-center",
        col: "flex flex-col",
        between: "flex justify-between items-center",
        center: "flex justify-center items-center",
        start: "flex justify-start items-center",
        end: "flex justify-end items-center",
    },
    grid: {
        two: "grid grid-cols-1 md:grid-cols-2 gap-4",
        three: "grid grid-cols-1 md:grid-cols-3 gap-4",
        four: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
    },
    responsive: {
        mobile: "block md:hidden",
        desktop: "hidden md:block",
        tablet: "hidden md:block lg:hidden",
    },
} as const;

export const sharedBorderStyles = {
    border: "border border-[var(--borderColor)]",
    borderTop: "border-t border-[var(--borderColor)]",
    borderBottom: "border-b border-[var(--borderColor)]",
    borderLeft: "border-l border-[var(--borderColor)]",
    borderRight: "border-r border-[var(--borderColor)]",
    rounded: "rounded-lg",
    roundedFull: "rounded-full",
    shadow: "shadow-sm",
    shadowMd: "shadow-md",
    shadowLg: "shadow-lg",
} as const;

export const sharedAnimationStyles = {
    transition: "transition-all duration-200",
    hover: "hover:shadow-md transition-shadow duration-200",
    focus: "focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:ring-offset-2",
    transform: "transform transition-transform duration-200",
    opacity: "transition-opacity duration-200",
} as const;

export const sharedStatusStyles = {
    online: "bg-green-400",
    offline: "bg-gray-400",
    away: "bg-yellow-400",
    busy: "bg-red-400",
    indicator: "w-3 h-3 rounded-full border-2 border-white",
    badge: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
} as const;

export const sharedStyles = {
    container: sharedContainerStyles,
    header: sharedHeaderStyles,
    button: sharedButtonStyles,
    input: sharedInputStyles,
    form: sharedFormStyles,
    text: sharedTextStyles,
    spacing: sharedSpacingStyles,
    layout: sharedLayoutStyles,
    border: sharedBorderStyles,
    animation: sharedAnimationStyles,
    status: sharedStatusStyles,
} as const;
