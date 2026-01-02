"use client";

import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { logoutButtonStyles } from "@/app/_styles/authGuardStyles";

const publicRoutes = [
  "/login",
  "/register", 
  "/forgot-password",
  "/privacy-policy",
  "/terms-and-condition",
  "/onboarding",
];

export default function LogoutButton() {
  const pathname = usePathname();
  
  const isPublicRoute = publicRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  if (isPublicRoute) {
    return null;
  }

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <button
      onClick={handleLogout}
      className={logoutButtonStyles.button}
    >
      Log out
    </button>
  );
}
