import me from "/me.jpg";
import { useLanguage } from "../i18n/LanguageContext";

function Landing() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="home" className="hero">
      <div className="container">
        <p className="hero-intro">{h.intro}</p>
        <h1 className="hero-title">{h.title}</h1>
        <p className="hero-subtitle">{h.subtitle}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            {h.viewProjects}
          </a>
          <a href="#contact" className="btn btn-secondary">
            {h.getInTouch}
          </a>
        </div>

        <div className="hero-portrait">
          <img src={me} alt={h.photoAlt} />
        </div>
      </div>
    </section>
  );
}

export default Landing;
