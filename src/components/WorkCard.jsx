import { Link } from 'react-router-dom'

function WorkCard({ title, description, to }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {to && (
        <Link className="link-arrow" to={to}>
          Read case study →
        </Link>
      )}
    </article>
  )
}

export default WorkCard
