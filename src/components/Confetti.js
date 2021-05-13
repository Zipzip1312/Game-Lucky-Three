import confetti from 'canvas-confetti'
import { useEffect } from 'react'

export default function Confetti() {
  useEffect(() => {
    const duration = 3 * 1000
    const end = Date.now() + duration
    const frame = () => {
      const defaults = { particleCount: 6, spread: 50, ticks: 100, zIndex: -1 }
      // left edge
      confetti({
        angle: 60,
        origin: { x: 0 },
        ...defaults
      })
      // right edge
      confetti({
        angle: 120,
        origin: { x: 1 },
        ...defaults
      })

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    setTimeout(requestAnimationFrame, 500, frame)
  }, [])
  return <></>
}
