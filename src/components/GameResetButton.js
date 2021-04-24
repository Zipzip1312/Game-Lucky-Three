import StartBtnImage from 'images/start-active.svg'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { resetGame, startShuffle } from 'redux/gameReducer'

export default function GameResetButton() {
  const resettable = useSelector((state) => state.game.resettable)
  const gameOver = useSelector((state) => state.game.gameOver)
  const [className, setClassName] = useState('d-none')
  const dispatch = useDispatch()
  const reset = () => {
    dispatch(resetGame())
    document.querySelectorAll('.score.disabled').forEach((card) => {
      card.classList.remove('disabled')
    })
    setTimeout(dispatch, 500, startShuffle())
  }

  useEffect(() => {
    if (gameOver) {
      setTimeout(setClassName, 1500, 'rubberBand')
    } else {
      setClassName('d-none')
    }
  }, [gameOver])

  return (
    <>
      {resettable && (
        <div
          className={`game-reset-btn flex-center red animate ${className}`}
          onClick={reset}
        >
          <img src={StartBtnImage} className="btn" alt="reset" />
        </div>
      )}
    </>
  )
}
