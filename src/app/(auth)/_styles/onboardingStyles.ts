export const onboardingStyles = {
  container: {
    main: "min-h-screen",
    content: "max-w-6xl mx-auto px-6 py-8",
    grid: "grid grid-cols-1 lg:grid-cols-3 gap-8",
    gridTwoCol: "grid grid-cols-1 lg:grid-cols-2 gap-8",
    flexCol: "flex flex-col",
    sticky: "sticky top-24"
  },

  card: {
    main: "bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8",
    mainFlex: "bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 flex-1",
    summary: "bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6",
    invite: "bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8"
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
    containerWide: "max-w-4xl mx-auto",
    header: "text-center mb-12",
    icon: "text-6xl mb-4",
    title: "text-3xl font-bold text-[var(--fontColor)] mb-3",
    description: "text-lg text-[var(--textSecondary)]",
    form: "space-y-6",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-6",
    field: "space-y-2",
    label: "block text-sm font-medium text-[var(--fontColor)]",
    required: "text-red-500",
    input: "w-full px-4 py-3 border border-[var(--borderColor)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent bg-[var(--cardBackground)] text-[var(--fontColor)] transition-all duration-200"
  },

  roleSelection: {
    container: "grid grid-cols-1 md:grid-cols-2 gap-8",
    card: "p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105",
    cardSelected: "border-[var(--accentColor)] bg-gradient-to-br from-[var(--accentColor)]/10 to-[var(--accentColor)]/5 shadow-lg",
    cardUnselected: "border-[var(--borderColor)] hover:border-[var(--accentColor)]/50 hover:shadow-md",
    content: "text-center",
    title: "text-xl font-bold text-[var(--fontColor)] mb-3",
    description: "text-[var(--textSecondary)] leading-relaxed"
  },

  teamSetup: {
    container: "text-center",
    title: "text-2xl font-bold text-[var(--fontColor)] mb-4",
    description: "text-[var(--textSecondary)] mb-8 text-lg",
    buttonGroup: "flex gap-4 justify-center"
  },

  googleAds: {
    container: "text-center",
    title: "text-2xl font-bold text-[var(--fontColor)] mb-4",
    description: "text-[var(--textSecondary)] mb-8 text-lg",
    buttonGroup: "flex gap-4 justify-center"
  },

  summary: {
    container: "sticky top-24",
    card: "bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6",
    title: "text-2xl font-bold text-[var(--fontColor)] mb-8 flex items-center",
    titleIcon: "text-3xl mr-3",
    sections: "space-y-6",
    section: "rounded-2xl p-6 h-32 flex flex-col",
    sectionHeader: "font-bold text-[var(--fontColor)] mb-4 flex items-center",
    sectionIcon: "text-xl mr-2",
    sectionContent: "space-y-3 text-sm flex-1",
    sectionContentCenter: "text-sm flex-1 flex items-center",
    fieldRow: "flex justify-between",
    fieldLabel: "text-[var(--textSecondary)]",
    fieldValue: "text-[var(--fontColor)] font-semibold",
    fieldRowCenter: "flex justify-between items-center w-full",
    badge: "font-bold px-3 py-1 rounded-full text-xs",
    badgeManager: "bg-green-100 text-green-800 border border-green-200",
    badgeCoWorker: "bg-blue-100 text-blue-800 border border-blue-200"
  },

  gradients: {
    personal: "bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50",
    company: "bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200/50",
    role: "bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200/50"
  },

  invite: {
    header: "bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 border border-green-200/50 shadow-xl mb-6",
    headerContent: "flex items-center justify-between mb-4 mt-4",
    title: "text-2xl font-bold text-[var(--fontColor)] flex items-center",
    titleIcon: "text-3xl mr-3",
    closeButton: "text-[var(--textSecondary)] hover:text-[var(--fontColor)] transition-colors duration-200",
    description: "text-[var(--textSecondary)] mb-6",
    contentCard: "bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8",
    contentCenter: "text-center",
    contentTitle: "text-lg font-semibold mb-4",
    contentDescription: "text-gray-600 mb-4",
    contentCloseButton: "px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
  },

  navigation: {
    container: "flex justify-between items-center mt-8",
    button: "px-8 py-4 rounded-xl font-semibold transition-all duration-200",
    buttonPrevious: "text-[var(--fontColor)] hover:bg-[var(--hoverBackground)] border border-[var(--borderColor)] hover:border-[var(--accentColor)]",
    buttonPreviousDisabled: "opacity-50 cursor-not-allowed text-[var(--textSecondary)]",
    buttonNext: "bg-[var(--accentColor)] text-white hover:bg-[var(--accentColor)]/90 hover:shadow-xl transform hover:scale-105 shadow-lg",
    buttonNextDisabled: "opacity-50 cursor-not-allowed bg-[var(--borderColor)] text-[var(--textSecondary)]",
    buttonComplete: "bg-gradient-to-r from-[var(--accentColor)] to-[var(--lightAccentColor)] text-white hover:shadow-xl transform hover:scale-105"
  },

  buttons: {
    primary: "px-8 py-4 bg-[var(--accentColor)] text-white font-semibold rounded-xl hover:bg-[var(--accentColor)]/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105",
    secondary: "px-8 py-4 border-2 border-[var(--borderColor)] text-[var(--fontColor)] font-semibold rounded-xl hover:border-[var(--accentColor)] hover:bg-[var(--accentColor)]/5 transition-all duration-200",
    close: "text-[var(--textSecondary)] hover:text-[var(--fontColor)] transition-colors duration-200"
  },

  error: {
    container: "mb-4 p-4 bg-red-50 border border-red-200 rounded-lg",
    message: "text-red-600 text-sm"
  }
};
