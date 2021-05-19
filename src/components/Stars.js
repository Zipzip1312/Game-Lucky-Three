import { useSelector } from 'react-redux'

export default function Stars() {
  const rulesAccepted = useSelector((state) => state.app.rulesAccepted)
  const formFilled = useSelector((state) => state.app.formFilled)
  const invitesLeft = useSelector((state) => state.app.invitesLeft)
  const activeClasses = 'active animate tada'

  return (
    <div className="stars">
      <div className="flex-center">
        <div className={`star ${rulesAccepted ? activeClasses : ''}`}></div>
        <div className={`star ${formFilled ? activeClasses : ''}`}></div>
        <div className={`star ${invitesLeft < 1 ? activeClasses : ''}`}></div>
      </div>
    </div>
  )
}
