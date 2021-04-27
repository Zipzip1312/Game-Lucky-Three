import DogImg from 'images/dog.svg'
import DrawPrizes from 'components/DrawPrizes'

export default function WelcomeScreen() {
  return (
    <>
      <DrawPrizes />
      <div className="card">
        <img className="card-image" src={DogImg} alt="Game Logo" />
        <div className="title-1 text-right pr-05">
          Грай та&nbsp;
          <br />
          вигравай!
        </div>
        <div className="card-info flex-center bold mt-2">
          <div className="card-info-title">Пиризовий фонд</div>
          <div className="card-info-card text-center red animate jello delay-3">
            <div className="title-1">20</div>
            <span className="fsz-1">млн грн</span>
          </div>
        </div>
      </div>
    </>
  )
}
