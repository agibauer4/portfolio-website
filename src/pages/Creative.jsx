import { creative } from '../data/creative.js'
import PageHero from '../components/PageHero.jsx'

function Creative() {
  return (
    <>
      <PageHero
        shape="scatter"
        title="Creative"
        intro="Photography and other things I make when nobody's asking for a Figma file."
      />

      <section id="creative">
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
    </>
  )
}

export default Creative
