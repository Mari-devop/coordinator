"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authLayoutStyles } from "./_styles/layoutStyles";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { layout, animation } = authLayoutStyles;
  
  const isAuthPage =
    pathname.includes("/login") ||
    pathname.includes("/register") ||
    pathname.includes("/forgot-password") ||
    pathname.includes("/privacy-policy") ||
    pathname.includes("/terms-and-condition");

  const isContentPage = pathname.includes("/privacy-policy") || pathname.includes("/terms-and-condition");
  const isOnboardingPage = pathname.includes("/onboarding");
  
  const containerWidth = isOnboardingPage 
    ? "" 
    : isContentPage 
    ? layout.containerWidth.content 
    : layout.containerWidth.form;

  return (
    <div className={layout.container}>
      <header>
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
            <nav className={layout.header.navContainer}>
              {!isAuthPage && (
                <Link
                  href="/logout"
                  className={`${layout.navigation.logoutLink} ${animation.focus.logout}`}
                >
                  Log out
                </Link>
              )}
            </nav>
          </div>
        </div>
      </header>
      <main className={layout.main.container}>
        <div className={`${layout.main.content} ${containerWidth} ${isOnboardingPage ? 'p-6' : ''}`}>
          {children}
        </div>
      </main>
    </div>
  );
}
