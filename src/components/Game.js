import { Flipper, Flipped } from 'react-flip-toolkit'

const Game = ({ scores, indexes }) => {
  return (
    <Flipper flipKey={JSON.stringify(indexes)}>
      <div className="game-lobby">
        {indexes.map((_, i) => (
          <Flipped
            key={i}
            flipId={indexes[i]}
            stagger="none"
            spring={{ stiffness: 300, damping: 30 }}
          >
            <div className="score">{scores[i]}</div>
          </Flipped>
        ))}
      </div>
    </Flipper>
  )
}

export default Game
