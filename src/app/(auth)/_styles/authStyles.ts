export const containerStyles = {
    container: "bg-white rounded-lg shadow-lg p-8",
    approvedContainer: "flex items-center justify-between",
    linkContainer: "text-sm",
} as const;


export const titleStyles = {
    container: "text-center mb-8",
    title: "text-3xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-2",
    subtitle: "text-gray-600 font-[var(--font-dm-sans)]",
    text: "text-sm text-gray-600",
} as const;

export const formStyles = {
    form: "space-y-6",
} as const;

export const inputStyles = {
    label: "block text-sm font-medium text-gray-700 mb-2",
    input: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent",
} as const;

export const buttonStyles = {
    button: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--secondaryBackground)] hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200",
} as const;

export const linkStyles = {
    link: "font-medium text-[var(--accentColor)] hover:text-[var(--lightAccentColor)]",
} as const;

export const checkboxStyles = {
    checkboxContainer: "flex items-center",
    container: "flex items-center",
    label: "ml-2 block text-sm text-gray-700",
    checkbox: "h-4 w-4 text-[var(--accentColor)] focus:ring-[var(--accentColor)] border-gray-300 rounded",
} as const;





