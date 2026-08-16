import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section id="not-found">
      <h1>Page not found</h1>
      <p>This page doesn't exist — in good company with a few of my early Figma files.</p>
      <Link className="btn" to="/">
        Back to home →
      </Link>
    </section>
  )
}

export default NotFound
