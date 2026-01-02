export const onboardingStyles = {
  container: {
    main: "h-[calc(100vh-4rem)] flex flex-col",
    content: "max-w-6xl mx-auto px-6 py-6 flex-1 flex flex-col overflow-y-auto",
    grid: "grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 items-start",
    gridWithRows: "grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 sm:gap-8 flex-1 items-start justify-center",
    gridTwoCol: "grid grid-cols-1 lg:grid-cols-2 gap-8",
    flexCol: "flex flex-col",
    sticky: "sticky top-24"
  },

  card: {
    main: "bg-[var(--cardBackground)] rounded-2xl shadow-xl border border-[var(--borderColor)] p-8",
    mainFlex: "bg-[var(--cardBackground)] rounded-2xl shadow-xl border border-[var(--borderColor)] p-4 sm:p-6 lg:p-8",
    summary: "bg-[var(--cardBackground)] rounded-2xl shadow-xl border border-[var(--borderColor)] p-6",
    invite: "bg-[var(--cardBackground)] rounded-2xl shadow-xl border border-[var(--borderColor)] p-8"
  },

  header: {
    container: "max-w-6xl mx-auto px-6",
    card: "bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200/50 shadow-xl",
    title: "text-2xl font-bold text-[var(--fontColor)] mb-1",
    subtitle: "text-sm text-[var(--textSecondary)]",
    progressContainer: "text-right",
    progressText: "text-sm font-medium text-[var(--fontColor)] mb-1",
    progressSubtext: "text-xs text-[var(--textSecondary)]",
    progressBar: "w-full bg-[var(--borderColor)]/30 rounded-full h-2",
    progressFill: "bg-gradient-to-r from-[var(--accentColor)] to-[var(--lightAccentColor)] h-2 rounded-full transition-all duration-700 ease-out shadow-sm"
  },

  stepContent: {
    container: "max-w-2xl mx-auto",
    containerWide: "max-w-5xl mx-auto w-full",
    header: "text-center mb-6 sm:mb-8 lg:mb-12",
    icon: "text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4",
    title: "text-2xl sm:text-3xl font-bold text-[var(--fontColor)] mb-2 sm:mb-3",
    description: "text-base sm:text-lg text-gray-600 dark:text-gray-400",
    form: "space-y-4 sm:space-y-6",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",
    field: "space-y-2",
    label: "block text-sm font-medium !text-gray-950 dark:!text-gray-600",
    required: "text-red-500",
    input: "w-full px-3 sm:px-4 py-2 sm:py-3 border border-[var(--borderColor)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent bg-[var(--cardBackground)] text-[var(--fontColor)] placeholder-[var(--textMuted)] transition-all duration-200"
  },

  roleSelection: {
    container: "grid grid-cols-1 md:grid-cols-2 gap-8",
    card: "p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 bg-[var(--cardBackground)]",
    cardSelected: "border-[var(--accentColor)] bg-gradient-to-br from-[var(--accentColor)]/10 to-[var(--accentColor)]/5 shadow-lg",
    cardUnselected: "border-[var(--borderColor)] hover:border-[var(--accentColor)]/50 hover:shadow-md hover:bg-[var(--hoverBackground)]",
    content: "text-center",
    title: "text-xl font-bold text-[var(--fontColor)] mb-3",
    description: "text-gray-600 dark:text-gray-400 leading-relaxed"
  },

  teamSetup: {
    container: "text-center",
    title: "text-2xl font-bold text-[var(--fontColor)] mb-4",
    description: "text-gray-600 dark:text-gray-400 mb-8 text-lg",
    buttonGroup: "flex gap-4 justify-center"
  },

  googleAds: {
    container: "text-center",
    title: "text-2xl font-bold text-[var(--fontColor)] mb-4",
    description: "text-gray-600 dark:text-gray-400 mb-8 text-lg",
    buttonGroup: "flex gap-4 justify-center"
  },

  summary: {
    container: "sticky top-24",
    card: "bg-[var(--cardBackground)] rounded-2xl shadow-xl border border-[var(--borderColor)] p-6",
    title: "text-2xl font-bold text-[var(--fontColor)] mb-8 flex items-center",
    titleIcon: "text-3xl mr-3",
    sections: "space-y-6",
    section: "rounded-2xl p-6 flex flex-col min-h-[140px]",
    sectionHeader: "font-bold text-[var(--fontColor)] mb-4 flex items-center",
    sectionIcon: "text-xl mr-2",
    sectionContent: "space-y-3 text-sm",
    sectionContentCenter: "text-sm flex items-center",
    fieldRow: "flex justify-between",
    fieldLabel: "text-gray-600",
    fieldValue: "text-[var(--fontColor)] font-semibold",
    fieldRowCenter: "flex justify-between items-center w-full",
    badge: "font-bold px-3 py-1 rounded-full text-xs",
    badgeManager: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700",
    badgeCoWorker: "bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400 border border-blue-400 dark:border-blue-500"
  },

  gradients: {
    personal: "bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200/50 dark:border-blue-700/50",
    company: "bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/20 border border-green-200/50 dark:border-green-700/50",
    role: "bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200/50 dark:border-purple-700/50"
  },

  invite: {
    header: "bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 border border-green-200/50 dark:border-green-700/50 shadow-xl mb-6",
    headerContent: "flex items-center justify-between mb-4 mt-4",
    title: "text-2xl font-bold text-[var(--fontColor)] flex items-center",
    titleIcon: "text-3xl mr-3",
    closeButton: "text-gray-600 dark:text-gray-400 hover:text-[var(--fontColor)] transition-colors duration-200 cursor-pointer",
    description: "text-gray-600 dark:text-gray-400 mb-6",
    contentCard: "bg-[var(--cardBackground)] rounded-2xl shadow-xl border border-[var(--borderColor)] p-8",
    contentCenter: "text-center",
    contentTitle: "text-lg font-semibold mb-4 text-[var(--fontColor)]",
    contentDescription: "text-gray-600 dark:text-gray-400 mb-4",
    contentCloseButton: "px-4 py-2 bg-[var(--accentColor)] text-white rounded-lg hover:bg-[var(--accentColor)]/90 cursor-pointer",
    wrapper: {
      container: "text-center mb-6",
      icon: "w-12 h-12 mx-auto mb-4 text-[var(--accentColor)]",
      title: "text-2xl sm:text-3xl font-bold text-[var(--fontColor)] mb-3",
      description: "text-base sm:text-lg text-gray-600 dark:text-gray-400"
    },
    form: {
      container: "mt-6 space-y-4",
      input: "w-full px-4 py-3 border border-[var(--borderColor)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent bg-[var(--cardBackground)] text-[var(--fontColor)] placeholder-[var(--textMuted)]",
      button: "w-full px-6 py-3 bg-[var(--accentColor)] text-white font-semibold rounded-xl hover:bg-[var(--accentColor)]/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer",
      buttonDisabled: "opacity-50 cursor-not-allowed",
      success: "p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 text-sm",
      error: "p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm"
    }
  },

  navigation: {
    container: "flex justify-between items-center mt-8 gap-4",
    button: "px-8 py-4 rounded-xl font-semibold transition-all duration-200 cursor-pointer",
    buttonPrevious: "text-[var(--fontColor)] hover:bg-[var(--hoverBackground)] border border-[var(--borderColor)] hover:border-[var(--accentColor)]",
    buttonPreviousDisabled: "opacity-50 cursor-not-allowed text-[var(--textSecondary)]",
    buttonNext: "bg-[var(--accentColor)] text-white hover:bg-[var(--accentColor)]/90 hover:shadow-xl transform hover:scale-105 shadow-lg",
    buttonNextDisabled: "opacity-50 cursor-not-allowed bg-[var(--borderColor)] text-[var(--textSecondary)]",
    buttonComplete: "bg-gradient-to-r from-[var(--accentColor)] to-[var(--lightAccentColor)] text-white hover:shadow-xl transform hover:scale-105"
  },

  buttons: {
    primary: "px-8 py-4 bg-[var(--accentColor)] text-white font-semibold rounded-xl hover:bg-[var(--accentColor)]/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer",
    secondary: "px-8 py-4 border-2 border-[var(--borderColor)] text-[var(--fontColor)] font-semibold rounded-xl hover:border-[var(--accentColor)] hover:bg-[var(--accentColor)]/5 transition-all duration-200 cursor-pointer",
    close: "text-[var(--textSecondary)] hover:text-[var(--fontColor)] transition-colors duration-200 cursor-pointer"
  },

  error: {
    container: "mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg",
    message: "text-red-600 dark:text-red-400 text-sm"
  },

  loading: {
    container: "min-h-screen flex items-center justify-center",
    spinner: "animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--accentColor)]"
  },

  formContainer: {
    container: "flex flex-col gap-6 sm:gap-8 lg:gap-12 pt-16 sm:pt-20 lg:pt-24 items-center lg:items-start",
    card: "w-full max-w-2xl",
    buttonsContainer: "flex justify-center w-full"
  },

  summaryContainer: {
    container: "hidden lg:block lg:row-span-2 self-start lg:h-full lg:min-w-[400px] lg:max-w-[450px]"
  }
};
