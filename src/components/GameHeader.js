import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startShuffle } from 'redux/gameReducer'
import DrawPrizes from 'components/DrawPrizes'
import HailCard from 'components/HailCard'
import GameResetButton from 'components/GameResetButton'

const GameTitle = ({ picks }) => {
  return (
    <div className="title-4 text-center white nowrap text-shadow mt-2">
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
    const timeout = setTimeout(setAnimation, 500, hasPicks ? '' : 'hidden')
    return () => clearTimeout(timeout)
  }, [selecting, picks, hasPicks])

  return (
    <div
      className={`btn picks-counter flex-center red bold animate ${animation}`}
    >
      {hasPicks && (
        <>
          <span className="count">{picks}</span>
          <span className="fsz-1">{picks === 1 ? 'СПРОБА' : 'СПРОБИ'}</span>
        </>
      )}
    </div>
  )
}

const StartButton = ({ disabled }) => {
  const dispatch = useDispatch()

  return (
    <>
      <div
        className={`btn ${disabled ? 'transparent' : ''}`}
        onClick={() => !disabled && dispatch(startShuffle())}
      ></div>
      <div
        className={`btn disabled ${disabled ? 'animate pulse' : 'transparent'}`}
      ></div>
    </>
  )
}

const GameHeader = ({ shuffling, gameOver }) => {
  const { picksAvailable, currentScore, showPicksCounter } = useSelector(
    (state) => state.game
  )
  const [picks, setPicks] = useState(picksAvailable)

  useEffect(() => {
    setPicks((picks) => (picks = picksAvailable - currentScore.length))
  }, [currentScore, picksAvailable])

  return (
    <>
      {showPicksCounter ? (
        <DrawPrizes hide={gameOver} delay={false} />
      ) : (
        <GameTitle picks={picks} />
      )}
      <div className="game-header-container flex-center mt-2">
        {showPicksCounter ? (
          <PicksCounter picks={picks} selecting={currentScore.length > 0} />
        ) : (
          <StartButton disabled={shuffling} />
        )}
      </div>

      <HailCard show={gameOver} />

      <GameResetButton />
    </>
  )
}

export default GameHeader
