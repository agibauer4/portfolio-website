import { Link } from 'react-router-dom'

function Nav({ name }) {
  return (
    <header className="nav">
      <Link className="nav-name" to="/">
        {name}
      </Link>
      <nav>
        <Link to="/work">Work</Link>
        <Link to="/creative">Creative</Link>
        <Link to="/about">About</Link>
        <Link className="nav-cta" to="/#contact">
          Get in touch
        </Link>
      </nav>
    </header>
  )
}

export default Nav
