export default function FormCheckbox({
  label,
  active,
  onClick,
  disabled = false
}) {
  const classes = `checkbox flex-center ${disabled ? 'disabled' : ''}`
  return (
    <div
      className={`${classes} ${active ? 'active' : ''} `}
      onClick={() => !disabled && onClick()}
    >
      <span>{label}</span>
    </div>
  )
}
