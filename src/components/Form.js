import FormCheckbox from 'components/FormCheckbox'
import SocialLinks from 'components/SocialLinks'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleFormFilled, toggleNav } from 'redux/appReducer'

export default function Form() {
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(dispatch, 1000, toggleFormFilled(true))
  }, [dispatch])
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
    dispatch(toggleNav(true))
    console.log(`Selected: ${link}`)
  }
  // ---------------------------------------
  return (
    <div className="form flex-center">
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
