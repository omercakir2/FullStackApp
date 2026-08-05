import me from "/me.jpg";
import { useLanguage } from "../i18n/LanguageContext";

function Landing() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-intro">{h.intro}</p>

          <h1 className="hero-title">{h.title}</h1>

          <p className="hero-subtitle">{h.subtitle}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              {h.viewProjects}
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              {h.getInTouch}
            </a>
          </div>

          <dl className="hero-meta">
            <div className="hero-meta-item">
              <dt>{h.shipped}</dt>
              <dd>{h.shippedValue}</dd>
            </div>
            <div className="hero-meta-item">
              <dt>{h.studies}</dt>
              <dd>{h.studiesValue}</dd>
            </div>
            <div className="hero-meta-item">
              <dt>{h.stack}</dt>
              <dd>{h.stackValue}</dd>
            </div>
          </dl>
        </div>

        <div className="hero-portrait">
          <div className="hero-portrait-frame">
            <img src={me} alt={h.photoAlt} />
            <div className="hero-portrait-badge">
              <p>{h.basedIn}</p>
              <strong>{h.location}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
