import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import { site } from '../data/site.js'

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Nav name={site.name} />
      <Outlet />
      <div className="arch-divider" aria-hidden="true" />
      <Footer name={site.name} email={site.email} />
    </>
  )
}

export default Layout
