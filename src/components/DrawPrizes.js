export default function DrawPrizes({ hide = false }) {
  const classes = 'draw-prizes flex-center white bold'
  const prizeAnimation = 'animate bounceInRight'
  const hideAnimation = 'animate hidden'

  return (
    <div className={`${classes} ${hide ? hideAnimation : ''}`}>
      <div className={`prize flex-center ${prizeAnimation} delay-2`}>1000</div>
      <div className={`prize flex-center ${prizeAnimation} delay-1-5`}>500</div>
      <div className={`prize flex-center ${prizeAnimation} delay-1`}>250</div>
    </div>
  )
}
