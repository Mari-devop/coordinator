export const toastStyles = {
  container: "fixed top-4 right-4 z-50 flex flex-col gap-3 max-w-md",
  toast: {
    base: "relative rounded-lg shadow-lg p-4 pr-12 flex items-start gap-3 min-w-[300px] max-w-md animate-in slide-in-from-right duration-300",
    info: "bg-blue-50 border border-blue-200 text-blue-900",
    success: "bg-green-50 border border-green-200 text-green-900",
    error: "bg-red-50 border border-red-200 text-red-900",
    warning: "bg-yellow-50 border border-yellow-200 text-yellow-900",
  },
  content: "flex-1",
  message: "text-sm font-medium",
  actions: "flex gap-2 mt-3",
  actionButton: {
    base: "px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200",
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
  },
  closeButton: "absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors duration-200",
  icon: {
    container: "flex-shrink-0 mt-0.5",
    info: "text-blue-600",
    success: "text-green-600",
    error: "text-red-600",
    warning: "text-yellow-600",
  },
} as const;

