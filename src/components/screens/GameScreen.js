import { useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function GameScreen() {
  const [played, setPlayed] = useState(false)
  if (played) return <Redirect to="/score" />

  return (
    <div className="card">
      <h1>Game Screen</h1>
      <button onClick={() => setPlayed(true)}>PLAY</button>
    </div>
  )
}
