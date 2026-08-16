import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section id="not-found">
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link className="btn" to="/">
        Back to home →
      </Link>
    </section>
  )
}

export default NotFound
