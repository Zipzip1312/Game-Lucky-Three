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
    if (sealed && !gameOver) {
      setStatus(selected ? CARD_OPENED : CARD_SEALED) // hide score behind the seal or open if card is selected
      setTimeout(setShowScore, 1000, selected) // remove score from the DOM or show if card is selected
    }
  }, [sealed, gameOver, selected])
  // -----------------------------
  // Show all cards when game is over
  // -----------------------------
  useEffect(() => {
    if (gameOver) {
      const score = scores[cardIndex]
      setScore(score)
      setShowScore(true)
      // animate appearance
      const randomDelay = () => Math.random() * (1500 - 300) + 300
      const delay = score === 1000 ? 2000 : randomDelay()
      const status = selected ? CARD_SELECTED : CARD_DISABLED
      setTimeout(setStatus, delay, status)
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
