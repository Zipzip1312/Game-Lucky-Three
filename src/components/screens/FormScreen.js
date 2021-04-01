import { Link } from 'react-router-dom'

export default function FormScreen() {
  return (
    <div>
      <h1>Form Screen</h1>
      <Link to="/rules">Rules</Link> | <Link to="/invite">Invite</Link>
    </div>
  )
}
