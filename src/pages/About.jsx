import { about } from '../data/about.js'
import PageHero from '../components/PageHero.jsx'

function About() {
  return (
    <>
      <PageHero shape="waves" title="About" />

      <section id="about">
        {about.paragraphs.map((segments, i) => (
          <p key={i} className="about-paragraph">
            {segments.map((seg, j) =>
              typeof seg === 'string' ? seg : <strong key={j}>{seg.text}</strong>
            )}
          </p>
        ))}

        <div className="about-columns">
          {about.columns.map((col) => (
            <div className="about-card" key={col.title}>
              <span className="about-badge">{col.title}</span>
              <ul>
                {col.items.map((item, i) => (
                  <li key={i}>
                    {item.text}
                    {item.note && <div className="about-note">{item.note}</div>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="about-stack">
          <span className="about-stack-label">stack</span>
          {about.stack.map((tool) => (
            <span className="about-tag" key={tool}>
              {tool}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}

export default About
