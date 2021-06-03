import DogImg from 'images/dog.svg'
import DogOkImg from 'images/dog-ok-2.svg'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

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
        <img className="card-image hail" src={DogOkImg} alt="Game Logo" />
        <div className="card-title card-title-right text-left pr-05 mb-2 pt-1 ml-minus-1">
          <span className="title-3 lh-1-3 mt-minus-1">
            Очікуй на cms/viber повідомлення
          </span>
        </div>
        <div className="card-info bold lh-1-3 fsz-1-3 pb-1">
          <span>
            про нарахування виграшних балів
            <br />
            на твою картку <span className="yellow">ВИГОДА!</span>
          </span>
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
