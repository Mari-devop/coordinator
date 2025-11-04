"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Icon from "@/app/_components/icons/Icon";

interface ProfileDropdownProps {
  userName?: string;
}

export default function ProfileDropdown({ userName }: ProfileDropdownProps) {
  const { data: session } = useSession();
  
  const displayName = userName || session?.user?.name || session?.user?.email || "User";
  
  const handleSignOut = () => {
    signOut({ callbackUrl: "/login" });
  };
  return (
    <div className="flex items-center">
      <div className="relative group">
        <button className="flex items-center space-x-3 p-2 rounded-full hover:bg-gray-50 transition-colors duration-200">
          <div className="w-8 h-8 bg-gradient-to-br from-[var(--secondaryBackground)] to-[var(--accentColor)] rounded-full flex items-center justify-center">
            <Icon 
              name="user"
              className="w-5 h-5 text-white" 
              width={20}
              height={20}
            />
          </div>
          
          <span className="hidden sm:block text-sm font-medium text-gray-700">
            {displayName}
          </span>
          
          <Icon 
            name="chevron-down"
            className="w-4 h-4 text-gray-400" 
            width={16}
            height={16}
          />
        </button>

        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-1">
            <Link 
              href="/profile" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--accentColor)] transition-colors duration-200"
            >
              View Profile
            </Link>
            <Link 
              href="/settings" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--accentColor)] transition-colors duration-200"
            >
              Settings
            </Link>
            <div className="border-t border-gray-100"></div>
            <button 
              onClick={handleSignOut}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--accentColor2)] transition-colors duration-200"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
