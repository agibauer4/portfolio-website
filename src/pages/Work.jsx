import { caseStudies } from '../data/caseStudies.js'
import { otherWork } from '../data/otherWork.js'
import WorkCard from '../components/WorkCard.jsx'
import OtherWorkCard from '../components/OtherWorkCard.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'

function Work() {
  return (
    <>
      <PageHero
        shape="arches"
        title="Work"
        intro="Complex B2B systems taken from research through to shipped product — enterprise security, two-sided platforms and design systems, plus the occasional hackathon build."
      />

      <section id="work">
        <h2>Case studies</h2>
        <div className="grid">
          {caseStudies.filter((cs) => !cs.hidden).map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 60}>
              <WorkCard
                title={cs.title}
                description={cs.summary}
                to={`/work/${cs.slug}`}
                image={cs.card}
                large
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="other-projects">
        <h2>Other projects</h2>
        <div className="other-work-grid">
          {otherWork.map((project, i) => (
            <Reveal key={project.title} delay={i * 60}>
              <OtherWorkCard
                title={project.title}
                description={project.description}
                tag={project.tag}
                facts={project.facts}
                image={project.image}
                link={project.link}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

export default Work
