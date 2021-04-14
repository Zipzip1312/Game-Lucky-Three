import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleGame, shuffleScore } from 'redux/reducer'
import Game from 'components/Game'

export default function GameScreen() {
  const gameStarted = useSelector((state) => state.game.gameStarted)
  const finishedPlaying = useSelector((state) => state.game.finishedPlaying)
  const dispatch = useDispatch()
  // ------------------------------
  const shuffle = () => {
    dispatch(toggleGame())
    dispatch(shuffleScore())
    const duration = 1500
    const shuffling = setInterval(() => {
      dispatch(shuffleScore())
    }, duration)
    setTimeout(clearInterval, duration * 3, shuffling)
  }
  // ------------------------------
  const onShuffleCompleted = () => {
    dispatch(toggleGame())
    console.log('shuffleCompleted')
  }
  // ------------------------------
  if (finishedPlaying) return <Redirect to="/score" />

  return (
    <div className="game">
      <button
        className="game-start-btn"
        type="button"
        disabled={gameStarted}
        onClick={shuffle}
      ></button>
      <Game seal={!gameStarted} onShuffleCompleted={onShuffleCompleted} />
    </div>
  )
}
