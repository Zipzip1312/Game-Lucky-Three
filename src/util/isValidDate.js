export default function isValidDate(date) {
  let [year, month, day] = date.split('-').map((v) => parseInt(v))
  month = month - 1
  const d = new Date(year, month, day)

  return (
    d.getFullYear() === year && d.getMonth() === month && d.getDate() === day
  )
}
