import { useEffect } from "react";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import { ThemeProvider } from "./theme/ThemeContext.jsx";
import NavBar from "./components/NavBar.jsx";
import Landing from "./components/Landing.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function AppShell() {
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
        <Landing />
        <AboutMe />
        <Projects />
        <Contact />
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
