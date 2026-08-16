import { useParams, Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies.js'
import NotFound from './NotFound.jsx'

function CaseStudy() {
  const { slug } = useParams()
  const caseStudy = caseStudies.find((cs) => cs.slug === slug)

  if (!caseStudy) {
    return <NotFound />
  }

  const next = caseStudies.find((cs) => cs.slug !== caseStudy.slug)

  return (
    <section id="case-study">
      <h1>{caseStudy.title}</h1>
      <p className="case-study-summary">{caseStudy.summary}</p>

      <div className="case-study-meta">
        <div>
          <span className="case-study-meta-label">Role</span>
          <span>{caseStudy.role}</span>
        </div>
        <div>
          <span className="case-study-meta-label">Timeline</span>
          <span>{caseStudy.timeline}</span>
        </div>
        <div>
          <span className="case-study-meta-label">Tools</span>
          <span>{caseStudy.tools.join(', ')}</span>
        </div>
      </div>

      <h2>Context</h2>
      <p>{caseStudy.context}</p>
      <div className="image-placeholder" aria-hidden="true">
        Image placeholder
      </div>

      <h2>Process</h2>
      <p>{caseStudy.process}</p>
      <div className="image-placeholder" aria-hidden="true">
        Image placeholder
      </div>

      <h2>Solution</h2>
      <p>{caseStudy.solution}</p>
      <div className="image-placeholder" aria-hidden="true">
        Image placeholder
      </div>

      <h2>Outcome</h2>
      <p>{caseStudy.outcome}</p>

      {next && (
        <Link className="btn case-study-next" to={`/work/${next.slug}`}>
          Next case study: {next.title} →
        </Link>
      )}
    </section>
  )
}

export default CaseStudy
