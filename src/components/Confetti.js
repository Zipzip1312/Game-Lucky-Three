import confetti from 'canvas-confetti'
import { useEffect } from 'react'

export default function Confetti() {
  useEffect(() => {
    const duration = 4 * 1000
    const end = Date.now() + duration
    const frame = () => {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 10,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        zIndex: -1
      })
      // and launch a few from the right edge
      confetti({
        particleCount: 10,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        zIndex: -1
      })

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    setTimeout(frame, 500)
  }, [])
  return <></>
}
