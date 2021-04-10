// https://vestride.github.io/Shuffle/shuffle-with-react
// https://seanlee.netlify.app/blogs/isotope-react
// + https://codepen.io/ilovepku/pen/zYYKaYy

// https://awesomeopensource.com/project/aholachek/react-flip-toolkit

import { useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { Flipper, Flipped } from 'react-flip-toolkit'
import shuffle from 'lodash.shuffle'

export default function GameScreen() {
  const lobby = useRef(null)
  const [played, setPlayed] = useState(false)
  const [disabled, setDisabled] = useState(false)
  // ------------------------------
  const [scores, setScores] = useState([
    1000,
    500,
    250,
    250,
    100,
    100,
    50,
    50,
    25,
    25,
    10,
    10,
    0,
    0,
    0,
    0
  ])
  // ------------------------------
  if (played) return <Redirect to="/score" />

  return (
    <div className="game">
      <button
        className="game-start-btn"
        type="button"
        disabled={disabled}
        onClick={() => setScores(shuffle(scores))}
      ></button>
      {/* <button onClick={() => setPlayed(true)}>PLAY</button> */}
      <div className="" ref={lobby}>
        <Flipper flipKey={scores.join('')} className="game-lobby text-center">
          {scores.map((score, i) => {
            return (
              <Flipped key={i} flipId={i}>
                <div className="score">{score}</div>
              </Flipped>
            )
          })}
        </Flipper>
      </div>
    </div>
  )
}
