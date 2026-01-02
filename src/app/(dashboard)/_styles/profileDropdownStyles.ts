export const profileDropdownStyles = {
  container: "flex items-center relative",
  wrapper: "relative",
  button: "flex items-center space-x-3 p-2 rounded-full transition-all duration-300 cursor-pointer relative overflow-hidden group hover:text-[var(--accentColor)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[var(--secondaryBackground)]/10 before:to-[var(--accentColor)]/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 hover:shadow-md hover:scale-105",
  avatar: "w-8 h-8 bg-gradient-to-br from-[var(--secondaryBackground)] to-[var(--accentColor)] rounded-full flex items-center justify-center",
  avatarIcon: "w-5 h-5 text-white",
  displayName: "hidden sm:block text-sm font-medium text-[var(--fontColor)]",
  chevron: "w-4 h-4 text-[var(--textMuted)] transition-transform duration-200",
  chevronOpen: "rotate-180",
  overlay: "fixed inset-0 z-[99] bg-transparent",
  dropdown: "fixed w-56 bg-[var(--cardBackground)] rounded-xl shadow-2xl border border-[var(--borderColor)] z-[110] backdrop-blur-sm",
  menu: "py-2 space-y-2",
  menuItem: "block px-4 py-2.5 text-sm transition-all duration-300 cursor-pointer relative overflow-visible group rounded-lg mx-2",
  menuItemActive: "bg-gradient-to-r from-[var(--secondaryBackground)]/20 to-[var(--accentColor)]/20 text-[var(--secondaryBackground)] font-medium hover:bg-gradient-to-r hover:from-[var(--secondaryBackground)]/30 hover:to-[var(--accentColor)]/30 hover:shadow-md hover:text-[var(--secondaryBackground)]",
  menuItemInactive: "text-[var(--fontColor)] hover:text-[var(--accentColor)] hover:bg-gradient-to-r hover:from-[var(--secondaryBackground)]/10 hover:to-[var(--accentColor)]/10 hover:shadow-md",
  divider: "border-t border-[var(--borderColor)] my-2 mx-2",
  signOutButton: "block w-full text-left px-4 py-2.5 text-sm text-[var(--fontColor)] hover:text-[var(--fontColor)] hover:bg-gradient-to-r hover:from-[var(--secondaryBackground)]/10 hover:to-[var(--accentColor)]/10 transition-all duration-300 cursor-pointer rounded-lg mx-2 mt-1 hover:shadow-md relative overflow-visible",
} as const;

