import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section id="not-found">
      <h2>Page not found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link className="btn" to="/">
        Back to home →
      </Link>
    </section>
  )
}

export default NotFound
