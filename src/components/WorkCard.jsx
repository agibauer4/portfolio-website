import { Link } from 'react-router-dom'

function WorkCard({ title, description, to, large, image }) {
  return (
    <article className={`card${large ? ' card-large' : ''}`}>
      {image ? (
        <img className="card-image" src={image.src} alt={image.alt} loading="lazy" />
      ) : (
        <div className="card-image-placeholder" aria-hidden="true">
          Image placeholder
        </div>
      )}
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
