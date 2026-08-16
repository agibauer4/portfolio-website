import './App.css'
import { site } from './data/site.js'
import { projects } from './data/projects.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Nav name={site.name} />
      <Hero role={site.role} tagline={site.tagline} />
      <div className="scallop" aria-hidden="true" />
      <Work projects={projects} />
      <About />
      <div className="arch-divider" aria-hidden="true" />
      <Contact email={site.email} />
      <Footer name={site.name} />
    </>
  )
}

export default App
