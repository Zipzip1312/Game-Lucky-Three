const RulerContainer = ({ units }) => {
  const height = window.innerHeight
  let strokes = []
  switch (units) {
    case 'rem':
    case 'vh':
      for (let i = 1; i <= 100; i++) {
        strokes.push(`${i} ${units}`)
      }
      break

    default:
      for (let step = 10; height >= step; step += 10) {
        strokes.push(`${step} px`)
      }
      break
  }
  return (
    <div className={`ruler ${units}`}>
      {strokes.map((s, i) => (
        <div className={`stroke ${units}`} key={i}>
          {s}
        </div>
      ))}
    </div>
  )
}

export default function Ruler() {
  const rulers = ['px', 'rem', 'vh']
  return (
    <div id="ruler">
      {rulers.map((units) => (
        <RulerContainer units={units} key={units}></RulerContainer>
      ))}
    </div>
  )
}
