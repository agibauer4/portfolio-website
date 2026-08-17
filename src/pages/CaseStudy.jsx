import { useParams, Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies.js'
import PageHero from '../components/PageHero.jsx'
import FlowChart from '../components/FlowChart.jsx'
import NotFound from './NotFound.jsx'

// Everything a section can contain except its image — shared by
// standalone sections and by each half of a grouped pair, since a
// grouped pair's image is rendered once, outside both halves.
function SectionBody({ section, index }) {
  return (
    <>
      <span className="case-study-section-index">{String(index + 1).padStart(2, '0')}</span>
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
                      <th key={cellIndex} scope="row" data-label={section.table.headers[cellIndex]}>
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
    </>
  )
}

function CaseStudy() {
  const { slug } = useParams()
  const caseStudy = caseStudies.find((cs) => cs.slug === slug && !cs.hidden)

  if (!caseStudy) {
    return <NotFound />
  }

  const next = caseStudies.find((cs) => cs.slug !== caseStudy.slug && !cs.hidden)

  // A section flagged `groupWithNext` shares its image with the section
  // right after it, so the two are laid out as one grid block instead of
  // two stacked sections — the tall mobile mockup that would otherwise
  // dwarf a short bullet list gets a second list's worth of height to
  // sit next to.
  const blocks = []
  for (let i = 0; i < caseStudy.sections.length; i++) {
    const section = caseStudy.sections[i]
    const nextSection = caseStudy.sections[i + 1]
    if (section.groupWithNext && nextSection) {
      blocks.push({ type: 'group', sections: [section, nextSection], index: i })
      i++
    } else {
      blocks.push({ type: 'single', section, index: i })
    }
  }

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
        {blocks.map((block) => {
          if (block.type === 'group') {
            const [a, b] = block.sections
            return (
              <div className="case-study-section-group" key={a.title}>
                <div className="cs-group-sub1">
                  <SectionBody section={a} index={block.index} />
                </div>
                <figure className="case-study-figure case-study-figure-narrow cs-group-image">
                  <img src={a.image.src} alt={a.image.alt} loading="lazy" />
                </figure>
                <div className="cs-group-sub2">
                  <SectionBody section={b} index={block.index + 1} />
                </div>
              </div>
            )
          }

          const { section, index } = block
          return (
            <div
              className={`case-study-section${index === 0 ? ' case-study-section-first' : ''}`}
              key={section.title}
            >
              <SectionBody section={section} index={index} />
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
              {section.images && (
                <div className="case-study-figure-row">
                  {section.images.map((image) => (
                    <figure
                      key={image.src}
                      className={`case-study-figure${
                        image.width === 'narrow' ? ' case-study-figure-narrow' : ''
                      }`}
                    >
                      <img src={image.src} alt={image.alt} loading="lazy" />
                    </figure>
                  ))}
                </div>
              )}
            </div>
          )
        })}

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
