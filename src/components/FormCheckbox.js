export default function FormCheckbox({ label, active, onClick }) {
  return (
    <div
      className={`checkbox flex-center ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <span>{label}</span>
    </div>
  )
}
