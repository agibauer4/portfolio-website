import { creative } from '../data/creative.js'

function Creative() {
  return (
    <section id="creative">
      <h1>Creative</h1>
      <p className="creative-intro">Photography and other work outside product design.</p>
      <div className="gallery-grid">
        {creative.map((item) => (
          <div
            key={item.id}
            className={`gallery-tile gallery-tile-${item.aspect}`}
            aria-hidden="true"
          >
            Photo placeholder
          </div>
        ))}
      </div>
    </section>
  )
}

export default Creative
