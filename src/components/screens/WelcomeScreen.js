import DogImg from 'images/dog.svg'
import { useSelector, useDispatch } from 'react-redux'
import { toggleRules } from 'redux/appReducer'
import DrawPrizes from 'components/DrawPrizes'
import Stars from 'components/Stars'
import NavButton from 'components/NavButton'
import Rules from 'components/Rules'

const ShowRulesBtn = () => {
  const rulesAccepted = useSelector((state) => state.app.rulesAccepted)
  const dispatch = useDispatch()
  const classes = rulesAccepted ? 'disabled headShake' : 'active jello'

  return (
    <div className="form-submit" onClick={() => dispatch(toggleRules())}>
      <div className={`${classes} light-blue cursor-pointer ls-1 animate`}>
        Правила
      </div>
    </div>
  )
}

export default function WelcomeScreen() {
  return (
    <>
      <DrawPrizes />
      <div className="card mt-minus-2 mb-2">
        <img className="card-image" src={DogImg} alt="Game Logo" />
        <div className="title-1 text-right pr-05">
          Грай та&nbsp;
          <br />
          вигравай!
        </div>
        <div className="card-info flex-center bold mt-1">
          <div className="card-info-title">Призовий фонд</div>
          <div className="card-info-card text-center red animate jello delay-5">
            <div className="title-1">10</div>
            <span className="fsz-1">млн грн</span>
          </div>
        </div>
        <Stars />
      </div>
      <ShowRulesBtn />
      <NavButton />
      <Rules />
    </>
  )
}
