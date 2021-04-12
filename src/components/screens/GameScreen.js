import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import shuffle from 'lodash.shuffle'
import Game from 'components/Game'
import { useSelector, useDispatch } from 'react-redux'
import { toggleGame } from 'redux/reducer'

export default function GameScreen() {
  const gameStarted = useSelector((state) => state.game.gameStarted)
  const finishedPlaying = useSelector((state) => state.game.finishedPlaying)
  const scores = useSelector((state) => state.game.scores)
  const dispatch = useDispatch()
  // ------------------------------
  const [indexes, setIndexes] = useState([...scores.map((_, i) => i)])
  const shuffleIndexes = () => {
    dispatch(toggleGame())
    setIndexes(shuffle(indexes))
    setTimeout(() => {
      dispatch(toggleGame())
    }, 2000)
  }
  // ------------------------------
  if (finishedPlaying) return <Redirect to="/score" />

  return (
    <div className="game">
      <button
        className="game-start-btn"
        type="button"
        disabled={gameStarted}
        onClick={shuffleIndexes}
      ></button>
      <Game scores={scores} indexes={indexes} />
    </div>
  )
}
