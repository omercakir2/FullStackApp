/* eslint-disable react-refresh/only-export-components -- context + hook pair */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";

/* v2: default is always browser/OS; only explicit light/dark overrides are stored */
const STORAGE_KEY = "portfolio-theme-v2";
const ThemeContext = createContext(null);

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } catch {
    return "light";
  }
}

/** @returns {"system" | "light" | "dark"} */
function readStoredPreference() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark" || saved === "system") {
      return saved;
    }
  } catch {
    /* private mode / blocked storage */
  }
  /* No saved choice → follow the browser/OS */
  return "system";
}

function resolveTheme(preference, systemTheme) {
  if (preference === "light" || preference === "dark") return preference;
  return systemTheme;
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;
}

function subscribeSystemTheme(onStoreChange) {
  try {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => onStoreChange();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  } catch {
    return () => {};
  }
}

export function ThemeProvider({ children }) {
  const systemTheme = useSyncExternalStore(
    subscribeSystemTheme,
    getSystemTheme,
    () => "light"
  );

  const [preference, setPreferenceState] = useState(readStoredPreference);

  const theme = resolveTheme(preference, systemTheme);

  const setPreference = useCallback((next) => {
    const value =
      next === "light" || next === "dark" || next === "system" ? next : "system";
    setPreferenceState(value);
    try {
      if (value === "system") {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        localStorage.setItem(STORAGE_KEY, value);
      }
    } catch {
      /* ignore */
    }
  }, []);

  /** Flip light ↔ dark (user override of the browser default). */
  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setPreference(next);
  }, [theme, setPreference]);

  const setTheme = useCallback(
    (next) => {
      setPreference(next === "dark" ? "dark" : "light");
    },
    [setPreference]
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      preference,
      setTheme,
      setPreference,
      toggleTheme,
      isDark: theme === "dark",
      followsSystem: preference === "system",
    }),
    [theme, preference, setTheme, setPreference, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
