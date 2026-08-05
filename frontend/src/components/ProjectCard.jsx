import { useEffect, useState } from "react";

function ProjectCard({ content, title, img_link, onOpen, expandLabel }) {
  const images = Array.isArray(img_link) ? img_link : [];
  const hasImages = images.length > 0;
  const [activeIndex, setActiveIndex] = useState(0);
  const label = expandLabel || "View details";

  useEffect(() => {
    if (images.length < 2) return undefined;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2800);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <button
      type="button"
      className="project-card"
      onClick={onOpen}
      aria-label={`${title} — ${label}`}
    >
      {hasImages && (
        <div className="project-media">
          <img
            src={images[activeIndex]}
            alt=""
            draggable={false}
          />
          {images.length > 1 && (
            <div className="project-media-dots" aria-hidden="true">
              {images.map((_, i) => (
                <span key={i} className={i === activeIndex ? "active" : ""} />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="project-body">
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="project-footer">
          <span className="project-link-label">
            {label} <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
    </button>
  );
}

export default ProjectCard;
