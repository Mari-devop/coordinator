export const containerStyles = {
    container: "bg-[var(--cardBackground)] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 max-w-md mx-auto w-full border border-[var(--borderColor)]",
    approvedContainer: "flex items-center justify-between",
    linkContainer: "text-sm",
} as const;


export const titleStyles = {
    container: "text-center mb-6 sm:mb-8",
    title: "text-2xl sm:text-3xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-2",
    subtitle: "text-gray-600 dark:text-gray-400 font-[var(--font-dm-sans)]",
    text: "text-sm text-gray-600 dark:text-gray-400",
} as const;

export const formStyles = {
    form: "space-y-4 sm:space-y-6",
} as const;

export const inputStyles = {
    label: "block text-sm font-medium mb-2",
    inputWrapper: "relative",
    input: "w-full px-3 py-2 pr-10 border border-[var(--borderColor)] rounded-md shadow-sm bg-[var(--cardBackground)] text-[var(--fontColor)] placeholder-[var(--textMuted)] focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent",
    toggleButton: "absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] rounded transition-colors duration-200 cursor-pointer",
    toggleIcon: "w-5 h-5",
} as const;

export const buttonStyles = {
    button: "w-full flex justify-center py-2.5 sm:py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--secondaryBackground)] hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200 cursor-pointer",
    googleButton: "w-full flex justify-center items-center py-3 px-4 sm:px-6 border border-[var(--borderColor)] rounded-lg shadow-md text-sm sm:text-base font-medium text-[var(--fontColor)] bg-[var(--cardBackground)] hover:bg-[var(--hoverBackground)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 cursor-pointer",
    googleIcon: "w-5 h-5 mr-2 sm:mr-3",
} as const;

export const linkStyles = {
    link: "font-medium text-[var(--accentColor)] hover:text-[var(--lightAccentColor)]",
} as const;

export const checkboxStyles = {
    checkboxContainer: "flex items-center",
    container: "flex items-center",
    label: "ml-2 block text-sm text-gray-700 dark:text-gray-300",
    checkbox: "h-4 w-4 text-[var(--accentColor)] focus:ring-[var(--accentColor)] border-gray-300 dark:border-gray-600 rounded",
} as const;

export const mobileStyles = {
    container: "flex items-center justify-center w-full py-4 sm:py-4 px-4 sm:px-6",
    authContainer: "w-full max-w-md",
} as const;

export const dividerStyles = {
    container: "relative flex items-center my-6",
    line: "flex-1 border-t border-gray-200 dark:border-gray-600",
    text: "px-3 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800",
} as const;

export const errorStyles = {
    message: "text-red-600 text-sm text-center mb-4",
    field: "text-red-500 text-sm mt-1",
} as const;

export const themeToggleStyles = {
    button: "p-2 rounded-md text-[var(--fontColor)] transition-all duration-300 cursor-pointer relative overflow-hidden group hover:text-[var(--accentColor)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[var(--secondaryBackground)]/10 before:to-[var(--accentColor)]/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:ring-offset-2",
    icon: "w-5 h-5 relative z-10",
} as const;

export const registerLayoutStyles = {
    container: "min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 w-full max-w-7xl mx-auto overflow-y-auto lg:overflow-hidden px-4 sm:px-6 lg:px-0 py-4 sm:py-6 lg:py-0",
    leftColumn: "flex-1 flex items-center justify-center lg:pr-8 lg:pl-0 overflow-y-auto lg:relative",
    leftColumnDivider: "hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-3/4 border-r border-gray-100 dark:border-gray-700",
    rightColumn: "flex-1 flex items-center justify-center lg:pl-8 overflow-y-auto",
} as const;

export const googleSectionStyles = {
    container: "w-full max-w-md",
    content: "space-y-6 sm:space-y-8",
    header: "text-center lg:text-left",
    title: "text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-3 sm:mb-4",
    subtitle: "text-base sm:text-lg text-gray-600 dark:text-gray-400 font-[var(--font-dm-sans)]",
    buttonContainer: "space-y-4",
    button: "w-full",
    orText: "text-center text-sm text-gray-500 dark:text-gray-400 font-medium",
    features: "space-y-3 pt-4",
    feature: "flex items-center gap-3 text-gray-700 dark:text-gray-300",
    featureIcon: "w-6 h-6 rounded-full bg-[var(--accentColor)] text-white flex items-center justify-center text-sm font-bold flex-shrink-0",
} as const;

export const registerFormStyles = {
    container: "w-full max-w-md bg-[var(--cardBackground)] rounded-xl shadow-xl p-4 sm:p-6 lg:p-8 border border-[var(--borderColor)]",
} as const;





