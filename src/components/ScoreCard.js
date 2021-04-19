import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { makePick } from 'redux/reducer'

export default function ScoreCard({ value, flippedProps, cardIndex }) {
  const dispatch = useDispatch()
  const [score, setScore] = useState(value)
  const [showScore, setShowScore] = useState(true)
  const [status, setStatus] = useState('opened')
  // -----------------------------
  const gameStarted = useSelector((state) => state.game.gameStarted)
  const wonIndexes = useSelector((state) => state.game.wonIndexes)
  const finishedPlaying = useSelector((state) => state.game.finishedPlaying)
  const picksEnabled = useSelector((state) => state.game.picksEnabled)
  const scores = useSelector((state) => state.game.scores)
  // -----------------------------
  useEffect(() => {
    if (gameStarted) {
      setStatus('sealed')
      setTimeout(setShowScore, 1000, false)
    }
  }, [gameStarted])

  useEffect(() => {
    if (finishedPlaying) {
      setScore(scores[cardIndex])
      setShowScore(true)
      if (wonIndexes.includes(cardIndex)) return setStatus('opened')
      setTimeout(setStatus, Math.random() * (1500 - 300) + 300, 'disabled')
    }
  }, [finishedPlaying, wonIndexes, scores, cardIndex])
  // -----------------------------
  const select = async (cardIndex) => {
    if (!picksEnabled || wonIndexes.includes(cardIndex) || finishedPlaying)
      return false
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
      onClick={() => select(cardIndex)}
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
