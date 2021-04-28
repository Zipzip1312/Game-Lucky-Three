import MenuIcon from 'images/menu-icon.svg'
import Stars from 'components/Stars'
import Form from 'components/Form'
// ------------------------------
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
// ------------------------------

export default function FormScreen() {
  // ------------------------------
  const form = useSelector((state) => state.app.form)
  const dispatch = useDispatch()

  useEffect(() => {
    if (form) console.log('form')
  }, [dispatch, form])
  // ------------------------------

  return (
    <div className="card">
      <div className="card-title">
        <img src={MenuIcon} alt="Авторизуйся" />
        <span className="text-gradient">Підкажи</span>
      </div>
      <div className="card-info bold lh-1-3 mb-1">
        хочемо знати трішки
        <br />
        більше про тебе ;)
      </div>
      <Form />
      <Stars />
    </div>
  )
}
