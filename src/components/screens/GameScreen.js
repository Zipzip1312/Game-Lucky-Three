import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Game from 'components/Game'

export default function GameScreen() {
  const finishedPlaying = useSelector((state) => state.game.finishedPlaying)
  const dispatch = useDispatch()
  // ------------------------------
  useEffect(() => {
    if (finishedPlaying) {
      console.log('Finished Playing')
    }
  }, [finishedPlaying, dispatch])
  // ------------------------------

  return (
    <>
      <Game />
    </>
  )
}
