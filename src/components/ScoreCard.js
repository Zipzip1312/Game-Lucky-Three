import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { makePick } from 'redux/reducer'

export default function ScoreCard({ value, sealed, flippedProps, index }) {
  const dispatch = useDispatch()
  const [score, setScore] = useState(value)
  const [isSealed, setIsSealed] = useState(sealed)
  const [showScore, setShowScore] = useState(!isSealed)
  const select = async (index) => {
    if (isSealed) {
      const pickScore = await dispatch(makePick(index))
      console.log('pickScore', pickScore)
      setScore(pickScore)
      setIsSealed(!isSealed)
    }
  }

  useEffect(() => {
    const timeout = isSealed ? 500 : 0
    const timer = setTimeout(() => {
      setShowScore(!isSealed)
    }, timeout)
    return () => {
      clearTimeout(timer)
    }
  }, [isSealed])

  return (
    <div
      className={`score flex-center flex-column ${
        isSealed ? 'sealed' : 'opened'
      }`}
      {...flippedProps}
      onClick={() => select(index)}
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
