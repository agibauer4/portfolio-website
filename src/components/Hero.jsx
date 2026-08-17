import { Link } from 'react-router-dom'

const ARC_RADII = [92, 60, 28]

// Quarter arc swept around the bottom-right corner of the 100x100 box.
function cornerArc(r) {
  return `M ${100 - r},100 A ${r},${r} 0 0 1 100,${100 - r}`
}

function scrollToWork(event) {
  event.preventDefault()
  document.getElementById('featured-work')?.scrollIntoView({ behavior: 'smooth' })
}

function Hero({ role, tagline, badge }) {
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
        <svg className="hero-arcs" viewBox="0 0 100 100">
          <g fill="none">
            {ARC_RADII.map((r) => (
              <g key={r}>
                <path d={cornerArc(r)} stroke="var(--border)" strokeWidth="20" />
                <path d={cornerArc(r)} stroke="var(--green)" strokeWidth="12" />
              </g>
            ))}
          </g>
        </svg>
      </div>

      <div className="hero-content">
        {badge && <span className="hero-badge">{badge}</span>}
        <h1>{role}</h1>
        <p>{tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#featured-work" onClick={scrollToWork}>
            See featured work ↓
          </a>
          <Link className="btn btn-secondary" to="/#contact">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
