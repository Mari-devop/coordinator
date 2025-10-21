import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_styles/globals.css";
import { Providers } from "./providers";
import LogoutButton from "./_components/LogoutButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coordinator",
  description: "Team coordination and management platform",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="relative">
            <div className="fixed top-4 right-4 z-50">
              <LogoutButton />
            </div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
