import './App.css'

function App() {
  return (
    <>
      <header className="nav">
        <span className="nav-name">Agnes Bauer</span>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="hero">
        <h1>Product designer</h1>
        <p>Portfolio — case studies, process, and things I've shipped.</p>
      </section>

      <section id="work">
        <h2>Selected work</h2>
        <div className="grid">
          <article className="card">
            <h3>Case study title</h3>
            <p>One-line description of the problem and outcome.</p>
          </article>
          <article className="card">
            <h3>Case study title</h3>
            <p>One-line description of the problem and outcome.</p>
          </article>
        </div>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>A short bio goes here.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          <a href="mailto:agi.bauer4@gmail.com">agi.bauer4@gmail.com</a>
        </p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Agnes Bauer</p>
      </footer>
    </>
  )
}

export default App
