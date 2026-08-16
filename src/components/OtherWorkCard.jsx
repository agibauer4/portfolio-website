function OtherWorkCard({ title, description, tag, link }) {
  return (
    <article className="other-work-card">
      <span className="other-work-tag">{tag}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a className="link-arrow" href={link} target="_blank" rel="noreferrer">
          View →
        </a>
      )}
    </article>
  )
}

export default OtherWorkCard
