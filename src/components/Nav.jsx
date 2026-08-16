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
        <a className="nav-resume" href="#" target="_blank" rel="noreferrer">
          Résumé ↓
        </a>
      </nav>
    </header>
  )
}

export default Nav
