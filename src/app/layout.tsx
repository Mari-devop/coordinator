import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./_styles/globals.css";
import { Providers } from "./providers";
import IconSprite from "./_components/icons/IconSprite";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coordinator",
  description: "Team coordination and management platform",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <IconSprite />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
