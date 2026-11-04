export default function Button({ text, link, icon, variant = "text" }) {
  const label = String(text);
  const className = variant === "icon" ? "social-orb" : "social-btn";

  return (
    <a
      href={link || "#"}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={variant === "icon" ? label : undefined}
    >
      {icon}
      {variant === "icon" ? (
        <span className="sr-only">{label}</span>
      ) : (
        <span>{label}</span>
      )}
    </a>
  );
}
