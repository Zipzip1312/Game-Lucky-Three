import { useDispatch } from 'react-redux'
import { nextScreen, prevScreen } from 'redux/reducer'

export default function NavButtons() {
  const dispatch = useDispatch()
  return (
    <div className="nav flex-center mt-1">
      <div
        className="nav-link back"
        onClick={() => dispatch(prevScreen())}
      ></div>
      <div className="nav-link" onClick={() => dispatch(nextScreen())}></div>
    </div>
  )
}
