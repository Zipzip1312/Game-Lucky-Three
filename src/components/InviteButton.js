import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleScreen, handleSendInvite } from 'redux/appReducer'

const SelectMediaBtn = () => {
  return (
    <div className="message light-blue">
      Обери зручний
      <br />
      спосіб відправки
    </div>
  )
}

const InviteBtn = ({ inviteLink }) => {
  const classes = 'active light-blue d-block no-decoration animate'
  const [animation, setAnimation] = useState('headShake')
  const dispatch = useDispatch()

  useEffect(() => {
    setAnimation('headShake')
    const timeout = setTimeout(setAnimation, 500, '')
    return () => clearTimeout(timeout)
  }, [inviteLink])

  return (
    <a
      href={`#${inviteLink}`}
      className={`${classes} ${animation}`}
      onClick={() => dispatch(handleSendInvite())}
      // target="_blank"
      rel="noreferrer"
    >
      Запросити
    </a>
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

export default function InviteButton({ inviteLink, showToGameBtn }) {
  const toGameBtnClasses = 'animate bounceInRight mt-minus-1'

  return (
    <div className={`form-submit ${showToGameBtn ? toGameBtnClasses : ''}`}>
      {showToGameBtn ? (
        <ToGameBtn />
      ) : inviteLink ? (
        <InviteBtn inviteLink={inviteLink} />
      ) : (
        <SelectMediaBtn />
      )}
    </div>
  )
}
