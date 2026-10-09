/* eslint-disable react-refresh/only-export-components -- context + hook pair */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import translations from "./translations";

const STORAGE_KEY = "portfolio-lang";
const LanguageContext = createContext(null);

function detectDeviceLanguage() {
  if (typeof navigator === "undefined") return "en";

  const candidates = [
    ...(navigator.languages || []),
    navigator.language,
    navigator.userLanguage,
  ].filter(Boolean);

  for (const tag of candidates) {
    if (String(tag).toLowerCase().startsWith("tr")) return "tr";
  }

  return "en";
}

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "tr") return saved;
  } catch {
    /* private mode / blocked storage */
  }

  return detectDeviceLanguage();
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLanguage);

  const setLang = useCallback((next) => {
    const value = next === "tr" ? "tr" : "en";
    setLangState(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "tr" : "en");
  }, [lang, setLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(() => translations[lang] || translations.en, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t }),
    [lang, setLang, toggleLang, t]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
