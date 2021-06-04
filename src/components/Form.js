import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateForm, toggleNav } from 'redux/appReducer'
import FormCheckbox from 'components/FormCheckbox'
import BirthdayPicker from 'components/BirthdayPicker'
import SocialLinks from 'components/SocialLinks'

export default function Form() {
  const { form } = useSelector((state) => state.app)
  const dispatch = useDispatch()
  const handleFormUpdate = (payload) => {
    dispatch(updateForm({ ...form, ...payload }))
  }

  // -----------------------------
  // Show nav btn if form is disabled
  // -----------------------------
  useEffect(() => {
    form.disabled && dispatch(toggleNav(true))
  }, [form.disabled, dispatch])

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
            disabled={form.disabled}
          />
        ))}
      </div>
      <div className="form-control flex-column">
        <span className="label text-gradient">Коли твій День народження?</span>
        <BirthdayPicker
          birthday={form.birthday}
          onUpdate={(birthday) => handleFormUpdate({ birthday })}
          disabled={form.disabled}
        />
      </div>
      <div className="form-control flex-column">
        <span className="label text-gradient">
          Де з тобою краще спілкуватись?
        </span>
        <SocialLinks
          activeLink={form.messenger}
          onClick={(messenger) => handleFormUpdate({ messenger })}
          disabled={form.disabled}
        />
      </div>
    </div>
  )
}
