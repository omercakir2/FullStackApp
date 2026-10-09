import Button from "./Button";
import { useLanguage } from "../i18n/LanguageContext";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.84v2.11h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.65c0-1.83-.03-4.18-2.54-4.18-2.55 0-2.94 1.99-2.94 4.05V24h-4V8.5z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.68 7.68 0 0 1 8 4.77c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 17.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const skills = [
  "React",
  "Express.js / Node.js",
  "Go",
  "Django",
  "EJS",
  "OpenGL",
  "HTML / CSS / JS",
  "DBMS",
  "Chrome Extensions",
];

function AboutMe() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-layout">
          <header className="about-header">
            <p className="section-label">{a.label}</p>
            <h2 className="section-title">{a.title}</h2>
          </header>

          <div className="about-body">
            <div className="about-prose">
              <p>{a.p1}</p>
              <p>{a.p2}</p>
              <p>{a.p3}</p>
              <p className="about-closing">{a.closing}</p>
            </div>

            <aside className="about-aside">
              <h3 className="about-aside-title">{a.toolsTitle}</h3>
              <ul className="skills-list" aria-label={a.skillsAria}>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>

              <div className="about-actions">
                <Button
                  variant="icon"
                  tone="linkedin"
                  text="LinkedIn"
                  link="https://www.linkedin.com/in/%C3%B6mer-%C3%A7ak%C4%B1r-b0aa74284/"
                  icon={<LinkedInIcon />}
                />
                <Button
                  variant="icon"
                  tone="github"
                  text="GitHub"
                  link="https://github.com/omercakir2"
                  icon={<GitHubIcon />}
                />
                <Button
                  text={a.resume}
                  link={`${import.meta.env.VITE_API_URL}/api/download-resume`}
                  icon={<DownloadIcon />}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
