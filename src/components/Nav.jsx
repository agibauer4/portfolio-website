import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const DESKTOP_QUERY = '(min-width: 641px)'

function Nav({ name }) {
  const [open, setOpen] = useState(false)
  const { key } = useLocation()

  // Any navigation closes the menu, including tapping the link for the
  // page you are already on — hence location key rather than pathname.
  useEffect(() => {
    setOpen(false)
  }, [key])

  // Crossing up to the desktop layout has to close it too: the overlay
  // and its scroll lock are mobile-only, so a phone rotated to landscape
  // would otherwise be left with a page it cannot scroll.
  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_QUERY)
    const onChange = (event) => {
      if (event.matches) setOpen(false)
    }

    desktop.addEventListener('change', onChange)
    return () => desktop.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="nav" data-menu-open={open}>
      <Link className="nav-name" to="/">
        {name}
      </Link>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((wasOpen) => !wasOpen)}
      >
        <span className="nav-toggle-bars" aria-hidden="true" />
      </button>

      <nav id="primary-nav">
        {/* Overlay-only: on desktop the wordmark beside it is the home
            link, but a full-screen menu wants the row spelled out. */}
        <Link className="nav-home" to="/">
          Home
        </Link>
        <Link to="/work">Work</Link>
        <Link to="/creative">Creative</Link>
        <Link to="/about">About</Link>
        <Link className="nav-cta" to="/#contact">
          Get in touch
        </Link>
      </nav>
    </header>
  )
}

export default Nav
