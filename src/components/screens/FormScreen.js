import MenuIcon from 'images/menu-icon.svg'
// ------------------------------
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { toggleNav } from 'redux/appReducer'
// ------------------------------
import Stars from 'components/Stars'
import Form from 'components/Form'
import NavButton from 'components/NavButton'

export default function FormScreen() {
  // ------------------------------
  const formFilled = useSelector((state) => state.app.formFilled)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toggleNav(formFilled))
  }, [dispatch, formFilled])
  // ------------------------------

  return (
    <>
      <div className="card mt-auto">
        <div className="card-title">
          <img src={MenuIcon} alt="Авторизуйся" />
          <span className="text-gradient">Підкажи</span>
        </div>
        <div className="card-info bold mb-1">
          хочемо знати трішки
          <br />
          більше про тебе ;)
        </div>
        <Form />
        <Stars />
      </div>
      <NavButton />
    </>
  )
}
