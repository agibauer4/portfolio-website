import { caseStudies } from '../data/caseStudies.js'
import { otherWork } from '../data/otherWork.js'
import WorkCard from '../components/WorkCard.jsx'
import OtherWorkCard from '../components/OtherWorkCard.jsx'
import PageHero from '../components/PageHero.jsx'

function Work() {
  return (
    <>
      <PageHero
        shape="arches"
        title="Selected work"
        intro="Complex B2B systems — cybersecurity, fintech and platforms — taken from research through to shipped product."
      />

      <section id="work">
        <div className="grid">
          {caseStudies.filter((cs) => !cs.hidden).map((cs) => (
            <WorkCard
              key={cs.slug}
              title={cs.title}
              description={cs.summary}
              to={`/work/${cs.slug}`}
              image={cs.card}
              large
            />
          ))}
        </div>
      </section>

      <section id="other-work">
        <h2>Other work</h2>
        <div className="other-work-grid">
          {otherWork.map((project) => (
            <OtherWorkCard
              key={project.title}
              title={project.title}
              description={project.description}
              tag={project.tag}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Work
