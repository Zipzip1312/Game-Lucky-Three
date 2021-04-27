import DogImg from 'images/dog.svg'
import { useSelector } from 'react-redux'

export default function HailCard({ show }) {
  const totalScore = useSelector((state) => state.game.totalScore)

  return (
    <div className={`card hail ${show ? 'open' : ''}`}>
      <img className="card-image" src={DogImg} alt="Game Logo" />
      <div className="card-title hail pr-05 mb-2">
        <span className="text-gradient">Вітаємо!</span>
      </div>
      <div className="card-info flex-center bold">
        <div className="card-info-title title-1 nowrap">Ти виграв</div>
        <div className="card-info-card">
          <div className="total-score red fsz-2 lh-1-3">{totalScore}</div>
        </div>
      </div>
    </div>
  )
}
