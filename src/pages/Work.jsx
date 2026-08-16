import { caseStudies } from '../data/caseStudies.js'
import { otherWork } from '../data/otherWork.js'
import WorkCard from '../components/WorkCard.jsx'
import OtherWorkCard from '../components/OtherWorkCard.jsx'

function Work() {
  return (
    <>
      <section id="work">
        <h1>Selected work</h1>
        <div className="grid">
          {caseStudies.map((cs) => (
            <WorkCard
              key={cs.slug}
              title={cs.title}
              description={cs.summary}
              to={`/work/${cs.slug}`}
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
