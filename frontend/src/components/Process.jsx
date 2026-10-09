import { useLanguage } from "../i18n/LanguageContext";

function Process() {
  const { t } = useLanguage();
  const p = t.process;

  return (
    <section id="process" className="section process" aria-labelledby="process-title">
      <div className="container">
        <header className="process-header">
          <p className="section-label">{p.label}</p>
          <h2 id="process-title" className="section-title">
            {p.title}
          </h2>
          <p className="section-lead">{p.lead}</p>
        </header>

        <ol className="process-steps">
          {p.steps.map((step) => (
            <li key={step.n} className="process-step">
              <span className="process-n" aria-hidden="true">
                {step.n}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
