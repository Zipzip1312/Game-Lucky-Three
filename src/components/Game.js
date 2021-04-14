import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Flipper, Flipped } from 'react-flip-toolkit'
import ScoreCard from 'components/ScoreCard'

const Game = ({ scores, indexes }) => {
  const [started, setStarted] = useState(true)
  // ------------------------------
  // Set current score
  // ------------------------------
  const currentScore = useSelector((state) => state.game.currentScore)
  const scoreResults = {}
  for (let i = 0; i < currentScore.length; i++) {
    const { index, score } = currentScore[i]
    scoreResults[index] = score
  }
  const isSealed = (index) => {
    return scoreResults.hasOwnProperty(index) ? false : started
  }
  const getValue = (index) => {
    return scoreResults.hasOwnProperty(index)
      ? scoreResults[index]
      : scores[index]
  }
  // ------------------------------

  return (
    <Flipper
      flipKey={JSON.stringify(indexes)}
      onStart={() => setStarted(true)}
      onComplete={() => setStarted(false)}
    >
      <div className="game-lobby">
        {indexes.map((_, index) => (
          <Flipped
            key={index}
            flipId={indexes[index]}
            stagger="none"
            spring={{ stiffness: 300, damping: 30 }}
          >
            {(flippedProps) => (
              <ScoreCard
                value={getValue(index)}
                sealed={isSealed(index)}
                flippedProps={flippedProps}
                index={index}
              />
            )}
          </Flipped>
        ))}
      </div>
    </Flipper>
  )
}

export default Game
