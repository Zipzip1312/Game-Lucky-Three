import { Link } from 'react-router-dom'

export default function RulesScreen() {
  return (
    <div>
      <h1>Rules Screen</h1>
      <Link to="/welcome">Welcome</Link> | <Link to="/form">Form</Link>
    </div>
  )
}
