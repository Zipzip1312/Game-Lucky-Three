import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { makePick } from 'redux/reducer'

export default function ScoreCard({
  scoreValue,
  cardIndex,
  picksEnabled,
  shuffling,
  selectedCards,
  finishedPlaying,
  scores,
  flippedProps
}) {
  const [score, setScore] = useState(scoreValue)
  const [showScore, setShowScore] = useState(true)
  const [status, setStatus] = useState('opened')
  const dispatch = useDispatch()
  // -----------------------------
  useEffect(() => {
    if (shuffling) {
      setStatus('sealed') // hide score behind the seal
      setTimeout(setShowScore, 1000, false) // remove score from the DOM
    }
  }, [shuffling])

  useEffect(() => {
    if (finishedPlaying) {
      setScore(scores[cardIndex])
      setShowScore(true)
      setTimeout(
        setStatus,
        Math.random() * (1500 - 300) + 300,
        selectedCards.includes(cardIndex) ? 'opened win' : 'disabled'
      )
    }
  }, [finishedPlaying, scores, cardIndex, selectedCards])
  // -----------------------------
  const select = async (cardIndex) => {
    const score = await dispatch(makePick(cardIndex))
    setScore(score)
    setShowScore(true)
    setStatus('opened')
  }
  // -----------------------------

  return (
    <div
      className={`score flex-center flex-column ${status}`}
      {...flippedProps}
      onClick={() =>
        picksEnabled &&
        !selectedCards.includes(cardIndex) &&
        !finishedPlaying &&
        select(cardIndex)
      }
    >
      <span className="seal"></span>
      <span className="coin"></span>

      {showScore && (
        <span className={`score-value ${score === 0 ? 'oops' : ''}`}>
          {score > 0 ? score : 'упс...'}
        </span>
      )}
    </div>
  )
}
