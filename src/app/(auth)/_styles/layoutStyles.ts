export const layoutStyles = {
    container: "min-h-screen flex flex-col bg-[var(--background)]",
    
    header: {
        container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        content: "flex justify-between items-center h-16",
        logoContainer: "flex items-center",
        navContainer: "flex items-center",
    },
    
    logo: {
        container: "text-2xl font-bold text-[var(--secondaryBackground)] font-[var(--font-wix-madefor-display)] uppercase border border-[var(--secondaryBackground)] rounded-md px-2 py-1",
        link: "hover:bg-[var(--secondaryBackground)] hover:text-white transition-colors duration-200",
    },
    
    navigation: {
        logoutLink: "text-[var(--accentColor)] hover:text-[var(--lightAccentColor)] transition-colors duration-200 font-medium",
    },
    
    main: {
        container: "flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
        content: "w-full",
    },
    
    containerWidth: {
        form: "max-w-md",
        content: "max-w-4xl",
        default: "max-w-md",
    },
} as const;

export const responsiveStyles = {
    mobile: {
        header: "px-4",
        main: "px-4 py-8",
    },
    
    tablet: {
        header: "sm:px-6",
        main: "sm:px-6 py-10",
    },
    
    desktop: {
        header: "lg:px-8",
        main: "lg:px-8 py-12",
    },
} as const;

export const animationStyles = {
    hover: {
        logo: "hover:bg-[var(--secondaryBackground)] hover:text-white transition-colors duration-200",
        logout: "hover:text-[var(--lightAccentColor)] transition-colors duration-200",
    },
    
    focus: {
        logo: "focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:ring-offset-2",
        logout: "focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:ring-offset-2",
    },
    
    duration: {
        fast: "transition-colors duration-150",
        normal: "transition-colors duration-200",
        slow: "transition-colors duration-300",
    },
} as const;

export const themeStyles = {
    background: {
        primary: "bg-[var(--background)]",
        secondary: "bg-[var(--secondaryBackground)]",
    },
    
    text: {
        primary: "text-[var(--fontColor)]",
        secondary: "text-[var(--secondaryBackground)]",
        accent: "text-[var(--accentColor)]",
        lightAccent: "text-[var(--lightAccentColor)]",
    },
    
    border: {
        primary: "border-[var(--secondaryBackground)]",
        accent: "border-[var(--accentColor)]",
    },
} as const;

export const authLayoutStyles = {
    layout: layoutStyles,
    responsive: responsiveStyles,
    animation: animationStyles,
    theme: themeStyles,
} as const;

export const getAuthLayoutStyles = (pathname: string | null) => {
    const isContentPage = pathname?.includes("/privacy-policy") || pathname?.includes("/terms-and-condition");
    const isOnboardingPage = pathname?.includes("/onboarding");
    const isRegisterPage = pathname?.includes("/register");
    const isLoginPage = pathname?.includes("/login");
    const isForgotPasswordPage = pathname?.includes("/forgot-password");
    const isAuthTwoColumnPage = isRegisterPage || isLoginPage;
    const isAuthPageWithoutTopPadding = isAuthTwoColumnPage || isForgotPasswordPage;

    const containerWidth = isOnboardingPage 
        ? "" 
        : isContentPage 
        ? layoutStyles.containerWidth.content 
        : isAuthTwoColumnPage
        ? "max-w-7xl"
        : layoutStyles.containerWidth.form;

    const mainClasses = [
        layoutStyles.main.container,
        isAuthPageWithoutTopPadding && '!pt-0 !pb-4 px-0 min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] lg:!pb-0',
        isOnboardingPage && '!pt-0 !pb-0 px-0 h-[calc(100vh-4rem)]'
    ].filter(Boolean).join(' ').trim();
        
    const contentClasses = [
        layoutStyles.main.content,
        containerWidth,
        isOnboardingPage && '!p-0 h-full',
        isAuthTwoColumnPage && 'h-full flex items-center',
        isForgotPasswordPage && 'flex items-center justify-center w-full py-4'
    ].filter(Boolean).join(' ').trim();

    const headerClasses = [
        isOnboardingPage && 'sticky top-0 z-50'
    ].filter(Boolean).join(' ').trim();

    return {
        mainClasses,
        contentClasses,
        headerClasses,
        isOnboardingPage
    };
};

export const logoutButtonStyles = {
    button: "px-4 py-2 text-sm font-medium text-[var(--fontColor)] bg-[var(--cardBackground)] border border-[var(--borderColor)] rounded-md shadow-sm hover:bg-[var(--hoverBackground)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200 cursor-pointer"
} as const;
