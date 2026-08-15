import WorkCard from './WorkCard.jsx'

function Work({ projects }) {
  return (
    <section id="work">
      <h2>Selected work</h2>
      <div className="grid">
        {projects.map((project) => (
          <WorkCard key={project.id} title={project.title} description={project.description} />
        ))}
      </div>
    </section>
  )
}

export default Work
