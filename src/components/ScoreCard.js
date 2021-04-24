import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { makePick } from 'redux/gameReducer'

const CARD_OPENED = 'opened'
const CARD_SELECTED = 'opened win'
const CARD_SEALED = 'sealed'
const CARD_DISABLED = 'disabled'

export default function ScoreCard({
  cardIndex,
  enabled,
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
  const isSelectable = () => enabled && !gameOver && status !== CARD_OPENED
  // -----------------------------
  // Seal cards
  // -----------------------------
  useEffect(() => {
    if (sealed) {
      setStatus(CARD_SEALED) // hide score behind the seal
      setTimeout(setShowScore, 1000, false) // remove score from the DOM
    }
  }, [sealed])
  // -----------------------------
  // Show all cards when game is over
  // -----------------------------
  useEffect(() => {
    if (gameOver) {
      const score = scores[cardIndex]
      setScore(score)
      setShowScore(true)
      // animate appearance
      const defaultTimeout = () => Math.random() * (1500 - 300) + 300
      const timeout = score === 1000 ? 2000 : defaultTimeout()
      const status = selected ? CARD_SELECTED : CARD_DISABLED
      setTimeout(setStatus, timeout, status)
    }
  }, [gameOver, scores, cardIndex, selected])
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
