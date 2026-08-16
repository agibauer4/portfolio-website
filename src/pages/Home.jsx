import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { caseStudies } from '../data/caseStudies.js'
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

      <section id="other-work-teaser" className="teaser">
        <p>{site.otherWorkTeaser}</p>
        <Link className="link-arrow" to="/work">
          See more work →
        </Link>
      </section>

      <section id="about-teaser" className="teaser">
        <h2>About</h2>
        <p>{site.aboutTeaser}</p>
        <Link className="link-arrow" to="/about">
          More about me →
        </Link>
      </section>
    </>
  )
}

export default Home
