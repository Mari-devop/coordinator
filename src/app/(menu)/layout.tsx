import Link from "next/link";
import AuthGuard from "@/app/_components/AuthGuard";
import ProfileDropdown from "@/app/(dashboard)/components/ProfileDropdown";
import ThemeToggle from "@/app/(auth)/_components/_auth/ThemeToggle";
import { menuLayoutStyles } from "./_styles/layoutStyles";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className={menuLayoutStyles.container}>
        <header className={menuLayoutStyles.header.header}>
          <div className={menuLayoutStyles.header.container}>
            <div className={menuLayoutStyles.header.content}>
              <div className={menuLayoutStyles.header.logoContainer}>
                <Link
                  href="/dashboard"
                  className={menuLayoutStyles.header.logo}
                >
                  Coordinator
                </Link>
              </div>
              <div className={menuLayoutStyles.header.actions}>
                <ThemeToggle />
                <ProfileDropdown />
              </div>
            </div>
          </div>
        </header>
        <div>{children}</div>
      </div>
    </AuthGuard>
  );
}
