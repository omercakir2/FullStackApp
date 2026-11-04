function ProjectCard({ content, title, img_link, onOpen, expandLabel, featured = false }) {
  const cover = Array.isArray(img_link) ? img_link[0] : null;
  const label = expandLabel || "View details";

  return (
    <button
      type="button"
      className={`project-card${featured ? " project-card-featured" : ""}`}
      onClick={onOpen}
      aria-label={`${title} — ${label}`}
    >
      <div className="project-body">
        <h3>{title}</h3>
        <p>{content}</p>
        <span className="project-link-label">
          {label} <span aria-hidden="true">›</span>
        </span>
      </div>

      {cover && (
        <div className="project-media">
          <img src={cover} alt="" draggable={false} />
        </div>
      )}
    </button>
  );
}

export default ProjectCard;
