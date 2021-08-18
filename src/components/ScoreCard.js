import { makePick } from 'api'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { disablePicks, updateCurrentScore } from 'redux/gameReducer'

const CARD_OPENED = 'opened'
const CARD_SELECTED = 'opened win'
const CARD_SEALED = 'sealed'
const CARD_DISABLED = 'disabled'

export default function ScoreCard({
  cardIndex,
  picksEnabled,
  sealed,
  selected,
  gameOver,
  scores,
  flippedProps
}) {
  const [score, setScore] = useState(scores[cardIndex])
  const [showScore, setShowScore] = useState(true)
  const [status, setStatus] = useState(gameOver ? CARD_SEALED : CARD_OPENED) // className
  const dispatch = useDispatch()
  const isSelectable = () =>
    picksEnabled && !gameOver && !status.includes(CARD_OPENED)
  const select = async () => {
    dispatch(disablePicks())
    const response = await makePick(cardIndex)
    dispatch(updateCurrentScore({ index: cardIndex, ...response }))
    setScore(response.score)
    setStatus(CARD_OPENED)
  }
  // -----------------------------
  // Update score
  // -----------------------------
  useEffect(() => {
    setScore(() => scores[cardIndex])
  }, [scores, cardIndex])
  // -----------------------------
  // Handle card status
  // -----------------------------
  useEffect(() => {
    const cardStatusHandler = () => {
      sealed && setStatus(selected ? CARD_OPENED : CARD_SEALED) // hide score behind the seal or open if card is selected
      setShowScore(status !== CARD_SEALED) // remove score from the DOM when sealed
      picksEnabled && setStatus(selected ? CARD_SELECTED : CARD_SEALED)
    }
    !gameOver && cardStatusHandler()
  }, [gameOver, sealed, selected, picksEnabled, status])
  // -----------------------------
  // Show all cards when the game is over
  // -----------------------------
  useEffect(() => {
    const gameOverHandler = () => {
      setStatus(selected ? CARD_SELECTED : CARD_SEALED) // set initial state for returned players
      setShowScore(true)
      // animate appearance
      const rng = (max, min) => Math.random() * (max - min) + min
      const delay = score === 1000 ? 2000 : rng(1500, 300)
      const status = selected ? CARD_SELECTED : CARD_DISABLED
      setTimeout(setStatus, delay, status)
    }
    gameOver && gameOverHandler()
  }, [gameOver, selected, score])
  // -----------------------------

  return (
    <div
      className={`score flex-center flex-column ${status}`}
      {...flippedProps}
      onClick={() => isSelectable() && select()}
    >
      <span className="seal"></span>
      <span className="coin"></span>

      {showScore && (
        <span className={`${score === 0 ? 'oops' : ''}`}>
          {score > 0 ? score : 'упс...'}
        </span>
      )}
    </div>
  )
}
