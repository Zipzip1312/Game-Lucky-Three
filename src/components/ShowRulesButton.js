import { useSelector, useDispatch } from 'react-redux'
import { toggleRules } from 'redux/appReducer'

export default function ShowRulesBtn() {
  const rulesAccepted = useSelector((state) => state.app.rulesAccepted)
  const dispatch = useDispatch()
  const classes = {
    wrapper: rulesAccepted ? 'form-submit' : 'form-submit animate pulse',
    btn: rulesAccepted ? 'disabled headShake' : 'active jello'
  }

  return (
    <div className={classes.wrapper} onClick={() => dispatch(toggleRules())}>
      <div className={`${classes.btn} light-blue cursor-pointer ls-1 animate`}>
        Правила
      </div>
    </div>
  )
}
