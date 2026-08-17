import { about } from '../data/about.js'
import { workflow } from '../data/workflow.js'
import PageHero from '../components/PageHero.jsx'
import agnesPortrait from '../assets/agnes.jpg'

function About() {
  return (
    <>
      <PageHero shape="waves" title="About" />

      <section id="about">
        <div className="about-intro">
          <div className="about-intro-text">
            <h2 className="about-greeting">{about.greeting}</h2>
            {about.paragraphs.map((segments, i) => (
              <p key={i} className="about-paragraph">
                {segments.map((seg, j) =>
                  typeof seg === 'string' ? seg : <strong key={j}>{seg.text}</strong>
                )}
              </p>
            ))}
          </div>

          <figure className="about-portrait">
            <img src={agnesPortrait} alt="Agnes Bauer" />
          </figure>
        </div>

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

        <div className="about-workflow">
          <h2 className="about-subhead">{workflow.title}</h2>
          <p className="about-workflow-intro">{workflow.intro}</p>

          <ol className="phase-list">
            {workflow.phases.map((phase, i) => (
              <li
                className={`phase${phase.pivot ? ' phase-pivot' : ''}`}
                key={phase.title}
              >
                <span className="phase-step" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="phase-title">{phase.title}</h3>

                <ul className="phase-items">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="phase-ai">
                  <span className="phase-ai-label">with AI</span>
                  {phase.ai}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="about-stack">
          <span className="about-stack-label">stack</span>
          <div className="about-stack-tags">
            {about.stack.map((tool) => (
              <span className="about-tag" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
