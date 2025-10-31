import Link from "next/link";
import AuthGuard from "@/app/_components/AuthGuard";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div>
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link
                  href="/login"
                  className="text-2xl font-bold text-[var(--secondaryBackground)] font-[var(--font-wix-madefor-display)] uppercase border border-[var(--secondaryBackground)] rounded-md px-2 py-1"
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
