import DogImg from 'images/dog.svg'

export default function WelcomeScreen() {
  return (
    <div className="welcome">
      <div className="card">
        <img className="card-image" src={DogImg} alt="Game Logo" />
        <div className="title-1 text-right">
          Грай та&nbsp;
          <br />
          вигравай!
        </div>
        <div className="card-info flex-center bold mt-1">
          <div className="card-info-title">Пиризовий фонд</div>
          <div className="card-info-card text-center red">
            <div className="title-3">20</div>
            <span className="small">млн грн</span>
          </div>
        </div>
      </div>
    </div>
  )
}
