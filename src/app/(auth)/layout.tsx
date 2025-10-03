"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/forgot-password" ||
    pathname === "/privacy-policy" ||
    pathname === "/terms-and-condition";

  const isFormPage = pathname === "/login" || pathname === "/register" || pathname === "/forgot-password";
  const isContentPage = pathname === "/privacy-policy" || pathname === "/terms-and-condition";
  
  const containerWidth = isContentPage ? "max-w-4xl" : "max-w-md";

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
            <Link href="/login" className="text-2xl font-bold text-[var(--secondaryBackground)] font-[var(--font-wix-madefor-display)] uppercase border border-[var(--secondaryBackground)] rounded-md px-2 py-1">
                Coordinator
              </Link>
            </div>
            <nav className="flex items-center">
              {!isAuthPage && (
                <a
                  href="/logout"
                  className="text-[var(--accentColor)] hover:text-[var(--lightAccentColor)] transition-colors duration-200 font-medium"
                >
                  Log out
                </a>
              )}
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className={`w-full ${containerWidth}`}>{children}</div>
      </main>
    </div>
  );
}
