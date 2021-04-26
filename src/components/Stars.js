import { useSelector } from 'react-redux'

export default function Stars() {
  const rulesAccepted = useSelector((state) => state.app.rulesAccepted)
  const formFilled = useSelector((state) => state.app.formFilled)
  const doneInviting = useSelector((state) => state.app.doneInviting)

  return (
    <div className="stars">
      <div className="flex-center">
        <div className={`star ${rulesAccepted ? 'active' : ''}`}></div>
        <div className={`star ${formFilled ? 'active' : ''}`}></div>
        <div className={`star ${doneInviting ? 'active' : ''}`}></div>
      </div>
    </div>
  )
}
