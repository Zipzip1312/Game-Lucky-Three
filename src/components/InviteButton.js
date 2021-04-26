import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { nextScreen } from 'redux/appReducer'

const SelectMediaBtn = () => {
  return <div className="message">Обери зручний спосіб відправки</div>
}

const InviteBtn = ({ media, onClick }) => {
  const [animation, setAnimation] = useState('headShake')

  useEffect(() => {
    setAnimation('headShake')
    const timeout = setTimeout(setAnimation, 500, '')
    return () => clearTimeout(timeout)
  }, [media])

  return (
    <div className={`active animate ${animation}`} onClick={onClick}>
      Запросити
    </div>
  )
}

const ToGameBtn = () => {
  const dispatch = useDispatch()
  return (
    <div className="to-game-btn red" onClick={() => dispatch(nextScreen())}>
      До гри!
    </div>
  )
}

export default function InviteButton({ media, toGame, onClick }) {
  const animation = 'animate bounceInRight'
  return (
    <div className={`form-submit invite light-blue ${toGame ? animation : ''}`}>
      {toGame ? (
        <ToGameBtn />
      ) : media ? (
        <InviteBtn media={media} onClick={onClick} />
      ) : (
        <SelectMediaBtn />
      )}
    </div>
  )
}
