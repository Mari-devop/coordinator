export const navigationStyles = {
  base: {
    mobile: "block px-4 py-2.5 rounded-lg text-base font-medium cursor-pointer transition-all duration-300 relative overflow-hidden",
    desktop: "px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer relative overflow-hidden group",
  },
  active: "bg-[var(--secondaryBackground)]/20 text-[var(--secondaryBackground)] rounded-full cursor-pointer font-medium",
  inactive: "text-[var(--fontColor)] hover:text-[var(--accentColor)] cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-[var(--secondaryBackground)]/10 before:to-[var(--accentColor)]/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 hover:shadow-md hover:scale-105",
  mobileContainer: "md:hidden border-t border-[var(--borderColor)]",
  mobileContent: "px-2 pt-2 pb-3 space-y-1",
  desktop: "hidden md:flex items-center space-x-2 relative z-10",
} as const;

