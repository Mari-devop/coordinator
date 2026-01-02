"use client";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Icon from "@/app/_components/icons/Icon";
import { settingsApi } from "@/app/_lib/api/settings";
import { profileDropdownStyles } from "../_styles/profileDropdownStyles";

interface ProfileDropdownProps {
  userName?: string;
}

export default function ProfileDropdown({ userName }: ProfileDropdownProps) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [managerMode, setManagerMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const displayName = userName || session?.user?.name || session?.user?.email || "User";
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const settings = await settingsApi.getSettings();
        setManagerMode(Boolean(settings.managerMode));
      } catch (error) {
        console.error("Failed to load settings:", error);
        setManagerMode(false);
      }
    };

    loadSettings();
  }, []);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const settings = await settingsApi.getSettings();
        setManagerMode(settings.managerMode);
      } catch (error) {
        console.error("Failed to reload settings:", error);
      }
    };
    loadSettings();
  }, [pathname]);

  const handleSignOut = async () => {
    setIsOpen(false);
    await signOut({ callbackUrl: "/login", redirect: true });
  };

  const handleToggleDropdown = async () => {
    if (!isOpen) {
      try {
        const settings = await settingsApi.getSettings();
        setManagerMode(Boolean(settings.managerMode));
      } catch (error) {
        console.error("Failed to reload settings:", error);
      }
    }
    setIsOpen(prev => !prev);
  };


  const handleMenuItemClick = useCallback((href: string) => {
    router.push(href);
    setIsOpen(false);
  }, [router]);

  useEffect(() => {
    if (isOpen && buttonRef.current && dropdownRef.current) {
      const updatePosition = () => {
        if (buttonRef.current && dropdownRef.current) {
          const buttonRect = buttonRef.current.getBoundingClientRect();
          dropdownRef.current.style.top = `${buttonRect.bottom + 8}px`;
          dropdownRef.current.style.right = `${window.innerWidth - buttonRect.right}px`;
        }
      };

      updatePosition();
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, true);

      return () => {
        window.removeEventListener('resize', updatePosition);
        window.removeEventListener('scroll', updatePosition, true);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = useMemo(() => {
    return [
      ...(managerMode ? [{ href: "/co-workers", label: "Co-Workers" }] : []),
      { href: "/profile", label: "Profile" },
      { href: "/settings", label: "Settings" },
    ];
  }, [managerMode]);

  const isActive = (href: string) => pathname === href;
  const styles = profileDropdownStyles;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button 
          ref={buttonRef}
          onClick={handleToggleDropdown}
          className={styles.button}
        >
          <div className={styles.avatar}>
            <Icon 
              name="user"
              className={styles.avatarIcon} 
              width={20}
              height={20}
            />
          </div>
          
          <span className={styles.displayName}>
            {displayName}
          </span>
          
          <Icon 
            name="chevron-down"
            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
            width={16}
            height={16}
          />
        </button>

        {isOpen && mounted && createPortal(
          <div 
            ref={dropdownRef}
            className={styles.dropdown} 
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className={styles.menu}>
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleMenuItemClick(item.href);
                  }}
                  className={`${styles.menuItem} ${
                    isActive(item.href)
                      ? styles.menuItemActive
                      : styles.menuItemInactive
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className={styles.divider}></div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleSignOut();
                }}
                className={styles.signOutButton}
              >
                Sign out
              </button>
            </div>
          </div>,
          document.body
        )}
      </div>
    </div>
  );
}
