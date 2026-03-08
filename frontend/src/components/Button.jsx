// Button.jsx
export default function Button({ text, link, svg_link, bg_color, font_color }) {
    return (
        <div className="btn" style={{ backgroundColor: bg_color }}>
            <a href={link || "#"} style={{color:font_color}} target="_blank">
                {/* Buradaki değişkenlerin string olduğundan emin oluyoruz */}
                {String(text)}
                {svg_link && <img src={svg_link} alt="" />}
            </a>
        </div>
    );
}