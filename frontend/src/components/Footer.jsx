import content from "../content";

function Footer() {
  const year = new Date().getFullYear();
  const { product, company, email, footer } = content;
  const mailto = `mailto:${email}`;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-name">
            {product}
            <span> · {company}</span>
          </p>
          <p className="footer-blurb">{footer.blurb}</p>
          <p className="footer-copy">
            © {year} {company}. {product}.
          </p>
        </div>

        <div className="footer-meta">
          <nav className="footer-links" aria-label="Legal">
            <a href="#privacy">{footer.privacy}</a>
            <a href="#terms">{footer.terms}</a>
          </nav>
          <a className="footer-email" href={mailto}>
            {email}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
