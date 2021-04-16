import { useSelector } from 'react-redux'
import { Flipper, Flipped } from 'react-flip-toolkit'
import ScoreCard from 'components/ScoreCard'

const Game = ({ onShuffleCompleted }) => {
  const scores = useSelector((state) => state.game.scores)
  const indexes = useSelector((state) => state.game.indexes)

  return (
    <Flipper flipKey={JSON.stringify(indexes)} onComplete={onShuffleCompleted}>
      <div className="game-lobby">
        {indexes.map((index, i) => (
          <Flipped
            key={index}
            flipId={index}
            stagger="none"
            spring={{ stiffness: 300, damping: 30 }}
          >
            {(flippedProps) => (
              <ScoreCard
                value={scores[index]}
                flippedProps={flippedProps}
                cardIndex={i}
              />
            )}
          </Flipped>
        ))}
      </div>
    </Flipper>
  )
}

export default Game
