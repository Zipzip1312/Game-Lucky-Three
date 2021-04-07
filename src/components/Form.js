import FormCheckbox from 'components/FormCheckbox'
import SocialLinks from 'components/SocialLinks'

export default function Form() {
  // ---------------------------------------
  const sex = {
    male: 'чол',
    female: 'жін',
    other: 'інше'
  }
  const activeSex = 'female'

  const age = {
    '<30': 'до 30',
    '30-40': '30-40',
    '40-50': '40-50',
    '50-60': '50-60',
    '60+': 'за 60'
  }
  const activeAge = '40-50'
  // ---------------------------------------
  return (
    <div className="form flex-center">
      <div className="form-control">
        <span className="label">Стать?</span>
        {Object.entries(sex).map(([key, label]) => (
          <FormCheckbox label={label} isActive={key === activeSex} key={key} />
        ))}
      </div>
      <div className="form-control">
        <span className="label">Вік?</span>
        {Object.entries(age).map(([key, label]) => (
          <FormCheckbox label={label} isActive={key === activeAge} key={key} />
        ))}
      </div>
      <div className="form-control">
        <span className="label">Де з тобою краще спілкуватись?</span>
      </div>
      <SocialLinks />
    </div>
  )
}
