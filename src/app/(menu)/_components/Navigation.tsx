"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  isMobile?: boolean;
}

export default function Navigation({ isMobile = false }: NavigationProps) {
  const pathname = usePathname();

  const navItems = [
    { href: "/co-workers", label: "Co-Workers" },
    { href: "/profile", label: "Profile" },
    { href: "/settings", label: "Settings" },
  ];

  const baseClasses = isMobile 
    ? "block px-3 py-2 rounded-md text-base font-medium"
    : "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";

  const getActiveClasses = (href: string) => {
    const isActive = pathname === href;
    return isActive 
      ? "bg-[var(--secondaryBackground)] text-white" 
      : "text-[var(--fontColor)] hover:text-[var(--accentColor)] hover:bg-[var(--hoverBackground)]";
  };

  if (isMobile) {
    return (
      <div className="md:hidden border-t border-[var(--borderColor)]">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${baseClasses} ${getActiveClasses(item.href)}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${baseClasses} ${getActiveClasses(item.href)}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

