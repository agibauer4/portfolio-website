function OtherWorkCard({ title, description, tag, facts, image, link }) {
  return (
    <article className="other-work-card">
      {image ? (
        <div className="other-work-image-frame">
          <img className="other-work-image" src={image.src} alt={image.alt} loading="lazy" />
        </div>
      ) : (
        <div className="other-work-image-placeholder" aria-hidden="true">
          Image placeholder
        </div>
      )}

      <span className="other-work-tag">{tag}</span>
      <h3>{title}</h3>
      <p>{description}</p>

      {facts?.length > 0 && (
        <ul className="other-work-facts">
          {facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      )}

      {link && (
        <a className="link-arrow" href={link} target="_blank" rel="noreferrer">
          View →
        </a>
      )}
    </article>
  )
}

export default OtherWorkCard
