"use client";

import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const publicRoutes = [
  "/login",
  "/register", 
  "/forgot-password",
  "/privacy-policy",
  "/terms-and-condition",
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
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Log out
    </button>
  );
}
