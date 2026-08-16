const shapes = {
  // Concentric rings — bold, reads clearly even when half off-canvas
  target: (
    <svg className="page-hero-shape" viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="100" r="92" fill="none" stroke="var(--gold)" strokeWidth="16" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="var(--gold)" strokeWidth="16" />
      <circle cx="100" cy="100" r="24" fill="var(--gold)" />
    </svg>
  ),
  // Stacked arcs
  waves: (
    <svg className="page-hero-shape" viewBox="0 0 200 200" aria-hidden="true">
      <g fill="none" stroke="var(--gold)" strokeWidth="16">
        <path d="M12 176a88 88 0 0 1 176 0" />
        <path d="M50 176a50 50 0 0 1 100 0" />
      </g>
      <path d="M88 176a12 12 0 0 1 24 0z" fill="var(--gold)" />
    </svg>
  ),
  // Quarter-arch grid — echoes the arch divider motif
  arches: (
    <svg className="page-hero-shape" viewBox="0 0 200 200" aria-hidden="true">
      <g fill="var(--gold)">
        <path d="M8 100a44 44 0 0 1 88 0v88H8z" />
        <path d="M104 8h88v88a44 44 0 0 1-88 0z" />
      </g>
    </svg>
  ),
  // Scattered polaroid-like squares, rotated — a gallery/contact-sheet feel
  scatter: (
    <svg className="page-hero-shape" viewBox="0 0 200 200" aria-hidden="true">
      <g fill="none" stroke="var(--gold)" strokeWidth="10">
        <rect x="26" y="18" width="72" height="72" rx="6" transform="rotate(-10 62 54)" />
        <rect x="96" y="70" width="88" height="88" rx="6" transform="rotate(8 140 114)" />
      </g>
      <circle cx="44" cy="152" r="20" fill="var(--gold)" />
    </svg>
  ),
}

function PageHero({ eyebrow, title, intro, shape = 'target', children }) {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true" />
        {shapes[shape]}
        <div className="page-hero-content">
          {eyebrow}
          <h1>{title}</h1>
          {intro && <p className="page-hero-intro">{intro}</p>}
          {children}
        </div>
      </section>
      <div className="scallop scallop-green" aria-hidden="true" />
    </>
  )
}

export default PageHero
