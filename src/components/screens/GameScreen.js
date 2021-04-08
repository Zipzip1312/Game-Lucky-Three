import { useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function GameScreen() {
  const [played, setPlayed] = useState(false)
  const [disabled, setDisabled] = useState(false)
  if (played) return <Redirect to="/score" />
  // ------------------------------
  const scores = [
    1000,
    500,
    250,
    250,
    100,
    100,
    50,
    50,
    25,
    25,
    10,
    10,
    0,
    0,
    0,
    0
  ]
  // ------------------------------

  return (
    <div className="game">
      <button
        className="game-start-btn"
        type="button"
        disabled={disabled}
        onClick={() => setDisabled(true)}
      ></button>
      {/* <button onClick={() => setPlayed(true)}>PLAY</button> */}
      <div className="game-lobby text-center">
        {scores.map((score) => {
          return <div className="score">{score}</div>
        })}
      </div>
    </div>
  )
}
