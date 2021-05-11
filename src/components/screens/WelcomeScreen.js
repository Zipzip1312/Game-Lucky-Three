import DogImg from 'images/dog.svg'
import { useSelector, useDispatch } from 'react-redux'
import { toggleRulesAccepted } from 'redux/appReducer'
import DrawPrizes from 'components/DrawPrizes'
import Stars from 'components/Stars'
import NavButton from 'components/NavButton'

const RulesButton = () => {
  const rulesAccepted = useSelector((state) => state.app.rulesAccepted)
  const dispatch = useDispatch()
  const classes = rulesAccepted ? 'active jello' : 'disabled headShake'

  return (
    <>
      <div
        className="form-submit"
        onClick={() => dispatch(toggleRulesAccepted(!rulesAccepted))}
      >
        <div className={`${classes} light-blue cursor-pointer animate`}>
          Правила
        </div>
      </div>
    </>
  )
}

export default function WelcomeScreen() {
  return (
    <>
      <DrawPrizes />
      <div className="card mt-auto mb-2">
        <img className="card-image" src={DogImg} alt="Game Logo" />
        <div className="title-1 text-right pr-05">
          Грай та&nbsp;
          <br />
          вигравай!
        </div>
        <div className="card-info flex-center bold mt-2">
          <div className="card-info-title">Пиризовий фонд</div>
          <div className="card-info-card text-center red animate jello delay-5">
            <div className="title-1">20</div>
            <span className="fsz-1">млн грн</span>
          </div>
        </div>
        <Stars />
      </div>
      <RulesButton />
      <NavButton />
    </>
  )
}
