import SocialLinks from 'components/SocialLinks'

export default function Form() {
  return (
    <div className="form flex-center">
      <div className="form-control">
        <span className="label bold">Стать?</span>
      </div>
      <div className="form-control">
        <span className="label bold">Вік?</span>
      </div>
      <div className="form-control">
        <span className="label bold label-small">
          Де з тобою краще спілкуватись?
        </span>
      </div>
      <SocialLinks />
    </div>
  )
}
