import HomeIcon from 'images/home-icon.svg'
import Stars from 'components/Stars'
import NavButton from 'components/NavButton'
import { useSelector, useDispatch } from 'react-redux'
import { toggleRulesAccepted } from 'redux/appReducer'

export default function RulesScreen() {
  const rulesAccepted = useSelector((state) => state.app.rulesAccepted)
  const dispatch = useDispatch()

  return (
    <>
      <div className="card">
        <div className="card-title">
          <img src={HomeIcon} alt="Авторизуйся" />
          <span className="text-gradient">Авторизуйся</span>
        </div>
        <div className="card-info text-center bold">
          <span className="d-none">
            ми маємо знати
            <br />
            кому нараховувати
            <br />
            виграшні бали ;)
          </span>

          <label
            className={`flex-center mb-1 mt-1 ${
              rulesAccepted ? 'orange' : 'white'
            }`}
          >
            Приймаю правила
            <input
              onChange={() => dispatch(toggleRulesAccepted(!rulesAccepted))}
              type="checkbox"
              checked={rulesAccepted}
              className="hidden"
            />
          </label>
        </div>
        <Stars />
      </div>
      <NavButton />
    </>
  )
}
