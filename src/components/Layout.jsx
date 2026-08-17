import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import { site } from '../data/site.js'

function Layout() {
  const { pathname, hash, key } = useLocation()

  // Under HashRouter the browser never resolves an in-page hash itself
  // (the whole `#/#contact` string is one fragment), so scrolling to a
  // target is ours to do. `key` is in the deps because navigating to the
  // hash you are already on keeps pathname and hash identical — without
  // it, a second "Get in touch" click would sit still.
  useEffect(() => {
    const target = hash ? document.querySelector(hash) : null

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash, key])

  return (
    <>
      <Nav name={site.name} />
      <Outlet />
      <div className="arch-divider" aria-hidden="true" />
      <Footer name={site.name} />
    </>
  )
}

export default Layout
