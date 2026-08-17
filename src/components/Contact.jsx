function Contact({ eyebrow, heading, body, email, links }) {
  return (
    <section id="contact" className="contact-band">
      <div className="page-hero-pattern pattern-dark" aria-hidden="true" />
      <svg className="contact-starburst" viewBox="0 0 200 200" aria-hidden="true">
        <polygon
          points="100,5 115.3,63 167.2,32.8 137,84.7 195,100 137,115.3 167.2,167.2 115.3,137 100,195 84.7,137 32.8,167.2 63,115.3 5,100 63,84.7 32.8,32.8 84.7,63"
          fill="var(--purple)"
          stroke="var(--border)"
          strokeWidth="8"
          strokeLinejoin="round"
        />
      </svg>

      <div className="contact-content">
        <span className="contact-eyebrow">{eyebrow}</span>
        <h2>{heading}</h2>
        <p>{body}</p>
        <a className="btn btn-primary" href={`mailto:${email}`}>
          {email}
        </a>
        <ul className="contact-links">
          {links.map((link) => (
            <li key={link.label}>
              <a
                className="link-arrow"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
