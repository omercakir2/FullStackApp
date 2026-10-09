/**
 * Legacy card component kept for compatibility.
 * Project cards now live in ProjectCard.jsx.
 */
function Card({ content, title, img_link }) {
  return (
    <article className="about-card">
      <h3>{title}</h3>
      <p>{content}</p>
      {Array.isArray(img_link) && img_link[0] ? (
        <img src={img_link[0]} alt={title || ""} style={{ marginTop: "1rem", borderRadius: "8px" }} />
      ) : null}
    </article>
  );
}

export default Card;
