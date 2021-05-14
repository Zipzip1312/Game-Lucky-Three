import DogImg from 'images/dog.svg'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import ShowRulesButton from 'components/ShowRulesButton'

export default function HailCard({ show }) {
  const totalScore = useSelector((state) => state.game.totalScore)
  const [animationOut, setAnimationOut] = useState('')
  const [animationIn, setAnimationIn] = useState('hidden')

  useEffect(() => {
    if (show) {
      const timeout = 1000
      setTimeout(setAnimationOut, timeout, 'animate backOutLeft delay-3')
      setTimeout(setAnimationIn, timeout, 'animate backInRight delay-4')
    }
  }, [show])

  return (
    <>
      <div className={`card hail ${show ? 'open ' : ''} ${animationIn}`}>
        <div className="card-title text-center pr-05 mb-1 pt-2">
          <span className="title-2 lh-1-3">
            Очікуй на CMS/Viber повідомлення!
          </span>
        </div>
        <div className="card-info flex-center bold">
          <ShowRulesButton />
        </div>
      </div>

      <div className={`card hail ${show ? 'open ' : ''} ${animationOut}`}>
        <img className="card-image" src={DogImg} alt="Game Logo" />
        <div className="card-title card-title-right hail pr-05 mb-2 mt-0">
          <span className="text-gradient">Вітаємо!</span>
        </div>
        <div className="card-info flex-center space-around bold">
          <div className="card-info-title title-1 nowrap">Ти виграв</div>
          <div className="card-info-card">
            <div className="total-score red fsz-2 lh-1-3">{totalScore}</div>
          </div>
        </div>
      </div>
    </>
  )
}
