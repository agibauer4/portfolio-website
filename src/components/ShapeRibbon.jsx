const STROKE = { stroke: 'var(--border)', strokeWidth: 7, strokeLinejoin: 'round' }

const BURST_POINTS =
  '50,2.5 57.7,31.5 83.6,16.4 68.5,42.4 97.5,50 68.5,57.7 83.6,83.6 57.7,68.5 ' +
  '50,97.5 42.4,68.5 16.4,83.6 31.5,57.7 2.5,50 31.5,42.4 16.4,16.4 42.4,31.5'

const CLOVER_LOBES = [
  [50, 28],
  [72, 50],
  [50, 72],
  [28, 50],
]

// The clover is a union of four circles, which a stroke would cut through
// internally. Drawing the union twice — black at a wider radius, colour
// inside it — gives the outline every other shape gets from its stroke.
function Clover({ fill }) {
  return (
    <g>
      {CLOVER_LOBES.map(([cx, cy]) => (
        <circle key={`edge-${cx}-${cy}`} cx={cx} cy={cy} r="30" fill="var(--border)" />
      ))}
      {CLOVER_LOBES.map(([cx, cy]) => (
        <circle key={`face-${cx}-${cy}`} cx={cx} cy={cy} r="25" fill={fill} />
      ))}
    </g>
  )
}

const SHAPES = {
  clover: (fill) => <Clover fill={fill} />,
  burst: (fill) => <polygon points={BURST_POINTS} fill={fill} {...STROKE} />,
  ring: (fill) => (
    <g>
      <circle cx="50" cy="50" r="42" fill={fill} {...STROKE} />
      <circle cx="50" cy="50" r="16" fill="var(--bg)" {...STROKE} />
    </g>
  ),
  arch: (fill) => <path d="M 8,74 A 42,42 0 0 1 92,74 Z" fill={fill} {...STROKE} />,
  cross: (fill) => (
    <polygon
      points="36,8 64,8 64,36 92,36 92,64 64,64 64,92 36,92 36,64 8,64 8,36 36,36"
      fill={fill}
      {...STROKE}
    />
  ),
  square: (fill) => (
    <g>
      <rect x="10" y="10" width="80" height="80" rx="8" fill={fill} {...STROKE} />
      <circle cx="50" cy="50" r="18" fill="var(--bg)" {...STROKE} />
    </g>
  ),
  triangle: (fill) => <polygon points="50,10 90,84 10,84" fill={fill} {...STROKE} />,
}

const PALETTE = ['var(--green)', 'var(--gold)', 'var(--purple)']

// Order and tilt are hand-set rather than generated: the point is that no
// two neighbours share a shape, a colour or a lean. The page uses two
// ribbons, so they get separate arrangements and separate palette phases
// — the same row twice would read as a repeat rather than a rhythm.
const RIBBONS = {
  a: {
    phase: 0,
    shapes: [
      { shape: 'clover', tilt: -8 },
      { shape: 'arch', tilt: 6 },
      { shape: 'burst', tilt: -4 },
      { shape: 'ring', tilt: 10 },
      { shape: 'cross', tilt: 0 },
      { shape: 'square', tilt: -10 },
      { shape: 'triangle', tilt: 5 },
      { shape: 'burst', tilt: -6 },
      { shape: 'clover', tilt: 8 },
    ],
  },
  b: {
    phase: 1,
    shapes: [
      { shape: 'burst', tilt: 7 },
      { shape: 'square', tilt: -5 },
      { shape: 'clover', tilt: 4 },
      { shape: 'triangle', tilt: -8 },
      { shape: 'ring', tilt: 0 },
      { shape: 'arch', tilt: 9 },
      { shape: 'cross', tilt: -6 },
      { shape: 'clover', tilt: 5 },
      { shape: 'triangle', tilt: -4 },
    ],
  },
}

// `flush` drops the top rule, for a ribbon that follows a scallop — the
// scallop already lands on cream, and a black rule under its domes reads
// as clipping them.
function ShapeRibbon({ variant = 'a', flush = false }) {
  const { shapes, phase } = RIBBONS[variant]

  return (
    <div
      className={`band-interlude${flush ? ' band-interlude-flush' : ''}`}
      aria-hidden="true"
    >
      <div className="ribbon">
        {shapes.map(({ shape, tilt }, i) => (
          <svg
            key={`${shape}-${i}`}
            className="ribbon-shape"
            viewBox="-6 -6 112 112"
            style={{ transform: `rotate(${tilt}deg)` }}
          >
            {SHAPES[shape](PALETTE[(i + phase) % PALETTE.length])}
          </svg>
        ))}
      </div>
    </div>
  )
}

export default ShapeRibbon
