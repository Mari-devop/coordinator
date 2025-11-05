export const profileContainerStyles = {
    container: "max-w-4xl mx-auto p-6 space-y-8",
    section: "bg-[var(--cardBackground)] rounded-lg shadow-sm border border-[var(--borderColor)] p-6",
    header: "text-2xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-6 flex items-center",
} as const;

export const profileHeaderStyles = {
    container: "text-center mb-8",
    title: "text-3xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-2",
    subtitle: "text-gray-600 font-[var(--font-dm-sans)]",
    icon: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3",
} as const;

export const profileFormStyles = {
    form: "space-y-6",
    fieldGroup: "space-y-4",
    inputGroup: "grid grid-cols-1 md:grid-cols-2 gap-4",
} as const;

export const profileInputStyles = {
    label: "block text-sm font-medium text-[var(--fontColor)] mb-2",
    input: "w-full px-3 py-2 border border-[var(--borderColor)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent bg-[var(--cardBackground)] text-[var(--fontColor)]",
    textarea: "w-full px-3 py-2 border border-[var(--borderColor)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent bg-[var(--cardBackground)] text-[var(--fontColor)] resize-vertical min-h-[100px]",
    select: "w-full px-3 py-2 border border-[var(--borderColor)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent bg-[var(--cardBackground)] text-[var(--fontColor)]",
} as const;

export const profileButtonStyles = {
    primary: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[var(--secondaryBackground)] hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200",
    secondary: "inline-flex items-center px-4 py-2 border border-[var(--borderColor)] text-sm font-medium rounded-md text-[var(--fontColor)] bg-[var(--cardBackground)] hover:bg-[var(--hoverBackground)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200",
    danger: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[var(--accentColor2)] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200",
    save: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--secondaryBackground)] hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200",
} as const;

export const editableFieldStyles = {
    container: "group relative",
    display: "flex items-center justify-between py-2 px-3 rounded-md hover:bg-[var(--hoverBackground)] transition-colors duration-200 cursor-pointer",
    edit: "w-full px-3 py-2 border border-[var(--accentColor)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent bg-[var(--cardBackground)] text-[var(--fontColor)]",
    label: "text-sm font-medium text-[var(--textSecondary)]",
    value: "text-[var(--fontColor)]",
    actions: "flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
    actionButton: "text-xs px-2 py-1 rounded text-[var(--accentColor)] hover:bg-[var(--accentColor)] hover:text-white transition-colors duration-200",
    editContainer: "space-y-2",
    editInputContainer: "flex items-center space-x-2",
    saveButton: "px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200",
    cancelButton: "px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200",
    buttonIcon: "w-4 h-4",
    errorMessage: "text-sm text-red-600",
    editIcon: "w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
    hintText: "text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
    requiredIndicator: "text-red-500 ml-1",
    notSetValue: "text-gray-400 italic",
    valueContainer: "flex items-center justify-between",
} as const;

export const profileSectionStyles = {
    container: "bg-[var(--cardBackground)] rounded-lg shadow-sm border border-[var(--borderColor)] p-6",
    header: "flex items-center justify-between mb-6",
    title: "text-xl font-semibold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)]",
    subtitle: "text-sm text-[var(--textSecondary)] mt-1",
    content: "space-y-4",
    divider: "border-t border-[var(--borderColor)] pt-4 mt-4",
} as const;

export const passwordSectionStyles = {
    container: "bg-[var(--cardBackground)] rounded-lg shadow-sm border border-[var(--borderColor)] p-6",
    header: "flex items-center justify-between mb-6",
    title: "text-xl font-semibold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)]",
    toggleButton: "text-sm text-[var(--accentColor)] hover:text-[var(--lightAccentColor)] transition-colors duration-200",
    form: "space-y-4",
    field: "space-y-2",
    label: "block text-sm font-medium text-[var(--fontColor)]",
    input: "w-full px-3 py-2 border border-[var(--borderColor)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent bg-[var(--cardBackground)] text-[var(--fontColor)]",
    button: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--secondaryBackground)] hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200",
} as const;

export const avatarStyles = {
    container: "flex items-center space-x-4",
    image: "w-16 h-16 rounded-full object-cover border-2 border-[var(--borderColor)]",
    placeholder: "w-16 h-16 bg-gradient-to-br from-[var(--secondaryBackground)] to-[var(--accentColor)] rounded-full flex items-center justify-center text-white font-semibold text-xl",
    uploadButton: "text-sm text-[var(--accentColor)] hover:text-[var(--lightAccentColor)] transition-colors duration-200",
    info: "flex-1",
    name: "text-lg font-semibold text-[var(--fontColor)]",
    email: "text-sm text-[var(--textSecondary)]",
} as const;

export const statusStyles = {
    success: "text-green-600 bg-green-50 border-green-200",
    error: "text-red-600 bg-red-50 border-red-200",
    warning: "text-yellow-600 bg-yellow-50 border-yellow-200",
    info: "text-blue-600 bg-blue-50 border-blue-200",
    message: "p-3 rounded-md border text-sm font-medium",
} as const;

export const profileLoadingStyles = {
    container: "max-w-4xl mx-auto p-6 space-y-8",
    loadingWrapper: "flex items-center justify-center min-h-[400px]",
    loadingContent: "text-center",
    spinner: "animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--secondaryBackground)] mx-auto mb-4",
    text: "text-gray-600",
} as const;

export const googleAdsSectionStyles = {
    title: "text-xl font-semibold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-6 flex items-center",
    titleIconContainer: "w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3",
    titleIcon: "w-4 h-4 text-green-600",
    content: "space-y-4",
    emptyState: "text-center py-12 border-2 border-dashed border-gray-300 rounded-lg",
    emptyIconContainer: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
    emptyIcon: "w-8 h-8 text-gray-400",
    emptyTitle: "text-lg font-medium text-gray-900 mb-2",
    emptyDescription: "text-gray-600 mb-4",
    connectButtonIcon: "w-4 h-4 mr-2",
} as const;

export const passwordChangeSectionStyles = {
    title: "text-xl font-semibold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] flex items-center",
    titleIconContainer: "w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3",
    titleIcon: "w-4 h-4 text-yellow-600",
    toggleButton: "px-4 py-2 text-sm font-medium text-[var(--accentColor)] hover:text-[var(--lightAccentColor)] transition-colors duration-200",
    collapsedState: "flex items-center justify-between p-4 bg-gray-50 rounded-lg",
    collapsedContent: "",
    collapsedTitle: "font-medium text-gray-900",
    collapsedSubtitle: "text-sm text-gray-600",
    collapsedMask: "text-sm text-gray-500",
    form: "space-y-4",
    actions: "flex justify-end space-x-3 pt-4",
    submitButton: "disabled:opacity-50 disabled:cursor-not-allowed",
} as const;

export const profileFormSectionStyles = {
    title: "text-xl font-semibold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-6 flex items-center",
    titleIconContainer: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3",
    titleIcon: "w-4 h-4 text-blue-600",
    passwordSection: "border-t border-[var(--borderColor)] pt-6",
    passwordTitle: "text-lg font-semibold text-[var(--fontColor)] mb-4",
    actions: "flex justify-end pt-6 border-t border-[var(--borderColor)]",
    submitButton: "px-6 py-3 font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed",
    loadingWrapper: "flex items-center",
    spinner: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
} as const;

export const profileSummaryStyles = {
    container: "bg-white rounded-lg shadow-sm border border-gray-200 p-6",
    title: "text-2xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-6 flex items-center",
    titleIconContainer: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3",
    titleIcon: "w-4 h-4 text-blue-600",
    fieldsGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
} as const;

export const saveButtonStyles = {
    container: "flex justify-end pt-6 border-t border-[var(--borderColor)]",
    button: "px-6 py-3 font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed",
} as const;

export const toggleSwitchStyles = {
    container: "flex items-center justify-between",
    content: "flex-1",
    label: "text-base font-medium text-[var(--fontColor)] mb-1",
    description: "text-sm text-[var(--textSecondary)]",
    labelWrapper: "relative inline-flex items-center cursor-pointer",
    input: "sr-only peer",
    switch: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--accentColor)]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--accentColor)]",
} as const;

export const profileStyles = {
    container: profileContainerStyles,
    header: profileHeaderStyles,
    form: profileFormStyles,
    input: profileInputStyles,
    button: profileButtonStyles,
    editable: editableFieldStyles,
    section: profileSectionStyles,
    password: passwordSectionStyles,
    avatar: avatarStyles,
    status: statusStyles,
    loading: profileLoadingStyles,
    googleAds: googleAdsSectionStyles,
    passwordChange: passwordChangeSectionStyles,
    formSection: profileFormSectionStyles,
    summary: profileSummaryStyles,
    saveButton: saveButtonStyles,
    toggleSwitch: toggleSwitchStyles,
} as const;
