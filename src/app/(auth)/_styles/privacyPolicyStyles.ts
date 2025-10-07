export const containerStyles = {
    container: "bg-white rounded-lg shadow-lg p-8",
    containerWide: "bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto",
    infoContainer: "prose prose-lg max-w-none space-y-8",
} as const;

export const headerStyles = {
    header: "text-center mb-8",
    title: "text-4xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-4",
    subtitle: "text-gray-600 font-[var(--font-dm-sans)] text-lg",
} as const;

export const sectionStyles = {
    blue: {
        container: "bg-blue-50 p-6 rounded-lg border-l-4 border-[var(--secondaryBackground)]",
        title: "text-2xl font-bold text-[var(--secondaryBackground)] font-[var(--font-wix-madefor-display)] mb-4",
    },
    
    green: {
        container: "bg-green-50 p-6 rounded-lg border-l-4 border-green-500",
        title: "text-2xl font-bold text-green-700 font-[var(--font-wix-madefor-display)] mb-4",
    },
    
    yellow: {
        container: "bg-yellow-50 p-6 rounded-lg border-l-4 border-[var(--accentColor)]",
        title: "text-2xl font-bold text-[var(--accentColor)] font-[var(--font-wix-madefor-display)] mb-4",
    },
    
    purple: {
        container: "bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500",
        title: "text-2xl font-bold text-purple-700 font-[var(--font-wix-madefor-display)] mb-4",
    },
    
    red: {
        container: "bg-red-50 p-6 rounded-lg border-l-4 border-[var(--accentColor2)]",
        title: "text-2xl font-bold text-[var(--accentColor2)] font-[var(--font-wix-madefor-display)] mb-4",
    },
    
    indigo: {
        container: "bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500",
        title: "text-2xl font-bold text-indigo-700 font-[var(--font-wix-madefor-display)] mb-4",
    },
    
    teal: {
        container: "bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500",
        title: "text-2xl font-bold text-teal-700 font-[var(--font-wix-madefor-display)] mb-4",
    },
} as const;

export const contentStyles = {
    paragraph: "text-gray-700 leading-relaxed",
    list: "list-disc list-inside mt-4 space-y-2 text-gray-700",
    listItem: "text-gray-700",
    strong: "font-semibold",
} as const;

export const contactStyles = {
    container: "mt-4 p-4 bg-white rounded-lg border",
    text: "text-[var(--accentColor)] font-medium",
} as const;

export const footerStyles = {
    container: "text-center mt-8 p-6 bg-gradient-to-r from-[var(--secondaryBackground)] to-[var(--accentColor)] rounded-lg text-white",
    date: "text-lg font-[var(--font-wix-madefor-display)]",
    note: "text-sm mt-2 opacity-90",
} as const;

export const legalPageStyles = {
    container: containerStyles,
    header: headerStyles,
    section: sectionStyles,
    content: contentStyles,
    contact: contactStyles,
    footer: footerStyles,
} as const;

