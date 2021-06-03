import { useSelector, useDispatch } from 'react-redux'
import { updateForm } from 'redux/appReducer'
import FormCheckbox from 'components/FormCheckbox'
import BirthdayPicker from 'components/BirthdayPicker'
import SocialLinks from 'components/SocialLinks'

export default function Form() {
  const { form } = useSelector((state) => state.app)
  const dispatch = useDispatch()
  const handleFormUpdate = (payload) => {
    console.log(payload)
    dispatch(updateForm({ ...form, ...payload }))
  }

  return (
    <div className="form flex-center">
      <div className="form-control">
        <span className="label text-gradient">Стать?</span>
        {['жін', 'чол', 'інше'].map((label, i) => (
          <FormCheckbox
            label={label}
            active={form.sex === i}
            onClick={() => handleFormUpdate({ sex: i })}
            key={i}
          />
        ))}
      </div>
      <div className="form-control flex-column">
        <span className="label text-gradient nowrap mb-05">
          Коли твій День народження?
        </span>
        <BirthdayPicker
          birthday={form.birthday}
          onUpdate={(birthday) => handleFormUpdate({ birthday })}
        />
      </div>
      <div className="form-control flex-column">
        <span className="label text-gradient nowrap mb-05">
          Де з тобою краще спілкуватись?
        </span>
        <SocialLinks
          activeLink={form.messenger}
          onClick={(messenger) => handleFormUpdate({ messenger })}
        />
      </div>
    </div>
  )
}
