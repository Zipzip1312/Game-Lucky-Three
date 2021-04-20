import { useDispatch } from 'react-redux'
import { startShuffle } from 'redux/reducer'

const StartButton = ({ disabled }) => {
  const dispatch = useDispatch()

  return (
    <button
      className="game-start-btn"
      type="button"
      disabled={disabled}
      onClick={() => dispatch(startShuffle())}
    ></button>
  )
}

StartButton.defaultProps = {
  disabled: false
}

export default StartButton
