import FormCheckbox from 'components/FormCheckbox'
import SocialLinks from 'components/SocialLinks'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { toggleFormFilled } from 'redux/appReducer'
import BirthdayPicker from 'components/BirthdayPicker'

export default function Form() {
  const dispatch = useDispatch()
  // ---------------------------------------
  const sex = {
    male: 'чол',
    female: 'жін',
    other: 'інше'
  }
  const [activeSex, setActiveSex] = useState('')

  const setSocialMedia = (link) => {
    dispatch(toggleFormFilled(true))
    console.log(`Selected: ${link}`)
  }
  // ---------------------------------------
  let dateValue = ''
  // dateValue = '1985-12-13'
  const [date, setDate] = useState(dateValue)
  // ---------------------------------------
  return (
    <div className="form flex-center">
      <div className="form-control">
        <span className="label text-gradient">Стать?</span>
        {Object.entries(sex).map(([key, label]) => (
          <FormCheckbox
            label={label}
            active={key === activeSex}
            key={key}
            onClick={() => setActiveSex(key)}
          />
        ))}
      </div>
      <div className="form-control flex-column">
        <span className="label text-gradient nowrap mb-05">
          Коли твій День народження?
        </span>
        <BirthdayPicker
          birthday={date}
          onUpdate={(newDate) => setDate(newDate)}
        />
      </div>
      <div className="form-control flex-column">
        <span className="label text-gradient nowrap mb-05">
          Де з тобою краще спілкуватись?
        </span>
        <SocialLinks activeLink="" onClick={(link) => setSocialMedia(link)} />
      </div>
    </div>
  )
}
