import Link from "next/link";
import AuthGuard from "@/app/_components/AuthGuard";
import { menuLayoutStyles } from "./_styles/layoutStyles";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className={menuLayoutStyles.container}>
        <header>
          <div className={menuLayoutStyles.header.container}>
            <div className={menuLayoutStyles.header.content}>
              <div className={menuLayoutStyles.header.logoContainer}>
                <Link
                  href="/login"
                  className={menuLayoutStyles.header.logo}
                >
                  Coordinator
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div>{children}</div>
      </div>
    </AuthGuard>
  );
}
