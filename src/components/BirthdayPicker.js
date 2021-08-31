import { useState } from 'react'
import isValidDate from 'util/isValidDate'

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

function datePropsFilled(state, dateProps) {
  for (let i = 0; i < dateProps.length; i++) {
    if (state[dateProps[i]].value === '') return false
  }
  return true
}

function setInitialStateValues(obj) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      typeof obj[key] === 'string' ? (obj[key] = '') : (obj[key].value = '')
    }
  }
  return obj
}

const Select = ({
  dateProp,
  value,
  firstOption,
  options,
  labels = [],
  onChange,
  disabled
}) => {
  return (
    <select
      className={`select-${dateProp} ${value && 'active'}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      <option value="" disabled>
        {firstOption}
      </option>

      {options.map((option, i) => (
        <option value={option} key={`${dateProp}-${i}`}>
          {labels.length ? labels[i] : option}
        </option>
      ))}
    </select>
  )
}

export default function BirthdayPicker({ birthday, onUpdate, disabled }) {
  const date = birthday ? new Date(birthday) : ''
  const dateProps = ['day', 'month', 'year']
  const [state, setState] = useState({
    date,
    day: {
      value: date ? date.getDate() : '',
      options: createRange(1, 31),
      firstOption: 'День'
    },
    month: {
      value: date ? date.getMonth() + 1 : '',
      options: createRange(1, 12),
      firstOption: 'Місяць',
      labels: monthNames
    },
    year: {
      value: date ? date.getFullYear() : '',
      options: createRange(1925, 2005, false, true),
      firstOption: 'Рік'
    }
  })
  const [hasError, setHasError] = useState(false)

  const onChange = (dateProp, newValue) => {
    let newState = {
      ...state,
      [dateProp]: { ...state[dateProp], value: newValue }
    }

    if (datePropsFilled(newState, dateProps)) {
      newState.date = [
        ...dateProps.reverse().map((prop) => newState[prop].value)
      ].join('-')

      if (!isValidDate(newState.date)) {
        newState = setInitialStateValues(newState)
        setHasError(true)
        setTimeout(setHasError, 1000, false)
      }

      onUpdate(newState.date)
    }

    setState(newState)
  }

  return (
    <div
      className={`birthdaypicker flex-center ${
        hasError ? 'animate headShake' : ''
      }`}
    >
      {dateProps.map((prop) => (
        <Select
          dateProp={prop}
          onChange={(event) => onChange(prop, event.target.value)}
          key={prop}
          {...state[prop]}
          disabled={disabled}
        />
      ))}
    </div>
  )
}
