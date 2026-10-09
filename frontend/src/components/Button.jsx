export default function Button({ text, link, icon, variant = "text", tone }) {
  const label = String(text);
  const className =
    variant === "icon"
      ? `social-orb${tone ? ` social-orb-${tone}` : ""}`
      : "social-btn";

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
