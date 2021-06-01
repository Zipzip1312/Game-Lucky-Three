import { useState } from 'react'

const monthNames = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень'
]

function createRange(start, end, pad = true, reverse = false) {
  const range = []
  for (let i = start; i <= end; i++) {
    range.push(pad ? ('0' + i).slice(-2) : i)
  }
  return reverse ? range.reverse() : range
}

const Option = ({ value, label = false }) => {
  return <option value={value}>{label || value}</option>
}

const Select = ({
  type,
  value,
  firstOption,
  options,
  labels = [],
  onChange
}) => {
  return (
    <select
      className={`select-${type} ${value && 'active'}`}
      value={value}
      onChange={onChange}
    >
      <option value="" disabled>
        {firstOption}
      </option>

      {options.map((option, i) => (
        <option value={option} key={`${type}-${i}`}>
          {labels.length ? labels[i] : option}
        </option>
      ))}
    </select>
  )
}

export default function BirthdayPicker({ date }) {
  const [value, setValue] = useState({
    day: date ? date.getDate() : '',
    month: date ? date.getMonth() : '',
    year: date ? date.getFullYear() : ''
  })
  const days = createRange(1, 31)
  const months = createRange(0, 11)
  const years = createRange(1921, 2021, false, true)

  const onChange = (key, newValue) => {
    setValue({ ...value, [key]: newValue })
    console.log({ ...value, [key]: newValue })
  }

  return (
    <div className="birthdaypicker flex-center">
      <Select
        type="day"
        value={value.day}
        firstOption="День"
        options={days}
        onChange={(event) => onChange('day', event.target.value)}
      />
      <Select
        type="month"
        value={value.month}
        firstOption="Місяць"
        options={months}
        labels={monthNames}
        onChange={(event) => onChange('month', event.target.value)}
      />
      <Select
        type="year"
        value={value.year}
        firstOption="Рік"
        options={years}
        onChange={(event) => onChange('year', event.target.value)}
      />
    </div>
  )
}
