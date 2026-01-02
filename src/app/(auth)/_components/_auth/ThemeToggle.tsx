"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@/app/_contexts/ThemeContext";
import { themeToggleStyles } from "@/app/(auth)/_styles/authStyles";
import Icon from "@/app/_components/icons/Icon";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayTheme = mounted ? theme : "light";
  const iconName = displayTheme === "light" ? "moon" : "sun";
  const ariaLabel = `Switch to ${displayTheme === "light" ? "dark" : "light"} theme`;

  return (
    <button
      onClick={toggleTheme}
      className={themeToggleStyles.button}
      aria-label={ariaLabel}
      type="button"
    >
      <Icon
        name={iconName}
        className={themeToggleStyles.icon}
        width={20}
        height={20}
      />
    </button>
  );
}

