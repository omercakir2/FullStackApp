import Link from './Link'

function NavBar() {
  return (
    <nav className="navbar">
        {/* Hamburger Menü Tetikleyici (Checkbox) */}
        <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
        
        {/* Hamburger İkonu (Çizgiler) */}
        <label htmlFor="menu-toggle" className="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </label>

        {/* Menü Linkleri Konteynırı */}
        <div className="nav-links">
            <Link className="navElement" href="#" name="Home" />
            <Link className="navElement" href="#projects" name="Projects" />
            <Link className="navElement" href="#contact" name="Contact Me"/>
        </div>
    </nav>
  );
}

export default NavBar;