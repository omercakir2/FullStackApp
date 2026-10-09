import { useLanguage } from "../i18n/LanguageContext";

function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {year} <strong>Ömer Çakır</strong>. {t.footer.crafted}
        </p>
        <p className="footer-note">{t.footer.note}</p>
      </div>
    </footer>
  );
}

export default Footer;
