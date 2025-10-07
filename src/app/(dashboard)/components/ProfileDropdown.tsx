"use client";
import Link from "next/link";

interface ProfileDropdownProps {
  userName?: string;
}

export default function ProfileDropdown({ userName = "John Doe" }: ProfileDropdownProps) {
  return (
    <div className="flex items-center">
      <div className="relative group">
        <button className="flex items-center space-x-3 p-2 rounded-full hover:bg-gray-50 transition-colors duration-200">
          <div className="w-8 h-8 bg-gradient-to-br from-[var(--secondaryBackground)] to-[var(--accentColor)] rounded-full flex items-center justify-center">
            <svg 
              className="w-5 h-5 text-white" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
          
          <span className="hidden sm:block text-sm font-medium text-gray-700">
            {userName}
          </span>
          
          <svg 
            className="w-4 h-4 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </button>

        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-1">
            <Link 
              href="/dashboard/profile" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--accentColor)] transition-colors duration-200"
            >
              View Profile
            </Link>
            <Link 
              href="/dashboard/settings" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--accentColor)] transition-colors duration-200"
            >
              Settings
            </Link>
            <div className="border-t border-gray-100"></div>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--accentColor2)] transition-colors duration-200">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
