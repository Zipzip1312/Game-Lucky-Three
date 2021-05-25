import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { toggleScreen } from 'redux/appReducer'

export default function NavButton() {
  const show = useSelector((state) => state.app.enableNav)
  const [animation, setAnimation] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    show && setAnimation('active jello delay-1')
  }, [show])

  const onClick = () => {
    setAnimation('clicked')
    dispatch(toggleScreen())
  }

  return (
    <div className="nav flex-center mt-2 mb-auto">
      <div
        className={`nav-link animate ${
          show ? 'bounceInLeft' : 'bounceOutRight'
        }`}
      >
        <div className={`link animate ${animation}`} onClick={onClick}></div>
      </div>
    </div>
  )
}
