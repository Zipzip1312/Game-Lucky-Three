import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { makePick } from 'redux/reducer'

export default function ScoreCard({ value, flippedProps, cardIndex }) {
  const dispatch = useDispatch()
  const [score, setScore] = useState(value)
  const [showScore, setShowScore] = useState(true)
  const [status, setStatus] = useState('opened')

  const select = async (cardIndex) => {
    const pickScore = await dispatch(makePick(cardIndex))
    console.log('pickScore', pickScore)
    setShowScore(true)
    setScore(pickScore)
    setStatus('opened')
  }
  // -----------------------------
  const gameStarted = useSelector((state) => state.game.gameStarted)
  const wonIndexes = useSelector((state) => state.game.wonIndexes)
  const finishedPlaying = useSelector((state) => state.game.finishedPlaying)
  const picksEnabled = useSelector((state) => state.game.picksEnabled)

  useEffect(() => {
    if (gameStarted) {
      setStatus('sealed')
      setTimeout(setShowScore, 1000, false)
    }
  }, [gameStarted])

  useEffect(() => {
    if (finishedPlaying) {
      setShowScore(true)
      if (wonIndexes.includes(cardIndex)) {
        setStatus('opened')
      } else {
        setTimeout(setStatus, Math.random() * (1000 - 300) + 300, 'disabled')
      }
    }
  }, [finishedPlaying, wonIndexes, cardIndex])
  // -----------------------------

  return (
    <div
      className={`score flex-center flex-column ${status}`}
      {...flippedProps}
      onClick={() => picksEnabled && !finishedPlaying && select(cardIndex)}
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
