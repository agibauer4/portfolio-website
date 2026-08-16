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
          {section.image && (
            <div className="image-placeholder" aria-hidden="true">
              Image placeholder
            </div>
          )}
        </div>
      ))}

      {next && (
        <Link className="btn case-study-next" to={`/work/${next.slug}`}>
          Next case study: {next.title} →
        </Link>
      )}
    </section>
  )
}

export default CaseStudy
