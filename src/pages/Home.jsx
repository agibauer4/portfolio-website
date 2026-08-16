import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { caseStudies } from '../data/caseStudies.js'
import { about } from '../data/about.js'
import Hero from '../components/Hero.jsx'
import WorkCard from '../components/WorkCard.jsx'

function Home() {
  return (
    <>
      <Hero
        role={site.role}
        tagline={site.tagline}
        badge={site.badge}
        email={site.email}
      />
      <div className="scallop" aria-hidden="true" />

      <section id="featured-work">
        <h2>Featured work</h2>
        <div className="grid">
          {caseStudies.slice(0, 3).map((cs) => (
            <WorkCard
              key={cs.slug}
              title={cs.title}
              description={cs.summary}
              to={`/work/${cs.slug}`}
            />
          ))}
        </div>
      </section>

      <section id="other-work-teaser" className="home-band home-band-purple">
        <div className="page-hero-pattern" aria-hidden="true" />
        <div className="home-band-content">
          <span className="home-band-eyebrow">Other work</span>
          <h2>There's more where that came from</h2>
          <p>{site.otherWorkTeaser}</p>
          <Link className="btn" to="/work">
            See more work →
          </Link>
        </div>
      </section>

      <div className="band-interlude" aria-hidden="true">
        <svg width="72" height="72" viewBox="0 0 100 100">
          <g fill="var(--green)">
            <circle cx="50" cy="28" r="26" />
            <circle cx="72" cy="50" r="26" />
            <circle cx="50" cy="72" r="26" />
            <circle cx="28" cy="50" r="26" />
          </g>
        </svg>
      </div>

      <section id="about-teaser" className="home-band home-band-green">
        <div className="page-hero-pattern" aria-hidden="true" />
        <svg className="band-rail" width="34" height="150" viewBox="0 0 34 150" aria-hidden="true">
          <rect x="0" y="0" width="34" height="150" rx="4" fill="var(--gold)" />
          <g fill="var(--green)">
            <circle cx="17" cy="20" r="17" />
            <circle cx="17" cy="55" r="17" />
            <circle cx="17" cy="90" r="17" />
            <circle cx="17" cy="125" r="17" />
          </g>
        </svg>
        <div className="home-band-content">
          <span className="home-band-eyebrow">The person behind it</span>
          <h2>About</h2>
          <p>{site.aboutTeaser}</p>
          <div className="stat-row">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <Link className="btn" to="/about">
            More about me →
          </Link>
        </div>
      </section>
      <div className="scallop scallop-green" aria-hidden="true" />
    </>
  )
}

export default Home
