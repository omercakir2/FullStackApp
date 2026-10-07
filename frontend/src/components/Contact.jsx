import content from "../content";

function Contact() {
  const { contact, email, github, githubLabel } = content;
  const mailto = `mailto:${email}?subject=${encodeURIComponent("Observify early access")}`;

  return (
    <section id={contact.id} className="section contact">
      <div className="container contact-panel">
        <header className="section-header">
          <p className="section-label">{contact.label}</p>
          <h2 className="section-title">{contact.title}</h2>
          <p className="section-lead">{contact.lead}</p>
        </header>

        <dl className="contact-details">
          <div>
            <dt>{contact.emailLabel}</dt>
            <dd>
              <a href={mailto}>{email}</a>
            </dd>
          </div>
          <div>
            <dt>{contact.githubLabel}</dt>
            <dd>
              <a href={github} target="_blank" rel="noopener noreferrer">
                {githubLabel}
              </a>
            </dd>
          </div>
        </dl>

        <a href={mailto} className="btn btn-primary">
          {contact.cta}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
