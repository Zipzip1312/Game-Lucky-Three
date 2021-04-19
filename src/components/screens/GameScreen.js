import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startShuffle, stopShuffle, shuffleScores } from 'redux/reducer'
import Game from 'components/Game'

export default function GameScreen() {
  const shuffling = useSelector((state) => state.game.shuffling)
  const finishedPlaying = useSelector((state) => state.game.finishedPlaying)
  const shuffleDuration = useSelector((state) => state.game.shuffleDuration)
  const timesToShuffle = useSelector((state) => state.game.timesToShuffle)
  const dispatch = useDispatch()
  // ------------------------------
  const shuffle = () => {
    dispatch(startShuffle())
    setTimeout(() => {
      dispatch(shuffleScores())
      const shuffle = setInterval(dispatch, shuffleDuration, shuffleScores())
      setTimeout(clearInterval, shuffleDuration * (timesToShuffle - 1), shuffle)
    }, 1000)
  }
  // ------------------------------
  const onShuffleCompleted = () => {
    dispatch(stopShuffle())
    console.log('Shuffle Completed')
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
        disabled={shuffling}
        onClick={shuffle}
      ></button>
      <Game onShuffleCompleted={onShuffleCompleted} />
    </div>
  )
}
