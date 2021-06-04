import { useDispatch } from 'react-redux'
import { disableForm } from 'redux/appReducer'
import MenuIcon from 'images/menu-icon.svg'
import Form from 'components/Form'
import Stars from 'components/Stars'
import NavButton from 'components/NavButton'

export default function FormScreen() {
  const dispatch = useDispatch()
  const handleDisableForm = () => {
    setTimeout(dispatch, 1000, disableForm())
  }

  return (
    <>
      <div className="card mt-auto">
        <div className="card-title">
          <img src={MenuIcon} alt="Авторизуйся" />
          <span className="text-gradient">Підкажи</span>
        </div>
        <div className="card-info mb-1">
          хочемо знати трішки
          <br />
          більше про тебе ;)
        </div>
        <Form />
        <Stars />
      </div>
      <NavButton onClick={handleDisableForm} />
    </>
  )
}
