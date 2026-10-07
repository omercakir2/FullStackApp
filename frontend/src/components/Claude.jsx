import content from "../content";

function Claude() {
  const { claude } = content;

  return (
    <section id={claude.id} className="section claude">
      <div className="container">
        <header className="section-header">
          <p className="section-label">{claude.label}</p>
          <h2 className="section-title">{claude.title}</h2>
          <p className="section-lead">{claude.lead}</p>
        </header>

        <ul className="claude-uses">
          {claude.uses.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>

        <div className="claude-handling">
          {claude.handling.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <p className="claude-footnote">{claude.footnote}</p>
      </div>
    </section>
  );
}

export default Claude;
