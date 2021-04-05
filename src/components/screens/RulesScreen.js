import HomeIcon from 'images/home-icon.svg'
import Stars from 'components/Stars'

export default function RulesScreen() {
  return (
    <div className="card">
      <div className="card-title">
        <img src={HomeIcon} alt="Авторизуйся" />
        Авторизуйся
      </div>
      <div className="card-info text-center bold">
        ми маємо знати
        <br />
        кому нараховувати
        <br />
        виграшні бали ;)
      </div>
      <Stars />
    </div>
  )
}
