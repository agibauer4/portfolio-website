import PageHero from '../components/PageHero.jsx'
import ComingSoon from '../components/ComingSoon.jsx'

function Creative() {
  return (
    <>
      <PageHero
        shape="scatter"
        title="Creative"
        intro="Photography and other things I make when nobody's asking for a Figma file."
      />

      <section id="creative">
        <ComingSoon body="This gallery is still being framed up — new photography and side projects are on the way. Check back soon." />
      </section>
    </>
  )
}

export default Creative
