import Button from "./Button";
import { useLanguage } from "../i18n/LanguageContext";

const skills = [
  "React",
  "Express.js",
  "Node.js",
  "JavaScript",
  "Django",
  "EJS",
  "Ajax",
  "OpenGL",
  "HTML / CSS",
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
                  text="LinkedIn"
                  link="https://www.linkedin.com/in/%C3%B6mer-%C3%A7ak%C4%B1r-b0aa74284/"
                  bg_color="#0a66c2"
                  svg_link="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1280px-LinkedIn_icon.svg.png"
                  font_color="#ffffff"
                />
                <Button
                  text="GitHub"
                  link="https://github.com/omercakir2"
                  bg_color="#24292f"
                  svg_link="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  font_color="#f6f8fa"
                />
                <Button
                  text={a.resume}
                  link={`${import.meta.env.VITE_API_URL}/api/download-resume`}
                  bg_color="#81b189"
                  svg_link="https://www.svgrepo.com/show/532034/cloud-arrow-down.svg"
                  font_color="#ffffff"
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
