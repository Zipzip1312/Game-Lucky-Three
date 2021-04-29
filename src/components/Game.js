import { useSelector, useDispatch } from 'react-redux'
import { stopShuffle } from 'redux/gameReducer'
import { Flipper, Flipped } from 'react-flip-toolkit'
import GameHeader from 'components/GameHeader'
import ScoreCard from 'components/ScoreCard'

const Game = () => {
  const {
    scores,
    indexes,
    shuffling,
    selectedCards,
    picksEnabled,
    gameOver
  } = useSelector((state) => state.game)
  const dispatch = useDispatch()
  const flipKey = JSON.stringify(indexes)
  const spring = { stiffness: 300, damping: 30 }

  return (
    <div className="game flex-center flex-column">
      <div className="game-header flex-center flex-wrap align-end pb-2">
        <GameHeader shuffling={shuffling} gameOver={gameOver} />
      </div>
      <Flipper
        flipKey={flipKey}
        onComplete={() => dispatch(stopShuffle())}
        className="game-body flex-center flex-wrap w-100 pt-1 mb-2"
      >
        {indexes.map((index, i) => (
          <Flipped key={index} flipId={index} stagger="none" spring={spring}>
            {(flippedProps) => (
              <ScoreCard
                cardIndex={i}
                enabled={picksEnabled}
                sealed={shuffling}
                selected={selectedCards.includes(i)}
                gameOver={gameOver}
                scores={scores}
                flippedProps={flippedProps}
              />
            )}
          </Flipped>
        ))}
      </Flipper>
    </div>
  )
}

export default Game
