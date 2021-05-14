import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { nextScreen } from 'redux/appReducer'

export default function NavButton() {
  const show = useSelector((state) => state.app.enableNav)
  const dispatch = useDispatch()
  const [animation, setAnimation] = useState('')
  const onClick = () => {
    setAnimation('clicked')
    dispatch(nextScreen())
  }

  useEffect(() => {
    show && setAnimation('active jello delay-1')
  }, [show])

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
