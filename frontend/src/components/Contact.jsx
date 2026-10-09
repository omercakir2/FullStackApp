import { useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const nameRef = useRef();
  const mailRef = useRef();
  const messageRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [status, setStatus] = useState(null);

  const handleMessageChange = (e) => {
    setCharCount(e.target.value.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const data = {
      name: nameRef.current.value,
      mail: mailRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: c.success });
        e.target.reset();
        setCharCount(0);
      } else if (response.status === 429) {
        setStatus({
          type: "error",
          message: result.message || c.errorRateLimit,
        });
      } else {
        setStatus({
          type: "error",
          message: result.error || c.errorGeneric,
        });
      }
    } catch {
      setStatus({ type: "error", message: c.errorConnection });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-intro">
          <p className="section-label">{c.label}</p>
          <h2 className="section-title">{c.title}</h2>
          <p className="section-lead">{c.lead}</p>
        </div>

        <div className="contact-layout">
          <aside className="contact-info">
            <dl className="contact-details">
              <div>
                <dt>{c.location}</dt>
                <dd>{c.locationValue}</dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>
                  <a
                    href="https://github.com/omercakir2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/omercakir2
                  </a>
                </dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a
                    href="https://www.linkedin.com/in/%C3%B6mer-%C3%A7ak%C4%B1r-b0aa74284/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ömer Çakır
                  </a>
                </dd>
              </div>
              <div>
                <dt>{c.responseTime}</dt>
                <dd>{c.responseValue}</dd>
              </div>
            </dl>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">{c.name}</label>
              <input
                id="name"
                ref={nameRef}
                type="text"
                name="name"
                placeholder={c.namePlaceholder}
                autoComplete="name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="mail">{c.email}</label>
              <input
                id="mail"
                ref={mailRef}
                type="email"
                name="email"
                placeholder={c.emailPlaceholder}
                autoComplete="email"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">{c.message}</label>
              <textarea
                id="message"
                ref={messageRef}
                name="message"
                maxLength={500}
                placeholder={c.messagePlaceholder}
                required
                onChange={handleMessageChange}
              />
            </div>

            <div className="char-counter">
              {c.charsRemaining} <span>{500 - charCount}</span>
            </div>

            {status && (
              <div
                className={`form-status ${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </div>
            )}

            <button disabled={isLoading} type="submit" className="submit-btn">
              {isLoading ? c.sending : c.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
