import { useDispatch, useSelector } from 'react-redux'
import { nextScreen } from 'redux/reducer'

export default function NavButtons() {
  const show = useSelector((state) => state.game.enableNav)
  const dispatch = useDispatch()

  return (
    <div className="nav flex-center mt-2">
      <div className={`nav-link animate ${show ? 'pulse once' : 'hidden'}`}>
        <div className="link" onClick={() => dispatch(nextScreen())}></div>
      </div>
    </div>
  )
}
