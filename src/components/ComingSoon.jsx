import { SHAPES, PALETTE } from './ShapeRibbon.jsx'

// Hand-placed rather than generated, same reasoning as ShapeRibbon: a
// small, deliberate scatter around the card reads as decoration, a
// symmetric or random one reads as filler.
const SCATTER = [
  { shape: 'burst', tilt: -14, top: '-8%', left: '2%', size: 84 },
  { shape: 'clover', tilt: 10, top: '55%', left: '-5%', size: 96 },
  { shape: 'ring', tilt: 8, top: '-10%', left: '78%', size: 92 },
  { shape: 'triangle', tilt: -8, top: '60%', left: '85%', size: 88 },
]

function ComingSoon({ body }) {
  return (
    <div className="coming-soon">
      <div className="coming-soon-shapes" aria-hidden="true">
        {SCATTER.map(({ shape, tilt, top, left, size }, i) => (
          <svg
            key={shape + i}
            className="coming-soon-shape"
            viewBox="-6 -6 112 112"
            style={{ top, left, width: size, height: size, transform: `rotate(${tilt}deg)` }}
          >
            {SHAPES[shape](PALETTE[i % PALETTE.length])}
          </svg>
        ))}
      </div>
      <div className="coming-soon-card">
        <span className="coming-soon-badge">Coming soon</span>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default ComingSoon
