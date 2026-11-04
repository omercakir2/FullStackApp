import { useRef, useState } from "react";
import { gameProject } from "../gameProject";
import { useLanguage } from "../i18n/LanguageContext";

function Film({ g }) {
  const { video, poster } = gameProject;
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    videoRef.current.play();
  };

  return (
    <section className="game-film" aria-label={g.videoLabel}>
      <div className="game-film-frame">
        <video
          ref={videoRef}
          src={video}
          poster={poster}
          controls={started}
          playsInline
          preload="metadata"
        />
        {!started && (
          <div className="game-film-cover">
            <button type="button" className="game-play" onClick={start} aria-label={g.playLabel} />
          </div>
        )}
      </div>
      <p className="container game-film-caption">
        <span>{g.videoTitle}</span>
        <span>{g.videoLength}</span>
      </p>
    </section>
  );
}

function Gallery({ g, prevLabel, nextLabel }) {
  const shots = gameProject.screenshots;
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const goTo = (index) => {
    const track = trackRef.current;
    const slide = track.children[index];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const onScroll = () => {
    const track = trackRef.current;
    const center = track.scrollLeft + track.clientWidth / 2;
    const distance = (slide) => Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
    const slides = [...track.children];
    setActive(slides.indexOf(slides.reduce((a, b) => (distance(b) < distance(a) ? b : a))));
  };

  return (
    <section className="game-gallery" aria-label={g.screenshotsTitle}>
      <div className="container game-gallery-head">
        <h2>{g.screenshotsTitle}</h2>
        {shots.length > 1 && (
          <div className="game-gallery-controls">
            <span className="game-gallery-count">
              {active + 1} / {shots.length}
            </span>
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              aria-label={prevLabel}
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              disabled={active === shots.length - 1}
              aria-label={nextLabel}
            >
              →
            </button>
          </div>
        )}
      </div>

      <div className="game-gallery-track" ref={trackRef} onScroll={onScroll} tabIndex={0}>
        {shots.map((src, i) => (
          <figure key={src} className="game-shot">
            <img src={src} alt={`${g.title} ${i + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}

function TechDetails({ g }) {
  return (
    <section className="container game-tech">
      <h2>{g.techTitle}</h2>

      <div className="game-tech-row">
        <h3>{g.specsTitle}</h3>
        <dl className="game-specs">
          {g.specs.map(({ label, value }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {g.tech.map(({ title, text, items }) => (
        <div className="game-tech-row" key={title}>
          <h3>{title}</h3>
          {text && <p>{text}</p>}
          {items && (
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}

function GameProject() {
  const { t } = useLanguage();
  const g = t.game;
  const [statement, detail] = g.overview;

  return (
    <article className="game-page">
      <div className="game-bar">
        <div className="container game-bar-inner">
          <span className="game-bar-title">{g.title}</span>
          <a href="#projects">{g.back}</a>
        </div>
      </div>

      <header className="container game-hero">
        <p>{g.label}</p>
        <h1>{g.title}</h1>
        <p className="game-hero-lead">{g.lead}</p>
      </header>

      <Film g={g} />

      <section className="container game-story">
        <h2>{g.overviewTitle}</h2>
        <p className="game-story-statement">{statement}</p>
        <div className="game-story-detail">
          <p>{detail}</p>
          {gameProject.repo && (
            <a href={gameProject.repo} target="_blank" rel="noopener noreferrer">
              {t.projects.viewRepo} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </section>

      <Gallery g={g} prevLabel={t.projects.prevImage} nextLabel={t.projects.nextImage} />

      <TechDetails g={g} />
    </article>
  );
}

export default GameProject;
