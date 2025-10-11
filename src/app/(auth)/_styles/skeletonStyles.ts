export const skeletonStyles = {
  // Base skeleton styles
  base: {
    pulse: "animate-pulse",
    rounded: "rounded",
    roundedLg: "rounded-lg",
    roundedXl: "rounded-xl",
    rounded2xl: "rounded-2xl",
    bgGray: "bg-gray-200",
    bgGray50: "bg-gray-50",
  },

  // Header skeletons
  header: {
    container: "text-center mb-8",
    title: "h-8 bg-gray-200 rounded-lg w-48 mx-auto mb-2 animate-pulse",
    subtitle: "h-4 bg-gray-200 rounded w-64 mx-auto animate-pulse",
    titleSmall: "h-6 bg-gray-200 rounded-lg w-32 mx-auto mb-2 animate-pulse",
    subtitleSmall: "h-3 bg-gray-200 rounded w-48 mx-auto animate-pulse",
  },

  // Form skeletons
  form: {
    container: "space-y-6",
    field: "space-y-2",
    label: "h-4 bg-gray-200 rounded w-24 animate-pulse",
    labelSmall: "h-3 bg-gray-200 rounded w-20 animate-pulse",
    input: "h-12 bg-gray-200 rounded-lg w-full animate-pulse",
    inputSmall: "h-10 bg-gray-200 rounded-lg w-full animate-pulse",
    textarea: "h-20 bg-gray-200 rounded-lg w-full animate-pulse",
    button: "h-12 bg-gray-200 rounded-lg w-full animate-pulse",
    buttonSmall: "h-10 bg-gray-200 rounded-lg w-24 animate-pulse",
    buttonLarge: "h-14 bg-gray-200 rounded-lg w-full animate-pulse",
    grid: {
      twoCol: "grid grid-cols-1 md:grid-cols-2 gap-6",
      threeCol: "grid grid-cols-1 md:grid-cols-3 gap-6",
      formGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
    },
    flex: {
      container: "flex items-center justify-between",
      subcontainer1: "flex items-center space-x-2",
      animate1: "h-4 w-4 bg-gray-200 rounded animate-pulse",
      animate2: "h-4 bg-gray-200 rounded w-24 animate-pulse",
      subcontainer2: "h-4 bg-gray-200 rounded w-20 animate-pulse",
    }
  },

  // Grid layouts
  grid: {
    twoCol: "grid grid-cols-1 md:grid-cols-2 gap-6",
    threeCol: "grid grid-cols-1 md:grid-cols-3 gap-6",
    formGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  },

  // Card skeletons
  card: {
    container: "bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8",
    containerSmall: "bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6",
    header: "bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200/50 shadow-xl",
    content: "bg-gray-50 rounded-2xl p-6 h-32 flex flex-col",
  },

  // Progress and status
  progress: {
    bar: "w-full bg-gray-200 rounded-full h-2 animate-pulse",
    barThick: "w-full bg-gray-200 rounded-full h-3 animate-pulse",
    circle: "h-16 w-16 bg-gray-200 rounded-2xl mx-auto mb-4 animate-pulse",
    circleSmall: "h-8 w-8 bg-gray-200 rounded mr-3 animate-pulse",
  },

  // Navigation
  navigation: {
    container: "flex justify-between items-center mt-8",
    button: "h-12 bg-gray-200 rounded-xl w-24 animate-pulse",
    buttonLarge: "h-12 bg-gray-200 rounded-xl w-32 animate-pulse",
    buttonSmall: "h-10 bg-gray-200 rounded-xl w-20 animate-pulse",
  },

  // Summary panels
  summary: {
    container: "sticky top-24",
    panel: "bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6",
    title: "flex items-center mb-8",
    titleIcon: "h-8 w-8 bg-gray-200 rounded mr-3 animate-pulse",
    titleText: "h-6 bg-gray-200 rounded w-32 animate-pulse",
    section: "bg-gray-50 rounded-2xl p-6 h-32 flex flex-col",
    sectionHeader: "flex items-center mb-4",
    sectionIcon: "h-5 w-5 bg-gray-200 rounded mr-2 animate-pulse",
    sectionTitle: "h-4 bg-gray-200 rounded w-24 animate-pulse",
    sectionContent: "space-y-3 flex-1",
    detailRow: "flex justify-between",
    detailLabel: "h-3 bg-gray-200 rounded w-12 animate-pulse",
    detailValue: "h-3 bg-gray-200 rounded w-20 animate-pulse",
  },

  // Layout containers
  layout: {
    main: "min-h-screen",
    content: "max-w-6xl mx-auto px-6 py-8",
    contentSmall: "max-w-4xl mx-auto px-6 py-8",
    grid: "grid grid-cols-1 lg:grid-cols-3 gap-8",
    gridTwoCol: "grid grid-cols-1 lg:grid-cols-2 gap-8",
    flexCol: "lg:col-span-2 flex flex-col",
    flexColWide: "bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 flex-1",
    flexColSmall: "lg:col-span-1",
  },

  // Text and typography
  text: {
    small: "h-3 bg-gray-200 rounded animate-pulse",
    medium: "h-4 bg-gray-200 rounded animate-pulse",
    large: "h-6 bg-gray-200 rounded animate-pulse",
    xlarge: "h-8 bg-gray-200 rounded animate-pulse",
    paragraph: "h-4 bg-gray-200 rounded w-full animate-pulse",
    paragraphShort: "h-4 bg-gray-200 rounded w-3/4 animate-pulse",
    paragraphLong: "h-4 bg-gray-200 rounded w-full animate-pulse",
  },

  // Spacing utilities
  spacing: {
    mb2: "mb-2",
    mb4: "mb-4",
    mb6: "mb-6",
    mb8: "mb-8",
    mb12: "mb-12",
    mt2: "mt-2",
    mt4: "mt-4",
    mt6: "mt-6",
    mt8: "mt-8",
    spaceY6: "space-y-6",
    spaceY4: "space-y-4",
  },

  // Specific component skeletons
  onboarding: {
    header: {
      container: "max-w-6xl mx-auto px-6",
      subcontainer: "w-full bg-gray-200 rounded-full h-2 animate-pulse",
      card: "bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200/50 shadow-xl",
      flexContainer: "flex items-center justify-between mb-4",
      title: "h-8 bg-gray-200 rounded-lg w-64 mb-2 animate-pulse",
      subtitle: "h-4 bg-gray-200 rounded w-80 animate-pulse",
      progressContainer: "text-right",
      progressText: "h-4 bg-gray-200 rounded w-20 mb-1 animate-pulse",
      progressSubtext: "h-3 bg-gray-200 rounded w-16 animate-pulse",
    },
    stepContent: {
      header: "text-center mb-12",
      icon: "h-16 w-16 bg-gray-200 rounded-2xl mx-auto mb-4 animate-pulse",
      title: "h-8 bg-gray-200 rounded-lg w-48 mx-auto mb-3 animate-pulse",
      description: "h-5 bg-gray-200 rounded w-64 mx-auto animate-pulse",
    },
  },

  auth: {
    header: {
      container: "text-center mb-8",
      title: "h-8 bg-gray-200 rounded-lg w-48 mx-auto mb-2 animate-pulse",
      subtitle: "h-4 bg-gray-200 rounded w-64 mx-auto animate-pulse",
    },
    footer: {
      container: "text-center mt-6",
      text: "h-4 bg-gray-200 rounded w-40 mx-auto animate-pulse",
    },
  },
};
