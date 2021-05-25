import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { makePick } from 'redux/gameReducer'

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
  const select = async (cardIndex) => {
    const score = await dispatch(makePick(cardIndex))
    setScore(score)
    setShowScore(true)
    setStatus(CARD_OPENED)
  }
  const isSelectable = () =>
    picksEnabled && !gameOver && !status.includes(CARD_OPENED)
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
      setShowScore(!picksEnabled) // remove score from the DOM if player still have some picks
      picksEnabled && setStatus(selected ? CARD_SELECTED : CARD_SEALED)
    }
    !gameOver && cardStatusHandler()
  }, [gameOver, sealed, selected, picksEnabled])
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
      onClick={() => isSelectable() && select(cardIndex)}
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
