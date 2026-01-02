export const menuLayoutStyles = {
  container: "min-h-screen auth-gradient-background",
  header: {
    header: "sticky top-0 z-50",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    content: "flex justify-between items-center h-16",
    logoContainer: "flex items-center",
    logo: "text-2xl font-bold text-[var(--secondaryBackground)] font-[var(--font-wix-madefor-display)] uppercase border border-[var(--secondaryBackground)] rounded-md px-2 py-1 hover:opacity-80 transition-opacity duration-200",
    actions: "flex items-center gap-4",
  },
} as const;

