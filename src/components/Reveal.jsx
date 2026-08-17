import { useEffect, useRef, useState } from 'react'

// Once revealed, stays revealed — scrolling back up shouldn't re-hide a
// card the user already saw. display:flex so the single child (a card)
// still stretches to fill the grid row the way it did before this
// wrapper existed.
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' reveal-visible' : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}

export default Reveal
