import { useDispatch, useSelector } from 'react-redux'
import { nextScreen } from 'redux/appReducer'

export default function NavButton() {
  const show = useSelector((state) => state.app.enableNav)
  const dispatch = useDispatch()

  return (
    <div className="nav flex-center mt-2">
      <div
        className={`nav-link animate ${
          show ? 'bounceInLeft' : 'bounceOutRight'
        }`}
      >
        <div className="link" onClick={() => dispatch(nextScreen())}></div>
      </div>
    </div>
  )
}
