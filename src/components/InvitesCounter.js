export default function InvitesCounter({ counter }) {
  const value = counter >= 1 ? `+${counter}` : 0
  return <div className="invites-counter flex-center bold">{value}</div>
}
