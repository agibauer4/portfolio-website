import { useParams, Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies.js'
import PageHero from '../components/PageHero.jsx'
import FlowChart from '../components/FlowChart.jsx'
import NotFound from './NotFound.jsx'

function CaseStudy() {
  const { slug } = useParams()
  const caseStudy = caseStudies.find((cs) => cs.slug === slug && !cs.hidden)

  if (!caseStudy) {
    return <NotFound />
  }

  const next = caseStudies.find((cs) => cs.slug !== caseStudy.slug && !cs.hidden)

  return (
    <>
      <PageHero
        shape="target"
        title={caseStudy.title}
        intro={caseStudy.summary}
        eyebrow={
          <Link className="case-study-back" to="/work">
            ← Selected work
          </Link>
        }
      >
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
      </PageHero>

      <section id="case-study">
        {caseStudy.sections.map((section, index) => (
          <div
            className={`case-study-section${index === 0 ? ' case-study-section-first' : ''}`}
            key={section.title}
          >
            <span className="case-study-section-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h2>{section.title}</h2>
            {section.body && <p>{section.body}</p>}
            {section.items && (
              <ul className="case-study-list">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.flow && <FlowChart flow={section.flow} />}
            {section.table && (
              <div className="case-study-table-wrap">
                <table className="case-study-table">
                  <thead>
                    <tr>
                      {section.table.headers.map((header) => (
                        <th key={header} scope="col">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th
                              key={cellIndex}
                              scope="row"
                              data-label={section.table.headers[cellIndex]}
                            >
                              {cell}
                            </th>
                          ) : (
                            <td key={cellIndex} data-label={section.table.headers[cellIndex]}>
                              {cell}
                            </td>
                          )
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {section.closing && <p className="case-study-closing">{section.closing}</p>}
            {section.image === true && (
              <div className="image-placeholder" aria-hidden="true">
                Image placeholder
              </div>
            )}
            {section.image?.src && (
              <figure
                className={`case-study-figure${
                  section.image.width === 'narrow' ? ' case-study-figure-narrow' : ''
                }`}
              >
                <img src={section.image.src} alt={section.image.alt} loading="lazy" />
              </figure>
            )}
          </div>
        ))}

        {next && (
          <Link className="btn case-study-next" to={`/work/${next.slug}`}>
            Next case study: {next.title} →
          </Link>
        )}
      </section>
    </>
  )
}

export default CaseStudy
