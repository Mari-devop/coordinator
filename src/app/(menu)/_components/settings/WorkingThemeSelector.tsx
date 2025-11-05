"use client";
import { useState, useEffect } from "react";
import { settingsStyles } from "@/app/(menu)/_styles/settingsStyles";

export default function WorkingThemeSelector() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const systemTheme = prefersDark ? "dark" : "light";
      setTheme(systemTheme);
      document.documentElement.setAttribute("data-theme", systemTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const { theme: themeStyles } = settingsStyles;

  return (
    <div className={themeStyles.container}>
      <div className={themeStyles.info}>
        <h3 className={themeStyles.title}>
          Theme
        </h3>
        <p className={themeStyles.subtitle}>
          Choose your preferred color scheme
        </p>
      </div>
      <div className={themeStyles.buttons}>
        <button
          onClick={() => handleThemeChange("light")}
          className={`${themeStyles.button} ${
            theme === "light"
              ? themeStyles.active
              : themeStyles.inactive
          }`}
        >
          ☀️ Light
        </button>
        <button
          onClick={() => handleThemeChange("dark")}
          className={`${themeStyles.button} ${
            theme === "dark"
              ? themeStyles.active
              : themeStyles.inactive
          }`}
        >
          🌙 Dark
        </button>
      </div>
    </div>
  );
}

