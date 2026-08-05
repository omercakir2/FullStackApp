function Link({ className, href, name, onClick }) {
  return (
    <a className={className} href={href} onClick={onClick}>
      {name}
    </a>
  );
}

export default Link;
