import MenuIcon from 'images/menu-icon.svg'
import Stars from 'components/Stars'
import Form from 'components/Form'
// ------------------------------
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { toggleNav } from 'redux/reducer'
// ------------------------------

export default function FormScreen() {
  // ------------------------------
  const form = useSelector((state) => state.game.form)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toggleNav(true))
    if (form) console.log('form')
  }, [dispatch, form])
  // ------------------------------

  return (
    <div className="card">
      <div className="card-title">
        <img src={MenuIcon} alt="Авторизуйся" />
        Підкажи
      </div>
      <div className="card-info text-center bold">
        хочемо знати трішки
        <br />
        більше про тебе ;)
      </div>
      <Form />
      <Stars />
    </div>
  )
}
