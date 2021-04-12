import { useState } from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import ScoreCard from 'components/ScoreCard'

const Game = ({ scores, indexes }) => {
  const [started, setStarted] = useState(false)

  return (
    <Flipper
      flipKey={JSON.stringify(indexes)}
      onStart={() => setStarted(true)}
      onComplete={() => setStarted(false)}
    >
      <div className="game-lobby">
        {indexes.map((_, i) => (
          <Flipped
            key={i}
            flipId={indexes[i]}
            stagger="none"
            spring={{ stiffness: 300, damping: 30 }}
          >
            {(flippedProps) => (
              <ScoreCard
                value={scores[i]}
                sealed={started}
                flippedProps={flippedProps}
                index={i}
              />
            )}
          </Flipped>
        ))}
      </div>
    </Flipper>
  )
}

export default Game
