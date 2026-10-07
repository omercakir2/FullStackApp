import content from "../content";

function Legal() {
  const { privacy, terms } = content.legal;

  return (
    <section className="section legal" aria-label="Legal">
      <div className="container legal-grid">
        <article id={privacy.id}>
          <h2>{privacy.title}</h2>
          {privacy.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
        <article id={terms.id}>
          <h2>{terms.title}</h2>
          {terms.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  );
}

export default Legal;
