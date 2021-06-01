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

  const age = {
    '<30': 'до 30',
    '30-40': '30-40',
    '40-50': '40-50',
    '50-60': '50-60',
    '60+': 'за 60'
  }

  const setSocialMedia = (link) => {
    dispatch(toggleFormFilled(true))
    console.log(`Selected: ${link}`)
  }

  const [activeSex, setActiveSex] = useState('')
  const [activeAge, setActiveAge] = useState('')
  // ---------------------------------------
  // const dateValue = '1985/12/13'
  const dateValue = ''
  const [date, setDate] = useState(dateValue ? new Date(dateValue) : '')
  // const [date, setDate] = useState(new Date('1985/12/13'))
  // ---------------------------------------
  return (
    <div className="form flex-center mb-1">
      <BirthdayPicker date={date} />
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
      <div className="form-control">
        <span className="label text-gradient">Вік?</span>
        {Object.entries(age).map(([key, label]) => (
          <FormCheckbox
            label={label}
            active={key === activeAge}
            key={key}
            onClick={() => setActiveAge(key)}
          />
        ))}
      </div>
      <div className="form-control">
        <span className="label text-gradient nowrap">
          Де з тобою краще спілкуватись?
        </span>
      </div>
      <SocialLinks activeLink="" onClick={(link) => setSocialMedia(link)} />
    </div>
  )
}
