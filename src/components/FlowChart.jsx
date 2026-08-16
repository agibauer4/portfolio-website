import { useId } from 'react'

/* Two diagram shapes, because the processes they describe have two
   different shapes: a `chain` snakes through ordered steps, a `cycle`
   loops across swimlanes and returns to where it started. Both are laid
   out from data here rather than hand-placed, so the coordinates stay
   consistent and a new step only means a new entry in caseStudies.js. */

const tones = {
  gold: { fill: 'var(--gold)', text: 'var(--text)' },
  purple: { fill: 'var(--purple)', text: 'var(--cream)' },
  green: { fill: 'var(--green)', text: 'var(--cream)' },
  cream: { fill: 'var(--cream)', text: 'var(--text)' },
}

const BOX_W = 220
const BOX_H = 80
const SHADOW = 5

function Node({ x, y, w = BOX_W, lines, tone }) {
  const { fill, text } = tones[tone] ?? tones.cream
  const cx = x + w / 2
  const startY = y + BOX_H / 2 - (lines.length - 1) * 10 + 5

  return (
    <g>
      <rect
        x={x + SHADOW}
        y={y + SHADOW}
        width={w}
        height={BOX_H}
        rx="10"
        fill="var(--border)"
      />
      <rect
        x={x}
        y={y}
        width={w}
        height={BOX_H}
        rx="10"
        fill={fill}
        stroke="var(--border)"
        strokeWidth="4"
      />
      {lines.map((line, i) => (
        <text
          key={i}
          x={cx}
          y={startY + i * 21}
          textAnchor="middle"
          fontFamily="var(--sans)"
          fontSize="15"
          fontWeight="600"
          fill={text}
        >
          {line}
        </text>
      ))}
    </g>
  )
}

function ArrowDef({ id }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="5"
        markerHeight="5"
        orient="auto-start-reverse"
      >
        <path d="M0 0 L10 5 L0 10 z" fill="var(--border)" />
      </marker>
    </defs>
  )
}

function Legend({ items }) {
  return (
    <ul className="flow-legend">
      {items.map((item) => (
        <li key={item.label}>
          <i style={{ background: tones[item.tone]?.fill }} aria-hidden="true" />
          {item.label}
        </li>
      ))}
    </ul>
  )
}

/* Ordered steps, snaking left-to-right then right-to-left so a long
   sequence stays readable without running off the side. */
function Chain({ nodes, arrow }) {
  const cols = 3
  const gapX = 60
  const gapY = 80
  const rows = Math.ceil(nodes.length / cols)

  const placed = nodes.map((node, i) => {
    const row = Math.floor(i / cols)
    const rawCol = i % cols
    const col = row % 2 === 0 ? rawCol : cols - 1 - rawCol
    return { ...node, x: 25 + col * (BOX_W + gapX), y: 45 + row * (BOX_H + gapY) }
  })

  const width = 50 + cols * BOX_W + (cols - 1) * gapX + SHADOW
  const height = 90 + rows * BOX_H + (rows - 1) * gapY

  const paths = placed.slice(0, -1).map((a, i) => {
    const b = placed[i + 1]
    const cy = a.y + BOX_H / 2
    if (a.y === b.y) {
      return b.x > a.x
        ? `M${a.x + BOX_W + SHADOW + 5} ${cy} L${b.x - 5} ${cy}`
        : `M${a.x - 5} ${cy} L${b.x + BOX_W + SHADOW + 5} ${cy}`
    }
    const cxMid = a.x + BOX_W / 2
    return `M${cxMid} ${a.y + BOX_H + SHADOW + 5} L${cxMid} ${b.y - 5}`
  })

  return (
    <svg viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <ArrowDef id={arrow} />
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="var(--border)"
          strokeWidth="4"
          markerEnd={`url(#${arrow})`}
        />
      ))}
      {placed.map((node, i) => (
        <Node key={i} {...node} />
      ))}
    </svg>
  )
}

/* A closed loop across two swimlanes: four nodes clockwise from the
   top left, with the return arrow carrying the reason it closes. */
function Cycle({ lanes, nodes, loopLabel, arrow }) {
  const w = 250
  const laneX = 20
  const laneW = 760
  const width = 800
  const height = 430
  const spots = [
    { x: 190, y: 85 },
    { x: 500, y: 85 },
    { x: 500, y: 275 },
    { x: 190, y: 275 },
  ]

  return (
    <svg viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <ArrowDef id={arrow} />
      {lanes.map((lane, i) => (
        <g key={lane.label}>
          <rect
            x={laneX}
            y={40 + i * 190}
            width={laneW}
            height="160"
            rx="10"
            fill="var(--surface)"
            stroke="var(--border)"
            strokeWidth="4"
            strokeDasharray="10 8"
          />
          <text
            x={laneX + 18}
            y={66 + i * 190}
            fontFamily="var(--heading)"
            fontSize="12"
            fontWeight="700"
            letterSpacing="1"
            fill={tones[lane.tone]?.fill}
          >
            {lane.label}
          </text>
        </g>
      ))}

      <g fill="none" stroke="var(--border)" strokeWidth="4" markerEnd={`url(#${arrow})`}>
        <path d="M445 125 L495 125" />
        <path d="M625 170 L625 270" />
        <path d="M495 315 L445 315" />
        <path d="M185 270 L185 170" />
      </g>

      {nodes.map((node, i) => (
        <Node key={i} {...node} {...spots[i]} w={w} />
      ))}

      {loopLabel && (
        <g>
          <rect
            x="45"
            y="118"
            width="130"
            height="48"
            rx="8"
            fill="var(--bg)"
            stroke="var(--border)"
            strokeWidth="3"
          />
          {loopLabel.map((line, i) => (
            <text
              key={i}
              x="110"
              y={139 + i * 16}
              textAnchor="middle"
              fontFamily="var(--heading)"
              fontSize="11"
              fontWeight="700"
              fill="var(--text)"
            >
              {line}
            </text>
          ))}
        </g>
      )}
    </svg>
  )
}

function FlowChart({ flow }) {
  const arrow = `flow-arrow-${useId().replace(/:/g, '')}`

  return (
    <div className="flow">
      {flow.legend && <Legend items={flow.legend} />}
      <div className="flow-wrap">
        {flow.type === 'cycle' ? (
          <Cycle {...flow} arrow={arrow} />
        ) : (
          <Chain {...flow} arrow={arrow} />
        )}
      </div>
    </div>
  )
}

export default FlowChart
