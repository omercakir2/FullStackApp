import { useEffect, useState } from "react";
import Link from "./Link";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../theme/ThemeContext";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} aria-label={t.nav.aria}>
      <div className="navbar-inner">
        <div className="nav-start">
          <a href="#home" className="nav-brand" onClick={closeMenu}>
            Ömer<span>.</span>
          </a>

          <div className="nav-controls">
            <div
              className="lang-toggle"
              role="group"
              aria-label={t.nav.langToggle}
            >
              <button
                type="button"
                className={`lang-btn${lang === "en" ? " active" : ""}`}
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                lang="en"
              >
                {t.nav.langEn}
              </button>
              <button
                type="button"
                className={`lang-btn${lang === "tr" ? " active" : ""}`}
                onClick={() => setLang("tr")}
                aria-pressed={lang === "tr"}
                lang="tr"
              >
                {t.nav.langTr}
              </button>
            </div>

            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? t.nav.themeToLight : t.nav.themeToDark}
              aria-pressed={theme === "dark"}
              title={theme === "dark" ? t.nav.themeToLight : t.nav.themeToDark}
            >
              {theme === "dark" ? (
                <span className="theme-icon" aria-hidden="true">
                  {/* sun */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </svg>
                </span>
              ) : (
                <span className="theme-icon" aria-hidden="true">
                  {/* moon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z" />
                  </svg>
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="nav-end">
          <input
            type="checkbox"
            id="menu-toggle"
            className="menu-checkbox"
            checked={menuOpen}
            onChange={(e) => setMenuOpen(e.target.checked)}
            aria-label={t.nav.menuToggle}
          />

          <label htmlFor="menu-toggle" className="hamburger" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <label
            htmlFor="menu-toggle"
            className="menu-overlay"
            aria-hidden="true"
            onClick={closeMenu}
          />

          <div className="nav-links">
            <Link
              className="nav-link"
              href="#home"
              name={t.nav.home}
              onClick={closeMenu}
            />
            <Link
              className="nav-link"
              href="#about"
              name={t.nav.about}
              onClick={closeMenu}
            />
            <Link
              className="nav-link"
              href="#projects"
              name={t.nav.projects}
              onClick={closeMenu}
            />
            <Link
              className="nav-cta"
              href="#contact"
              name={t.nav.contact}
              onClick={closeMenu}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
