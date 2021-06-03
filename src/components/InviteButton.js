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

const InviteBtn = ({ inviteLink, onClick }) => {
  const [animation, setAnimation] = useState('headShake')

  useEffect(() => {
    setAnimation('headShake')
    const timeout = setTimeout(setAnimation, 500, '')
    return () => clearTimeout(timeout)
  }, [inviteLink])

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

export default function InviteButton({ inviteLink, showToGameBtn, onClick }) {
  const toGameBtnClasses = 'animate bounceInRight mt-minus-1'

  return (
    <div className={`form-submit ${showToGameBtn ? toGameBtnClasses : ''}`}>
      {showToGameBtn ? (
        <ToGameBtn />
      ) : inviteLink ? (
        <InviteBtn inviteLink={inviteLink} onClick={onClick} />
      ) : (
        <SelectMediaBtn />
      )}
    </div>
  )
}
