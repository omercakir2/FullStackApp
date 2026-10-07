import content from "../content";

function Hero() {
  const { hero, github } = content;

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-pill">{hero.pill}</p>
          <h1 className="hero-title">{hero.headline}</h1>
          <p className="hero-subtitle">{hero.subheadline}</p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              {hero.primaryCta}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={github}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <dl className="hero-meta">
            {hero.meta.map((item) => (
              <div className="hero-meta-item" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="hero-shot">
          <div className="shot-frame">
            <div className="shot-chrome" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <img src="/network_0.jpeg" alt={hero.shotAlt} />
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
