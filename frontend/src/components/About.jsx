import content from "../content";

function About() {
  const { about } = content;

  return (
    <section id={about.id} className="section about">
      <div className="container about-layout">
        <header className="section-header">
          <p className="section-label">{about.label}</p>
          <h2 className="section-title">{about.title}</h2>
        </header>

        <div className="about-body">
          <div className="about-prose">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="about-facts">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>
                  {fact.href ? (
                    <a href={fact.href} target="_blank" rel="noopener noreferrer">
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
