function Nav({ name }) {
  return (
    <header className="nav">
      <span className="nav-name">{name}</span>
      <nav>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Nav
