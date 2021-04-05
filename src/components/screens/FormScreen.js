import MenuIcon from 'images/menu-icon.svg'
import Stars from 'components/Stars'
import Form from 'components/Form'

export default function FormScreen() {
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
