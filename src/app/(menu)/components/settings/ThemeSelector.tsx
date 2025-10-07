"use client";
import { useTheme } from "../../../contexts/ThemeContext";
import { themeSelectorStyles } from "../../styles/settingsStyles";

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={themeSelectorStyles.container}>
      <div className={themeSelectorStyles.info}>
        <h3 className={themeSelectorStyles.title}>Theme</h3>
        <p className={themeSelectorStyles.subtitle}>
          Choose your preferred color scheme
        </p>
      </div>
      <div className={themeSelectorStyles.buttons}>
        <button
          onClick={() => setTheme("light")}
          className={`${themeSelectorStyles.button} ${
            theme === "light"
              ? themeSelectorStyles.active
              : themeSelectorStyles.inactive
          }`}
        >
          ☀️ Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`${themeSelectorStyles.button} ${
            theme === "dark"
              ? themeSelectorStyles.active
              : themeSelectorStyles.inactive
          }`}
        >
          🌙 Dark
        </button>
      </div>
    </div>
  );
}
