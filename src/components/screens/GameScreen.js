import { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleGame, shuffleScore } from 'redux/reducer'
import Game from 'components/Game'

export default function GameScreen() {
  const gameStarted = useSelector((state) => state.game.gameStarted)
  const finishedPlaying = useSelector((state) => state.game.finishedPlaying)
  const shuffleDuration = useSelector((state) => state.game.shuffleDuration)
  const timesToShuffle = useSelector((state) => state.game.timesToShuffle)
  const dispatch = useDispatch()
  // ------------------------------
  const shuffle = () => {
    dispatch(toggleGame(true))
    setTimeout(() => {
      dispatch(shuffleScore())
      const shuffling = setInterval(dispatch, shuffleDuration, shuffleScore())

      setTimeout(
        clearInterval,
        shuffleDuration * (timesToShuffle - 1),
        shuffling
      )
    }, 1000)
  }
  // ------------------------------
  const onShuffleCompleted = () => {
    dispatch(toggleGame(false))
    console.log('shuffleCompleted')
  }
  // ------------------------------
  useEffect(() => {
    if (finishedPlaying) {
      console.log('Finished Playing')
    }
  }, [finishedPlaying, dispatch])
  // ------------------------------

  return (
    <div className="game">
      <button
        className="game-start-btn"
        type="button"
        disabled={gameStarted}
        onClick={shuffle}
      ></button>
      <Game onShuffleCompleted={onShuffleCompleted} />
    </div>
  )
}
