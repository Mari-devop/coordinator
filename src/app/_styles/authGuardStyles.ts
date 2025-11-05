export const authGuardStyles = {
  loadingContainer: "min-h-screen flex items-center justify-center",
  spinner: "animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--accentColor)]",
} as const;

export const logoutButtonStyles = {
  button: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
} as const;

