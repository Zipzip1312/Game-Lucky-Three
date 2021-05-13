import FormCheckbox from 'components/FormCheckbox'
import SocialLinks from 'components/SocialLinks'
import { useDispatch } from 'react-redux'
import { toggleFormFilled } from 'redux/appReducer'

export default function Form() {
  const dispatch = useDispatch()
  // ---------------------------------------
  const sex = {
    male: 'чол',
    female: 'жін',
    other: 'інше'
  }
  const activeSex = ''

  const age = {
    '<30': 'до 30',
    '30-40': '30-40',
    '40-50': '40-50',
    '50-60': '50-60',
    '60+': 'за 60'
  }
  const activeAge = ''

  const setSocialMedia = (link) => {
    dispatch(toggleFormFilled(true))
    console.log(`Selected: ${link}`)
  }
  // ---------------------------------------
  return (
    <div className="form flex-center mb-1">
      <div className="form-control">
        <span className="label text-gradient">Стать?</span>
        {Object.entries(sex).map(([key, label]) => (
          <FormCheckbox label={label} isActive={key === activeSex} key={key} />
        ))}
      </div>
      <div className="form-control">
        <span className="label text-gradient">Вік?</span>
        {Object.entries(age).map(([key, label]) => (
          <FormCheckbox label={label} isActive={key === activeAge} key={key} />
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
