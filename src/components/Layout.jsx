import { Outlet } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import { site } from '../data/site.js'

function Layout() {
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
