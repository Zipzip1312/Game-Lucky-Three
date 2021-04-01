import { Link } from 'react-router-dom'

export default function InviteScreen() {
  return (
    <div>
      <h1>Invite Screen</h1>
      <Link to="/form">Form</Link> | <Link to="/game">Game</Link>
    </div>
  )
}
