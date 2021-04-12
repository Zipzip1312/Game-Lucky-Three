import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import shuffle from 'lodash.shuffle'
import Game from 'components/Game'

export default function GameScreen() {
  const played = false
  const disabled = false
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
  const [indexes, setIndexes] = useState([...scores.map((_, i) => i)])
  const shuffleIndexes = () => setIndexes(shuffle(indexes))
  // ------------------------------
  if (played) return <Redirect to="/score" />

  return (
    <div className="game">
      <button
        className="game-start-btn"
        type="button"
        disabled={disabled}
        onClick={shuffleIndexes}
      ></button>
      <Game scores={scores} indexes={indexes} />
    </div>
  )
}
