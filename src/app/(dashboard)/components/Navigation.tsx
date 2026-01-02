"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationStyles } from "../_styles/navigationStyles";

interface NavigationProps {
  isMobile?: boolean;
}

export default function Navigation({ isMobile = false }: NavigationProps) {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/calendar", label: "Calendar" },
    { href: "/changes", label: "Changes" },
    { href: "/reports", label: "Reports" },
  ];

  const baseClasses = isMobile 
    ? navigationStyles.base.mobile
    : navigationStyles.base.desktop;

  const getActiveClasses = (href: string) => {
    const isActive = pathname === href;
    return isActive 
      ? navigationStyles.active
      : navigationStyles.inactive;
  };

  if (isMobile) {
    return (
      <div className={navigationStyles.mobileContainer}>
        <div className={navigationStyles.mobileContent}>
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
    <nav className={navigationStyles.desktop}>
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
