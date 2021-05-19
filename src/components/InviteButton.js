import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleScreen } from 'redux/appReducer'

const SelectMediaBtn = () => {
  return (
    <div className="message light-blue">
      Обери зручний
      <br />
      спосіб відправки
    </div>
  )
}

const InviteBtn = ({ media, onClick }) => {
  const [animation, setAnimation] = useState('headShake')

  useEffect(() => {
    setAnimation('headShake')
    const timeout = setTimeout(setAnimation, 500, '')
    return () => clearTimeout(timeout)
  }, [media])

  return (
    <div className={`active light-blue animate ${animation}`} onClick={onClick}>
      Запросити
    </div>
  )
}

const ToGameBtn = () => {
  const dispatch = useDispatch()
  return (
    <div className="active large red" onClick={() => dispatch(toggleScreen())}>
      До гри!
    </div>
  )
}

export default function InviteButton({ media, toGame, onClick }) {
  const animation = 'animate bounceInRight mt-minus-2'
  return (
    <div className={`form-submit ${toGame ? animation : ''}`}>
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
