export default function Button({ text, link, svg_link, bg_color, font_color }) {
  return (
    <a
      href={link || "#"}
      className="social-btn"
      style={{ backgroundColor: bg_color, color: font_color }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {svg_link && <img src={svg_link} alt="" />}
      <span>{String(text)}</span>
    </a>
  );
}
