import { ThemeProvider } from "./theme/ThemeContext.jsx";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Solution from "./components/Solution.jsx";
import Claude from "./components/Claude.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Legal from "./components/Legal.jsx";
import Footer from "./components/Footer.jsx";

function AppShell() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <Solution />
        <Claude />
        <About />
        <Contact />
        <Legal />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}

export default App;
