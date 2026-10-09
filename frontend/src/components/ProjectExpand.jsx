import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

function ProjectExpand({
  project,
  onClose,
  viewRepoLabel,
  closeLabel,
  prevLabel,
  nextLabel,
}) {
  const images = Array.isArray(project?.img_link) ? project.img_link : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    if (!project) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (images.length < 2) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose, images.length]);

  if (!project) return null;

  const goPrev = (e) => {
    e.stopPropagation();
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  };

  const goNext = (e) => {
    e.stopPropagation();
    setActiveIndex((i) => (i + 1) % images.length);
  };

  return createPortal(
    <div
      className="project-expand-root"
      role="presentation"
      onMouseDown={(e) => {
        /* close only when pressing the dimmed backdrop, not the panel */
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="project-expand-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={panelRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="project-expand-close"
          onClick={onClose}
          ref={closeBtnRef}
          aria-label={closeLabel}
        >
          <span aria-hidden="true">×</span>
        </button>

        {images.length > 0 && (
          <div className="project-expand-media">
            <img
              src={images[activeIndex]}
              alt={`${project.title} ${activeIndex + 1}`}
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="project-expand-nav prev"
                  onClick={goPrev}
                  aria-label={prevLabel}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="project-expand-nav next"
                  onClick={goNext}
                  aria-label={nextLabel}
                >
                  ›
                </button>
                <div className="project-expand-dots" aria-hidden="true">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={i === activeIndex ? "active" : ""}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIndex(i);
                      }}
                      tabIndex={-1}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="project-expand-body">
          <h2 id={titleId}>{project.title}</h2>
          <p>{project.content}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary project-expand-repo"
          >
            {viewRepoLabel}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ProjectExpand;
