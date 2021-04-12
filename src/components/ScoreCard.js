import React from 'react'

export default function ScoreCard({ value, sealed, flippedProps, index }) {
  const select = (index) => {
    console.log('Selected: ', index)
  }
  return (
    <div
      className={`score flex-center flex-column ${
        sealed ? 'sealed' : 'opened'
      }`}
      {...flippedProps}
      onClick={() => select(index)}
    >
      <span className="seal"></span>
      <span className="coin"></span>
      <span className={`score-value ${value === 0 && 'oops'}`}>
        {value > 0 ? value : 'упс...'}
      </span>
    </div>
  )
}
