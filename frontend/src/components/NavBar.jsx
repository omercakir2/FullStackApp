import Link from './Link'
function NavBar() {
  return (
    <nav className="navbar">
        <Link className="navElement" href="#" name="Home" />
        <Link className="navElement" href="#projects" name="Projects" />
        <Link className="navElement" href="#contact" name="Contact Me"/>
    </nav>
  );
}

export default NavBar;
