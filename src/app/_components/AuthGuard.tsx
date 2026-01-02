"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authGuardStyles } from "@/app/_styles/authGuardStyles";

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function AuthGuard({ children, fallback }: AuthGuardProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; 

    if (!session) {
      router.push("/login");
      return;
    }
  }, [session, status, router]);

  if (status === "loading") {
    return fallback || (
      <div className={authGuardStyles.loadingContainer}>
        <div className={authGuardStyles.spinner}></div>
      </div>
    );
  }

  if (!session) {
    return null; 
  }

  return <>{children}</>;
}
