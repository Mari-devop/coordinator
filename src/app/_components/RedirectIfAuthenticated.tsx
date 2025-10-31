"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface RedirectIfAuthenticatedProps {
  children: React.ReactNode;
  redirectTo?: string;
  fallback?: React.ReactNode;
}

export default function RedirectIfAuthenticated({ 
  children, 
  redirectTo = "/onboarding",
  fallback 
}: RedirectIfAuthenticatedProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; 

    if (session) {
      router.push(redirectTo);
      return;
    }
  }, [session, status, router, redirectTo]);

  if (status === "loading") {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--accentColor)]"></div>
      </div>
    );
  }

  if (session) {
    return null; 
  }

  return <>{children}</>;
}
