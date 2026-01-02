import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import ProfileDropdown from "./components/ProfileDropdown";
import AuthGuard from "@/app/_components/AuthGuard";
import ThemeToggle from "@/app/(auth)/_components/_auth/ThemeToggle";
import { dashboardLayoutStyles } from "./_styles/layoutStyles";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const styles = dashboardLayoutStyles;

  return (
    <AuthGuard>
      <div className={styles.container}>
        <header className={styles.header.header}>
          <div className={styles.header.container}>
            <div className={styles.header.content}>
              <Logo />
              <Navigation />
              <div className={styles.header.actions}>
                <ThemeToggle />
                <ProfileDropdown />
              </div>
            </div>
          </div>
          <Navigation isMobile />
        </header>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </AuthGuard>
  );
}
