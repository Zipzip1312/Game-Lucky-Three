import { useSelector } from 'react-redux'
import { Flipper, Flipped } from 'react-flip-toolkit'
import ScoreCard from 'components/ScoreCard'

const Game = ({ onShuffleCompleted }) => {
  const scores = useSelector((state) => state.game.scores)
  const indexes = useSelector((state) => state.game.indexes)
  // -----------------------------
  const shuffling = useSelector((state) => state.game.shuffling)
  const selectedCards = useSelector((state) => state.game.selectedCards)
  const finishedPlaying = useSelector((state) => state.game.finishedPlaying)
  const picksEnabled = useSelector((state) => state.game.picksEnabled)

  return (
    <Flipper flipKey={JSON.stringify(indexes)} onComplete={onShuffleCompleted}>
      <div className="game-body">
        {indexes.map((index, i) => (
          <Flipped
            key={index}
            flipId={index}
            stagger="none"
            spring={{ stiffness: 300, damping: 30 }}
          >
            {(flippedProps) => (
              <ScoreCard
                scoreValue={scores[index]}
                cardIndex={i}
                picksEnabled={picksEnabled}
                shuffling={shuffling}
                selectedCards={selectedCards}
                finishedPlaying={finishedPlaying}
                scores={scores}
                flippedProps={flippedProps}
              />
            )}
          </Flipped>
        ))}
      </div>
    </Flipper>
  )
}

export default Game
