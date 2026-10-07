import content from "../content";

function Solution() {
  const { solution } = content;

  return (
    <section id={solution.id} className="section solution">
      <div className="container">
        <header className="section-header">
          <p className="section-label">{solution.label}</p>
          <h2 className="section-title">{solution.title}</h2>
          <p className="section-lead">{solution.lead}</p>
        </header>

        <ol className="pipeline">
          {solution.steps.map((step, index) => (
            <li className="pipeline-step" key={step.name}>
              <span className="pipeline-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong>{step.name}</strong>
              <span>{step.detail}</span>
            </li>
          ))}
        </ol>

        <div className="solution-body">
          <figure className="solution-shot">
            <div className="shot-frame">
              <div className="shot-chrome" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <img src="/network_1.jpeg" alt={solution.shotAlt} />
            </div>
          </figure>

          <div className="solution-notes">
            {solution.notes.map((note) => (
              <article key={note.title}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
