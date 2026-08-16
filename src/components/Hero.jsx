function scrollToWork(event) {
  event.preventDefault()
  document.getElementById('featured-work')?.scrollIntoView({ behavior: 'smooth' })
}

function Hero({ role, tagline, availability }) {
  return (
    <section id="hero">
      <div className="hero-shapes" aria-hidden="true">
        <svg className="hero-starburst" viewBox="0 0 200 200">
          <polygon
            points="100,5 115.3,63 167.2,32.8 137,84.7 195,100 137,115.3 167.2,167.2 115.3,137 100,195 84.7,137 32.8,167.2 63,115.3 5,100 63,84.7 32.8,32.8 84.7,63"
            fill="var(--border)"
            transform="translate(6,6)"
          />
          <polygon
            points="100,5 115.3,63 167.2,32.8 137,84.7 195,100 137,115.3 167.2,167.2 115.3,137 100,195 84.7,137 32.8,167.2 63,115.3 5,100 63,84.7 32.8,32.8 84.7,63"
            fill="var(--purple)"
            stroke="var(--border)"
            strokeWidth="8"
            strokeLinejoin="round"
          />
        </svg>
        <svg className="hero-clover" viewBox="0 0 100 100">
          <g fill="var(--green)">
            <circle cx="50" cy="28" r="26" />
            <circle cx="72" cy="50" r="26" />
            <circle cx="50" cy="72" r="26" />
            <circle cx="28" cy="50" r="26" />
          </g>
        </svg>
      </div>

      <div className="hero-content">
        {availability && <span className="hero-badge">{availability}</span>}
        <h1>{role}</h1>
        <p>{tagline}</p>
        <a className="btn hero-cta" href="#featured-work" onClick={scrollToWork}>
          See featured work ↓
        </a>
      </div>
    </section>
  )
}

export default Hero
