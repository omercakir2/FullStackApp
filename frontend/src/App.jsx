import { useEffect, useSyncExternalStore } from "react";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import { ThemeProvider } from "./theme/ThemeContext.jsx";
import NavBar from "./components/NavBar.jsx";
import Landing from "./components/Landing.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import GameProject from "./components/GameProject.jsx";
import Footer from "./components/Footer.jsx";
import { gameProject } from "./gameProject";

function subscribeToHash(onChange) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

const getHash = () => window.location.hash;

function AppShell() {
  const hash = useSyncExternalStore(subscribeToHash, getHash);
  const onGamePage = hash === gameProject.route;

  /* Swapping pages: the browser's own anchor jump ran before the target existed. */
  useEffect(() => {
    const target = onGamePage ? null : document.getElementById(window.location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: "instant" });
    else if (onGamePage) window.scrollTo({ top: 0, behavior: "instant" });
  }, [onGamePage]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) return;

    fetch(`${apiUrl}/api/data`)
      .then((res) => res.json())
      .then((data) => console.log(data.message))
      .catch(() => {
        /* backend may be offline during local UI work */
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <main>
        {onGamePage ? (
          <GameProject />
        ) : (
          <>
            <Landing />
            <AboutMe />
            <Projects />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppShell />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
