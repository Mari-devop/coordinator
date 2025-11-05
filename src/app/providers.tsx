"use client";
import { ThemeProvider } from "./_contexts/ThemeContext";
import { ToastProvider } from "./_contexts/ToastContext";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        <ToastProvider>
          {children}
        </ToastProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
