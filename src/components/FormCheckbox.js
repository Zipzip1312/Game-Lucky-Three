import { useState } from 'react'

export default function FormCheckbox({ label, isActive }) {
  const [active, setActive] = useState(isActive)

  return (
    <div
      className={`checkbox flex-center ${active ? 'active animate jello' : ''}`}
      onClick={() => setActive(!active)}
    >
      <span>{label}</span>
    </div>
  )
}
