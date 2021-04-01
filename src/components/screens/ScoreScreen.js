import { useDispatch } from 'react-redux'
import { setScreen } from 'redux/reducer'

export default function ScoreScreen() {
  const dispatch = useDispatch()

  return (
    <div className="text-center">
      <h1>Score Screen</h1>
      <button onClick={() => dispatch(setScreen('welcome'))}>GO BACK</button>
    </div>
  )
}
