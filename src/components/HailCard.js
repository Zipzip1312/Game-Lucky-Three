import DogImg from 'images/dog.svg'
import { useSelector } from 'react-redux'

export default function HailCard({ show }) {
  const totalScore = useSelector((state) => state.game.totalScore)

  return (
    <div className={`card hail ${show ? 'open' : ''}`}>
      <img className="card-image" src={DogImg} alt="Game Logo" />
      <div className="card-title hail">
        <span className="text-gradient">Вітаємо!</span>
      </div>
      <div className="card-info flex-center bold">
        <div className="card-info-title title-2">Ти виграв</div>
        <div className="card-info-card text-center red">
          <div className="total-score">{totalScore}</div>
        </div>
      </div>
    </div>
  )
}
