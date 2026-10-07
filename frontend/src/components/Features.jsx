import content from "../content";

function Features() {
  const { features } = content;

  return (
    <section id={features.id} className="section features">
      <div className="container">
        <header className="section-header">
          <p className="section-label">{features.label}</p>
          <h2 className="section-title">{features.title}</h2>
          <p className="section-lead">{features.lead}</p>
        </header>

        <ul className="feature-grid">
          {features.items.map((item) => (
            <li className="feature-card" key={item.kicker}>
              <p className="feature-kicker">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
