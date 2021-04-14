import { useSelector } from 'react-redux'
import { Flipper, Flipped } from 'react-flip-toolkit'
import ScoreCard from 'components/ScoreCard'

const Game = ({ seal, onShuffleCompleted }) => {
  const scores = useSelector((state) => state.game.scores)
  const indexes = useSelector((state) => state.game.indexes)
  const sealStatus = (index) => seal
  const getValue = (index) => scores[index]
  // ------------------------------
  // Set current score
  // ------------------------------
  // const currentScore = useSelector((state) => state.game.currentScore)
  // const scoreResults = {}
  // for (let i = 0; i < currentScore.length; i++) {
  //   const { index, score } = currentScore[i]
  //   scoreResults[index] = score
  // }
  // // ------------------------------
  // const sealStatus = (index) =>
  // scoreResults.hasOwnProperty(index) ? false : seal
  // const getValue = (index) =>
  // scoreResults.hasOwnProperty(index) ? scoreResults[index] : scores[index]
  // ------------------------------

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
                value={getValue(index)}
                sealed={sealStatus(index)}
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
