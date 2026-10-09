import { useEffect, useState } from "react";

function ProjectCard({ content, title, img_link, onOpen, expandLabel, index = 0, featured = false }) {
  const images = Array.isArray(img_link) ? img_link : [];
  const hasImages = images.length > 0;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const label = expandLabel || "View details";
  const number = String(index + 1).padStart(2, "0");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (images.length < 2 || paused || reduceMotion) return undefined;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2800);

    return () => clearInterval(interval);
  }, [images.length, paused, reduceMotion]);

  return (
    <button
      type="button"
      className={`project-card${featured ? " project-card-featured" : ""}`}
      onClick={onOpen}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
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
        <span className="project-index" aria-hidden="true">{number}</span>
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
