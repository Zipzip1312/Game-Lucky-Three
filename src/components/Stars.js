import StarImg from 'images/star.svg'
import StarActiveImg from 'images/star-active.svg'

export default function Stars() {
  return (
    <div className="stars">
      <div className="flex-center">
        <img className="star" src={StarImg} alt="star" />
        <img className="star" src={StarImg} alt="star" />
        <img className="star" src={StarImg} alt="star" />
      </div>
      <div className="flex-center stars-active">
        <img className="star visible" src={StarActiveImg} alt="star" />
        <img className="star visible" src={StarActiveImg} alt="star" />
        <img className="star" src={StarActiveImg} alt="star" />
      </div>
    </div>
  )
}
