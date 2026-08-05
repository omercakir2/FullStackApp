import { useCallback, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectExpand from "./ProjectExpand";
import { useLanguage } from "../i18n/LanguageContext";
import maqr_demo from "/maqr_demo.png";
import attendance1 from "/attendance1.png";
import attendance2 from "/attendance2.png";
import tap_demo from "/tap_demo.png";
import greenmarkt1 from "/greenmarkt1.png";
import greenmarkt2 from "/greenmarkt2.png";
import greenmarkt3 from "/greenmarkt3.png";
import glut1 from "/glut1.png";
import glut2 from "/glut2.png";
import glut3 from "/glut3.png";

const projectMeta = [
  {
    img_link: [greenmarkt1, greenmarkt2, greenmarkt3],
    link: "https://github.com/omercakir2/CTIS256_TERM_PROJECT",
  },
  {
    img_link: [glut1, glut2, glut3],
    link: "https://github.com/omercakir2/OpenGL",
  },
  {
    img_link: [maqr_demo],
    link: "https://github.com/omercakir2/MaQR",
  },
  {
    img_link: [attendance1, attendance2],
    link: "https://github.com/omercakir2/StarsAttendanceCalculator",
  },
  {
    img_link: [tap_demo],
    link: "https://github.com/omercakir2/FrontEnd_Project",
  },
];

function Projects() {
  const { t } = useLanguage();
  const p = t.projects;
  const [expanded, setExpanded] = useState(null);

  const myProjects = p.items.map((item, i) => ({
    ...item,
    ...projectMeta[i],
  }));

  const closeExpand = useCallback(() => setExpanded(null), []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-label">{p.label}</p>
            <h2 className="section-title">{p.title}</h2>
            <p className="section-lead">{p.lead}</p>
          </div>
        </div>

        <div className="projects-grid">
          {myProjects.map((project) => (
            <ProjectCard
              key={project.link}
              title={project.title}
              content={project.content}
              img_link={project.img_link}
              expandLabel={p.expandLabel}
              onOpen={() => setExpanded(project)}
            />
          ))}
        </div>
      </div>

      {expanded && (
        <ProjectExpand
          key={expanded.link}
          project={expanded}
          onClose={closeExpand}
          viewRepoLabel={p.viewRepo}
          closeLabel={p.closeLabel}
          prevLabel={p.prevImage}
          nextLabel={p.nextImage}
        />
      )}
    </section>
  );
}

export default Projects;
