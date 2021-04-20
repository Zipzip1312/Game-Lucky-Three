import { useSelector, useDispatch } from 'react-redux'
import { stopShuffle } from 'redux/reducer'
import { Flipper, Flipped } from 'react-flip-toolkit'
import StartButton from 'components/StartButton'
import ScoreCard from 'components/ScoreCard'

const Game = () => {
  const {
    scores,
    indexes,
    shuffling,
    selectedCards,
    picksEnabled,
    finishedPlaying
  } = useSelector((state) => state.game)
  const dispatch = useDispatch()
  const flipKey = JSON.stringify(indexes)
  const spring = { stiffness: 300, damping: 30 }

  return (
    <div className="game">
      <StartButton disabled={shuffling} />
      <Flipper flipKey={flipKey} onComplete={() => dispatch(stopShuffle())}>
        <div className="game-body">
          {indexes.map((index, i) => (
            <Flipped key={index} flipId={index} stagger="none" spring={spring}>
              {(flippedProps) => (
                <ScoreCard
                  cardIndex={i}
                  enabled={picksEnabled}
                  sealed={shuffling}
                  selected={selectedCards.includes(i)}
                  finishedPlaying={finishedPlaying}
                  scores={scores}
                  flippedProps={flippedProps}
                />
              )}
            </Flipped>
          ))}
        </div>
      </Flipper>
    </div>
  )
}

export default Game
