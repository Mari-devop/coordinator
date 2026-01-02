"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { authLayoutStyles, getAuthLayoutStyles, logoutButtonStyles } from "./_styles/layoutStyles";
import { ThemeToggle } from "./_components/_auth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { layout, animation } = authLayoutStyles;
  const { mainClasses, contentClasses, headerClasses, isOnboardingPage } = getAuthLayoutStyles(pathname);

  return (
    <div className={`${layout.container} auth-gradient-background`}>
      <header className={headerClasses}>
        <div className={layout.header.container}>
          <div className={layout.header.content}>
            <div className={layout.header.logoContainer}>
              <Link 
                href="/login" 
                className={`${layout.logo.container} ${animation.hover.logo} ${animation.focus.logo}`}
              >
                Coordinator
              </Link>
            </div>
            <div className={layout.header.navContainer}>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                {isOnboardingPage && (
                  <button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className={logoutButtonStyles.button}
                  >
                    Log out
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={mainClasses}>
        <div className={contentClasses}>
          {children}
        </div>
      </main>
    </div>
  );
}
