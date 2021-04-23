import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startShuffle } from 'redux/reducer'
import HailCard from 'components/HailCard'
import GameResetButton from 'components/GameResetButton'

const GameTitle = ({ picks, remove, hide }) => {
  return (
    <div
      className={`title-4 text-center white text-shadow animate ${
        hide ? 'hidden' : remove ? 'backOutLeft' : ''
      }`}
    >
      Грай! Ти маєш один шанс та {picks} спроби
    </div>
  )
}

const PicksCounter = ({ picks, selecting }) => {
  const [hasPicks, setHasPicks] = useState(picks > 0)
  const [animation, setAnimation] = useState('rubberBand')

  useEffect(() => {
    setHasPicks(picks > 0)
    if (selecting) setAnimation(hasPicks ? 'headShake' : 'zoomOut')
    setTimeout(setAnimation, 500, hasPicks ? '' : 'hidden')
  }, [selecting, picks, hasPicks])

  return (
    <div
      className={`btn picks-counter flex-center red bold animate ${animation}`}
    >
      {hasPicks && (
        <>
          <span className="count">{picks}</span>
          <span className="text">{picks === 1 ? 'СПРОБА' : 'СПРОБИ'}</span>
        </>
      )}
    </div>
  )
}

const StartButton = ({ disabled }) => {
  const dispatch = useDispatch()
  return (
    <div
      className={`btn ${disabled ? 'disabled animate pulse' : 'enabled'}`}
      onClick={() => !disabled && dispatch(startShuffle())}
    ></div>
  )
}

const GameHeader = ({ shuffling, gameOver }) => {
  const picksAvailable = useSelector((state) => state.game.picksAvailable)
  const currentScore = useSelector((state) => state.game.currentScore)
  const showPicksCounter = useSelector((state) => state.game.showPicksCounter)

  const [picks, setPicks] = useState(picksAvailable)

  useEffect(() => {
    setPicks((picks) => (picks = picksAvailable - currentScore.length))
  }, [currentScore, picksAvailable])

  return (
    <div className="game-header flex-center flex-wrap align-end pb-1">
      <GameTitle picks={picks} remove={showPicksCounter} hide={gameOver} />

      <div className="game-header-container flex-center mt-1">
        {showPicksCounter ? (
          <PicksCounter picks={picks} selecting={currentScore.length > 0} />
        ) : (
          <StartButton disabled={shuffling} />
        )}
      </div>

      <HailCard show={gameOver} />

      <GameResetButton />
    </div>
  )
}

export default GameHeader
